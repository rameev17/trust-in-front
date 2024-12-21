import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ProjectsCard from "./ProjectsCard";
import { useGetProjects } from "../../../api/project";

const ProjectsContainer = (news) => {
  const { t } = useTranslation();
  const { data } = useGetProjects();
  const filteredData = data?.slice(0, 4);
  console.log(data);
  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title>Жобалар</Title>
        </TitleContainer>
        <Navlink to={"/projects"}>Барлық жобалар →</Navlink>
      </Header>

      <Cards>
        {filteredData?.map((project, index) => (
          <ProjectsCard data={project} />
        ))}
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  background-color: "#fdfdfd";
  padding: 48px 150px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 768px) {
    padding: 48px 48px;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: space-between;
  align-items: end;
  @media (max-width: 630px) {
    align-items: center;
  }
`;
const Navlink = styled(NavLink)`
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: #26395f;
  font-weight: 500;
  font-family: "Roboto" sans-serif;
  text-decoration: none;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 36px;
  line-height: 48px;
  text-align: left;
  font-weight: 700;
  color: #26395f;
  font-family: "Roboto", sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;

    font-size: 24px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default ProjectsContainer;
