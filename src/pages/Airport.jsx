import React from "react";
import { Row, Col, Anchor, Typography, Divider, Table } from "antd";
import { StarOutlined } from "@ant-design/icons";
import titletexts from "../data/titletexts.json";
import tabletexts from "../data/tabletexts.json";
import texts from "../data/texts.json";
import RecommendationCard from "../components/ReccommendationCard";
const { Link } = Anchor;
const { Title, Paragraph } = Typography;

const visaDataSource = tabletexts.Airport.visaDataSource;
const visaColumns = tabletexts.Airport.visaColumns;
const airportTexts = texts.Airport;

const Airport = () => {
  //works beautifully
  Airport.navigationItems = titletexts.Airport.navigationItems;
  return (
    <div>
      <Row>
        <Col>
          <div>
            <Title level={2}>{airportTexts.title}</Title>
            <Paragraph id="visa">
              <Title level={3}>{airportTexts.visa.title}</Title>
              <Paragraph>
                <ul>
                  {airportTexts.visa.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <Table
                  dataSource={visaDataSource}
                  columns={visaColumns}
                  pagination={false}
                />
              </Paragraph>
              <Paragraph>
                <strong>{airportTexts.visa.recommendation}</strong>
              </Paragraph>

              <Paragraph>
                <strong>{airportTexts.visa.note}</strong>
              </Paragraph>
            </Paragraph>
            <Divider />
            <Paragraph id="currency">
              <Title level={3}>{airportTexts.currency.title}</Title>
              <Paragraph>
                <ul>
                  {airportTexts.currency.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </Paragraph>
            </Paragraph>
            <Divider />
            <Paragraph id="sim">
              <Title level={3}>{airportTexts.sim.title}</Title>
              <Paragraph>
                <ul>
                  {airportTexts.sim.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <Paragraph>
                  <strong>{airportTexts.sim.requirements}</strong>
                </Paragraph>
                <Paragraph>
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
              <Title level={3}>{airportTexts.transport.title}</Title>
              <Paragraph>
                <ul>
                  {airportTexts.transport.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <Paragraph>
                  <strong>{airportTexts.transport.recommendation}</strong>
                </Paragraph>
              </Paragraph>
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Airport;
