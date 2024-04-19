import React from "react";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; // Import Link from React Router

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
        { label: "Getting Around", key: "getting_around" },
      ],
    },
    {
      label: "Food and Drink",
      key: "food_and_drink",
      children: [
        { label: "Local Cuisine", key: "local_cuisine" },
        { label: "Continental Cuisine", key: "continental_cuisine" },
        { label: "Street Food", key: "street_food" },
        { label: "Nightlife and Bars", key: "nightlife_bars" },
      ],
    },
    {
      label: "Sightseeing and Activities",
      key: "sightseeing_activities",
      children: [
        { label: "Kathmandu", key: "kathmandu" },
        { label: "Pokhara", key: "pokhara" },
        { label: "Trekking", key: "trekking" },
        { label: "Adventure Sports", key: "adventure_sports" },
        { label: "Cultural Experiences", key: "cultural_experiences" },
        { label: "Nature and Wildlife", key: "nature_wildlife" },
      ],
    },
    {
      label: "Shopping",
      key: "shopping",
      children: [
        { label: "Handicrafts", key: "handicrafts" },
        { label: "Souvenirs", key: "souvenirs" },
        { label: "Local Markets", key: "local_markets" },
      ],
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
        <SubMenu key={item.key} icon={<MailOutlined />} title={item.label}>
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
    <div className="fixed w-1/6 x overflow-scroll">
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
