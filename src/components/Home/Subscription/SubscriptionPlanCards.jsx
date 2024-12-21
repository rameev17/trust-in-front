import React from "react";
import styled from "styled-components";
import { formatNumberWithSpaces } from "../../../helper/getDaysLeft";
import { AppstoreAddOutlined, UserOutlined } from "@ant-design/icons";

const CardContainer = ({ hanleOpenSubscriptionModal, cards }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log(cards);
  return (
    <Container>
      {cards.map((card, index) => (
        <Card key={card.id} index={index}>
          <ImageWrapper>
            <Image src={`${baseUrl}/media/${card.image}`} alt={card.title} />
            {card.hover_image && (
              <HoverImage
                src={`${baseUrl}/media/${card.hover_image}`}
                alt={card.title}
              />
            )}
          </ImageWrapper>
          <Title>{card.title}</Title>

          <Description>
            {formatNumberWithSpaces(parseFloat(card.price))} ₸ / айына
          </Description>
          <Button onClick={() => hanleOpenSubscriptionModal(card)}>
            Жазылу
          </Button>
          <div style={{ position: "absolute", top: "12px", right: "12px" }}>
            <Description>
              {card.active_sub_count} <UserOutlined />
            </Description>
          </div>
        </Card>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Card = styled.div`
  background-color: #f9f9f9;
  cursor: pointer;
  position: "relative";
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 32px;
  height: 400px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  opacity: 0;
  animation: fadeUp 0.6s ease-out forwards;
  animation-delay: ${(props) => `${props.index * 0.5}s`};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ImageWrapper = styled.div`
  height: 200px;
  width: 100%;
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: inherit;
  transition: opacity 0.3s ease;
`;

const HoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease;

  /* Hover effect */
  ${Card}:hover & {
    opacity: 1;
  }
`;

const Title = styled.p`
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  font-weight: 700;
  color: #222222;
  font-family: "Roboto", sans-serif;
  margin: 0;
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  font-weight: 500;
  color: #222222;
  font-family: "Roboto", sans-serif;
  margin: 0;
`;

const Button = styled.div`
  background-color: #52c41a;
  color: white;
  border: 1px solid #52c41a;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding: 8px 12px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #52c41a;
    border-color: #52c41a;
  }
`;

export default CardContainer;
