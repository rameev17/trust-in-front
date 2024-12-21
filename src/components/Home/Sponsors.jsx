import React from "react";
import styled from "styled-components";
import { useGetSponsors } from "../../api/sponsors";

const SponsorsContainer = () => {
  const { data: sponsors } = useGetSponsors();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  return (
    <Wrapper>
      <Header>
        <TitleContainer>
          <Title>Демеушілер</Title>
        </TitleContainer>
      </Header>
      <Container>
        {sponsors?.map((sponsor) => (
          <SponsorImage
            key={sponsor.id}
            src={`${baseUrl}/media/${sponsor.image}`}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 150px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 630px) {
    align-items: flex-start;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  font-weight: 700;
  color: #26395f;
  font-family: "Roboto", sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
`;

const SponsorImage = styled.img`
  max-width: 200px;
  margin: 0;
  object-fit: contain;

  @media (max-width: 768px) {
    width: calc(50% - 16px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 16px);
  }
`;

export default SponsorsContainer;
