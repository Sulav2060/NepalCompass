import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import titletexts from "../data/titletexts.json";
import texts from "../data/texts.json";
const { Title, Paragraph } = Typography;
const NatureWildlifetexts = texts.NatureWildlife;
const NatureWildlife = () => {
  NatureWildlife.navigationItems = titletexts.NatureWildlife.navigationItems;

  return (
    <div>
      <div>
        <Row>
          <Col>
            <div className="overflow-hidden">
              <Title level={2}>{NatureWildlifetexts.title}</Title>

              <Paragraph id="chitwan">
                <Title level={3}>{NatureWildlifetexts.chitwan.title}</Title>
                <Paragraph>
                  {NatureWildlifetexts.chitwan.description.map(
                    (description, index) => (
                      <Paragraph key={index}>{description}</Paragraph>
                    )
                  )}
                </Paragraph>
              </Paragraph>

              <Divider />

              <Paragraph id="bardia">
                <Title level={3}>{NatureWildlifetexts.bardia.title}</Title>
                <Paragraph>
                  {NatureWildlifetexts.bardia.description.map(
                    (description, index) => (
                      <Paragraph key={index}>{description}</Paragraph>
                    )
                  )}
                </Paragraph>
              </Paragraph>

              <Divider />

              <Paragraph id="uppermustang">
                <Title level={3}>
                  {NatureWildlifetexts.uppermustang.title}
                </Title>
                <Paragraph>
                  {NatureWildlifetexts.uppermustang.description.map(
                    (description, index) => (
                      <Paragraph key={index}>{description}</Paragraph>
                    )
                  )}
                </Paragraph>
              </Paragraph>

              <Divider />

              <Paragraph id="rara">
                <Title level={3}>{NatureWildlifetexts.rara.title}</Title>
                <Paragraph>
                 {NatureWildlifetexts.rara.description.map(
                    (description, index) => (
                      <Paragraph key={index}>{description}</Paragraph>
                    )
                  )}
                </Paragraph>
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
      {/* <div className="w-1/5">
          <RightSidebar navigationItems={navigationItems} />
        </div> */}
    </div>
  );
};

export default NatureWildlife;
