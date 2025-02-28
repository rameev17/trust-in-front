import React from "react";
import styled from "styled-components";
import { TEXT_COLORS } from "../../helper/constants";

const DocumentPage = () => {
  const openDOCX = (fileName) => {
    const filePath = `/documents/${fileName}.docx`;
    window.location.href = filePath; // Opens the file for download
  };

  return (
    <Container>
      <Title>Список документов</Title>
      <DocumentList>
        <DocumentCard>
          <DocumentTitle>Қоғамдық оферта</DocumentTitle>
          <StyledLink
            href={require("../../documents/kogam.pdf")}
            target="_blank"
          >
            <Button>Открыть</Button>
          </StyledLink>
        </DocumentCard>
        <DocumentCard>
          <DocumentTitle>Қоғамдық бірлестіктің жарғысы</DocumentTitle>
          <StyledLink
            href={require("../../documents/zhargy.pdf")}
            target="_blank"
          >
            <Button>Открыть</Button>
          </StyledLink>
        </DocumentCard>
        <DocumentCard>
          <DocumentTitle>Құпиялық саясаты</DocumentTitle>
          <StyledLink
            href={require("../../documents/kupiya.pdf")}
            target="_blank"
          >
            <Button>Открыть</Button>
          </StyledLink>
        </DocumentCard>
        <DocumentCard>
          <DocumentTitle>Онлайн төлемдер қауіпсіздігі</DocumentTitle>
          <StyledLink
            href={require("../../documents/online.pdf")}
            target="_blank"
          >
            <Button>Открыть</Button>
          </StyledLink>
        </DocumentCard>
      </DocumentList>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 70vh;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  font-weight: 700;
  color: ${TEXT_COLORS.PRIMARY_COLOR};
  font-family: "Roboto", sans-serif;
  margin-left: 10px;
  width: 100%;
`;

const DocumentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;

const DocumentCard = styled.div`
  background-color: ${TEXT_COLORS.PRIMARY_COLOR};
  color: white;
  width: 250px;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 10px 20px;
  color: ${TEXT_COLORS.PRIMARY_COLOR};
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const DocumentTitle = styled.h2`
  font-family: "Arial", sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export default DocumentPage;
