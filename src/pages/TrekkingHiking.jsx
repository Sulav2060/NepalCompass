import React from "react";
import { Row, Col, Typography, Divider, Table } from "antd";
const { Title, Paragraph } = Typography;
import titletexts from "../data/titletexts.json";
import tabletexts from "../data/tabletexts.json";
import texts from "../data/texts.json";
const trekkingDataSource = tabletexts.Trekking.trekkingDataSource;
const trekkingColumns = tabletexts.Trekking.trekkingColumns;
const trekkingtexts = texts.Trekking;
const Trekking = () => {
  Trekking.navigationItems = titletexts.Trekking.navigationItems;

  return (
    <div>
      <div>
        <Row>
          <Col>
            <div className="overflow-hidden">
              <Title level={2}>{trekkingtexts.title}</Title>

              <Paragraph id="everest">
                <Title level={3}>{trekkingtexts.everest.title}</Title>
                <Paragraph>{trekkingtexts.everest.description}</Paragraph>
                <Table
                  dataSource={trekkingDataSource}
                  columns={trekkingColumns}
                  pagination={false}
                />
              </Paragraph>

              <Divider />

              <Paragraph id="annapurna">
                <Title level={3}>{trekkingtexts.annapurna.title}</Title>
                <Paragraph>
                 {trekkingtexts.annapurna.description}
                </Paragraph>
                <Table
                  dataSource={trekkingDataSource}
                  columns={trekkingColumns}
                  pagination={false}
                />
              </Paragraph>

              <Divider />

              <Paragraph id="langtang">
                <Title level={3}>{trekkingtexts.langtang.title}</Title>
                <Paragraph>
                 {trekkingtexts.langtang.description}
                </Paragraph>
                <Table
                  dataSource={trekkingDataSource}
                  columns={trekkingColumns}
                  pagination={false}
                />
              </Paragraph>

              <Divider />

              <Paragraph id="ghorepani">
                <Title level={3}>{trekkingtexts.ghorepani.title}</Title>
                <Paragraph>
                  {trekkingtexts.ghorepani.description}
                </Paragraph>
                <Table
                  dataSource={trekkingDataSource}
                  columns={trekkingColumns}
                  pagination={false}
                />
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

export default Trekking;
