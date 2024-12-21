import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import CardContainer from "./SubscriptionPlanCards";
import { useGetSubscription } from "../../../api/subscription";

const SubscriptionPlan = ({ hanleOpenSubscriptionModal }) => {
  const { t } = useTranslation();
  const { data } = useGetSubscription();
  return (
    <Container>
      <Hedader>
        <Title>Тарифтік жоспар</Title>
        <Description>
          Қорымыздың жобаларын қолдау үшін ай сайынғы жазылымға қосылыңыз
        </Description>
      </Hedader>
      {data && data?.length ? (
        <CardContainer
          hanleOpenSubscriptionModal={hanleOpenSubscriptionModal}
          cards={data}
        />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Description>Пландар жок</Description>
        </div>
      )}

      <Link>
        Осы <a>сілтеме</a> арқылы жазылымнан бас тарта аласыз
      </Link>
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
const Description = styled.div`
  font-size: 18px;
  line-height: 32px;
  text-align: left;
  font-weight: 500;
  color: #222222;
  font-family: "Roboto", sans-serif;
  margin: 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Hedader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const Link = styled.div`
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  font-weight: 400;
  color: #222222;
  font-family: "Roboto", sans-serif;
  margin: 0;
  a {
    cursor: pointer;
    color: #26395f;
  }
`;
export default SubscriptionPlan;
