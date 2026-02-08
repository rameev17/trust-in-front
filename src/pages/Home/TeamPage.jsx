import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { TEXT_COLORS } from "../../helper/constants";
import PageContainer from "../../components/PageContainer";
import { useGetTeam } from "../../api/team";
import useLocale from "../../locale/useLocale";
import LoadingSpinner from "../../components/LoadingSpinner";

const TeamPage = () => {
  const { locale } = useLocale();
  const { data, isLoading, isError } = useGetTeam(locale);

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
        <TeamContent>
          <ErrorText>Ошибка загрузки данных</ErrorText>
        </TeamContent>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <TeamContent>
        <Title>{data.team_title || "Біздің команда"}</Title>
        <CardContainer>
          {data.team_members?.map((member, index) => (
            <Card
              key={member.id || index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <CardImage src={member.image} alt={`${member.name}'s image`} />
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
              <p>{member.year}</p>
              <Contact>{member.contact}</Contact>
            </Card>
          ))}
        </CardContainer>
        <Title>{data.founders_title || "Бірлестіктің құрылтайшылары"}</Title>
        <FoundersList>
          {data.founders?.map((founder, index) => (
            <ListItem
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {founder.name}
            </ListItem>
          ))}
        </FoundersList>
      </TeamContent>
    </PageContainer>
  );
};

const TeamContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  font-weight: 700;
  color: #0A3456;
  font-family: "Roboto", sans-serif;
  margin-left: 10px;
  width: 100%;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: center;
  }
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  border: 1px solid ${TEXT_COLORS.PRIMARY_COLOR};
  box-shadow: 0 4px 6px rgba(10, 52, 86, 0.1);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
  width: 100%;
  max-width: 400px;

  &:hover {
    transform: scale(1.05);
    border-color: ${TEXT_COLORS.SECONDARY_COLOR};
    box-shadow: 0 6px 12px rgba(21, 154, 215, 0.3);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 15px;
`;

const Name = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Role = styled.p`
  font-size: 1rem;
  color: ${TEXT_COLORS.PRIMARY_COLOR};
  margin: 5px 0;
`;

const Contact = styled.p`
  font-size: 1rem;
  color: ${TEXT_COLORS.PRIMARY_COLOR};
  margin: 5px 0;
`;

const FoundersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const ListItem = styled(motion.li)`
  background-color: #fff;
  border: 1px solid ${TEXT_COLORS.PRIMARY_COLOR};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(10, 52, 86, 0.1);
  font-size: 18px;
  line-height: 1.6;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${TEXT_COLORS.PRIMARY_COLOR};
  list-style: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(21, 154, 215, 0.3);
    border-color: ${TEXT_COLORS.SECONDARY_COLOR};
    background-color: ${TEXT_COLORS.SECONDARY_COLOR};
    color: #fff;
  }
`;

const ErrorText = styled.p`
  color: ${TEXT_COLORS.PRIMARY_COLOR};
  font-size: 18px;
  text-align: center;
`;

export default TeamPage;
