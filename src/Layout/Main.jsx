import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer.jsx/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="font-[lato]">
      <Navbar />
      <div className="min-h-[calc(100vh-130px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
