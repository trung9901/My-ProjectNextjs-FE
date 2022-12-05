import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className={styles.logo}>
            <img src="../../887_vi.png" alt="" width="100%" />
          </div>
          <div className="">
            <img src="../../508_vi.png" alt="" width="100%" />
          </div>
        </div>
        <div className={styles.nav}>
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
