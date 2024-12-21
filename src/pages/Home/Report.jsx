import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { useGetReports } from "../../api/reports";
import { FilePdfOutlined } from "@ant-design/icons";

import styled from "styled-components";

const ReportPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { data: reports, isLoading, isError, error } = useGetReports();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) return <div>Loading reports...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const flattenedReports = [];
  Object.keys(reports).forEach((year) => {
    const yearData = reports[year];
    const row = { key: year, year };

    for (let month = 1; month <= 12; month++) {
      const monthReports = yearData[month] || [];
      row[`month${month}`] = monthReports.map((report) => (
        <Space direction="vertical" size="small">
          <a
            href={`${process.env.REACT_APP_BASE_URL}/media/${report.file}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FilePdfOutlined /> {report.title}
          </a>
        </Space>
      ));
    }

    flattenedReports.push(row);
  });

  const columns = [
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      width: 150,
    },
    ...Array.from({ length: 12 }, (_, i) => ({
      title: new Date(0, i).toLocaleString("default", { month: "long" }),
      dataIndex: `month${i + 1}`,
      key: `month${i + 1}`,
      render: (reports) => reports || <div>Қаржылай есептер жоқ</div>,
      width: 150,
    })),
  ];

  return (
    <Container>
      <Header>
        <Title>Қаржылай есептер</Title>
      </Header>
      <Table
        columns={columns}
        dataSource={flattenedReports}
        pagination={false}
        bordered
        rowKey="key"
        scroll={isSmallScreen ? { y: 400 } : undefined}
      />
    </Container>
  );
};
const Container = styled.div`
  min-height: 65vh;
  margin: 0px 150px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  @media (max-width: 768px) {
    margin: 0px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 48px;
  text-align: left;
  font-weight: 700;
  color: #26395f;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export default ReportPage;
