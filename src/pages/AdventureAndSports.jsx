import React from "react";
import { Row, Col, Typography, Divider, Table } from "antd";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const { Title } = Typography;

const AdventureAndSports = () => {
  const navigationItems = [
    { id: "bungee_jumping", title: "Bungee Jumping" },
    { id: "zip_lining", title: "Zip-lining" },
    { id: "paragliding", title: "Paragliding" },
    { id: "mountain_biking", title: "Mountain Biking" },
    { id: "rock_climbing", title: "Rock Climbing" },
  ];

  const adventureData = [
    {
      key: "1",
      activity: "Bungee Jumping",
      location: "Hemja Bungee site, Pokhara",
      height: "166 meters (544 feet)",
      description: "Experience the thrill of jumping from a dizzying height.",
    },
    {
      key: "2",
      activity: "Zip-lining",
      location: "Various operators in Pokhara",
      height: "N/A",
      description:
        "Soar through the air and take in panoramic views of the Annapurna range.",
    },
    {
      key: "3",
      activity: "Paragliding",
      location: "Pokhara",
      height: "N/A",
      description:
        "Glide through the skies and enjoy bird's-eye views of Pokhara's stunning landscapes.",
    },
    {
      key: "4",
      activity: "Mountain Biking Tours",
      location: "Various locations in Nepal",
      height: "N/A",
      description:
        "Explore rugged terrain and remote villages, providing an up-close encounter with Nepal's natural beauty.",
    },
    {
      key: "5",
      activity: "Rock Climbing",
      location: "Nagarjun Hill in Kathmandu, Shivapuri National Park",
      height: "N/A",
      description: "Challenge yourself on towering cliffs and rocky outcrops.",
    },
  ];

  const adventureColumns = [
    { title: "Activity", dataIndex: "activity", key: "activity" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Height", dataIndex: "height", key: "height" },
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
                <Title level={2}>Adventure and Sports</Title>
                <Divider />
                <Table
                  dataSource={adventureData}
                  columns={adventureColumns}
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

export default AdventureAndSports;
