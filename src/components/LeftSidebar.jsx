import React from "react";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const LeftSidebar = () => {
  const items = [
    {
      label: "Airport",
      key: "airport",
      children: [
        { label: "On Arrival Visa", key: "on_arrival_visa" },
        { label: "Currency Exchange", key: "currency_exchange" },
        { label: "SIM Card", key: "sim_card" },
        { label: "Travel to Hotel", key: "travel_hotel" },
      ],
    },
    {
      label: "Accommodation",
      key: "accommodation",
      children: [
        { label: "Hotels", key: "hotels" },
        { label: "Hostels", key: "hostels" },
      ],
    },
    { label: "Travel Medium", key: "travel_medium" },
    {
      label: "Food",
      key: "food",
      children: [
        { label: "Local Cuisine", key: "local_cuisine" },
        { label: "Continental Cuisine", key: "continental_cuisine" },
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

  return (
    <div className="fixed left-0 overflow-y-auto">
      <Menu
        mode="inline"
        defaultSelectedKeys={["airport"]}
        defaultOpenKeys={["airport"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {items.map((item) =>
          item.children ? (
            <SubMenu key={item.key} icon={<MailOutlined />} title={item.label}>
              {item.children.map((child) => (
                <Menu.Item key={child.key}>{child.label}</Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={item.key} icon={<MailOutlined />}>
              {item.label}
            </Menu.Item>
          )
        )}
      </Menu>
    </div>
  );
};

export default LeftSidebar;
