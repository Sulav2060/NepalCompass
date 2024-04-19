import React from "react";
import { Row, Col, Typography, Divider, Table } from "antd";
import { StarOutlined } from "@ant-design/icons";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const { Title, Paragraph } = Typography;

const trekkingDataSource = [
  {
    key: "1",
    name: "Everest Base Camp Trek",
    duration: "12-14 Days",
    cost: "$1000 - $2000",
    condition: "Varied, including high altitude",
    permits: "TIMS Permit, Sagarmatha National Park Permit",
  },
  {
    key: "2",
    name: "Annapurna Circuit Trek",
    duration: "15-20 Days",
    cost: "$800 - $1500",
    condition: "Varied, including high altitude",
    permits: "TIMS Permit, Annapurna Conservation Area Permit",
  },
  {
    key: "3",
    name: "Langtang Valley Trek",
    duration: "7-10 Days",
    cost: "$500 - $1000",
    condition: "Moderate",
    permits: "TIMS Permit, Langtang National Park Permit",
  },
  {
    key: "4",
    name: "Ghorepani Poon Hill Trek",
    duration: "4-6 Days",
    cost: "$400 - $800",
    condition: "Moderate",
    permits: "TIMS Permit",
  },
];

const trekkingColumns = [
  { title: "Trail Name", dataIndex: "name", key: "name" },
  { title: "Duration", dataIndex: "duration", key: "duration" },
  { title: "Cost", dataIndex: "cost", key: "cost" },
  { title: "Route Condition", dataIndex: "condition", key: "condition" },
  { title: "Permits", dataIndex: "permits", key: "permits" },
];

const Trekking = () => {
  const navigationItems = [
    { id: "everest", title: "Everest Base Camp Trek" },
    { id: "annapurna", title: "Annapurna Circuit Trek" },
    { id: "langtang", title: "Langtang Valley Trek" },
    { id: "ghorepani", title: "Ghorepani Poon Hill Trek" },
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
                <Title level={2}>Trekking in Nepal</Title>

                <Paragraph id="everest">
                  <Title level={3}>Everest Base Camp Trek</Title>
                  <Paragraph>
                    A legendary trek to the base of the world's highest peak,
                    Mt. Everest. The journey takes approximately 12-14 days,
                    offering breathtaking views and high-altitude challenges.
                  </Paragraph>
                  <Table
                    dataSource={trekkingDataSource}
                    columns={trekkingColumns}
                    pagination={false}
                  />
                </Paragraph>

                <Divider />

                <Paragraph id="annapurna">
                  <Title level={3}>Annapurna Circuit Trek</Title>
                  <Paragraph>
                    A classic trek circumnavigating the Annapurna massif. Takes
                    around 15-20 days, passing through diverse landscapes and
                    high-altitude passes.
                  </Paragraph>
                  <Table
                    dataSource={trekkingDataSource}
                    columns={trekkingColumns}
                    pagination={false}
                  />
                </Paragraph>

                <Divider />

                <Paragraph id="langtang">
                  <Title level={3}>Langtang Valley Trek</Title>
                  <Paragraph>
                    A beautiful trek in the Langtang region, known for its
                    cultural richness and scenic beauty. It typically lasts 7-10
                    days, offering moderate difficulty.
                  </Paragraph>
                  <Table
                    dataSource={trekkingDataSource}
                    columns={trekkingColumns}
                    pagination={false}
                  />
                </Paragraph>

                <Divider />

                <Paragraph id="ghorepani">
                  <Title level={3}>Ghorepani Poon Hill Trek</Title>
                  <Paragraph>
                    A shorter trek renowned for its stunning sunrise views from
                    Poon Hill. Lasts 4-6 days and offers a moderate trekking
                    experience.
                  </Paragraph>
                  <Table
                    dataSource={trekkingDataSource}
                    columns={trekkingColumns}
                    pagination={false}
                  />
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

export default Trekking;
