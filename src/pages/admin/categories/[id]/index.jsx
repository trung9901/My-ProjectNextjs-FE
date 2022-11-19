import { Button, Form, Input, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { getBase64, beforeUpload } from "../../../../ultils/ImageSevices";
import AlertMessage from "../../../../ultils/Alert";
import useSWR from "swr";
import AdminLayouts from "../../../../components/layouts/AdminLayouts";
import useCategories from "../../../../hooks/use-categories";
import { useRouter } from "next/router";
import Link from "next/link";
const CategoryForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const { createCategory, updateCategory } = useCategories();
  const { data: categories } = useSWR(id ? `/category/${id}` : null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const { success, error, info } = AlertMessage();

  useEffect(() => {
    if (categories) {
      form.setFieldsValue({
        name: categories.name,
        image: categories.image,
      });
      setImageUrl(categories.image);
    }
  }, [categories]);

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const onFinish = (values) => {
    if (id === null || id === undefined || id === "null") {
      try {
        createCategory({ ...values, image: imageUrl })
          .then(() => {
            success("Create category success");
            setTimeout(() => {
              router.push("/admin/categories");
            }, 1000);
          })
          .catch((err) => {
            error("Category name are exist");
          });
      } catch (err) {
        error("Create category fail");
      }
    } else {
      try {
        updateCategory(id, { ...values, image: imageUrl })
          .then(() => {
            success("Update category success");
            setTimeout(() => {
              router.push("/admin/categories");
            }, 1000);
          })
          .catch((err) => {
            error("Category name are exist");
          });
      } catch (err) {
        error("Update category fail");
      }
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const href = `/admin/categories`;

  return (
    <>
      <div className="mb-3 ">
        <Link href={href}>
          <Button type="primary" className="bg-gray-800">
            Back
          </Button>
        </Link>
      </div>
      <div>
        <div className="border-2  rounded-lg ">
          <div className="w-6/12 mx-auto my-5">
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
              form={form}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your category name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Image"
                name="image"
                rules={[
                  {
                    required: true,
                    message: "Please input your image!",
                  },
                ]}
              >
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked"></Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  className="bg-slate-800"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
CategoryForm.Layout = AdminLayouts;
export default CategoryForm;
