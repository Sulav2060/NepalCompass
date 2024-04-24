import React, { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const RightSidebar = ({ navigationItems, darkMode }) => {
  const [activeItems, setActiveItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const handleScroll = () => {
      const visibleItems = [];

      navigationItems.forEach((item) => {
        const sectionId = `section-${item.id}`;
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const isVisible =
            top >= 0 &&
            bottom <=
              (window.innerHeight || document.documentElement.clientHeight);
          if (isVisible) {
            visibleItems.push(item.id);
          }
        }
      });

      setActiveItems(visibleItems);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigationItems]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  if (!navigationItems) {
    return null;
  }

  return isMobile ? (
    <div>
      <Button
        type="primary"
        onClick={showDrawer}
        style={{ position: "fixed", right: 0, zIndex: 100 }}
        icon={<MenuOutlined />}
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
        zIndex={99}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          {navigationItems.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className={`py-2 pl-4 border-l-4 ${
                activeItems.includes(item.id)
                  ? darkMode
                    ? "border-blue-500 text-blue-500 "
                    : "border-blue-500 text-blue-500 "
                  : darkMode
                  ? "border-transparent text-white hover:bg-gray-700"
                  : "border-transparent text-black hover:bg-gray-100"
              }`}
              style={{ cursor: "pointer" }}
            >
              <a href={`#section-${item.id}`} className="sidebar-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  ) : (
    <div
      className={`sticky top-[10vh] h-[90vh] ${
        darkMode ? "bg-[#121212]" : "bg-white"
      } min-w-[14vw] overflow-y-auto shadow`}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        {navigationItems.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className={`py-2 pl-4 border-l-4 ${
              activeItems.includes(item.id)
                ? darkMode
                  ? "border-blue-500 text-blue-500 "
                  : "border-blue-500 text-blue-500 "
                : darkMode
                ? "border-transparent text-white hover:bg-gray-700"
                : "border-transparent text-black hover:bg-gray-100"
            }`}
            style={{ cursor: "pointer" }}
          >
            <a href={`#section-${item.id}`} className="sidebar-link">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
