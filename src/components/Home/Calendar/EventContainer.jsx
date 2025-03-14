import React, { useState } from "react";
import ImageCarousel from "./Carousel";
import ImageCarouselWithModal from "./YearCalendarModal";
import { useGetCalendar, useGetYearCalendar } from "../../../api/calendar";
import { useTranslation } from "react-i18next";

const EventContainer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation();
  const { data: yearCalendar } = useGetYearCalendar();
  const { data } = useGetCalendar();

  const noData = !data || data.length === 0;

  return (
    <div className="main-page-wrapper">
      <div className="header">
        <h1 className="title primary-color">{t("calendar_title")}</h1>
        {yearCalendar && yearCalendar?.length && (
          <div onClick={() => setIsModalVisible(true)} className="all-button">
            <p className="nav-link-text primary-color">{t("calendar_all")}</p>
          </div>
        )}
      </div>

      {!data?.length || !data ? (
        <p className="description description-color">{t("projects_empty")}</p>
      ) : (
        <ImageCarousel data={data} />
      )}
      <ImageCarouselWithModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        data={yearCalendar}
      />
    </div>
  );
};

export default EventContainer;
