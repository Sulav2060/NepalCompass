import React from "react";
import { Anchor } from "antd";
const onChange = (link) => {
  console.log("Anchor:OnChange", link);
};

const ContentSection = () => {
  return (
    <div>
      <div className="text-gray-600 mt-5 mb-5">Page Contents</div>
      <Anchor
        affix={false}
        onChange={onChange}
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
    </div>
  );
};

export default ContentSection;
