import React from "react";
import { Row, Col, Typography, Divider, Table } from "antd";

const { Title, Paragraph } = Typography;

const Contents = ({ content }) => {
  if (!content) return null;

  return (
    <Row>
      <Col>
        <div className="h-[10vh]"></div>
        <div className="overflow-auto">
          {content.map((item) => (
            <div key={item.id}>
              <Title level={2}>{item.title}</Title>
              {item.sections.map((section) => (
                <div key={section.id}>
                  <Paragraph id={section.id}>
                    <Title level={3}>{section.title}</Title>
                    {section.paragraphs.map((paragraph, index) => (
                      <Paragraph key={index}>{paragraph}</Paragraph>
                    ))}
                    {section.table && (
                      <Table
                        dataSource={section.table.dataSource}
                        columns={section.table.columns}
                        pagination={false}
                      />
                    )}
                  </Paragraph>
                  <Divider />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Contents;
