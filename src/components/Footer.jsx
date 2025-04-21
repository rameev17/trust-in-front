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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const { data: projects } = useGetProjects();
  const { data: news } = useGetFilteredNews();

  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Logo src={require("../images/footer-logo.png")} alt="Company Logo" />
          <SocialIcons>
            {[
              {
                icon: faTelegram,
                link: "https://t.me/+XNtchxLkWrgxODMy",
                label: "Telegram",
              },
              {
                icon: faWhatsapp,
                link: "https://chat.whatsapp.com/Fx5mmgJjLjw9xXSOSEwCHT",
                label: "WhatsApp",
              },
              {
                icon: faInstagram,
                link: "https://www.instagram.com/yessik_alumni?igsh=MWxqenptbXVya3lpNw==",
                label: "Instagram",
              },
            ].map(({ icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </SocialIcons>
          <ContactLinks>
            <a href="tel:+77077887020">📞 +7 (707) 788 7020</a>
            <br />
            <a href="mailto:agalqa@gmail.com">📩 agalqa@gmail.com</a>
          </ContactLinks>
        </Column>

        {[
          {
            title: t("footer_nav"),
            links: [
              { text: t("footer_nav_home"), href: "/home" },
              { text: t("footer_nav_about"), href: "/home/about" },
              // { text: t("footer_nav_merch"), href: "#services" },
              { text: t("footer_nav_alumni"), href: "/alumni" },
            ],
          },
          {
            title: t("footer_doc"),
            links: [
              {
                text: t("footer_doc_offer"),
                href: require("../documents/kogam.pdf"),
              },
              {
                text: t("footer_doc_privacy"),
                href: require("../documents/kupiya.pdf"),
              },
              {
                text: t("footer_doc_payment"),
                href: require("../documents/online.pdf"),
              },
            ],
          },
        ].map(({ title, links }) => (
          <Column key={title}>
            <h3>{title}</h3>
            <ul>
              {links.map(({ text, href }) => (
                <li key={text}>
                  <a href={href}>{text}</a>
                </li>
              ))}
            </ul>
          </Column>
        ))}

        {[
          { title: t("news_title"), data: news?.news, type: "news" },
          { title: t("projects_title"), data: projects, type: "projects" },
        ].map(({ title, data, type }) => (
          <Column key={title}>
            <h3>{title}</h3>
            <ul>
              {data?.slice(0, 3).map(({ id, title }) => (
                <li key={id}>
                  <a href={`/${type}/${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </Column>
        ))}
      </FooterContent>
      <FooterText>{t("footer_text")}</FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  text-align: left;
`;

const Column = styled.div`
  h3 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 600;
    color: #f1f1f1;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 6px 0;
    font-size: 14px;
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
  height: 70px;
  display: block;
  margin-bottom: 12px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  a {
    color: #fff;
    font-size: 22px;
    transition: color 0.3s;
    &:hover {
      color: #cab390;
    }
  }
`;

const ContactLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterText = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 12px;
  margin-top: 20px;
`;
