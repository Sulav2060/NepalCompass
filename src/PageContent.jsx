import React from "react";
import { Typography, Card } from "antd";
import RecommendationCard from "./components/ReccommendationCard";
import Table from "./components/Table";
import useFetch from "./Hooks/useFetch.js";

const { Title, Paragraph } = Typography;

const PageContent = ({ pagekey, section }) => {
  const city = pagekey === "ktm" ? 0 : 1; // Set city value based on pagekey
  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/${pagekey}s?populate=attributes`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const sections = section;
  console.log("sections", sections);

  return (
    <div className="p-4 bg-white text-gray-800 dark:bg-[#121212] dark:text-gray-300">
      <Title level={2} className="text-gray-800 dark:text-gray-300">
        {pagekey}
      </Title>
      {sections.map((section) => (
        <Card
          key={section.id}
          className="mb-4 bg-white text-gray-800 dark:bg-[#121212] dark:border-[#121212] dark:text-gray-300"
        >
          <Title level={3} className="text-gray-800 dark:text-gray-200">
            {section.SectionTitle}
          </Title>
          {section.sectionRichText && (
            <Paragraph className="text-gray-800 dark:text-gray-300">
              {section.sectionRichText}
            </Paragraph>
          )}
          {section.Table && section.Table.visa && (
            <Paragraph>
              <Table
                data={{
                  dataSource: section.Table.visa.dataSource,
                  columns: section.Table.visa.columns,
                }}
              />
            </Paragraph>
          )}
          {section.SectionRecommendation && (
            <Paragraph className="font-bold text-gray-800 dark:text-gray-300">
              <RecommendationCard recommendation={section.SectionRecommendation} />
            </Paragraph>
          )}
          {section.SectionNote && (
            <Paragraph className="italic text-gray-800 dark:text-gray-300">
              Note: {section.SectionNote}
            </Paragraph>
          )}
        </Card>
      ))}
    </div>
  );
};

export default PageContent;
