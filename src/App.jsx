import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TitleSection from "./components/TitleSection";
import ContentSection from "./components/ContentSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-2/12 overflow-hidden">
          <TitleSection />
        </div>
        <div className="w-10/12">
          <ContentSection />
        </div>
      </div>
    </div>
  );
}

export default App;
