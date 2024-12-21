import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Pagination as AntPagination, Spin } from "antd";
import NewsCard from "../../components/Home/News/NewsCard";
import { useGetFilteredNews } from "../../api/news";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const page_size = 10;
  const { data, isLoading, isError } = useGetFilteredNews(
    currentPage,
    page_size
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <LoaderContainer>
        <Spin size="large" />
      </LoaderContainer>
    );
  }

  if (isError) {
    return (
      <ErrorContainer>
        <p>Error loading news. Please try again later.</p>
      </ErrorContainer>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Жаңалықтар</Title>
      </Header>

      <VacancyGrid>
        {data?.news.map((item) => (
          <Card
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <NewsCard data={item} />
          </Card>
        ))}
      </VacancyGrid>

      <PaginationContainer>
        <AntPagination
          current={currentPage}
          total={data?.total_news || 0}
          pageSize={page_size}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </PaginationContainer>
    </Container>
  );
};

const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff4d4f;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  min-height: 70vh;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 48px;
  text-align: left;
  font-weight: 700;
  color: #26395f;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const VacancyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  border-radius: 8px;
  padding: 20px;
  text-align: left;
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const PaginationContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export default News;
