import React, { useState, useMemo } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import {
  FolderOutlined,
  FileTextOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Sider } = Layout;
const { SubMenu } = Menu;

const LeftSidebar = ({ darkMode }) => {
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const items = useMemo(() => [
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
      key: "food_and_drink",
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
  ], []);

  const renderMenuItem = (item) => {
    if (item.children) {
      return (
        <SubMenu
          key={item.key}
          icon={<FolderOutlined />}
          title={item.label}
          onTitleClick={
            isMobile ? (e) => e.domEvent.stopPropagation() : undefined
          }
        >
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

  const defaultSelectedKey = useMemo(() => items.length > 0 ? items[0].key : null, [items]);

  return isMobile ? (
    <div>
      <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />}>
        Menu
      </Button>
      <Drawer
        title="Menu"
        placement="left"
        onClick={onClose}
        onClose={onClose}
        visible={visible}
      >
        <Menu
          defaultSelectedKeys={[defaultSelectedKey]}
          mode="inline"
          theme={darkMode ? "dark" : "light"} // Dark mode theme
          defaultOpenKeys={[
            "getting_started",
            "sightseeing_activities",
            "practical_info",
          ]}
        >
          {items.map(renderMenuItem)}
        </Menu>
      </Drawer>
    </div>
  ) : (
    <Sider
      width={"auto"}
      style={{
        overflow: "auto",
        position: "sticky",
        top: "10vh",
        height: "90vh",
        left: 0,
        background: darkMode ? "#121212" : "#ffffff", // Dark mode background color
        color: darkMode ? "#ffffff" : "#000000", // Dark mode text color
      }}
      breakpoint="md"
      collapsedWidth={0}
      theme={darkMode ? "dark" : "light"} // Dark mode theme
    >
      <Menu
        defaultSelectedKeys={[defaultSelectedKey]}
        mode="inline"
        style={{
          position: "sticky",
          left: 0,
          background: darkMode ? "#121212" : "#ffffff", // Dark mode background color
          color: darkMode ? "#ffffff" : "#000000", // Dark mode text color
        }}
        defaultOpenKeys={[
          "getting_started",
          "sightseeing_activities",
          "practical_info",
        ]}
        theme={darkMode ? "dark" : "light"} // Dark mode theme
      >
        {items.map(renderMenuItem)}
      </Menu>
    </Sider>
  );
};

export default LeftSidebar;
