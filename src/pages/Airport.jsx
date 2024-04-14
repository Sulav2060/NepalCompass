import React from "react";
import { Row, Col, Anchor, Typography, Divider, Table } from "antd";

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
    { id: "recommendation", title: "Our Recommendation" },
  ];

  return (
    <div className="h-[90vh] relative">
      <Row>
        <Col span={16}>
          <div className="h-[10vh]"></div>
          <div className="overflow-auto">
            <Title level={2}>Airport</Title>

            <Paragraph id="visa">
              <Title level={3}>On Arrival Visa</Title>
              <Paragraph>
                During your first arrival in Nepal, you have Visa on Arrival
                from most countries, meaning you can come here and obtain a
                visa. If you wish to obtain a visa from your own home country,
                it will cost you extra. For countries like India, a visa isn’t
                required. And for SAARC countries, the first entry is free of
                cost within a year.
              </Paragraph>
              <Paragraph>
                <strong>Our Recommendation:</strong> Fill the form online and
                come and pay here in Nepal which will cost you:
              </Paragraph>
              <Table
                dataSource={visaDataSource}
                columns={visaColumns}
                pagination={false}
              />
              <Paragraph>
                <strong>Note:</strong> Indian currency isn’t accepted at the
                visa pay counter.
              </Paragraph>
            </Paragraph>

            <Divider />

            <Paragraph id="currency">
              <Title level={3}>Currency Exchange</Title>
              <Paragraph>
                For currency exchange, you can find it within the airport or for
                better exchange rates, you can go to any ATM on the streets of
                the capital, as it consists of a high density of ATMs throughout
                the places.
              </Paragraph>
            </Paragraph>

            <Divider />

            <Paragraph id="sim">
              <Title level={3}>SIM Card</Title>
              <Paragraph>
                For a SIM card, if you only plan to travel between cities like
                KTM and PKR, then Smart Cell will cost you the least. If your
                plan is to hike and go to mountains, then you can take either
                NCELL or NTC as both have large coverage. You can also directly
                use an eSIM booked from any app from your home country, but it
                will be a lot more expensive compared to a local SIM.
              </Paragraph>
              <Paragraph>
                <strong>Requirements:</strong>
                <br />
                - Passport size photo (if you don’t have, don’t worry, the
                airport will set you up for a minimal charge)
                <br />- 100 NRS for a SIM outside the airport itself, and
                additional data costs may vary according to the provider. (All
                the rates you see at the airport are for data and don’t include
                the SIM.)
              </Paragraph>
            </Paragraph>

            <Divider />

            <Paragraph id="recommendation">
              <Title level={3}>Our Recommendation</Title>
              <div className="border border-gray-300 rounded-md p-4 bg-gray-100">
                <Title level={4} style={{ marginBottom: "8px" }}>
                  NCELL SIM Card
                </Title>
                <Paragraph style={{ marginBottom: 0 }}>
                  For faster data compared to NTC.
                </Paragraph>
              </div>
            </Paragraph>
          </div>
        </Col>

        <Col
          span={8}
          className="overflow-auto"
          style={{ position: "fixed", right: "3rem", top: "10vh", bottom: 0 }}
        >
          <Anchor targetOffset={20}>
            {navigationItems.map((item) => (
              <Link key={item.id} href={`#${item.id}`} title={item.title} />
            ))}
          </Anchor>
        </Col>
      </Row>
    </div>
  );
};

export default Airport;
