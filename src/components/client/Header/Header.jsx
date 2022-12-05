import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className="">
        <div className="relative">
          <div className="absolute top-8 left-14">
            <img src="../../887_vi.png" alt="" width="100%" />
          </div>
          <div className="">
            <img src="../../508_vi.png" alt="" width="100%" />
          </div>
        </div>
        <div className="bg-[url('http://trasuamoc.com/images/color_menu.png')] relative h-10 ">
          <ul className="flex">
            <li>
              <Link href={`/`}>Trang chủ</Link>
            </li>
            <li>
              <Link href={`/`}>Giới thiệu</Link>
            </li>
            <li>
              <Link href={`/`}>Menu</Link>
            </li>
            <li>
              <Link href={`/`}>Khuyến mãi</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
