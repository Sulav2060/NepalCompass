import React from "react";
import { Row, Col, Anchor, Typography, Divider, Table } from "antd";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import { StarOutlined } from "@ant-design/icons";
<<<<<<< HEAD
=======
import titletexts from "../data/titletexts.json";
import tabletexts from "../data/tabletexts.json";
import texts from "../data/texts.json";
import RecommendationCard from "../components/RecommendationCard";

const { Link } = Anchor;
const { Title, Paragraph } = Typography;

const visaDataSource = [
  { key: "1", duration: "15 Days", cost: "30 USD" },
  { key: "2", duration: "30 Days", cost: "50 USD" },
  { key: "3", duration: "90 Days", cost: "125 USD" },
];

const visaColumns = [
  { title: "Duration", dataIndex: "duration", key: "duration" },
  { title: "Cost", dataIndex: "cost", key: "cost" },
];

const Airport = () => {
  const navigationItems = [
    { id: "visa", title: "On Arrival Visa" },

    { id: "currency", title: "Currency Exchange" },
    { id: "sim", title: "SIM Card" },
    { id: "transport", title: "Transport" },
  ];

  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className="flex mt-20">
        <div className="w-1/6 ">
          <LeftSidebar />
        </div>

        <div className="w-3/5 ">
          <Row>
            <Col>
              <div className="overflow-hidden">
                <Title level={2}>Airport</Title>

                <Paragraph id="visa">
                  <Title level={3}>On Arrival Visa</Title>
                  <Paragraph>
                    <ul>
                      <li>
                        Visa-on-arrival facility available for most
                        nationalities.
                      </li>
                      <li>Visa fees:</li>
                    </ul>
                    <Table
                      dataSource={visaDataSource}
                      columns={visaColumns}
                      pagination={false}
                    />
                  </Paragraph>
                  <Paragraph>
                    <strong>Our Recommendation:</strong> Fill the form online
                    and come and pay here in Nepal which will cost you:
                  </Paragraph>

                  <Paragraph>
                    <strong>Note:</strong> Indian currency isn’t accepted at the
                    visa pay counter.
                  </Paragraph>
                </Paragraph>

                <Divider />

                <Paragraph id="currency">
                  <Title level={3}>Currency Exchange</Title>
                  <ul>
                    <li>Currency exchange available at airport.</li>
                    <li>Better rates at ATMs in capital.</li>
                  </ul>
                </Paragraph>

                <Divider />

                <Paragraph id="sim">
                  <Title level={3}>SIM Card</Title>
                  <ul>
                    <li>Local SIM card providers: NCell, NTC, Smart Cell.</li>
                    <li>NCell and NTC recommended for better coverage.</li>
                    <li>Smart Cell ideal for urban areas.</li>
                  </ul>

                  <Paragraph>
                    <Paragraph>
                      <strong>Requirements:</strong>
                      Passport size photo (if you don’t have, don’t worry, the
                      airport will set you up for a minimal charge)
                      <br />
                    </Paragraph>
                    <Paragraph>
                      <strong>Note:</strong> 100 NRS for a SIM outside the
                      airport itself, and additional data costs may vary
                      according to the provider. (All the rates you see at the
                      airport are for data and don’t include the SIM.)
                    </Paragraph>
                  </Paragraph>
                </Paragraph>

                <div className="border border-blue-300 rounded-md p-4 bg-gray-50">
                  <Paragraph className="mb-0">
                    <div className="flex items-center mb-2">
                      <StarOutlined
                        style={{
                          fontSize: "24px",
                          color: "#FFD700",
                          marginRight: "8px",
                        }}
                      />
                      <Title level={3} style={{ marginBottom: 0 }}>
                        Our Recommendation:{" "}
                        <span style={{ fontWeight: "normal" }}>NCELL</span>
                      </Title>
                    </div>
                    <div>
                      <Paragraph>
                        Faster data compared to NTC. Ideal for travelers needing
                        reliable internet connectivity throughout their journey.
                      </Paragraph>
                    </div>
                  </Paragraph>
                </div>
                <Divider />
                <Paragraph id="transport">
                  <Title level={3}>Transport</Title>
                  <Paragraph>
                    <ul>
                      <li>Use "Pathau" in KTM and "In-Drive" in PKR</li>
                      <li>
                        If wanna use local taxi, get outside Airport for better
                        price as there is high parking fee in Airport
                      </li>
                    </ul>
                    <Paragraph>
                      <strong>Our Recommendation:</strong> Use app for easier
                      and smoother experience as bargaining is not involved.
                    </Paragraph>
                  </Paragraph>
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
        <div className="w-1/5">
          <RightSidebar navigationItems={navigationItems} />
        </div>
      </div>
    </div>
  );
};

export default Airport;
