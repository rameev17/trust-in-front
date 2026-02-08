import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ProjectsCard from "../../components/Home/Project/ProjectsCard";
import { useGetFilteredProjects } from "../../api/project";
import { Alert, Pagination as AntPagination, Button } from "antd";
import PageContainer from "../../components/PageContainer";
import LoadingSpinner from "../../components/LoadingSpinner";

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
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );
  }

  if (isError) {
    return (
      <PageContainer>
        <Alert message={`Қате: ${error.message}`} type="error" />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="content-wrapper">
        <div className="header">
          <h1 className="title primary-color">Жобалар</h1>
          <Button onClick={toggleStatus}>
            <p className="description description-color">
              Белсенді {projectStatus === "active" ? "емес" : ""} жобаларды
              көрсету
            </p>
          </Button>
        </div>

        {data?.projects.length === 0 && (
          <p className="description description-color">
            Қазіргі уақытта белсенді жобалар жоқ.
          </p>
        )}

        <div className="card-wrapper">
          {data?.projects.map((project) => (
            <Card
              key={project.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectsCard data={project} />
            </Card>
          ))}
        </div>
        <AntPagination
          current={currentPage}
          total={data?.total_projects || 0}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </PageContainer>
  );
};

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #0A3456;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(10, 52, 86, 0.1);
  text-align: left;
  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: 0 6px 12px rgba(21, 154, 215, 0.3);
    border-color: #159AD7;
  }
`;

export default Projects;
