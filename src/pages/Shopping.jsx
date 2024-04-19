import React from "react";
import { Row, Col, Typography, Divider, Table } from "antd";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const { Title, Paragraph } = Typography;

const Shopping = () => {
  const navigationItems = [
    { id: "handicrafts", title: "Handicrafts" },
    { id: "souvenirs", title: "Souvenirs" },
    { id: "local_markets", title: "Local Markets" },
  ];

  const handicraftsData = [
    {
      key: "1",
      item: "Thanka Paintings",
      description:
        "Intricate paintings depicting Buddhist deities and mandalas.",
    },
    {
      key: "2",
      item: "Singing Bowls",
      description: "Ancient instruments used in Buddhist meditation practices.",
    },
    {
      key: "3",
      item: "Pashmina Shawls",
      description:
        "Luxurious shawls woven from the fine undercoat of Himalayan goats.",
    },
    {
      key: "4",
      item: "Khukuri",
      description: "Traditional Nepali knife with a curved blade.",
    },
  ];

  const souvenirsData = [
    {
      key: "1",
      item: "Prayer Wheels",
      description: "Small cylindrical wheels inscribed with mantras.",
    },
    {
      key: "2",
      item: "Statues and Idols",
      description:
        "Figurines of various deities like Buddha, Ganesh, and Shiva.",
    },
    {
      key: "3",
      item: "Nepali Jewelry",
      description:
        "Jewelry featuring traditional designs and semi-precious stones.",
    },
  ];

  const localMarketsData = [
    {
      key: "1",
      market: "Ason Bazaar",
      location: "Kathmandu",
      description: "Vibrant market for handicrafts, textiles, and souvenirs.",
    },
    {
      key: "2",
      market: "Lakeside Market",
      location: "Pokhara",
      description: "Bustling hub for locally-made goods and handicrafts.",
    },
    {
      key: "3",
      market: "Bhaktapur Pottery Square",
      location: "Bhaktapur",
      description:
        "Destination for pottery enthusiasts with workshops available.",
    },
  ];

  const columns = [
    { title: "Item", dataIndex: "item", key: "item" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];
  const localMarketsColumns = [
    { title: "Market", dataIndex: "market", key: "market" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Description", dataIndex: "description", key: "description" },
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
                <Title level={2}>Shopping</Title>

                <Divider />

                <Title level={3}>Handicrafts</Title>
                <Table
                  dataSource={handicraftsData}
                  columns={columns}
                  pagination={false}
                />

                <Divider />

                <Title level={3}>Souvenirs</Title>
                <Table
                  dataSource={souvenirsData}
                  columns={columns}
                  pagination={false}
                />

                <Divider />

                <Title level={3}>Local Markets</Title>
                <Table
                  dataSource={localMarketsData}
                  columns={localMarketsColumns}
                  pagination={false}
                />
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

export default Shopping;
