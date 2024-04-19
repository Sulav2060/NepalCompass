import React from "react";
import { Row, Col, Typography, Table, Divider } from "antd";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const { Title, Paragraph } = Typography;

const emergencyNumbersDataSource = [
  { key: "1", service: "Police", number: "100" },
  { key: "2", service: "Ambulance", number: "102" },
  { key: "3", service: "Fire", number: "101" },
];

const emergencyNumbersColumns = [
  { title: "Service", dataIndex: "service", key: "service" },
  { title: "Number", dataIndex: "number", key: "number" },
];

const SafetyHealth = () => {
  const navigationItems = [
    { id: "emergency", title: "Emergency Numbers" },
    { id: "insurance", title: "Travel Insurance" },
    { id: "altitude", title: "Altitude Sickness" },
    { id: "vaccinations", title: "Vaccinations" },
  ];

  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className="flex mt-20">
        <div className="w-1/6 ">
          <LeftSidebar />
        </div>

        <div className="w-3/5 ">
          <Row>
            <Col>
              <div className="overflow-hidden">
                <Title level={2}>Safety and Health in Nepal</Title>

                <Paragraph id="emergency">
                  <Title level={3}>Emergency Numbers</Title>
                  <Table
                    dataSource={emergencyNumbersDataSource}
                    columns={emergencyNumbersColumns}
                    pagination={false}
                  />
                </Paragraph>

                <Divider />

                <Paragraph id="insurance">
                  <Title level={3}>Travel Insurance</Title>
                  <Paragraph>
                    It's highly recommended to purchase comprehensive travel
                    insurance that covers activities like trekking and adventure
                    sports, as well as emergency medical evacuation.
                  </Paragraph>
                </Paragraph>

                <Divider />

                <Paragraph id="altitude">
                  <Title level={3}>Altitude Sickness</Title>
                  <Paragraph>
                    Many popular trekking destinations in Nepal involve high
                    altitudes, which can lead to altitude sickness. It's crucial
                    to acclimatize properly, stay hydrated, and descend if
                    experiencing severe symptoms.
                  </Paragraph>
                </Paragraph>

                <Divider />

                <Paragraph id="vaccinations">
                  <Title level={3}>Vaccinations</Title>
                  <Paragraph>
                    Consult with a travel health professional to ensure you have
                    the necessary vaccinations and medications for your trip to
                    Nepal. Recommended vaccinations may include hepatitis A,
                    typhoid, and others depending on your travel plans.
                  </Paragraph>
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
        <div className="w-1/5">
          <RightSidebar navigationItems={navigationItems} />
        </div>
      </div>
    </div>
  );
};

export default SafetyHealth;
