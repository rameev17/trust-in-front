import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const teamData = [
  {
    name: "Ануарбек Хайрым",
    role: "Атқарушы директор",
    year: "Есік БИЛ ‘06",
    contact: "+7 707 788 70 20",
    image: require("../../images/kenes1.jpg"),
  },
  {
    name: "Елемесов Ақжол",
    role: "Астана қ. студент менеджері",
    year: "Есік БИЛ ‘11",
    contact: "+7 707 363 4115",
    image: require("../../images/kenes2.JPG"),
  },
  {
    name: "Абдулла Әбілмансұр",
    role: "Алматы қ. студент менеджері",
    year: "Есік БИЛ ‘23",
    contact: "+7 708 718 3998",
    image: require("../../images/kenes3.PNG"),
  },
];
const TeamPage = () => {
  return (
    <PageContainer>
      <Title>Біздің команда</Title>
      <CardContainer>
        {teamData.map((member, index) => (
          <Card
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <CardImage src={member.image} alt={`${member.name}'s image`} />
            <Name>{member.name}</Name>
            <Role>{member.role}</Role>
            <p>{member.year}</p>
            <Contact>{member.contact}</Contact>
          </Card>
        ))}
      </CardContainer>
      <Title>Бірлестіктің құрылтайшылары</Title>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          Нұрәлім Ұлан Нұрділдаұлы
        </ListItem>
        <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          Смаилов Асет Есенбекович
        </ListItem>
        <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          Омар Заңғар Омарұлы
        </ListItem>
        <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          Рахимбеков Берик
        </ListItem>
        <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          Сагинбеков Арай Амангельдыевич
        </ListItem>
        <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          Акаев Ернар Нурланович
        </ListItem>
        <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          Нұрмахан Ернар Серікұлы
        </ListItem>
        <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          Нурсапаев Маргулан Кахарманович
        </ListItem>
        <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          Серік Әділет Саятұлы
        </ListItem>
        <ListItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          Нұрболат Дінмұхамед Нұрболатұлы
        </ListItem>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  align-items: center;
  margin-top: 50px;
  padding: 20px 150px;
  justify-content: flex-start;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  font-weight: 700;
  color: #095d6a;
  font-family: "Roboto", sans-serif;
  margin-left: 10px;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  width: 100%;
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;
  width: 250px;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 15px;
`;

const Name = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Role = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 5px 0;
`;

const Contact = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 5px 0;
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
`;

export default TeamPage;
