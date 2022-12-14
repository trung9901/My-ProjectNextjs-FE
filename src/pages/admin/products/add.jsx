import { Button, Form, Input, InputNumber, Select, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import useCategories from "../../../hooks/use-categories";
import AdminLayouts from "../../../components/layouts/AdminLayouts";
const { Option } = Select;

const sights = {
  Beijing: ["Tiananmen", "Great Wall"],
  Shanghai: ["Oriental Pearl", "The Bund"],
};
const ProductAdd = () => {
  const { data: categoriesData } = useCategories();
  let categories = categoriesData?.map((item) => {
    return {
      label: item.name,
      value: item._id,
    };
  });

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const handleChange = (e) => {
    form.setFieldsValue({
      sights: [],
    });
    console.log(e);
  };

  return (
    <div>
      <Form
        form={form}
        name="dynamic_form_complex"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Chọn danh mục",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Nhập giá sản phẩm",
            },
          ]}
        >
          <Input type="number" defaultValue="0" />
        </Form.Item>
        <Form.Item
          name="productCode"
          label="Product Code"
          rules={[
            {
              required: true,
              message: "Nhập mã sản phẩm",
            },
          ]}
        >
          <Input type="text" defaultValue="0" />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: "Chọn danh mục",
            },
          ]}
        >
          <Select
            options={categories?.length !== 0 ? categories : ""}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.List name="color">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space key={field.key} align="baseline">
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.area !== curValues.area ||
                      prevValues.sights !== curValues.sights
                    }
                  >
                    {() => (
                      <Form.Item
                        {...field}
                        label="Color"
                        name={[field.name, "color"]}
                        rules={[
                          {
                            required: true,
                            message: "Chưa nhập màu",
                          },
                        ]}
                      >
                        <Input disabled={!form.getFieldValue("category")} />
                      </Form.Item>
                    )}
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label="Size"
                    name={[field.name, "size"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing size",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label="Quantity"
                    name={[field.name, "quantity"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing quantity",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add sights
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "black" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

ProductAdd.Layout = AdminLayouts;
export default ProductAdd;
