import React from "react";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const PageTemplate = () => {
  const navigationItems = [
    { id: "visa", title: "On Arrival Visa" },
    { id: "currency", title: "Currency Exchange" },
    { id: "sim", title: "SIM Card" },
    { id: "recommendation", title: "Our Recommendation" },
    ///page ma vako title haru list garni
  ];

  return (
    <div>
      <Navbar />
      <div className="flex mt-20">
        <div className="w-1/5 fixed left-0 h-full">
          <LeftSidebar />
        </div>
        <div className="mx-20 w-3/5">content</div>
        <div className="w-1/5 fixed right-0 h-full">
          <RightSidebar navigationItems={navigationItems} />
        </div>
      </div>
    </div>
  );
  
};
export default PageTemplate;
