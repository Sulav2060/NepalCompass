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
  city,
  path,
}) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
console.log("city in pagetemplate", city);
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

  console.log("for rightsidebar", texts[navItems].sections);
  return (
    <Layout>
      <Layout
        style={{ position: "sticky", top: "0vh", left: "0px", zIndex: 10 }}
      >
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      </Layout>
      <Layout className={`${darkMode ? "bg-[#121212]" : "bg-white"} `}>
        <LeftSidebar darkMode={darkMode} city={city} />
        <Content >
          <PageContent pagekey={navItems} darkMode={darkMode} />
        </Content>
        <RightSidebar
          navigationItems={texts[navItems].sections}
          darkMode={darkMode}
          city={city}
          page={path}
        />
      </Layout>
    </Layout>
  );
};

export default PageTemplate;
