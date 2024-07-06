import React, { useState, useEffect } from "react";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import { Layout } from "antd";
import PageContent from "../PageContent";
import useFetch from "../Hooks/useFetch.js";

const { Content } = Layout;

const PageTemplate = ({ navTitle: navItems, city, path }) => {
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
  const [sectionCity, setSectionCity] = useState(0); // Initialize sectionCity with default value
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city === "ktm") {
      setSectionCity(0);
    } else {
      setSectionCity(1);
    }
  }, [city]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    setError(null); // Reset error state whenever navItems or city changes
  }, [navItems, city]);

  const { data, loading } = useFetch(
    `http://localhost:1337/api/${navItems}s?populate=*`
  );

  useEffect(() => {
    if (data?.error) {
      setError(data.error);
    }
  }, [data]);

  const sections = data?.data?.[sectionCity]?.attributes?.[navItems] ?? [];
  console.log("sections", sections);

  return (
    <Layout>
      <Layout
        style={{ position: "sticky", top: "0vh", left: "0px", zIndex: 10 }}
      >
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      </Layout>
      <Layout className={`${darkMode ? "bg-[#121212]" : "bg-white"} `}>
        <LeftSidebar darkMode={darkMode} city={city} />
        <Content>
          {loading && <div>Loading...</div>}
          {error && (
            <div className="text-red-800 text-xl p-10">
              {error.status === 404
                ? `"${navItems}" is under maintainance. Sorry for the inconvenience.`
                : `Error: ${error.message}`}
            </div>
          )}
          {!loading && !error && sections.length === 0 && (
            <div className="text-red-800 text-xl p-10">{`Cannot find ${navItems}.`}</div>
          )}
          {!loading && !error && sections.length > 0 && (
            <PageContent
              pagekey={navItems}
              darkMode={darkMode}
              section={sections}
            />
          )}
        </Content>
        {!loading && !error && sections.length > 0 && (
          <RightSidebar
            navigationItems={sections.map((section, index) => ({
              id: index,
              title: section.SectionTitle,
            }))}
            darkMode={darkMode}
            city={city}
            page={path}
          />
        )}
      </Layout>
    </Layout>
  );
};

export default PageTemplate;
