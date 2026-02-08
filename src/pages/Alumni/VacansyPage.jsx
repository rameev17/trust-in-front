import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Descriptions, Button, Alert } from "antd";
import { useGetVacansyById } from "../../api/vacansy";
import PageContainer from "../../components/PageContainer";
import LoadingSpinner from "../../components/LoadingSpinner";

const VacansyPage = () => {
  const { id } = useParams();
  const { data: vacancy, isLoading, isError, error } = useGetVacansyById(id);

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
        <Alert message={`Ошибка: ${error.message}`} type="error" />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default VacansyPage;
