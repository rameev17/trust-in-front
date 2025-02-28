import styled from "styled-components";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainInformation = ({ hanleOpenImageModal }) => {
  const [showCounters, setShowCounters] = useState(false);
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
              Есік ҚТЛ (қазіргі БИЛ) түлектерінің{" "}
              <Title style={{ color: "#FBBC58" }}>“AĠALQA”</Title>
            </Title>
            <Title>атты қоғамдық бірлестігі</Title>
          </TextContainer>
          <Counters isVisible={showCounters}>
            <Counter
              target={1507}
              label="лицей түлектерінің саны"
              onClick={handleCounterClick}
            />
            <Counter
              target={140}
              label="түлектермен жиналған қаржылай көмек"
              onClick={handleNavigate}
              isMillion={true}
            />
            <Counter target={800} label="қолдау білдірген түлек саны" />
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
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${require("../../images/back.jpg")});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(28, 28, 29, 0.9),
      rgba(8, 8, 27, 0.7)
    );
    z-index: -1;
  }
  @media (max-width: 768px) {
    padding: 0px 48px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
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
