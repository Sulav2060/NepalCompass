  import React from "react";
  import { Anchor, Row, Col } from "antd";

  const { Link } = Anchor;

  const ContentSection = () => (
    <Row>
      <Col>
        <div
          id="1"
          style={{
            height: "100vh",
          }}
        />
        <div
          id="2"
          style={{
            height: "100vh",
          }}
        />
        <div
          id="3"
          style={{
            height: "100vh",
          }}
        />
      </Col>
      <Col>
        <Anchor
          items={[
            {
              key: "1",
              href: "#on-arrival-visa",
              title: "On Arrival Visa",
            },
            {
              key: "2",
              href: "#currency-exchange",
              title: "Currency Exchange",
            },
            {
              key: "3",
              href: "#sim",
              title: "SIM Card",
              children: [
                {
                  key: "4",
                  href: "#sim-ntc",
                  title: "NTC",
                },
                {
                  key: "5",
                  href: "#sim-ncell",
                  title: "Ncell",
                },
              ],
            },
            {
              key: "4",
              href: "#travel-to-hotel",
              title: "Travel to Hotel",
            },
          ]}
        />
      </Col>
    </Row>
  );

  export default ContentSection;
