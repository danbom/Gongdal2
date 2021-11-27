import React from "react";
import { Tabs } from "antd";
import Cards from "./Cards";

function ClassificationTabs() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  const Demo = () => (
    <Tabs
      tabBarStyle={{
        margin: "0 0 60px",
      }}
      size="large"
      centered={true}
      defaultActiveKey="1"
      onChange={callback}
    >
      <TabPane tab="Popular" key="1">
        <Cards classification="popular" />
      </TabPane>
      <TabPane tab="Recent" key="2">
        <Cards classification="recent" />
      </TabPane>
    </Tabs>
  );
  return (
    <>
      <Demo />
    </>
  );
}

export default ClassificationTabs;
