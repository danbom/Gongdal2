import React from "react";
import { Card } from "antd";
import { EyeTwoTone, HeartTwoTone, CalendarTwoTone } from "@ant-design/icons";

function CardItem({ title, organization, views, scrap, dday }) {
  const { Meta } = Card;
  return (
    <>
      <Card
        style={{ width: 300, cursor: "pointer" }}
        cover={
          <div
            style={{
              width: "300px",
              height: "182px",
              background: "#0000000f",
            }}
          />
        }
        actions={[
          <>
            <EyeTwoTone />
            <span>{views}</span>
          </>,
          <>
            <HeartTwoTone twoToneColor="#eb2f96" />
            <span>{scrap}</span>
          </>,

          <>
            <CalendarTwoTone />
            <span>D-{dday}</span>
          </>,
          //   <SettingOutlined key="setting" />,
          //   <EditOutlined key="edit" />,
          //   <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta title={title} description={organization} />
      </Card>
    </>
  );
}

export default CardItem;
