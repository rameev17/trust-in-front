import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ProjectsCard from "../../components/Home/Project/ProjectsCard";
import { useGetFilteredProjects } from "../../api/project";
import { Alert, Pagination as AntPagination, Button, Spin } from "antd";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectStatus, setProjectStatus] = useState("active");
  const pageSize = 10;
  const { data, isLoading, isError, error } = useGetFilteredProjects(
    projectStatus,
    currentPage,
    pageSize
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleStatus = () => {
    setProjectStatus((prevStatus) =>
      prevStatus === "active" ? "inactive" : "active"
    );
  };

  if (isLoading) {
    return (
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Alert message={`Ошибка: ${error.message}`} type="error" />
      </div>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Жобалар</Title>
        <Button onClick={toggleStatus} style={{ marginBottom: "20px" }}>
          Белсенді {projectStatus === "active" ? "емес" : ""} жобаларды көрсету
        </Button>
      </Header>

      <VacancyGrid>
        {data?.projects.map((project) => (
          <Card
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectsCard data={project} />
          </Card>
        ))}
      </VacancyGrid>

      <AntPagination
        current={currentPage}
        total={data?.total_projects || 0}
        pageSize={pageSize}
        onChange={handlePageChange}
        showSizeChanger={false}
        style={{ marginTop: "20px" }}
      />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  min-height: 70vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 48px;
  text-align: left;
  font-weight: 700;
  color: #26395f;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
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
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export default Projects;
