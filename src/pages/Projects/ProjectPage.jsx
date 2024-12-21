import React, { useState } from "react";
import { Button, Row, Col, Progress, Spin, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProjectById } from "../../api/project";
import DonationModal from "../../components/Home/DonationModal";
import { formatNumberWithSpaces, getDaysLeft } from "../../helper/getDaysLeft";

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const { data, isLoading } = useGetProjectById(Number(id));

  const progressPercentage = (data?.donated_money / data?.goal_money) * 100;

  let progressColor = "#FF4D4F";
  if (progressPercentage >= 80) {
    progressColor = "#52C41A";
  } else if (progressPercentage >= 50) {
    progressColor = "#FAAD14";
  }

  const copyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        message.success("Сілтеме көшірілді");
      })
      .catch(() => {
        message.error("Failed to copy link.");
      });
  };

  const shareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: data?.title,
          text: data?.description,
          url: window.location.href,
        })
        .catch(() => {
          message.error("Failed to share.");
        });
    } else {
      message.warning("Sharing not supported on this device.");
    }
  };

  return (
    <div
      style={{
        padding: "24px",
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "65vh",
      }}
    >
      <Spin spinning={isLoading} tip="Loading...">
        {!isLoading && data ? (
          <Row
            gutter={[20, 20]}
            align="middle"
            justify="center"
            style={{ textAlign: "center" }}
          >
            <Col xs={24} sm={12} md={12}>
              <img
                src={data?.image}
                alt={data?.title}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              />
            </Col>
            <Col xs={24} sm={12} md={12}>
              <h1
                style={{
                  fontSize: "24px",
                  color: "#333",
                  marginBottom: "10px",
                  lineHeight: "1.3",
                }}
              >
                {data?.title}
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  marginBottom: "20px",
                }}
              >
                {data?.description}
              </p>
              <div>
                <h3 style={{ color: "#333", fontSize: "18px" }}>Прогресс</h3>
                <Progress
                  percent={progressPercentage}
                  status="active"
                  strokeColor={progressColor}
                />
                <p style={{ marginTop: "10px", color: "#555" }}>
                  Жиналған ақша: {formatNumberWithSpaces(data.donated_money)} /
                  Мақсат: {formatNumberWithSpaces(data.goal_money)}
                </p>
                <p style={{ marginTop: "10px", color: "#777" }}>
                  {getDaysLeft(data?.ending_at)}
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Button
                  type="primary"
                  onClick={() => setIsOpen(true)}
                  style={{
                    fontSize: "16px",
                    padding: "10px 20px",
                    marginRight: "10px",
                  }}
                >
                  Көмектесу
                </Button>
                <Button
                  type="default"
                  onClick={copyLink}
                  style={{
                    fontSize: "16px",
                    padding: "10px 20px",
                    marginRight: "10px",
                  }}
                >
                  Сілтемені көшіру
                </Button>
                <Button
                  type="default"
                  onClick={shareLink}
                  style={{
                    fontSize: "16px",
                    padding: "10px 20px",
                  }}
                >
                  Бөлісу
                </Button>
              </div>
            </Col>
          </Row>
        ) : null}
      </Spin>
      <DonationModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ProjectPage;
