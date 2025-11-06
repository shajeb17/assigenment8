import React from "react";
import NavBar from "../Component/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../Component/footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <NavBar></NavBar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
