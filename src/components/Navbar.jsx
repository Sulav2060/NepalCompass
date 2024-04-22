import React, { useEffect, useState } from "react";
import { Button, Layout, Menu, Switch } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const { Header } = Layout;

const Navbar = ({ darkMode, toggleTheme }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [showMenu, setShowMenu] = useState(false);
  const [themeChangeClicked, setThemeChangeClicked] = useState(false);

  useEffect(() => {
    console.log("Theme updated", darkMode);
  }, [darkMode]);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      // Disable scrolling when menu is opened
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when menu is closed
      document.body.style.overflow = "";
    }
  };

  const handleMenuClick = () => {
    setShowMenu(false);
    document.body.style.overflow = ""; // Enable scrolling when menu is closed
  };

  const handleCrossClick = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setShowMenu(false);
    document.body.style.overflow = ""; // Enable scrolling when menu is closed
  };

  const handleDarkModeToggle = () => {
    toggleTheme(!darkMode);
    setThemeChangeClicked(true);
  };

  const handleThemeChangeComplete = () => {
    setThemeChangeClicked(false);
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        background: darkMode ? "#121212" : "#ffffff", // Updated dark mode background color
        color: darkMode ? "#ffffff" : "#000000", // Updated dark mode text color
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-black"
            } hover:text-blue-500`}
          >
            NepalCompass
          </button>
        </div>

        {isMobile ? (
          // Hamburger Menu for Mobile
          <div>
            <Button
              icon={showMenu ? <CloseOutlined /> : <MenuOutlined />}
              onClick={handleMenuToggle}
              style={{
                color: darkMode ? "#ffffff" : "#000000",
                border: "none",
                fontSize: "24px", // Increased size for better visibility
                background: showMenu ? "#121212" : "transparent", // Background color based on showMenu
              }}
            />
          </div>
        ) : (
          // Regular Menu for Desktop
          <div
            className={`flex justify-center space-x-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <a href="#" className={`hover:text-blue-500`}>
              Sulav
            </a>
            <a href="#" className={`hover:text-blue-500`}>
              Suraj
            </a>
            <a href="#" className={`hover:text-blue-500`}>
              GithubLink
            </a>
            <a href="#" className={`hover:text-blue-500`}>
              ToBeDetermined
            </a>
          </div>
        )}

        {/* Responsive Menu for Mobile */}
        {isMobile && showMenu && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div
              className="dark:bg-[#121212] bg-white w-full max-w-md"
              onClick={handleMenuClick}
              style={{
                border: `1px solid ${darkMode ? "#ffffff" : "#ccc"}`, // Border color based on darkMode
                padding: "16px",
                borderRadius: "4px",
              }}
            >
              <Button
                className="absolute top-0 right-0 m-4"
                onClick={handleCrossClick}
                icon={<CloseOutlined />}
                style={{
                  background: darkMode ? "#121212" : "#ffffff", // Fix for cross button background color
                  color: darkMode ? "#ffffff" : "#000000",
                  border: "none",
                }}
              />
              <Menu
                onClick={handleMenuClick}
                mode="inline"
                style={{ background: darkMode ? "#121212" : "#ffffff" }}
                theme={darkMode ? "dark" : "light"} // Set Menu theme based on darkMode
              >
                <Menu.Item key="1">
                  <a
                    href="#"
                    className={`${darkMode ? "text-white" : "text-black"}`}
                  >
                    Sulav
                  </a>
                </Menu.Item>
                <Menu.Item key="2">
                  <a
                    href="#"
                    className={`${darkMode ? "text-white" : "text-black"}`}
                  >
                    Suraj
                  </a>
                </Menu.Item>
                <Menu.Item key="3">
                  <a
                    href="#"
                    className={`${darkMode ? "text-white" : "text-black"}`}
                  >
                    GithubLink
                  </a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a
                    href="#"
                    className={`${darkMode ? "text-white" : "text-black"}`}
                  >
                    ToBeDetermined
                  </a>
                </Menu.Item>

                {/* Dark Mode Toggle */}
                <Menu.Item key="5">
                  <div className="flex items-center">
                    <span className="mr-2">Dark Mode</span>
                    <Switch
                      checked={darkMode}
                      onChange={handleDarkModeToggle}
                      checkedChildren={<MoonOutlined />}
                      unCheckedChildren={<SunOutlined />}
                    />
                  </div>
                </Menu.Item>
              </Menu>
            </div>
          </div>
        )}

        {/* Theme Toggle Button for Desktop */}
        {!isMobile && (
          <div>
            <Switch
              checked={darkMode}
              onChange={toggleTheme}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
            />
          </div>
        )}
      </div>
    </Header>
  );
};

export default Navbar;
