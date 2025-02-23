import React, { useEffect, useState } from "react";
import { Table, Space, Spin, Alert } from "antd";
import { useGetReports } from "../../api/reports";
import { FilePdfOutlined } from "@ant-design/icons";

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

  const flattenedReports = [];
  Object.keys(reports).forEach((year) => {
    const yearData = reports[year];
    const row = { key: year, year, yearly: [] };

    Object.keys(yearData).forEach((month) => {
      if (month === "Yearly") {
        row.yearly = yearData[month].map((report) => (
          <Space direction="vertical" size="small" key={report.id}>
            <a
              href={`${process.env.REACT_APP_BASE_URL}/media/${report.file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FilePdfOutlined /> {report.title}
            </a>
          </Space>
        ));
      } else {
        row[`month${month}`] = yearData[month].map((report) => (
          <Space direction="vertical" size="small" key={report.id}>
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
    });

    flattenedReports.push(row);
  });

  const columns = [
    {
      title: "Жыл",
      dataIndex: "year",
      key: "year",
      width: 150,
    },

    ...Array.from({ length: 12 }, (_, i) => ({
      title: new Date(0, i).toLocaleString("default", { month: "long" }),
      dataIndex: `month${i + 1}`,
      key: `month${i + 1}`,
      render: (reports) => reports || <div>-</div>,
      width: 150,
    })),
    {
      title: "Жылдық есептер",
      dataIndex: "yearly",
      key: "yearly",
      render: (reports) => reports || <div>Қаржылай есептер жоқ</div>,
      width: 200,
    },
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="header">
          <h1 className="title primary-color">Қаржылай есептер</h1>
        </div>

        <Table
          columns={columns}
          dataSource={flattenedReports}
          pagination={false}
          bordered
          rowKey="key"
          scroll={isSmallScreen ? { y: 400 } : undefined}
        />
      </div>
    </div>
  );
};

export default ReportPage;
