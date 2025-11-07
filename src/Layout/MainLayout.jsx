import React from "react";
import NavBar from "../Component/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../Component/footer/Footer";
import { useDataHook } from "../hooks/useDataHook";
import { FadeLoader } from "react-spinners";

const MainLayout = () => {
  let { loading } = useDataHook();

  return (
    <div className="flex flex-col">
      <NavBar></NavBar>
      {loading === true ? (
        <div className="w-full h-screen flex justify-center m-auto items-center text-center">
          <FadeLoader />
        </div>
      ) : (
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      )}
      <Footer></Footer>
    </div>
     

   

  );
};

export default MainLayout;
