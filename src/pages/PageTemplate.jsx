//all pages called from this page
//apply all layout css here
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const PageTemplate = ({
  contentComponent: ContentComponent,
  navigationItems,
}) => {
  // used better approach
  // const navigationItems = [
  //   ///page ma vako title haru list garni
  //   //list all id(s) from the page
  //   //eg
  //   { id: "visa", title: "On Arrival Visa" },
  //   { id: "currency", title: "Currency Exchange" },
  //   { id: "sim", title: "SIM Card" },
  //   { id: "recommendation", title: "Our Recommendation" },
  // ];
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`grid grid-rows-[auto,1fr] grid-cols-[1fr,3fr,1fr] h-screen ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="row-start-1 col-span-3">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      </div>
      <div
        className="row-start-2 col-span-1 mt-20 overflow-auto fixed"
        style={{
          maxHeight: "calc(100vh - 64px)",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0, 0, 0, 0.2) transparent",
        }}
      >
        <LeftSidebar />
      </div>
      <div className="row-start-2 col-start-2 col-span-2 mt-20">
        {/* <Routes>
          <Route render={() => <ContentComponent />} />
        </Routes> */}
        {ContentComponent}
      </div>
      <div
        className="row-start-2 col-span-1 mt-20 fixed"
        style={{
          maxHeight: "calc(100vh - 64px)",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0, 0, 0, 0.2) transparent",
        }}
      >
        <RightSidebar navigationItems={navigationItems} />
      </div>
    </div>
  );
};
export default PageTemplate;
