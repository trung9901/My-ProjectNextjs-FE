import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Skeleton, Space, Table, Tooltip } from "antd";
import Link from "next/link";
import React from "react";
import AdminLayouts from "../../../components/layouts/AdminLayouts";
import useSize from "../../../hooks/use-size";
import AlertMessage from "../../../ultils/Alert";
const SizeList = () => {
  const { data, error, deleteSize } = useSize();
  const { confirm, success, error: errorMessage } = AlertMessage();
  const handlDelete = (id) => {
    confirm(() => {
      try {
        deleteSize(id).then(() => {
          success("Delete Size success");
        });
      } catch (err) {
        errorMessage("Size deleted failed");
      }
    });
  };
  const columns = [
    {
      title: "SizeList",
      dataIndex: "size",
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Action",

      render: (_, record) => (
        <Space size="middle">
          {/* <button onClick={() => handlEdit(record._id)}>
            <Tooltip title="Sửa">
              <EditOutlined
                style={{
                  fontSize: "20px",
                  color: "blue",
                }}
              />
            </Tooltip>
          </button> */}

          <button onClick={() => handlDelete(record._id)}>
            <Tooltip title="Xoá">
              <DeleteOutlined
                style={{
                  fontSize: "20px",
                  color: "red",
                }}
              />
            </Tooltip>
          </button>
        </Space>
      ),
    },
  ];
  const href = `/admin/sizes/${null}`;
  if (error) return <div>error</div>;
  if (!data)
    return (
      <>
        <Skeleton />
      </>
    );
  return (
    <>
      <div className="mb-3 ">
        <Link href={href}>
          <Button type="primary" className="bg-gray-800">
            Add
          </Button>
        </Link>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
SizeList.Layout = AdminLayouts;
export default SizeList;
