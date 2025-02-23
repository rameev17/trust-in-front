import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useCreateVacancy, useGetVacansy } from "../../api/vacansy";
import { Modal, Form, Input, Pagination as AntPagination } from "antd";

const Vacancies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const page_size = 10;
  const { data } = useGetVacansy(currentPage, page_size);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { mutate } = useCreateVacancy();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form values:", values);
        mutate(values);
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="header">
          <h1 className="title primary-color">Ашық вакансиялар</h1>

          <Button type="primary" onClick={showModal}>
            Вакансия ұсыну
          </Button>
        </div>

        <VacancyGrid>
          {data?.vacancies.map((vacancy) => (
            <Card
              key={vacancy.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>{vacancy.position}</CardTitle>
              <CardDescription>{vacancy.company_info}</CardDescription>
              <LearnMore href={`/alumni/${vacancy.id}`}>Толығырақ →</LearnMore>
            </Card>
          ))}
        </VacancyGrid>

        <AntPagination
          current={currentPage}
          total={data?.total_vacancies || 0}
          pageSize={page_size}
          onChange={handlePageChange}
          showSizeChanger={false}
          style={{ marginTop: "20px" }}
        />

        <Modal
          title="Предложить вакансию"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="submit" type="primary" onClick={handleOk}>
              Отправить
            </Button>,
          ]}
        >
          <Form form={form} layout="vertical" name="vacancyForm">
            <Form.Item
              label="Название вакансии"
              name="position"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите название вакансии!",
                },
              ]}
            >
              <Input placeholder="Введите название вакансии" />
            </Form.Item>
            <Form.Item
              label="Информация о компании"
              name="company_info"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите информацию о компании!",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Введите информацию о компании"
                rows={4}
              />
            </Form.Item>
            <Form.Item
              label="Требования к кандидату"
              name="candidate_requirements"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите требования к кандидату!",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Введите требования к кандидату"
                rows={4}
              />
            </Form.Item>
            <Form.Item
              label="Обязанности"
              name="responsibilities"
              rules={[
                { required: true, message: "Пожалуйста, введите обязанности!" },
              ]}
            >
              <Input.TextArea placeholder="Введите обязанности" rows={4} />
            </Form.Item>
            <Form.Item
              label="Условия"
              name="conditions"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите условия работы!",
                },
              ]}
            >
              <Input.TextArea placeholder="Введите условия работы" rows={4} />
            </Form.Item>
            <Form.Item
              label="Контактная информация"
              name="contact_info"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите контактную информацию!",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Введите контактную информацию"
                rows={4}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};



const VacancyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const LearnMore = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #26395f;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: #26395f;
  color: white;
  border: 1px solid #26395f;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding: 8px 12px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #26395f;
    border-color: #26395f;
  }
`;

export default Vacancies;
