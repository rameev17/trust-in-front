import React from "react";
import styled from "styled-components";
import ProjectsCard from "./ProjectsCard";
import { useGetProjects } from "../../../api/project";

const ProjectsContainer = (news) => {
  const { data } = useGetProjects();
  const filteredData = data?.slice(0, 4);

  return (
    <div className="main-page-wrapper">
      <div className="header">
        <h1 className="title primary-color">Жобалар</h1>
        <div
          onClick={() => {
            window.open("/projects", "_self");
          }}
          className="all-button"
        >
          <p className="nav-link-text primary-color">Барлық жобалар →</p>
        </div>
      </div>
      {!data?.length && !data && (
        <p className="description description-color">Жобалар жоқ</p>
      )}

      <Cards>
        {filteredData?.map((project, index) => (
          <ProjectsCard data={project} />
        ))}
      </Cards>
    </div>
  );
};

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 100px;
  @media (max-width: 1400px) {
    gap: 32px;
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }
`;

export default ProjectsContainer;
