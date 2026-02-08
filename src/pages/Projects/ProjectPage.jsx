import React, { useState } from "react";
import { Button, Row, Col, Progress, message, Alert } from "antd";
import { useParams } from "react-router-dom";
import { RWebShare } from "react-web-share";

import { useGetProjectById } from "../../api/project";
import DonationModal from "../../components/Home/DonationModal";
import { formatNumberWithSpaces, getDaysLeft } from "../../helper/getDaysLeft";
import PageContainer from "../../components/PageContainer";
import LoadingSpinner from "../../components/LoadingSpinner";

const PROGRESS_COLORS = [
  { threshold: 80, color: "#0A3456" },
  { threshold: 50, color: "#159AD7" },
  { threshold: 0, color: "#0A3456" },
];

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetProjectById(Number(id));

  const progressPercentage = (data?.donated_money / data?.goal_money) * 100;
  const progressColor =
    PROGRESS_COLORS.find(({ threshold }) => progressPercentage >= threshold)
      ?.color || "#0A3456";

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
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );
  }

  if (isError) {
    return (
      <PageContainer>
        <Alert message={`Қате: ${error.message}`} type="error" />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default ProjectPage;
