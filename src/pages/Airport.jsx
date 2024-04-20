
import React from "react";
import { Row, Col, Anchor, Typography, Divider, Table } from "antd";
import { StarOutlined } from "@ant-design/icons";
import titletexts from "../data/titletexts.json";
import tabletexts from "../data/tabletexts.json";
import texts from "../data/texts.json";
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
          <div className="overflow-hidden">
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
            <div className="border border-blue-300 rounded-md p-4 bg-gray-50">
              <Paragraph className="mb-0">
                <div className="flex items-center mb-2">
                  <StarOutlined
                    style={{
                      fontSize: "24px",
                      color: "#FFD700",
                      marginRight: "8px",
                    }}
                  />
                  <Title level={3} style={{ marginBottom: 0 }}>
                    {airportTexts.sim.recommendation}
                  </Title>
                </div>
                <div>
                  <Paragraph>{airportTexts.sim.recommendationNote}</Paragraph>
                </div>
              </Paragraph>
            </div>
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
