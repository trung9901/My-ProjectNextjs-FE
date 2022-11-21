import { Button, Form, Input, Upload } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";
import AdminLayouts from "../../../../components/layouts/AdminLayouts";
import useSize from "../../../../hooks/use-size";
import AlertMessage from "../../../../ultils/Alert";

const SizeForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const { createSize } = useSize();

  const [form] = Form.useForm();

  const { success, error, info } = AlertMessage();
  const onFinish = (values) => {
    if (id === null || id === undefined || id === "null") {
      try {
        createSize(values)
          .then(() => {
            success("Create size success");
            setTimeout(() => {
              router.push("/admin/sizes");
            }, 1000);
          })
          .catch((err) => {
            error("size name are exist");
          });
      } catch (err) {
        error("Create size fail");
      }
    }
    // else {
    //   try {
    //     updateCategory(id, { ...values, image: imageUrl })
    //       .then(() => {
    //         success("Update category success");
    //         setTimeout(() => {
    //           router.push("/admin/categories");
    //         }, 1000);
    //       })
    //       .catch((err) => {
    //         error("Category name are exist");
    //       });
    //   } catch (err) {
    //     error("Update category fail");
    //   }
    // }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const href = `/admin/sizes`;
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
                label="Size"
                name="size"
                rules={[
                  {
                    required: true,
                    message: "Please input your size !",
                  },
                ]}
              >
                <Input />
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
SizeForm.Layout = AdminLayouts;
export default SizeForm;
