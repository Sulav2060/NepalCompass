import React from "react";
import { Row, Col, Typography, Divider, Table } from "antd";
import titletexts from "../data/titletexts.json";

import tabletexts from "../data/tabletexts.json";
import texts from "../data/texts.json";
import RecommendationCard from "../components/ReccommendationCard";
import { Content } from "antd/es/layout/layout";

const { Title, Paragraph } = Typography;

const visaDataSource = tabletexts.Airport.visaDataSource;
const visaColumns = tabletexts.Airport.visaColumns;
const airportTexts = texts.Airport;

const Airport = () => {
  return (
    <Content className="p-4 dark:bg-[#121212] bg-white text-gray-800 ">
      <Row>
        <Col>
          <div className="overflow-hidden">
            <Title level={2} className="dark:text-gray-200">
              {airportTexts.title}
            </Title>
            <Paragraph id="visa">
              <Title className="dark:text-gray-200 dark:bg-[#121212]" level={3}>
                {airportTexts.visa.title}
              </Title>
              <Paragraph className="dark:text-gray-200 dark:bg-[#121212]">
                <ul>
                  {airportTexts.visa.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <Table
                  dataSource={visaDataSource}
                  columns={visaColumns}
                  pagination={false}
                  className="dark:bg-gray-800 dark:text-gray-50"
                  rowClassName="dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                  headerClassName="dark:bg-gray-700 dark:text-gray-200"
                />
              </Paragraph>
              <Paragraph className="dark:text-gray-200">
                <strong>{airportTexts.visa.recommendation}</strong>
              </Paragraph>

              <Paragraph className="dark:text-gray-200">
                <strong>{airportTexts.visa.note}</strong>
              </Paragraph>
            </Paragraph>
            <Divider />
            <Paragraph id="currency">
              <Title className="dark:text-gray-200" level={3}>
                {airportTexts.currency.title}
              </Title>
              <Paragraph className="dark:text-gray-200">
                <ul>
                  {airportTexts.currency.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </Paragraph>
            </Paragraph>
            <Divider />
            <Paragraph id="sim" className="dark:text-white">
              <Title className="dark:text-gray-200" level={3}>
                {airportTexts.sim.title}
              </Title>
              <Paragraph className="dark:text-white">
                <ul>
                  {airportTexts.sim.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <Paragraph className="dark:text-gray-200">
                  <strong>{airportTexts.sim.requirements}</strong>
                </Paragraph>
                <Paragraph className="dark:text-gray-200">
                  <strong>{airportTexts.sim.note}</strong>
                </Paragraph>
              </Paragraph>
            </Paragraph>

            <RecommendationCard
              recommendation={airportTexts.sim.recommendation}
              reason={airportTexts.sim.recommendationNote}
            />
            <Divider />
            <Paragraph id="transport">
              <Title className="dark:text-gray-200" level={3}>
                {airportTexts.transport.title}
              </Title>
              <Paragraph className="dark:text-gray-200">
                <ul>
                  {airportTexts.transport.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <Paragraph className="dark:text-gray-200">
                  <strong>{airportTexts.transport.recommendation}</strong>
                </Paragraph>
              </Paragraph>
            </Paragraph>
          </div>
        </Col>
      </Row>
    </Content>
  );
};

export default Airport;
