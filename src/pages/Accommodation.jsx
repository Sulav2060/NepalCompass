///use this template to create new page///

import React from "react";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const Accommodation = () => {
  const navigationItems = [
    ///page ma vako title haru list garni
    //list all id(s) from the page
    //eg
    { id: "visa", title: "On Arrival Visa" },
    { id: "currency", title: "Currency Exchange" },
    { id: "sim", title: "SIM Card" },
    { id: "recommendation", title: "Our Recommendation" },
  ];

  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className="flex mt-20">
        <div className="w-1/6">
          <LeftSidebar />
        </div>
        <div className="w-3/5">Accommodation page content</div>
        <div className="w-1/6">
          <RightSidebar navigationItems={navigationItems} />
        </div>
      </div>
    </div>
  );
};
export default Accommodation;
