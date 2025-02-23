import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const AboutContainer = styled.div`
  font-family: "Arial", sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Header = styled(motion.div)`
  text-align: center;
`;

const Mission = styled(motion.div)`
  text-align: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Goals = styled(motion.div)`
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 48px;
  text-align: left;
  font-weight: 700;
  color: #26395f;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

const ListTitle = styled.h3`
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ListItem = styled(motion.li)`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  line-height: 1.6;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title>Бірлестік туралы</Title>
        <Paragraph>
          Тараз ҚТЛ (қазіргі БИЛ) түлектерінің “Trust in Community” қоғамдық
          бірлестігі 2019 жылы қазан айының 22-сінде арнайы жобамен айналысатын
          заңды ұйым түрінде ашылды.
        </Paragraph>
      </Header>

      <Mission
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Title>Біздің миссия</Title>
        <Paragraph>
          Тараз лицей түлектерінің қарым-қатынасын нығайту. Қоғамға пайдалы
          болу.
        </Paragraph>
      </Mission>

      <Goals
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ListTitle>Мақсатымыз:</ListTitle>
        <List>
          <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            Түлектердің қоғамдық жауапкершілігін қолдау және қоғамдық іс
            шараларға еліктіру;
          </ListItem>
          <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            Лицейдің материалды-техникалық базасын нығайту;
          </ListItem>
          <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            Лицейді дамыту бойынша іс-шараларды жүзеге асыруда тәжірибе алмасу
            және тарату;
          </ListItem>
          <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            Қайырымдылық, грант, стипендия, наградалар және заңмен тыйым
            салынбаған басқа әдістер арқылы лицейдің оқушылары мен түлектеріне
            көмек көрсету және/немесе қолдау (соның ішінде қаржылық қолдау);
          </ListItem>
          <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            Мұқтаж және әлеуметтік әлсіз лицей оқушылары мен түлектеріне
            қайырымдылық көмек көрсету;
          </ListItem>
          <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            Лицейдің ғылыми-білім, әлеуметтік-мәдени, шығармашылық, спорттық
            және басқа жобаларға қолдау көрсету;
          </ListItem>
          <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            Түлектердің тұлғалық және кәсіби өсуі, өзара тәжірибе алмасу
            мақсатында олардың интеллектуалды және іскерлік қабілеттерін
            біріктіру;
          </ListItem>
          <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            Семинарлар, дөңгелек үстелдер, талқылаулар, спорттық, мәдени және
            басқа да іс-шараларды ұйымдастыру;
          </ListItem>
          <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            Түлектердің тұлғалық қызығушылықтары, практикалық тәжірибелері мен
            қабілеттеріне сәйкес тағылымдама және жұмыс орнын таңдауларына
            қолдау көрсету
          </ListItem>
        </List>
      </Goals>
    </AboutContainer>
  );
};

export default About;
