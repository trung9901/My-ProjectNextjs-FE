import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = ({ nav }) => {
  const router = useRouter();

  const active =
    "bg-gray-900 text-white px-3 py-2 rounded-md border-gray-400 border-2 text-sm font-medium";
  const unActive =
    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

      {nav.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={router.pathname === item.href ? active : unActive}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
