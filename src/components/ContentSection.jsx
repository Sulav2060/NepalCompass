import React from "react";
import { Anchor, Row, Col } from "antd";
import { Card } from "antd";
import { useEffect, useState, useRef } from "react";

const { Link } = Anchor;
const navigationItems = [
  {
    key: "1",
    title: "On Arrival Visa",
    text: "During your first arrival on Nepal, you have Visa on Arrival from most country which means you can come here and take visa. If you wish to take visa from your own home country, then it will cost you extra. For country like India visa isn’t required. And for SAARC countries first entry is free of cost within a year.  Our Recommendation: Fill the form online and come and pay here in Nepal which will cost you15 Days – 30 USD30 Days – 50 USD90 Days – 125 USD Note: Indian currency isn’t accepted at visa pay counter.",
    id: "on-arrival-visa",
  },
  {
    key: "2",
    title: "Currency Exchange2",
    text: "lorem ipsum  ",
    id: "currency-exchange2",
  },
  {
    key: "3",
    title: "Currency Exchange3",
    text: "Text 2",
    id: "currency-exchange3",
  },
  {
    key: "4",
    title: "Currency Exchange4",
    text: "Text 2",
    id: "currency-exchange4",
    ref: "ref2",
  },
  {
    key: "5",
    title: "Currency Exchange5",
    text: "Text 2",
    id: "currency-exchange5",
  },
  {
    key: "6",
    title: "Currency Exchange6",
    text: "Text 2",
    id: "currency-exchange6",
  },
  {
    key: "7",
    title: "Currency Exchange7",
    text: "Text 2",
    id: "currency-exchange7",
  },
  {
    key: "8",
    title: "Currency Exchange8",
    text: "Text 2",
    id: "currency-exchange8ref",
    ref: "ref1",
  },
  {
    key: "9",
    title: "SIM Card",
    text: "For sim card if you only plan to travel between cities like KTM, PKR then smart cell will cost you the least. If your plan is to hike and go to mountains then you can take either NCELL or NTC as both have large coverage. You can also directly use E-Sim booked from any of app from your home country, but it will be lot expensive compared to local sim. Requirements: Passport size photo (if you don’t have don’t worry, in airport they will set you all up for minimal charge) 100NRS for sim outside airport itself and additional data cost may vary according to provider (All the rates you see on airport are for data and doesn’t include sim.)",
    id: "sim",
  },
  {
    key: "10",
    title: "Travel to hotel",
    text: "For travelling from Airport to hotel you can book taxi from your hotel itself for smoothest experience or download app named “Pathau” for KTM and “In-Driver” for PKR. You should step outside airport for booking those taxies as the airport has parking charge which will increase its price by couple of 100 Nrs. Our Recommendation: Use app for easier and smoother experience as bargaining is not involved.",
    id: "travel-to-hotel",
  },
];
const ContentSection = () => {
  const [targetOffset, setTargetOffset] = useState();
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
      <Row>
        <Col span={16}>
          <div className="h-[10vh]"></div>
          <div className="overflow-auto">
            {navigationItems.map((item) => (
              <Card
                key={item.key}
                title={item.title}
                id={item.id}
                style={{ height: "100%" }}
              >
                {item.text}
              </Card>
            ))}
          </div>
        </Col>

        <Col
          span={8}
          className="overflow-auto"
          style={{ position: "fixed", right: "3rem", top: "10vh", bottom: 0 }}
        >
          <Anchor id="anchor" targetOffset={targetOffset}>
            {navigationItems.map((item) => (
              <Link key={item.key} href={`#${item.id}`} title={item.title} />
            ))}
          </Anchor>
        </Col>
      </Row>
    </div>
  );
};

export default ContentSection;
