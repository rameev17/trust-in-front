import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import NewsCard from "./NewsCard";
import { useGetFilteredNews } from "../../../api/news";

const NewsContainer = () => {
  const { t } = useTranslation();
  const { data } = useGetFilteredNews();

  const filteredNewsData = data?.news?.slice(0, 3);
  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title>{t("Жаңалықтар")}</Title>
        </TitleContainer>
        <Navlink to={"/news"}>{t("Барлық жаңалықтар →")}</Navlink>
      </Header>

      <Cards>
        {filteredNewsData?.map((news, index) => (
          <NewsCard key={index} data={news} />
        ))}
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fdfdfd;
  padding: 48px 150px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    padding: 48px 48px;
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const Navlink = styled(NavLink)`
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: #26395f;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
  color: #26395f;
  font-family: "Roboto", sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export default NewsContainer;
