import React, { useState } from "react";
import { Modal, Button, DatePicker } from "antd";
import SortDropdown from "./SortDropdown";
import { FilterTwoTone } from "@ant-design/icons";

function FilterModal() {
  const { RangePicker } = DatePicker;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button
        style={{
          fontSize: "15px",
          width: "max-content",
          background: "#FAFAFA",
        }}
        type="text"
        onClick={showModal}
      >
        <FilterTwoTone />
        Open Filter Modal
      </Button>
      <Modal
        title="Filter Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <span style={{ paddingRight: "30px" }}>
          <SortDropdown />
        </span>
        <RangePicker />
      </Modal>
    </>
  );
}

export default FilterModal;
