import React, { useEffect, useState } from "react";
import ModalCenter from "../Modal";
import styled from "styled-components";
import { Input } from "antd";
import { TEXT_COLORS } from "../../helper/constants";
import { useTranslation } from "react-i18next";
import TipTopRecurringPayment from "./Subscription/TipTop";

const SubscriptionModal = ({ isOpen, setIsOpen, selectedPlan }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      setFormData({
        firstName: "",
        lastName: "",
        year: "",
        phone: "",
        email: "",
      });
    }
  }, [isOpen]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    year: "",
    phone: "",
    email: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const isFormValid = Object.values(formData).every((v) => v.trim() !== "");

  return (
    <ModalCenter isOpen={isOpen} setIsOpen={setIsOpen} width={"300px"}>
      <Wrapper>
        <Title>{t("subscription_name")}</Title>
        <PriceContainer>
          <PriceName>{selectedPlan?.title}</PriceName>
          <PriceText>
            {selectedPlan?.price} {t("subscription_month")}
          </PriceText>
        </PriceContainer>
        <Form>
          <Input
            placeholder="Имя"
            value={formData.firstName}
            onChange={handleChange("firstName")}
          />
          <Input
            placeholder="Фамилия"
            value={formData.lastName}
            onChange={handleChange("lastName")}
          />
          <Input
            placeholder="Год выпуска"
            value={formData.year}
            onChange={handleChange("year")}
          />
          <Input
            placeholder="Номер телефона"
            value={formData.phone}
            onChange={handleChange("phone")}
          />
          <Input
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
          />
        </Form>
        <TipTopRecurringPayment
          selectedPlan={selectedPlan}
          formData={formData}
          disabled={!isFormValid}
          setIsOpenModal={setIsOpen}
        />
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
  font-weight: 600;
  color: #222;
`;

const PriceText = styled.p`
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
  color: #222;
`;

export default SubscriptionModal;
