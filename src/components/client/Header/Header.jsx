import React from "react";
import Link from "next/link";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Dropdown, Badge, Space } from "antd";
// import styles from "./Header.module.css";

const Header = () => {
  const nav = [
    { link: "/", name: "Trang chủ" },
    { link: "", name: "Giới thiệu" },
    { link: "", name: "Menu" },

    { link: "", name: "Tin tức" },
    { link: "", name: "Liên hệ" },
  ];
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
  ];
  return (
    <>
      <div className=" ">
        <div className="relative">
          <div className="absolute top-5 left-10">
            <div className="ml-[165px]">
              <img src="../../887_vi.png" alt="" width="100%" />
            </div>
          </div>
          <div className="">
            <img src="../../508_vi.png" alt="" width="100%" />
          </div>
        </div>
        <div className="bg-[url('http://trasuamoc.com/images/color_menu.png')] relative h-[50px]">
          <div className=" mx-auto w-[1200px] grid grid-cols-[3fr,1fr]">
            <ul className="navbar flex text-lg text-white leading-[50px] justify-around  ">
              {nav.map((item, index) => {
                return (
                  <>
                    <li className="text-center hover: " key={index}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                    <div>|</div>
                  </>
                );
              })}
            </ul>
            <div className="cart leading-[50px]  flex">
              <div className="ml-5 text-white cursor-pointer">
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                >
                  <UserOutlined style={{ fontSize: "25px" }} />
                </Dropdown>
              </div>
              <div className=" ml-5 cursor-pointer ">
                <Badge count={5}>
                  <div className="text-white ">
                    <ShoppingCartOutlined style={{ fontSize: "25px" }} />
                  </div>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
