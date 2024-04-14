import React from "react";
import { Anchor } from "antd";

const { Link } = Anchor;

const RightSidebar = ({ navigationItems }) => {
  if (!navigationItems) {
    console.error("No navigation items provided for RightSidebar");
    return null;
  }

  return (
    <div className="fixed right-0 overflow-y-auto">
      <Anchor affix={true}>
        {/* <Link href="#top" title="Top" /> */}
        {navigationItems.map((item) => (
          <Link key={item.id} href={`#${item.id}`} title={item.title} />
        ))}
      </Anchor>
    </div>
  );
};

export default RightSidebar;
