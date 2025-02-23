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
      <div className="spin">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="spin">
        <Alert message={`Қате: ${error.message}`} type="error" />
      </div>
    );
  }

  return (
    <div className="page-container">
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
    </div>
  );
};

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
