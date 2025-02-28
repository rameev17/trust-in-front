import React, { useCallback } from "react";
import styled from "styled-components";
import { formatNumberWithSpaces } from "../../../helper/getDaysLeft";
import { TEXT_COLORS } from "../../../helper/constants";

const ShopCard = ({ item, setSelectedItem, setIsOpen }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleOpen = useCallback(() => {
    setSelectedItem(item);
    setIsOpen(true);
  }, [item, setSelectedItem, setIsOpen]);

  return (
    <CardContainer>
      <CardImage src={`${baseUrl}/media/${item.image}`} />
      <InfoContainer>
        <CardTitle>{item.title}</CardTitle>
        <PriceContainer>
          <PriceTitle>Цена:</PriceTitle>
          <PriceText>{formatNumberWithSpaces(item.price)} ₸</PriceText>
        </PriceContainer>
        <Button onClick={() => handleOpen()}>Тапсырыс беру</Button>
      </InfoContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 320px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  border: 1px #ddd solid;
`;

const CardImage = styled.img`
  width: 320px;
  height: 480px;
  object-fit: cover;
`;

const CardTitle = styled.p`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  font-family: "Roboto" sans-serif;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100px;
    height: 2px;
    background-color: #ddd;
    transform: translateY(-50%);
  }
`;
const InfoContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 16px;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const PriceTitle = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  font-family: "Roboto" sans-serif;
`;
const PriceText = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: ${TEXT_COLORS.PRIMARY_COLOR};
  font-family: "Roboto" sans-serif;
  text-transform: uppercase;
`;

const Button = styled.div`
  background-color: ${TEXT_COLORS.PRIMARY_COLOR};
  color: white;
  border: 1px solid ${TEXT_COLORS.PRIMARY_COLOR};
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding: 8px 12px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${TEXT_COLORS.PRIMARY_COLOR};
    border-color: ${TEXT_COLORS.PRIMARY_COLOR};
  }
`;
export default ShopCard;
