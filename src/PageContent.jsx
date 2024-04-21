import React from "react";
import data from "./data/texts.json";
import tabletexts from "./data/tabletexts.json";
import { Typography, Card } from "antd";
import RecommendationCard from "./components/ReccommendationCard";
import { useRef } from "react";
import Table from "./components/Table";

const { Title, Paragraph } = Typography;

const PageContent = ({ pagekey }) => {
  const sectionRefs = useRef({});

  const pageData = data[pagekey];

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const getTableData = (sectionId) => {
    console.log("Section ID:", sectionId);

    const tableData = tabletexts[pagekey];
    if (tableData) {
      switch (
        sectionId // Use normalizedSectionId for comparison
      ) {
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
    <div className="p-4 bg-white text-gray-800 dark:bg-[#121212] dark:text-gray-300">
      <Title level={2} className="text-gray-800 dark:text-gray-300">
        {pageData.title}
      </Title>
      {pageData.sections.map((section) => (
        <Card
          key={section.id}
          id={`section-${section.id}`}
          ref={(node) => handleSectionRef(section.id, node)}
          className="mb-4 bg-white text-gray-800 dark:bg-[#121212] dark:border-[#121212] dark:text-gray-300"
        >
          <Title level={3} className="text-gray-800 dark:text-gray-200">
            {section.title}
          </Title>
          {section.description && (
            <Paragraph className="text-gray-800 dark:text-gray-300">
              {section.description}
            </Paragraph>
          )}
          <Paragraph>
            {section.points && (
              <ul className="  list-disc pl-5">
                {section.points.map((point, index) => (
                  <li
                    key={index}
                    className="text-gray-800 list-disc dark:text-gray-300"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </Paragraph>
          <Paragraph>
            {getTableData(section.id) && (
              <Table data={getTableData(section.id)} />
            )}
          </Paragraph>
          {section.recommendation && (
            <Paragraph className="font-bold text-gray-800 dark:text-gray-300">
              <RecommendationCard recommendation={section.recommendation} />
            </Paragraph>
          )}
          {section.note && (
            <Paragraph className="italic text-gray-800 dark:text-gray-300">
              Note: {section.note}
            </Paragraph>
          )}
          {section.requirements && (
            <Paragraph className="text-gray-800 dark:text-gray-300">
              Requirements: {section.requirements}
            </Paragraph>
          )}
          {section.recommendationNote && (
            <Paragraph className="text-gray-800 dark:text-gray-300">
              {section.recommendationNote}
            </Paragraph>
          )}
        </Card>
      ))}
    </div>
  );
};

export default PageContent;
