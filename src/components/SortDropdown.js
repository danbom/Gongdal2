import React from "react";
import { Select } from "antd";

function SortDropdown() {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Select defaultValue="All" style={{ width: 120 }} onChange={handleChange}>
        <Option value="all">All</Option>
        <Option value="contest">Contest</Option>
        <Option value="midterm">Midterm</Option>
      </Select>
    </>
  );
}

export default SortDropdown;
