import React from "react";
import data from "./data/texts.json";
import tabletexts from "./data/tabletexts.json";
import { Typography, Table } from "antd";
import RecommendationCard from "./components/ReccommendationCard";
import { useRef } from "react";

const { Title, Paragraph } = Typography;

const PageContent = ({ pagekey, darkMode }) => {
  const sectionRefs = useRef({});

  const pageData = data[pagekey];

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const getTableData = (sectionId) => {
    const tableData = tabletexts[pagekey];
    if (tableData) {
      switch (sectionId) {
        case "visa":
          return {
            dataSource: tableData.visaDataSource,
            columns: tableData.visaColumns,
          };
        case "emergencyNumbers":
          return {
            dataSource: tableData.emergencyNumbersDataSource,
            columns: tableData.emergencyNumbersColumns,
          };
        case "trekking":
          return {
            dataSource: tableData.trekkingDataSource,
            columns: tableData.trekkingColumns,
          };
        default:
          return null;
      }
    }
    return null;
  };

  const handleSectionRef = (id, node) => {
    if (node) {
      sectionRefs.current[id] = node;
    } else {
      delete sectionRefs.current[id];
    }
  };

  return (
    <div
      className={`p-4 ${
        darkMode ? "bg-[#121212] text-gray-300" : "bg-white text-gray-800"
      }`}
    >
      <Title level={2} className={`${darkMode ? "text-gray-200" : ""}`}>
        {pageData.title}
      </Title>
      {pageData.sections.map((section) => (
        <div
          key={section.id}
          id={`section-${section.id}`}
          ref={(node) => handleSectionRef(section.id, node)}
        >
          <Title level={3} className={`${darkMode ? "text-gray-200" : ""}`}>
            {section.title}
          </Title>
          {section.description && (
            <Paragraph className={`${darkMode ? "text-gray-300" : ""}`}>
              {section.description}
            </Paragraph>
          )}
          {section.points && (
            <ul className="list-disc pl-5">
              {section.points.map((point, index) => (
                <li
                  key={index}
                  className={`${darkMode ? "text-gray-300" : ""}`}
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
          {getTableData(section.id) && (
            <Table
              dataSource={getTableData(section.id).dataSource}
              columns={getTableData(section.id).columns}
              pagination={false}
              className={`${darkMode ? "dark" : ""}`}
            />
          )}
          {section.recommendation && (
            <Paragraph
              className={`font-bold ${darkMode ? "text-gray-300" : ""}`}
            >
              <RecommendationCard recommendation={section.recommendation} />
            </Paragraph>
          )}
          {section.note && (
            <Paragraph className={`italic ${darkMode ? "text-gray-300" : ""}`}>
              Note: {section.note}
            </Paragraph>
          )}
          {section.requirements && (
            <Paragraph className={`${darkMode ? "text-gray-300" : ""}`}>
              Requirements: {section.requirements}
            </Paragraph>
          )}
          {section.recommendationNote && (
            <Paragraph className={`${darkMode ? "text-gray-300" : ""}`}>
              {section.recommendationNote}
            </Paragraph>
          )}
        </div>
      ))}
    </div>
  );
};

export default PageContent;
