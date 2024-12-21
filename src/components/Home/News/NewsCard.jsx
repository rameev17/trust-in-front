import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NewsCard = ({ data }) => {
  const navigate = useNavigate();
  const handleNavigate = (data) => {
    navigate(`/news/${data.id}`);
  };
  return (
    <CardContainer onClick={() => handleNavigate(data)}>
      <CardImage src={data.image} />
      <InfoContainer>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </InfoContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 480px;
  height: auto;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 250px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const CardTitle = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardDescription = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #333;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export default NewsCard;
