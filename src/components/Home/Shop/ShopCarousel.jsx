import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import ShopCard from "./ShopCard";

const ShopCarousel = ({ data, setSelectedItem, setIsOpen }) => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);
  const [centerMode, setCenterMode] = useState(true);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1300) {
        setCenterSlidePercentage(100);
        setCenterMode(true);
      } else {
        setCenterSlidePercentage(33.33);
        setCenterMode(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <StyledCarousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={3000}
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
      centerMode={centerMode}
      centerSlidePercentage={centerSlidePercentage}
    >
      {data?.map((item, index) => (
        <ShopCard
          key={index}
          item={item}
          setSelectedItem={setSelectedItem}
          setIsOpen={setIsOpen}
        />
      ))}
    </StyledCarousel>
  );
};
const StyledCarousel = styled(Carousel)`
  .carousel .slider-wrapper {
    display: flex;
    justify-content: center;
  }

  .carousel .slide {
    display: flex;
    justify-content: center;
    padding: 0 10px; /* Добавляет отступы между элементами */
  }
`;

export default ShopCarousel;
