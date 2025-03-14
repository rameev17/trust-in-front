import React, { useState } from "react";
import styled from "styled-components";
import MainInformation from "../../components/Home/MainInformation";
import SubscriptionPlan from "../../components/Home/Subscription/SubscriptionPlan";
import ProjectsContainer from "../../components/Home/Project/ProjectsContainer";
import ShopContainer from "../../components/Home/Shop/ShopContainer.jsx";
import NewsContainer from "../../components/Home/News/NewsContainer.jsx";
import EventContainer from "../../components/Home/Calendar/EventContainer.jsx";
import ImageModal from "../../components/Home/ImageModal.jsx";
import DonationModal from "../../components/Home/DonationModal.jsx";
import SubscriptionModal from "../../components/Home/SubscriptionModal.jsx";
import SponsorsContainer from "../../components/Home/Sponsors.jsx";
import useLocale from "../../locale/useLocale.js";

const Main = () => {
  const [isOpenImageModal, setIsOpenImageModal] = useState(false);
  const [isOpenDonationModal, setIsOpenDonationModal] = useState(false);
  const [isOpenSubscriptionModal, setIsOpenSubscriptionModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState();
  const { locale } = useLocale();
  const hanleOpenImageModal = () => {
    setIsOpenImageModal(true);
  };
  const hanleOpenDonationModal = () => {
    setIsOpenDonationModal(true);
  };
  const hanleOpenSubscriptionModal = (id) => {
    setSelectedPlan(id);
    setIsOpenSubscriptionModal(true);
  };
  return (
    <Container>
      <MainInformation hanleOpenImageModal={hanleOpenImageModal} />
      <Wrapper>
        <SubscriptionPlan
          hanleOpenSubscriptionModal={hanleOpenSubscriptionModal}
        />
        <ProjectsContainer />
        <ShopContainer />
        <NewsContainer />
        <EventContainer />
        <SponsorsContainer />
      </Wrapper>
      <ImageModal isOpen={isOpenImageModal} setIsOpen={setIsOpenImageModal} />
      <DonationModal
        isOpen={isOpenDonationModal}
        setIsOpen={setIsOpenDonationModal}
      />
      <SubscriptionModal
        selectedPlan={selectedPlan}
        isOpen={isOpenSubscriptionModal}
        setIsOpen={setIsOpenSubscriptionModal}
      />
      <FixedButton
        src={
          locale === "ru"
            ? require("../../images/donate-ru.png")
            : require("../../images/donate.png")
        }
        hoverSrc={
          locale === "ru"
            ? require("../../images/donateHover-ru.png")
            : require("../../images/donateHover.png")
        }
        onClick={hanleOpenDonationModal}
      />
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FixedButton = styled.div`
  position: fixed;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: background-image 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-image: url(${(props) => props.hoverSrc});
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
export default Main;
