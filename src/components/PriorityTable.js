import React from "react";
import { Table, Popconfirm, message } from "antd";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import {
  MenuOutlined,
  QuestionCircleOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { arrayMoveImmutable } from "array-move";

function PriorityTable() {
  const success = () => {
    message.success("This is a success message");
  };

  const DragHandle = sortableHandle(() => (
    <MenuOutlined style={{ cursor: "grab", color: "#999" }} />
  ));

  const columns = [
    {
      title: "",
      dataIndex: "index",
      width: 30,
      className: "drag-visible",
      render: () => <DragHandle />,
    },
    {
      title: "Contest",
      dataIndex: "contest",
      className: "drag-visible",
    },
    {
      title: "Period",
      dataIndex: "period",
    },
    {
      title: "Need Time",
      dataIndex: "needtime",
    },
    {
      title: "Action",
      key: "action",
      width: 70,
      render: () => (
        <Popconfirm
          onConfirm={success}
          title="Are you sure？"
          icon={<QuestionCircleOutlined style={{ color: "red" }} />}
        >
          <a href="#">Delete</a>
        </Popconfirm>
      ),
    },
  ];

  const data = [
    {
      contest: "contest1",
      period: "05/12 - 06/06",
      needtime: "4H - 6H",
      index: 0,
    },
    {
      contest: "contest2",
      period: "05/12 - 06/06",
      needtime: "4H - 6H",
      index: 1,
    },
    {
      contest: "contest3",
      period: "05/12 - 06/06",
      needtime: "4H - 6H",
      index: 2,
    },
    {
      contest: "contest4",
      period: "05/12 - 06/06",
      needtime: "4H - 6H",
      index: 3,
    },
    {
      contest: "contest5",
      period: "05/12 - 06/06",
      needtime: "4H - 6H",
      index: 4,
    },
    {
      contest: "contest6",
      period: "05/12 - 06/06",
      needtime: "4H - 6H",
      index: 5,
    },
    {
      contest: "contest7",
      period: "05/12 - 06/06",
      needtime: "4H - 6H",
      index: 6,
    },
  ];

  const SortableItem = sortableElement((props) => <tr {...props} />);
  const SortableContainer = sortableContainer((props) => <tbody {...props} />);

  class SortableTable extends React.Component {
    state = {
      dataSource: data,
    };

    onSortEnd = ({ oldIndex, newIndex }) => {
      const { dataSource } = this.state;
      if (oldIndex !== newIndex) {
        const newData = arrayMoveImmutable(
          [].concat(dataSource),
          oldIndex,
          newIndex
        ).filter((el) => !!el);
        console.log("Sorted items: ", newData);
        this.setState({ dataSource: newData });
      }
    };

    DraggableContainer = (props) => (
      <SortableContainer
        useDragHandle
        disableAutoscroll
        helperClass="row-dragging"
        onSortEnd={this.onSortEnd}
        {...props}
      />
    );

    DraggableBodyRow = ({ className, style, ...restProps }) => {
      const { dataSource } = this.state;
      // function findIndex base on Table rowKey props and should always be a right array index
      const index = dataSource.findIndex(
        (x) => x.index === restProps["data-row-key"]
      );
      return <SortableItem index={index} {...restProps} />;
    };

    render() {
      const { dataSource } = this.state;

      return (
        <Table
          pagination={false}
          dataSource={dataSource}
          columns={columns}
          rowKey="index"
          components={{
            body: {
              wrapper: this.DraggableContainer,
              row: this.DraggableBodyRow,
            },
          }}
        />
      );
    }
  }
  return (
    <>
      <div style={{ fontSize: "20px", paddingBottom: "30px" }}>
        <CheckCircleTwoTone style={{ paddingRight: "10px" }} />
        List of priorities for the contest
      </div>
      <SortableTable />
    </>
  );
}

export default PriorityTable;
