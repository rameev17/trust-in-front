import styled from "styled-components";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetStatistics } from "../../api/statistics";
import backgroundImage from "../../images/background-image.png";

const MainInformation = ({ hanleOpenImageModal }) => {
  const [showCounters, setShowCounters] = useState(false);
  const { t } = useTranslation();
  const { data } = useGetStatistics();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCounters(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCounterClick = () => {
    hanleOpenImageModal();
  };
  const handleNavigate = () => {
    navigate("/alumni/reports");
  };

  return (
    <Container>
      <ImageContainer>
        <Content>
          <TextContainer>
            <Title>
              {t("main_title_1")} 
            </Title>
            <Title>
              {t("main_title_2")}
            </Title>
          </TextContainer>
          <Counters isVisible={showCounters}>
            <Counter
              target={data?.students_count ?? 0}
              label={t("counter_1")}
              onClick={handleCounterClick}
            />
            <Counter
              target={data?.donated_money ?? 0}
              label={t("counter_2")}
              onClick={handleNavigate}
              isMillion={true}
            />
            <Counter target={data?.donors_count ?? 0} label={t("counter_3")} />
          </Counters>
        </Content>
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 93vh;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0px 150px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(28, 28, 29, 0.05),
      rgba(8, 8, 27, 0.02)
    );
    z-index: 1;
  }
  @media (max-width: 768px) {
    padding: 0px 24px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
  gap: 48px;
  @media (max-width: 768px) {
    gap: 16px;
    padding: 16px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Counters = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  gap: 24px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "20px")});
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

const Title = styled.p`
  font-size: 48px;
  line-height: 54px;
  text-align: center;
  font-weight: 700;
  color: white;
  font-family: "Roboto", sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export default MainInformation;
