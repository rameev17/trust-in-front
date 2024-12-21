import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ShopCard from "./ShopCard";
import { useGetShop } from "../../../api/shop";
import OrderModal from "./OrderModal";

const ShopContainer = () => {
  const [isOpen, setIsOpen] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const { t } = useTranslation();
  const { data } = useGetShop();
  const filteredShopData = data?.slice(0, 4);
  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title>Мерч</Title>
        </TitleContainer>
      </Header>

      <Cards>
        {filteredShopData?.map((item, index) => (
          <ShopCard
            key={index}
            item={item}
            setSelectedItem={setSelectedItem}
            setIsOpen={setIsOpen}
          />
        ))}
      </Cards>
      <OrderModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItem={selectedItem}
      />
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
    align-items: start;
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

export default ShopContainer;
