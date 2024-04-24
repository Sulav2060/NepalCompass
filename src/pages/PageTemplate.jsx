import React, { useState } from "react";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import titletexts from "../data/titletexts.json";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { useEffect } from "react";

const PageTemplate = ({
  contentComponent: ContentComponent,
  navTitle: navItems,
}) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  function getInitialDarkModePreference() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }
  const [darkMode, setDarkMode] = useState(getInitialDarkModePreference());
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Layout>
      <Layout
        style={{ position: "sticky", top: "0vh", left: "0px", zIndex: 10 }}
      >
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      </Layout>

      <Layout className="dark:bg-[#121212] bg-white">
        <LeftSidebar darkMode={darkMode} />
        <div className="pt-10">{ContentComponent}</div>
        <RightSidebar
          navigationItems={titletexts[navItems]?.navigationItems}
          darkMode={darkMode}
        />
      </Layout>
    </Layout>
  );
};

export default PageTemplate;
