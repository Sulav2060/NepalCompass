import React, { useState } from "react";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import texts from "../data/texts.json";
import { Layout } from "antd";
import { useEffect } from "react";
import PageContent from "../PageContent";

const { Content } = Layout;

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

// console.log("for rightsidebar", texts[navItems].sections);
  return (
    <Layout>
      <Layout
        style={{ position: "sticky", top: "0vh", left: "0px", zIndex: 10 }}
      >
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      </Layout>
      <Layout className={`${darkMode ? "bg-[#121212]" : "bg-white"} pt-12`}>
        <LeftSidebar darkMode={darkMode} />
        <Content className="pt-10">
          <PageContent pagekey={navItems} darkMode={darkMode} />
        </Content>
        <RightSidebar
          navigationItems={texts[navItems].sections}
          darkMode={darkMode}
        />
      </Layout>
    </Layout>
  );
};

export default PageTemplate;
