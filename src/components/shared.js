import React from "react";
// import { Outlet } from "react-router-dom";
import Nav from "./navbar";
import Footer from "./footer";

const Shared = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Shared;
