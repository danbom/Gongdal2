import React, { useState } from "react";
import { Drawer, Button, Space } from "antd";
import SortDropdown from "./SortDropdown";

function ScheduleDrawer() {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        placement={placement}
        width={300}
        onClose={onClose}
        visible={visible}
      >
        <SortDropdown />
      </Drawer>
    </>
  );
}

export default ScheduleDrawer;
