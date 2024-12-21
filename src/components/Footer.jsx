import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useGetProjects } from "../api/project";
import { useGetFilteredNews } from "../api/news";

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px 150px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 300px;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #f1f1f1;
    margin-right: 10px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    vertical-align: left;
    margin: 0;
  }

  li {
    margin: 5px 0;
    font-size: 14px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;

    a {
      color: #ddd;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #cab390;
      }
    }
  }
`;

const Logo = styled.img`
  height: 100px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  a {
    color: #fff;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #cab390;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const FooterText = styled.p`
  text-align: center;
  color: #ccc;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  const { data } = useGetProjects();
  const { data: news } = useGetFilteredNews();

  const filteredNewsData = news?.news?.slice(0, 3);
  const filteredProjectsData = data?.slice(0, 3);

  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Logo src={require("../images/footerLogo.png")} alt="Company Logo" />
          <SocialIcons>
            <a
              href="https://t.me/trustincom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a
              href="https://chat.whatsapp.com/HP14Q5lucYpFHCpoEENVFK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.instagram.com/trustin.kz/profilecard/?igsh=aGtid216bTgzOHlt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </SocialIcons>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a
              href="tel:+77479141214"
              aria-label="Phone"
              style={{ color: "white", textDecoration: "none" }}
            >
              📞 +7 (747) 914 1214
            </a>
            <a
              href="mailto:trustincommunity@gmail.com"
              aria-label="Email"
              style={{ color: "white", textDecoration: "none" }}
            >
              📩 trustincommunity@gmail.com
            </a>
          </div>
        </Column>

        <Column>
          <h3>Навигация</h3>
          <ul>
            <li>
              <a href="/home">Басты бет</a>
            </li>
            <li>
              <a href="home/about">Біз тұралы</a>
            </li>
            <li>
              <a href="#services">Мерч</a>
            </li>
            <li>
              <a href="/alumni">Тулектер</a>
            </li>
          </ul>
        </Column>

        <Column>
          <h3>Документтер</h3>
          <ul>
            <li>
              <StyledLink
                href={require("../documents/kogam.pdf")}
                target="_blank"
              >
                Қоғамдық оферта
              </StyledLink>
            </li>
            <li>
              <StyledLink
                href={require("../documents/zhargy.pdf")}
                target="_blank"
              >
                Қоғамдық бірлестіктің жарғысы
              </StyledLink>
            </li>
            <li>
              <StyledLink
                href={require("../documents/kupiya.pdf")}
                target="_blank"
              >
                Құпиялық саясаты
              </StyledLink>
            </li>
            <li>
              <StyledLink
                href={require("../documents/online.pdf")}
                target="_blank"
              >
                Онлайн төлемдер қауіпсіздігі
              </StyledLink>
            </li>
          </ul>
        </Column>

        <Column>
          <h3>Жаңалықтар</h3>
          <ul>
            {filteredNewsData?.map((project) => (
              <li key={project.id}>
                <a href={`/projects/${project.id}`}>{project.title}</a>
              </li>
            ))}
          </ul>
        </Column>

        <Column>
          <h3>Жобалар</h3>
          <ul>
            {filteredProjectsData?.map((project) => (
              <li key={project.id}>
                <a href={`/projects/${project.id}`}>{project.title}</a>
              </li>
            ))}
          </ul>
        </Column>
      </FooterContent>

      <FooterText>{`© 2024 Тараз ҚТЛ/БИЛ түлектерінің “Trust in Community” атты қоғамдық бірлестігі`}</FooterText>
    </FooterContainer>
  );
};
const StyledLink = styled.a`
  text-decoration: none;
`;
export default Footer;
