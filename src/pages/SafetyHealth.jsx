import React from "react";
import { Row, Col, Typography, Table, Divider } from "antd";
import titletexts from '../data/titletexts.json';
import tabletexts from '../data/tabletexts.json';
import texts from '../data/texts.json';
const { Title, Paragraph } = Typography;

const emergencyNumbersDataSource = tabletexts.SafetyHealth.emergencyNumbersDataSource;
const safetyHealthTexts = texts.SafetyHealth;
const emergencyNumbersColumns = tabletexts.SafetyHealth.emergencyNumbersColumns;
const SafetyHealth = () => {
  SafetyHealth.navigationItems = titletexts.SafetyHealth.navigationItems;

  return (
    <div>
      <div>
        <Row>
          <Col>
            <div className="overflow-hidden">
              <Title level={2}>{safetyHealthTexts.title}</Title>

              <Paragraph id="emergency">
                <Title level={3}>{safetyHealthTexts.emergencyNumbers.title}</Title>
                <Table
                  dataSource={emergencyNumbersDataSource}
                  columns={emergencyNumbersColumns}
                  pagination={false}
                />
              </Paragraph>

              <Divider />

              <Paragraph id="insurance">
                <Title level={3}>{safetyHealthTexts.travelInsurance.title}</Title>
                <Paragraph>
                  {safetyHealthTexts.travelInsurance.description}
                </Paragraph>
              </Paragraph>

              <Divider />

              <Paragraph id="altitude">
                <Title level={3}>{safetyHealthTexts.altitude.title}</Title>
                <Paragraph>
                  {safetyHealthTexts.altitude.description}
                </Paragraph>
              </Paragraph>

              <Divider />

              <Paragraph id="vaccinations">
                <Title level={3}>{safetyHealthTexts.altitude.title}</Title>
                <Paragraph>
                 {safetyHealthTexts.vaccinations.description}
                </Paragraph>
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
      {/* <div className="w-1/5">
          <RightSidebar navigationItems={navigationItems} />
        </div> */}
    </div>
  );
};

export default SafetyHealth;
