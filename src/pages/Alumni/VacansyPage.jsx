import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spin, Descriptions, Button, Alert } from "antd";
import { useGetVacansyById } from "../../api/vacansy";

const VacansyPage = () => {
  const { id } = useParams();
  const { data: vacancy, isLoading, isError, error } = useGetVacansyById(id);

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
        <Alert message={`Ошибка: ${error.message}`} type="error" />
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1>{vacancy.position}</h1>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Компания">
            {vacancy.company_info}
          </Descriptions.Item>
          <Descriptions.Item label="Требования к кандидату">
            {vacancy.candidate_requirements}
          </Descriptions.Item>
          <Descriptions.Item label="Обязанности">
            {vacancy.responsibilities}
          </Descriptions.Item>
          <Descriptions.Item label="Условия">
            {vacancy.conditions}
          </Descriptions.Item>
          <Descriptions.Item label="Контактная информация">
            {vacancy.contact_info}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default VacansyPage;
