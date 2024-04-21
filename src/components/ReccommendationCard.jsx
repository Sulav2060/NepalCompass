import { StarOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { Typography } from "antd";
const { Paragraph, Title } = Typography;

const RecommendationCard = ({ recommendation, reason }) => {
  return (
    <div className="border border-blue-300 rounded-md p-4 bg-gray-50">
      <Paragraph className="mb-0">
        <div className="flex items-center mb-2">
          <CheckCircleTwoTone
            twoToneColor="#52c41a"
            style={{ fontSize: "24px", marginRight: "8px" }}
          />
          <Title level={4} style={{ marginBottom: 0 }}>
            Our Recommendation:{" "}
            <span style={{ fontWeight: 500, size: "16px" }}>
              {recommendation}
            </span>
          </Title>
        </div>
        <div className=" pl-8">
          <Paragraph>{reason}</Paragraph>
        </div>
      </Paragraph>
    </div>
  );
};

export default RecommendationCard;
