import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { FolderOutlined, FileTextOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Sider } = Layout;
const { SubMenu } = Menu;

const LeftSidebar = () => {
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const items = [
    {
      label: "Welcome to Nepal",
      key: "arriving",
    },
    {
      label: "Getting Started",
      key: "getting_started",
      children: [
        { label: "Arriving in Nepal", key: "arriving" },
        { label: "Accommodation", key: "accommodation" },
      ],
    },
    {
      label: "Food and Drink",
      key: "foodanddrink",
    },
    {
      label: "Transportation",
      key: "transportation",
    },
    {
      label: "Sightseeing and Activities",
      key: "sightseeing_activities",
      children: [
        { label: "Trekking", key: "trekking" },
        { label: "Adventure Sports", key: "adventure_sports" },
        { label: "Cultural Experiences", key: "cultural_experiences" },
        { label: "Nature and Wildlife", key: "nature_wildlife" },
      ],
    },
    {
      label: "Shopping",
      key: "shopping",
    },
    {
      label: "Practical Information",
      key: "practical_info",
      children: [
        { label: "Safety and Health", key: "safety_health" },
        { label: "Money Matters", key: "money_matters" },
        { label: "Local Etiquette and Customs", key: "etiquette_customs" },
        { label: "Language and Communication", key: "language_communication" },
        { label: "Travel Tips and Resources", key: "travel_tips" },
      ],
    },
  ];

  const renderMenuItem = (item) => {
    if (item.children) {
      return (
        <SubMenu key={item.key} icon={<FolderOutlined />} title={item.label}>
          {item.children.map((child) => (
            <Menu.Item key={child.key} icon={<FileTextOutlined />}>
              <Link to={`/${child.key}`}>{child.label}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.key} icon={<FileTextOutlined />}>
          <Link to={`/${item.key}`}>{item.label}</Link>
        </Menu.Item>
      );
    }
  };
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return isMobile ? (
    <div>
      <Button type="primary" onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        title="Menu"
        placement="left"
        onClick={onClose}
        onClose={onClose}
        visible={visible}
      >
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          {items.map(renderMenuItem)}
        </Menu>
      </Drawer>
    </div>
  ) : (
    <Sider
      width={275}
      className="overflow-auto"
    >
      <Menu mode="inline" style={{ borderRight: 0 }}>
        {items.map(renderMenuItem)}
      </Menu>
    </Sider>
  );
};

export default LeftSidebar;
