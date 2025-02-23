import React from "react";
import styled from "styled-components";
import { useGetSponsors } from "../../api/sponsors";

const SponsorsContainer = () => {
  const { data: sponsors } = useGetSponsors();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  return (
    <div className="main-page-wrapper">
      <div className="header">
        <h1 className="title primary-color">Демеушілер</h1>
      </div>

      <Container>
        {sponsors?.map((sponsor) => (
          <SponsorImage
            key={sponsor.id}
            src={`${baseUrl}/media/${sponsor.image}`}
          />
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
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
