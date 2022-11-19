import React, { useState } from "react";
import AdminLayouts from "../../../components/layouts/AdminLayouts";
import { Button, Space, Table, Tooltip } from "antd";
import { Skeleton } from "antd";
import useCategories from "../../../hooks/use-categories";
import { useRouter } from "next/router";
import Form from "./[id]";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AlertMessage from "../../../ultils/Alert";
import Link from "next/link";
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const CategoryList = () => {
  const [openForm, setOpenForm] = React.useState(false);
  const router = useRouter();

  const { success, confirm, error: errorMessage } = AlertMessage();
  const handlDelete = (id) => {
    confirm(() => {
      try {
        deleteCategory(id).then(() => {
          success("Delete category success");
        });
      } catch (err) {
        errorMessage("Categories deleted failed");
      }
    });
  };
  const handlEdit = (id) => {
    router.push(`/admin/categories/${id}`);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Image",
      dataIndex: "image",

      // sorter: {
      //   compare: (a, b) => a.chinese - b.chinese,
      //   multiple: 3,
      // },
      render: (image) => <img src={image} alt="image" width="100" />,
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
  const href = `/admin/categories/${null}`;
  const { data, error, deleteCategory } = useCategories();
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
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </>
  );
};

CategoryList.Layout = AdminLayouts;
export default CategoryList;
