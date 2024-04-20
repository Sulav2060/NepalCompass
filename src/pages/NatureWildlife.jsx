import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const { Title, Paragraph } = Typography;

const NatureWildlife = () => {
  const navigationItems = [
    { id: "chitwan", title: "Chitwan National Park" },
    { id: "bardia", title: "Bardia National Park" },
    { id: "uppermustang", title: "Upper Mustang" },
    { id: "rara", title: "Rara Lake" },
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
                <Title level={2}>Nature and Wildlife in Nepal</Title>

                <Paragraph id="chitwan">
                  <Title level={3}>Chitwan National Park</Title>
                  <Paragraph>
                    Chitwan National Park, a UNESCO World Heritage Site, is a
                    premier destination for wildlife viewing in Nepal. This lush
                    subtropical park is home to endangered species like the
                    one-horned rhinoceros, Bengal tiger, sloth bear, and
                    numerous species of birds and reptiles.
                  </Paragraph>
                  <Paragraph>
                    Visitors can embark on thrilling jungle safaris, canoe
                    rides, and nature walks to spot these magnificent creatures
                    in their natural habitats.
                  </Paragraph>
                </Paragraph>

                <Divider />

                <Paragraph id="bardia">
                  <Title level={3}>Bardia National Park</Title>
                  <Paragraph>
                    Bardia National Park, located in western Nepal, is another
                    haven for wildlife enthusiasts. This lesser-known park
                    boasts rich biodiversity, including tigers, elephants,
                    gharials (fish-eating crocodiles), and over 500 species of
                    birds.
                  </Paragraph>
                  <Paragraph>
                    Guided jungle walks, elephant safaris, and jeep tours offer
                    unique opportunities to explore this pristine wilderness.
                  </Paragraph>
                </Paragraph>

                <Divider />

                <Paragraph id="uppermustang">
                  <Title level={3}>Upper Mustang</Title>
                  <Paragraph>
                    For those seeking a taste of the ancient Himalayan kingdom,
                    Upper Mustang is a must-visit destination. This remote
                    region, once a restricted area, is known for its arid
                    landscapes, ancient monasteries, and unique blend of Tibetan
                    and Nepali cultures.
                  </Paragraph>
                  <Paragraph>
                    Visitors can embark on guided treks, experiencing the
                    hospitality of the Mustang people and witnessing their
                    traditional way of life. Permits are required to visit Upper
                    Mustang, and the cost and process may vary.
                  </Paragraph>
                </Paragraph>

                <Divider />

                <Paragraph id="rara">
                  <Title level={3}>Rara Lake</Title>
                  <Paragraph>
                    Rara Lake, nestled in the far northwestern corner of Nepal,
                    is a natural wonder like no other. This pristine freshwater
                    lake, surrounded by towering peaks and alpine meadows, is a
                    trekker's paradise and a serene escape from the bustling
                    cities.
                  </Paragraph>
                  <Paragraph>
                    Visitors can camp by the lake, hike through the surrounding
                    trails, and immerse themselves in the tranquility of this
                    remote and unspoiled region.
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

export default NatureWildlife;
