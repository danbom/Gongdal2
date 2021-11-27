import React from "react";
import { Badge, List } from "antd";
import CardItem from "./CardItem";

function Cards({ classification }) {
  const popularContestData = [
    {
      title: "popularContest 1",
      organization: "organization 1",
      views: 1234,
      scrap: 123,
      dday: 12,
    },
    {
      title: "popularContest 2",
      organization: "organization 2",
      views: 2345,
      scrap: 234,
      dday: 23,
    },
    {
      title: "popularContest 3",
      organization: "organization 3",
      views: 3456,
      scrap: 345,
      dday: 34,
    },
    {
      title: "popularContest 4",
      organization: "organization 4",
      views: 4567,
      scrap: 456,
      dday: 45,
    },
    {
      title: "popularContest 5",
      organization: "organization 5",
      views: 5678,
      scrap: 567,
      dday: 56,
    },
    {
      title: "popularContest 6",
      organization: "organization 6",
      views: 6789,
      scrap: 678,
      dday: 67,
    },
    {
      title: "popularContest 7",
      organization: "organization 7",
      views: 7890,
      scrap: 789,
      dday: 78,
    },
    {
      title: "popularContest 8",
      organization: "organization 8",
      views: 8910,
      scrap: 891,
      dday: 89,
    },
    {
      title: "popularContest 1",
      organization: "organization 1",
      views: 1234,
      scrap: 123,
      dday: 12,
    },
    {
      title: "popularContest 2",
      organization: "organization 2",
      views: 2345,
      scrap: 234,
      dday: 23,
    },
    {
      title: "popularContest 3",
      organization: "organization 3",
      views: 3456,
      scrap: 345,
      dday: 34,
    },
    {
      title: "popularContest 4",
      organization: "organization 4",
      views: 4567,
      scrap: 456,
      dday: 45,
    },
    {
      title: "popularContest 5",
      organization: "organization 5",
      views: 5678,
      scrap: 567,
      dday: 56,
    },
    {
      title: "popularContest 6",
      organization: "organization 6",
      views: 6789,
      scrap: 678,
      dday: 67,
    },
    {
      title: "popularContest 7",
      organization: "organization 7",
      views: 7890,
      scrap: 789,
      dday: 78,
    },
    {
      title: "popularContest 8",
      organization: "organization 8",
      views: 8910,
      scrap: 891,
      dday: 89,
    },
  ];

  const recentContestData = [
    {
      title: "recentContest 1",
      organization: "organization 1",
      views: 1234,
      scrap: 123,
      dday: 12,
    },
    {
      title: "recentContest 2",
      organization: "organization 2",
      views: 2345,
      scrap: 234,
      dday: 23,
    },
    {
      title: "recentContest 3",
      organization: "organization 3",
      views: 3456,
      scrap: 345,
      dday: 34,
    },
    {
      title: "recentContest 4",
      organization: "organization 4",
      views: 4567,
      scrap: 456,
      dday: 45,
    },
    {
      title: "recentContest 5",
      organization: "organization 5",
      views: 5678,
      scrap: 567,
      dday: 56,
    },
    {
      title: "recentContest 6",
      organization: "organization 6",
      views: 6789,
      scrap: 678,
      dday: 67,
    },
    {
      title: "recentContest 7",
      organization: "organization 7",
      views: 7890,
      scrap: 789,
      dday: 78,
    },
    {
      title: "recentContest 8",
      organization: "organization 8",
      views: 8910,
      scrap: 891,
      dday: 89,
    },
    {
      title: "recentContest 1",
      organization: "organization 1",
      views: 1234,
      scrap: 123,
      dday: 12,
    },
    {
      title: "recentContest 2",
      organization: "organization 2",
      views: 2345,
      scrap: 234,
      dday: 23,
    },
    {
      title: "recentContest 3",
      organization: "organization 3",
      views: 3456,
      scrap: 345,
      dday: 34,
    },
    {
      title: "recentContest 4",
      organization: "organization 4",
      views: 4567,
      scrap: 456,
      dday: 45,
    },
    {
      title: "recentContest 5",
      organization: "organization 5",
      views: 5678,
      scrap: 567,
      dday: 56,
    },
    {
      title: "recentContest 6",
      organization: "organization 6",
      views: 6789,
      scrap: 678,
      dday: 67,
    },
    {
      title: "recentContest 7",
      organization: "organization 7",
      views: 7890,
      scrap: 789,
      dday: 78,
    },
    {
      title: "recentContest 8",
      organization: "organization 8",
      views: 8910,
      scrap: 891,
      dday: 89,
    },
  ];

  const data =
    classification === "popular" ? popularContestData : recentContestData;

  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            {item.dday === 12 || item.dday === 23 ? (
              <Badge.Ribbon text="Hot" color="orange">
                <CardItem
                  title={item.title}
                  organization={item.organization}
                  views={item.views}
                  scrap={item.scrap}
                  dday={item.dday}
                ></CardItem>
              </Badge.Ribbon>
            ) : (
              <CardItem
                title={item.title}
                organization={item.organization}
                views={item.views}
                scrap={item.scrap}
                dday={item.dday}
              ></CardItem>
            )}
          </List.Item>
        )}
      />
    </>
  );
}

export default Cards;
