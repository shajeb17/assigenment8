import React from "react";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  let listStyle = [
  <li key="home">
    <NavLink to={"/"}>Home</NavLink>
  </li>,
  <li key="app">
    <NavLink to={"/app"}>App</NavLink>
  </li>,
  <li key="install">
    <NavLink to={"/installation"}>Installation</NavLink>
  </li>,

  ];
  return (
    <div className="navbar bg-base-100 shadow-sm px-15 min-[600px]:flex min-[600px]:space-x-2.5 min-[600px]:justify-between max-[600px]:flex-col min-[600px]:items-center">
      <div className="flex items-center">
        <img src={logo} alt="logo" width={30} height={30} />
        <Link to={"/"} className=" font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          HERO.IO
        </Link>
      </div>
      <ul className=" menu-horizontal space-x-5 font-semibold px-1 max-[600px]:hidden" >
        {listStyle}
      </ul>
      <div className="">
        <a
          href="https://github.com/shajeb17/assigenment8"
          className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex items-center gap-1 p-[4px_13px] rounded-md text-white"
        >
          <FaGithub></FaGithub> Contribute
        </a>
      </div>

      <ul className=" menu-horizontal space-x-5 font-semibold px-1 min-[600px]:hidden">
        {listStyle}
      </ul>
    </div>
  );
};

export default NavBar;
