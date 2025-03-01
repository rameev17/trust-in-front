import React, { useState } from "react";
import styled from "styled-components";
import ShopCard from "./ShopCard";
import { useGetShop } from "../../../api/shop";
import OrderModal from "./OrderModal";

const ShopContainer = () => {
  const [isOpen, setIsOpen] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const { data } = useGetShop();
  const filteredShopData = data?.slice(0, 4);
  return (
    <div className="main-page-wrapper">
      <div className="header">
        <h1 className="title primary-color">Мерч</h1>
      </div>
      {!data?.length && !data && (
        <p className="description description-color">Мерч жоқ</p>
      )}
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
    </div>
  );
};

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 100px;
  @media (max-width: 1400px) {
    gap: 32px;
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }
`;

export default ShopContainer;
