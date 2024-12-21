import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin, Button, message, Typography, Row, Col, Card } from "antd";
import { useGetNewsById } from "../../api/news";

const { Title, Paragraph } = Typography;

const NewsPage = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);
  const { id } = useParams();

  const { data, isLoading, isError } = useGetNewsById(Number(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    if (data) {
      setNews(data);
      setLoading(false);
    }
  }, [data]);

  const shareNews = () => {
    navigator.clipboard.writeText(window.location.href);
    message.success("Сілтеме алмасу буферіне көшірілді!");
  };

  if (isLoading) {
    return (
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "50px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "65vh",
      }}
    >
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
            <Title level={1} style={{ fontWeight: "bold", color: "#333" }}>
              {news?.[0]?.title}
            </Title>
            <Paragraph style={{ fontSize: "16px", color: "#555" }}>
              {news?.[0]?.description}
            </Paragraph>
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "14px", color: "#777" }}>
                Жарияланған күні:{" "}
                {new Date(news?.[0]?.created_at).toLocaleDateString()}
              </p>
              <Button
                type="primary"
                icon={<i className="fas fa-share-alt"></i>}
                onClick={shareNews}
                style={{ fontSize: "16px" }}
              >
                Бөлісу
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default NewsPage;
