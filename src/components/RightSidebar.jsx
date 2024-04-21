import React, { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const RightSidebar = ({ navigationItems }) => {
  const [activeItems, setActiveItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const handleScroll = () => {
      const visibleItems = [];
      navigationItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top >= 0 && bottom <= window.innerHeight) {
            visibleItems.push(item.id);
          }
        }
      });
      setActiveItems(visibleItems);
    };
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

  return isMobile? (
    <div>
      <Button
        type="primary"
        onClick={showDrawer}
        style={{ position: "fixed", right: 0 }}
      >
        <MenuOutlined />
      </Button>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <ul>
          {navigationItems.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className={`py-2 pl-4 border-l-4 ${
                activeItems.includes(item.id)
                 ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-700 hover:bg-gray-100"
              }`}
            >
              <a href={`#${item.id}`} className="sidebar-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  ) : (
    <div className="fixed top-10vh right-0 h-full bg-white w-48 overflow-y-auto shadow">
      <ul>
        {navigationItems.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className={`py-2 pl-4 border-l-4 ${
              activeItems.includes(item.id)
               ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-700 hover:bg-gray-100"
            }`}
          >
            <a href={`#${item.id}`} className="sidebar-link">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;