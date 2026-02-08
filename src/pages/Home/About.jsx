import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { TEXT_COLORS } from "../../helper/constants";
import { useGetAbout } from "../../api/about";
import useLocale from "../../locale/useLocale";
import PageContainer from "../../components/PageContainer";
import LoadingSpinner from "../../components/LoadingSpinner";

const AboutContainer = styled.div`
  font-family: "Arial", sans-serif;
  width: 100%;
`;

const Header = styled(motion.div)`
  text-align: center;
`;

const Mission = styled(motion.div)`
  text-align: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Goals = styled(motion.div)`
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 48px;
  text-align: left;
  font-weight: 700;
  color: ${TEXT_COLORS.PRIMARY_COLOR};
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

const ListTitle = styled.h3`
  color: ${TEXT_COLORS.PRIMARY_COLOR};
  font-size: 24px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ListItem = styled(motion.li)`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${TEXT_COLORS.PRIMARY_COLOR};
  box-shadow: 0 4px 8px rgba(10, 52, 86, 0.1);
  font-size: 18px;
  line-height: 1.6;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${TEXT_COLORS.PRIMARY_COLOR};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(21, 154, 215, 0.3);
    border-color: ${TEXT_COLORS.SECONDARY_COLOR};
    background-color: ${TEXT_COLORS.SECONDARY_COLOR};
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px;
  }
`;

const About = () => {
  const { locale } = useLocale();
  const { data, isLoading, isError } = useGetAbout(locale);

  if (isLoading) {
    return (
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );
  }

  if (isError || !data) {
    return (
      <PageContainer>
        <Paragraph>Ошибка загрузки данных</Paragraph>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <AboutContainer>
      <Header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title>{data.title}</Title>
        {data.paragraphs?.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </Header>

      <Mission
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Title>{data.mission_title}</Title>
        <Paragraph>{data.mission_text}</Paragraph>
      </Mission>

      <Goals
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ListTitle>{data.goals_title}</ListTitle>
        <List>
          {data.goals?.map((goal, index) => (
            <ListItem
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {goal}
            </ListItem>
          ))}
        </List>
      </Goals>
      </AboutContainer>
    </PageContainer>
  );
};

export default About;
