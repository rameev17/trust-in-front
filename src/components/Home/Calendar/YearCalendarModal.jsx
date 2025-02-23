import React from "react";
import { Modal } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { useGetYearCalendar } from "../../../api/calendar";

const ImageCarouselWithModal = ({
  isModalVisible,
  setIsModalVisible,
  data,
}) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "50%",
    width: "30px",
    height: "30px",
    cursor: "pointer",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...arrowStyles, left: 15 }}
      >
        ❮
      </button>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...arrowStyles, right: 15 }}
      >
        ❯
      </button>
    );

  return (
    <Modal
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      width={1000}
    >
      <StyledCarousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
      >
        {data?.map((item, index) => (
          <div key={index}>
            <img
              src={`${baseUrl}/media/${item.image}`}
              alt={`Calendar ${index}`}
            />
          </div>
        ))}
      </StyledCarousel>
    </Modal>
  );
};

const StyledCarousel = styled(Carousel)`
  .carousel .slide img {
    width: auto;
    height: 1000px;
    object-fit: cover;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
`;

export default ImageCarouselWithModal;
