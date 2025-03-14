import React from "react";
import styled from "styled-components";
import NewsCard from "./NewsCard";
import { useGetFilteredNews } from "../../../api/news";
import { useTranslation } from "react-i18next";

const NewsContainer = () => {
  const { t } = useTranslation();
  const { data } = useGetFilteredNews();
  const filteredNewsData = data?.news?.slice(0, 3);
  return (
    <div className="main-page-wrapper">
      <div className="header">
        <h1 className="title primary-color">{t("news_title")}</h1>
        <div
          onClick={() => {
            window.open("/news", "_self");
          }}
          className="all-button"
        >
          <p className="nav-link-text primary-color">{t("news_all")}</p>
        </div>
      </div>
      {(!data?.length || !data) && (
        <p className="description description-color">{t("news_empty")}</p>
      )}

      <Cards>
        {filteredNewsData?.map((news, index) => (
          <NewsCard key={index} data={news} />
        ))}
      </Cards>
    </div>
  );
};

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 100px;
  @media (max-width: 1400px) {
    gap: 32px;
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }
`;

export default NewsContainer;
