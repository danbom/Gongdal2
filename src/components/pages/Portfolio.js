import React, { useState } from "react";
import { Typography, Select, Table, Tag, Space } from "antd";
import { BookTwoTone } from "@ant-design/icons";

function Portfolio() {
  const { Paragraph } = Typography;

  const columns = [
    {
      title: "Contest",
      dataIndex: "contest",
      key: "contest",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Organization",
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Members",
      key: "members",
      dataIndex: "members",
      render: (members) => (
        <>
          {members &&
            members.map((member) => {
              let color = "default";
              if (member === "Eunyoung") {
                color = "blue";
              }
              return (
                <Tag color={color} key={member}>
                  {member.toUpperCase()}
                </Tag>
              );
            })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      contest: "contest1",
      organization: "organization1",
      date: "2021.05.12 - 2021.06.06",
      members: ["Eunyoung", "Hyunjin", "Sunwoo", "Ohjoo"],
    },
    {
      contest: "contest2",
      organization: "organization2",
      date: "2021.05.12 - 2021.06.06",
      members: ["Hyunjin", "Sunwoo", "Eunyoung", "Ohjoo"],
    },
    {
      contest: "contest3",
      organization: "organization3",
      date: "2021.05.12 - 2021.06.06",
      members: ["Hyunjin", "Eunyoung", "Sunwoo", "Ohjoo"],
    },
    {
      contest: "contest4",
      organization: "organization4",
      date: "2021.05.12 - 2021.06.06",
      members: ["Eunyoung", "Hyunjin", "Sunwoo", "Ohjoo"],
    },
    {
      contest: "contest5",
      organization: "organization5",
      date: "2021.05.12 - 2021.06.06",
      members: ["Eunyoung", "Hyunjin", "Sunwoo", "Ohjoo"],
    },
    {
      contest: "contest6",
      organization: "organization6",
      date: "2021.05.12 - 2021.06.06",
      members: ["Eunyoung", "Hyunjin", "Sunwoo", "Ohjoo"],
    },
    {
      contest: "contest7",
      organization: "organization7",
      date: "2021.05.12 - 2021.06.06",
      members: ["Eunyoung", "Hyunjin", "Sunwoo", "Ohjoo"],
    },
  ];

  const Demo = () => {
    const [editableStr, setEditableStr] = useState(
      "Hi ! Welcome to my Gong. Web Developer - Ewha University. Enter a description of yourself here. It is helpful to write down your skills and career."
    );
    const { Option } = Select;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    return (
      <>
        <div style={{ fontSize: "20px", paddingBottom: "30px" }}>
          <BookTwoTone style={{ paddingRight: "10px" }} />
          Managing my portfolio
        </div>
        <Paragraph
          style={{ paddingBottom: "30px" }}
          editable={{ onChange: setEditableStr }}
        >
          {editableStr}
        </Paragraph>
        <Select
          defaultValue="Recently"
          style={{ width: 120, marginBottom: "30px" }}
          onChange={handleChange}
        >
          <Option value="recently">Recently</Option>
          <Option value="highest">Highest</Option>
        </Select>
      </>
    );
  };
  return (
    <>
      <Demo />
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default Portfolio;
