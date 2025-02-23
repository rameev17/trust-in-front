import React, { useState } from "react";
import { Button, Row, Col, Progress, Spin, message, Alert } from "antd";
import { useParams } from "react-router-dom";
import { RWebShare } from "react-web-share";

import { useGetProjectById } from "../../api/project";
import DonationModal from "../../components/Home/DonationModal";
import { formatNumberWithSpaces, getDaysLeft } from "../../helper/getDaysLeft";

const PROGRESS_COLORS = [
  { threshold: 80, color: "#52C41A" },
  { threshold: 50, color: "#FAAD14" },
  { threshold: 0, color: "#FF4D4F" },
];

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetProjectById(Number(id));

  const progressPercentage = (data?.donated_money / data?.goal_money) * 100;
  const progressColor =
    PROGRESS_COLORS.find(({ threshold }) => progressPercentage >= threshold)
      ?.color || "#FF4D4F";

  const copyLink = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(window.location.href);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = window.location.href;
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      message.success("Сілтеме көшірілді");
    } catch {
      message.error("Сілтемені көшіру мүмкін болмады");
    }
  };

  if (isLoading) {
    return (
      <div className="spin">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="spin">
        <Alert message={`Қате: ${error.message}`} type="error" />
      </div>
    );
  }

  return (
    <div className="page-container">
      <Row
        gutter={[20, 20]}
        align="middle"
        justify="center"
        style={{ textAlign: "center" }}
      >
        <Col xs={24} sm={12} md={12}>
          <img src={data?.image} alt={data?.title} className="project-image" />
        </Col>
        <Col xs={24} sm={12} md={12} className="project-information-wrapper">
          <div className="project-information-wrapper">
            <h1 className="title description-color">{data?.title}</h1>
            <p className="description description-color">{data?.description}</p>
          </div>

          <div>
            <h3 className="section-title description-color">Прогресс</h3>
            <Progress
              percent={progressPercentage}
              status="active"
              strokeColor={progressColor}
            />
            <p className="description description-color">
              Жиналған ақша: {formatNumberWithSpaces(data.donated_money)} /
              Мақсат: {formatNumberWithSpaces(data.goal_money)}
            </p>
            <p className="description description-color">
              {getDaysLeft(data?.ending_at)}
            </p>
          </div>
          <div className="share-buttons-wrapper">
            <Button type="primary" onClick={() => setIsOpen(true)}>
              Көмектесу
            </Button>
            <Button type="default" onClick={copyLink}>
              Сілтемені көшіру
            </Button>
            <RWebShare
              data={{
                title: data?.title,
                text: data?.description,
                url: window.location.href,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button type="default">Бөлісу</Button>
            </RWebShare>
          </div>
        </Col>
      </Row>

      <DonationModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ProjectPage;
