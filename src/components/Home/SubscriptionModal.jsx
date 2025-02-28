import React from "react";
import ModalCenter from "../Modal";
import styled from "styled-components";
import { Input } from "antd";
import { TEXT_COLORS } from "../../helper/constants";

const SubscriptionModal = ({ isOpen, setIsOpen, selectedPlan }) => {
  return (
    <ModalCenter isOpen={isOpen} setIsOpen={setIsOpen}>
      <Wrapper>
        <Title>{`Подписканың аты:`}</Title>
        <PriceContainer>
          <PriceName>{selectedPlan?.title}</PriceName>
          <PriceText>{selectedPlan?.price} ₸ / айына</PriceText>
        </PriceContainer>
        <Form>
          <Input placeholder="Имя" />
          <Input placeholder="Фамилия" />
          <Input placeholder="Год выпуска" />
          <Input placeholder="Номер телефона" />
          <Input placeholder="email" />
        </Form>
        `<Button>Жазылу</Button>
      </Wrapper>
    </ModalCenter>
  );
};
const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;
const Form = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  font-weight: 700;
  color: ${TEXT_COLORS.PRIMARY_COLOR};
  font-family: "Roboto", sans-serif;
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  padding: 4px 0px;
`;
const PriceName = styled.p`
  font-size: 18px;
  line-height: 32px;
  text-align: left;
  font-weight: 600;
  color: #222;
  font-family: "Roboto", sans-serif;
`;
const PriceText = styled.p`
  font-size: 18px;
  line-height: 32px;
  text-align: left;
  font-weight: 400;
  color: #222;
  font-family: "Roboto", sans-serif;
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

export default SubscriptionModal;
