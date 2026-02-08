import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Typography, Row, Col, Card } from "antd";
import { useGetNewsById } from "../../api/news";
import { RWebShare } from "react-web-share";
import PageContainer from "../../components/PageContainer";
import LoadingSpinner from "../../components/LoadingSpinner";

const { Title, Paragraph } = Typography;

const NewsPage = () => {
  const [loading, setLoading] = useState(true);
  const [titleFontSize, setTitleFontSize] = useState("28px");
  const [descriptionFontSize, setDescriptionFontSize] = useState("16px");

  const [news, setNews] = useState(null);
  const { id } = useParams();

  const { data, isLoading, isError } = useGetNewsById(Number(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      setTitleFontSize(window.innerWidth < 768 ? "18px" : "28px");
      setDescriptionFontSize(window.innerWidth < 768 ? "14px" : "16px");
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (data) {
      setNews(data);
      setLoading(false);
    }
  }, [data]);

  if (isLoading) {
    return (
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );
  }

  if (isError) {
    return (
      <PageContainer>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "400px",
          }}
        ></div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Row gutter={[20, 20]} justify="center">
        <Col xs={24} md={16}>
          <Card
            bordered={false}
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
          >
            <Title
              level={1}
              style={{
                fontWeight: "bold",
                color: "#0A3456",
                fontSize: titleFontSize,
              }}
            >
              {news?.[0]?.title}
            </Title>
            {news?.[0]?.image && (
              <img
                src={news?.[0]?.image}
                alt={news?.[0]?.title}
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            <Paragraph style={{ fontSize: descriptionFontSize, color: "#0A3456" }}>
              {news?.[0]?.description}
            </Paragraph>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "14px", color: "#0A3456" }}>
                Жарияланған күні:{" "}
                {new Date(news?.[0]?.created_at).toLocaleDateString()}
              </p>
              <RWebShare
                data={{
                  title: news?.[0]?.title,
                  text: news?.[0]?.description,
                  url: window.location.href,
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <Button type="default">Бөлісу</Button>
              </RWebShare>
            </div>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default NewsPage;
