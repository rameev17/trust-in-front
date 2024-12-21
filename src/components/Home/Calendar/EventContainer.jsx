import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ImageCarousel from "./Carousel";
import ImageCarouselWithModal from "./YearCalendarModal";
import { useGetCalendar, useGetYearCalendar } from "../../../api/calendar";

const EventContainer = () => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data: yearCalendar } = useGetYearCalendar();
  const { data } = useGetCalendar();

  const noData = !data || data.length === 0;

  return (
    <Container>
      <Header>
        <Title>Іс-шаралар күнтізбесі</Title>
        {yearCalendar && yearCalendar?.length && (
          <Navlink onClick={() => setIsModalVisible(true)}>
            {t("Жылдық күнтізбесі →")}
          </Navlink>
        )}
      </Header>
      {noData ? (
        <Description>Іс-шаралар жок</Description>
      ) : (
        <ImageCarousel data={data} />
      )}
      <ImageCarouselWithModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        data={yearCalendar}
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

const Navlink = styled.div`
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: #26395f;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default EventContainer;
