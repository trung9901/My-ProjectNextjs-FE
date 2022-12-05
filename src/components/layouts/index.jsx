import React from "react";

import Footer from "../client/Footer/Footer";
import Header from "../client/Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
