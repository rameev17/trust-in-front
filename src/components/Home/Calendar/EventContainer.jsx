import React, { useState } from "react";
import ImageCarousel from "./Carousel";
import ImageCarouselWithModal from "./YearCalendarModal";
import { useGetCalendar, useGetYearCalendar } from "../../../api/calendar";

const EventContainer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data: yearCalendar } = useGetYearCalendar();
  const { data } = useGetCalendar();

  const noData = !data || data.length === 0;

  return (
    <div className="main-page-wrapper">
      <div className="header">
        <h1 className="title primary-color">Іс-шаралар күнтізбесі</h1>
        {yearCalendar && yearCalendar?.length && (
          <div onClick={() => setIsModalVisible(true)} className="all-button">
            <p className="nav-link-text primary-color">Жылдық күнтізбесі →</p>
          </div>
        )}
      </div>
      {noData ? (
        <p className="description description-color">Іс-шаралар жоқ</p>
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
