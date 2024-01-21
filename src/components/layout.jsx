import React from "react";

const Layout = ({ children, style }) => {
  return (
    <div className={`container px-7 md:px-0 mx-auto ${style}`}>{children}</div>
  );
};

export default Layout;
