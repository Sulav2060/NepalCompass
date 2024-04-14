import React, { useContext } from "react";
import { Anchor, Row, Col } from "antd";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { NavigationContext } from "../data/Contents";
import Airport from "../pages/Airport";

const { Link } = Anchor;

const ContentSection = () => {
  const [targetOffset, setTargetOffset] = useState();
  const navigationItems = useContext(NavigationContext);
  useEffect(() => {
    const handleResize = () => {
      setTargetOffset(document.getElementById("anchor")?.offsetTop);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-[90vh] relative">
      <Airport />
    </div>
  );
};

export default ContentSection;
