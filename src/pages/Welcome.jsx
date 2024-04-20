import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const { Title, Paragraph } = Typography;

const WelcomePage = () => {
  const navigationItems = [
    { id: "language", title: "Language" },
    { id: "currency", title: "Currency" },
    { id: "time_zone", title: "Time Zone" },
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
                <Title level={2}>Welcome to Nepal</Title>

                <Paragraph>
                  Nepal, a landlocked Himalayan nation, is a captivating blend
                  of ancient cultures, breathtaking landscapes, and warm
                  hospitality. Nestled between India and China, this remarkable
                  country offers a unique experience for every traveler. From
                  the towering peaks of the mighty Himalayas to the lush green
                  valleys and UNESCO World Heritage sites, Nepal is a feast for
                  the senses.
                </Paragraph>

                <Divider />

                <Paragraph id="language">
                  <strong>Language:</strong> The official language of Nepal is
                  Nepali, but English is widely spoken, especially in tourist
                  areas.
                </Paragraph>

                <Paragraph id="currency">
                  <strong>Currency:</strong> The currency of Nepal is the
                  Nepalese Rupee (NPR). Major credit cards are accepted in
                  cities and tourist areas, but it's advisable to carry cash for
                  smaller establishments and remote areas.
                </Paragraph>

                <Paragraph id="time_zone">
                  <strong>Time Zone:</strong> Nepal Standard Time (NST), which
                  is UTC+5:45, is observed throughout the year.
                </Paragraph>

                <Divider />

                <Paragraph>
                  The rich cultural tapestry of Nepal is woven with diverse
                  ethnic groups, each with their own vibrant traditions,
                  festivals, and artistic expressions. Visitors can immerse
                  themselves in the fascinating blend of Hindu and Buddhist
                  influences, witness colorful celebrations, and explore ancient
                  monuments that stand as testaments to the country's
                  illustrious history.
                </Paragraph>

                <Divider />

                <Paragraph>
                  Despite its compact size, Nepal boasts an incredible diversity
                  of flora and fauna, making it a paradise for nature lovers and
                  adventure seekers alike. Whether you're trekking through the
                  iconic Annapurna Circuit, rafting down the raging Bhote Koshi
                  River, or seeking out the elusive Bengal tiger in Chitwan
                  National Park, Nepal promises an unforgettable experience at
                  every turn.
                </Paragraph>

                <Divider />

                <Paragraph>
                  Above all, it is the warmth and hospitality of the Nepali
                  people that truly sets this destination apart. With their
                  welcoming smiles and a deep respect for their cultural
                  heritage, the locals will make you feel at home in this
                  extraordinary land of contrasts and wonders.
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

export default WelcomePage;
