import React from "react";
import styled from "styled-components";
import CardContainer from "./SubscriptionPlanCards";
import { useGetSubscription } from "../../../api/subscription";

const SubscriptionPlan = ({ hanleOpenSubscriptionModal }) => {
  const { data } = useGetSubscription();
  return (
    <div className="main-page-wrapper">
      <div className="header">
        <h1 className="title primary-color">Тарифтік жоспар</h1>
      </div>

      <Description>
        Қорымыздың жобаларын қолдау үшін ай сайынғы жазылымға қосылыңыз
      </Description>
      {data && data?.length ? (
        <CardContainer
          hanleOpenSubscriptionModal={hanleOpenSubscriptionModal}
          cards={data}
        />
      ) : (
        <p className="description description-color">Тарифтік жоспар жоқ</p>
      )}

      <Link>
        Осы <a>сілтеме</a> арқылы жазылымнан бас тарта аласыз
      </Link>
    </div>
  );
};
const Description = styled.div`
  font-size: 18px;
  line-height: 32px;
  text-align: left;
  font-weight: 500;
  color: #222222;
  font-family: "Roboto", sans-serif;
  margin: 0;
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
