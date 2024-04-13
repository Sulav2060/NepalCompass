import React, { useState } from "react";
import { Menu, MenuTheme } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";

const TitleSection = () => {
  const [mode, setMode] = useState<"vertical" | "inline">("inline");
  const [theme, setTheme] = useState<MenuTheme>("light");

  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  // Define menu items with icons and keys
  const items = [
    {
      label: "Tourism",
      key: "tourism",
      icon: <MailOutlined />,
      children: [
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
          label: "Cities",
          key: "cities",
          children: [
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
                {
                  label: "Traditional Activities",
                  key: "traditional_activities",
                },
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
                    {
                      label: "Natural Attractions",
                      key: "natural_attractions",
                    },
                    { label: "Cultural Sites", key: "cultural_sites" },
                    { label: "Hotspots", key: "hotspots" },
                  ],
                },
              ],
            },
            { label: "Tours and Travels", key: "tours_and_travels" },
          ],
        },
      ],
    },
    {
      label: "Useful Links",
      key: "useful_links",
      icon: <AppstoreOutlined />,
      children: [
        { label: "Link 1", key: "link_1" },
        { label: "Link 2", key: "link_2" },
        // Add more links as needed
      ],
    },
  ];

  return (
    <>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={mode}
        theme={theme}
      >
        {items.map((item) => (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {item.children &&
              item.children.map((child) =>
                child.children ? (
                  <Menu.SubMenu key={child.key} title={child.label}>
                    {child.children.map((subChild) =>
                      subChild.children ? (
                        <Menu.SubMenu key={subChild.key} title={subChild.label}>
                          {subChild.children.map((subSubChild) => (
                            <Menu.Item key={subSubChild.key}>
                              {subSubChild.label}
                            </Menu.Item>
                          ))}
                        </Menu.SubMenu>
                      ) : (
                        <Menu.Item key={subChild.key}>
                          {subChild.label}
                        </Menu.Item>
                      )
                    )}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item key={child.key}>{child.label}</Menu.Item>
                )
              )}
          </Menu.SubMenu>
        ))}
      </Menu>
    </>
  );
};
export default TitleSection;
