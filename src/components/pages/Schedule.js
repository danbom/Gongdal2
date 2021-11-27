import React from "react";
import FilterModal from "../FilterModal";
import { Calendar, Badge } from "antd";
import { ScheduleTwoTone } from "@ant-design/icons";

function Schedule() {
  return (
    <>
      <div style={{ fontSize: "20px", paddingBottom: "30px" }}>
        <ScheduleTwoTone style={{ paddingRight: "10px" }} />
        Personalized important calendar
      </div>
      <FilterModal />
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </>
  );
}

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "error",
          content: "🚨 Contest1_Deadline",
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: "success",
          content: "✅ Contest1_\nAnnouncement",
        },
        { type: "warning", content: "Major1 test" },
      ];
      break;
    case 11:
      listData = [{ type: "warning", content: "Major2 test" }];
      break;
    case 14:
      listData = [
        {
          type: "error",
          content: "🚨 Contest2_Deadline",
        },
      ];
      break;
    case 15:
      listData = [{ type: "warning", content: "Major3 test" }];
      break;
    case 16:
      listData = [{ type: "warning", content: "Major4 test" }];
      break;
    case 19:
      listData = [
        {
          type: "success",
          content: "✅ Contest2_\nAnnouncement",
        },
      ];
      break;
    case 26:
      listData = [
        {
          type: "error",
          content: "🚨 Contest3_Deadline",
        },
      ];
      break;
    case 28:
      listData = [
        {
          type: "error",
          content: "🚨 Contest4_Deadline",
        },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

export default Schedule;
