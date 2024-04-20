import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MailOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Sider } = Layout;
const { SubMenu } = Menu;

const LeftSidebar = () => {
  const items = [
    {
      label: "Welcome to Nepal",
      key: "welcome",
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
  ];

  const renderMenuItem = (item) => {
    if (item.children) {
      return (
        <SubMenu
          key={item.key}
          icon={<MailOutlined />}
          title={item.label}
          onTitleClick={
            isMobile ? (e) => e.domEvent.stopPropagation() : undefined
          }
        >
          {item.children.map((child) => (
            <Menu.Item key={child.key}>
              <Link to={`/${child.key}`}>{child.label}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.key} icon={<MailOutlined />}>
          <Link to={`/${item.key}`}>{item.label}</Link>
        </Menu.Item>
      );
    }
  };

  return (
    <div className="fixed w-1/6 x overflow-auto">
      <Menu
        mode="inline"
        defaultSelectedKeys={["airport"]}
        defaultOpenKeys={["airport"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {items.map((item) => renderMenuItem(item))}
      </Menu>
    </div>
  );
};

export default LeftSidebar;
