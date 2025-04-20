import React from "react";
import styled from "styled-components";
import CardContainer from "./SubscriptionPlanCards";
import { useGetSubscription } from "../../../api/subscription";
import { TEXT_COLORS } from "../../../helper/constants";
import { useTranslation } from "react-i18next";

const SubscriptionPlan = ({ hanleOpenSubscriptionModal }) => {
  const { t } = useTranslation();
  const { data } = useGetSubscription();
  return (
    <div className="main-page-wrapper">
      <div className="header">
        <h1 className="title primary-color">{t("subscription_header")}</h1>
      </div>

      <Description>{t("subscription_description")}</Description>
      {data && data?.length ? (
        <CardContainer
          hanleOpenSubscriptionModal={hanleOpenSubscriptionModal}
          cards={data}
        />
      ) : (
        <p className="description description-color">
          {t("subscription_empty")}
        </p>
      )}

      <Link>
        {t("subscription_link_1")}{" "}
        <a
          href="https://my.tiptoppay.kz/ru/unsubscribe"
          target="_blank"
          rel="noreferrer"
        >
          {t("subscription_link_2")}
        </a>{" "}
        {t("subscription_link_3")}
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
    color: ${TEXT_COLORS.PRIMARY_COLOR};
  }
`;
export default SubscriptionPlan;
