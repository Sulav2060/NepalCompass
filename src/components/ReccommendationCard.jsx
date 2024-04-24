import { StarOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { Typography } from "antd";
const { Paragraph, Title } = Typography;

const RecommendationCard = ({ recommendation, reason }) => {
  return (
    <div className="border dark:border-blue-700 rounded-md p-4 dark:bg-gray-700 bg-blue-50">
      <Paragraph className="mb-0 dark:text-white text-gray-800">
        <div className="flex items-center mb-2">
          <CheckCircleTwoTone
            twoToneColor="#52c41a"
            style={{ fontSize: "24px", marginRight: "8px" }}
            className="dark:text-green-400 text-green-500"
          />
          <Title
            level={4}
            style={{ marginBottom: 0 }}
            className="dark:text-gray-200 text-gray-700"
          >
            Our Recommendation:{" "}
            <span style={{ fontWeight: 500, fontSize: "16px" }}>
              {recommendation}
            </span>
          </Title>
        </div>
        <div className="pl-8 ">
          <Paragraph className="dark:text-gray-300 text-gray-700">
            {reason}
          </Paragraph>
        </div>
      </Paragraph>
    </div>
  );
};

export default RecommendationCard;
