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
import { TEXT_COLORS } from "../helper/constants";

const Footer = () => {
  const { t } = useTranslation();
  const { data: projects } = useGetProjects();
  const { data: news } = useGetFilteredNews();

  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Logo src={require("../images/footer_logo.png")} alt="ATYRAU BIL ALUMNI ASSOCIATION Logo" />
          <SocialIcons>
            {[
              {
                icon: faTelegram,
                link: "https://t.me/+RBoBXtz-OwJWqC54",
                label: "Telegram",
              },
              {
                icon: faWhatsapp,
                link: "https://wa.me/77066642233",
                label: "WhatsApp",
              },
              {
                icon: faInstagram,
                link: "https://www.instagram.com/atyraubil_tulekter?igsh=MWYwMXp2dDgzMDltZQ==",
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
            <a href="tel:+77066642233">📞 +7 (706) 664 2233</a>
            <br />
            <a href="mailto:alumni@atyraubilim.kz">📩 alumni@atyraubilim.kz</a>
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
                href: require("../documents/public.pdf"),
              },
              {
                text: t("footer_doc_privacy"),
                href: require("../documents/politics.pdf"),
              },
              {
                text: t("footer_doc_payment"),
                href: require("../documents/payment.pdf"),
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
      {/* <FooterTextWrapper>
        <FooterText>{t("footer_text")}</FooterText>
      </FooterTextWrapper> */}
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: ${TEXT_COLORS.PRIMARY_COLOR};
  color: #fff;
  padding: 30px 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 24px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  text-align: left;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media (max-width: 480px) {
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 100%;
  }
`;

const Column = styled.div`
  h3 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 4px 0;
    font-size: 13px;
    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s;
      &:hover {
        color: ${TEXT_COLORS.SECONDARY_COLOR};
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    
    h3 {
      font-size: 14px;
      margin-bottom: 8px;
    }
    
    li {
      font-size: 12px;
      margin: 3px 0;
    }
  }

  @media (max-width: 480px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    
    h3 {
      text-align: center;
      width: 100%;
    }
    
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0;
      margin: 0;
    }
    
    li {
      text-align: center;
      width: 100%;
    }
  }
`;

const Logo = styled.img`
  height: 80px;
  object-fit: contain;
  display: block;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 60px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    margin: 0 auto 8px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  a {
    color: #fff;
    font-size: 18px;
    transition: color 0.3s;
    &:hover {
      color: ${TEXT_COLORS.SECONDARY_COLOR};
    }
  }

  @media (max-width: 768px) {
    gap: 8px;
    a {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const ContactLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-size: 13px;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 11px;
    }
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const FooterTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const FooterText = styled.p`
  text-align: center;
  color: #fff;
  font-size: 11px;
  margin: 0;
  opacity: 0.8;
`;
