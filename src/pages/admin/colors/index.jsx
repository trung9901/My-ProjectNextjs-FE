import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tooltip } from "antd";
import Link from "next/link";
import React from "react";
import useColor from "../../../hooks/use-colors";
import AdminLayouts from "../../../components/layouts/AdminLayouts";
const ColorList = () => {
  const { data, error, deleteColor } = useColor();
  const columns = [
    {
      title: "Color",
      dataIndex: "color",
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => {
        return (
          <div className="flex flex-wrap gap-4">
            {image.map(
              (item) => item && <img src={item} alt="image" width={100} />
            )}
          </div>
        );
      },
    },
    {
      title: "Action",

      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => handlEdit(record._id)}>
            <Tooltip title="Sửa">
              <EditOutlined
                style={{
                  fontSize: "20px",
                  color: "blue",
                }}
              />
            </Tooltip>
          </button>

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
  const href = `/admin/colors/${null}`;
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
ColorList.Layout = AdminLayouts;
export default ColorList;
