import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import TitleSection from "./components/TitleSection";
import ContentSection from "./components/ContentSection";
import BodySection from "./components/BodySection";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className=" col-span-2">
          <TitleSection />
        </div>
        <div className=" col-span-8 scrollable-section">
          <BodySection />
        </div>
        <div className=" col-span-2">
          <ContentSection />
        </div>
      </div>
    </>
  );
}

export default App;

