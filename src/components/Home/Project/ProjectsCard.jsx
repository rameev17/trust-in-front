import { Progress } from "antd";
import React, { useMemo } from "react";
import styled from "styled-components";
import {
  formatNumberWithSpaces,
  getDaysLeft,
} from "../../../helper/getDaysLeft";
import { TEXT_COLORS } from "../../../helper/constants";
import { useTranslation } from "react-i18next";
import useLocale from "../../../locale/useLocale";

const ProjectsCard = ({ data, setIsOpen }) => {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const donatedPercentage = useMemo(() => {
    if (data?.goal_money === 0) return 0;
    return (data?.donated_money / data?.goal_money) * 100;
  }, [data?.donated_money, data?.goal_money]);

  let progressColor = "#0A3456";
  if (donatedPercentage >= 80) {
    progressColor = "#0A3456";
  } else if (donatedPercentage >= 50) {
    progressColor = "#159AD7";
  }
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={data?.image} />
        <OpenProjectButton
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(true);
            } else {
              window.location.href = `/projects/${data.id}`;
            }
          }}
        >
          {t("projects_button")}
        </OpenProjectButton>
      </CardImageWrapper>
      <CardTitle>{data?.title}</CardTitle>
      <PriceContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <PriceTitle>{t("projects_goal")}</PriceTitle>
            <PriceText>{formatNumberWithSpaces(data?.goal_money)} ₸</PriceText>
          </div>
          <PriceTitle>{getDaysLeft(data?.ending_at, locale)}</PriceTitle>
        </div>
        <Progress
          percent={parseFloat(donatedPercentage)}
          strokeColor={progressColor}
          showInfo={false}
          style={{ marginTop: "8px" }}
        />
        <ProgressContainer>
          <ProgressText>
            {formatNumberWithSpaces(data?.donated_money)} ₸
          </ProgressText>
          <ProgressTextWithBorder>
            {parseFloat(donatedPercentage)}% {t("projects_money")}
          </ProgressTextWithBorder>
        </ProgressContainer>
      </PriceContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 320px;
  gap: 16px;
`;
const OpenProjectButton = styled.a`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: ${TEXT_COLORS.PRIMARY_COLOR};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: "Roboto" sans-serif;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${TEXT_COLORS.PRIMARY_COLOR};
  }
`;
const CardImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 8px;
`;
const CardImageWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 320px;

  &:hover {
    ${OpenProjectButton} {
      opacity: 1;
    }
    ${CardImage} {
      filter: blur(3px); // Apply blur on hover
      opacity: 1;
    }
  }
`;

const CardTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: "Roboto" sans-serif;
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const PriceTitle = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  font-family: "Roboto" sans-serif;
  text-transform: uppercase;
`;
const PriceText = styled.p`
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  font-family: "Roboto" sans-serif;
  text-transform: uppercase;
`;
const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ProgressText = styled.div`
  font-size: 16px;
  line-height: 24px;

  font-weight: 400;
  font-family: "Roboto" sans-serif;
  text-transform: uppercase;
`;
const ProgressTextWithBorder = styled.div`
  font-size: 16px;
  line-height: 24px;

  font-weight: 400;
  font-family: "Roboto" sans-serif;
  text-transform: uppercase;
  padding-left: 8px;
  border-left: 2px solid #ddd; /* Light border between the texts */
`;

export default ProjectsCard;
