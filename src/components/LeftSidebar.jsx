import React from "react";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; // Import Link from React Router

const { SubMenu } = Menu;

const LeftSidebar = () => {
  const items = [
    {
      label: "Airport",
      key: "airport",
      children: [
        { label: "On Arrival Visa", key: "pagetemplate" },
        { label: "Currency Exchange", key: "pagetemplate" },
        { label: "SIM Card", key: "pagetemplate" },
        { label: "Travel to Hotel", key: "pagetemplate" },
      ],
    },
    {
      label: "Accommodation",
      key: "accommodation",
      children: [
        { label: "Hotels", key: "pagetemplate" },
        { label: "Hostels", key: "pagetemplate" },
      ],
    },
    { label: "Travel Medium", key: "pagetemplate" },
    {
      label: "Food",
      key: "food",
      children: [
        { label: "Local Cuisine", key: "pagetemplate" },
        { label: "Continental Cuisine", key: "pagetemplate" },
      ],
    },
    {
      label: "Things to Do",
      key: "things_to_do",
      children: [
        {
          label: "Travel Agency or Self-Guided Options (mention Garni)",
          key: "agency_options",
        },
        { label: "Traditional Activities", key: "traditional_activities" },
        {
          label: "Adventure Activities",
          key: "adventure_activities",
          children: [
            { label: "Treks", key: "treks" },
            { label: "Adrenaline Sports", key: "adrenaline_sports" },
          ],
        },
        {
          label: "Places to Visit",
          key: "places_to_visit",
          children: [
            { label: "Natural Attractions", key: "natural_attractions" },
            { label: "Cultural Sites", key: "cultural_sites" },
            { label: "Hotspots", key: "hotspots" },
          ],
        },
      ],
    },
    { label: "Tours and Travels", key: "tours_and_travels" },
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
    <div className="fixed w-1/6">
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
