import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navItems = (
    <>
      {" "}
      <li>
        <Link to="/" className="font-bold">
          Home
        </Link>
      </li>
      <li tabIndex="0">
        <Link to="/completedTasks" className="justify-between font-bold">
          Completed Tasks
        </Link>
      </li>
      <li tabIndex="0">
        <Link to="/todo" className="justify-between font-bold">
          To Do
        </Link>
      </li>
      <li>
        <Link to="/calender" className="font-bold">
          Calender
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-blue-700 text-white sticky top-0 z-50 w-screen">
      <div className="navbar-start  w-screen">
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3  shadow bg-blue-700 rounded-box w-screen p-0 "
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
          To Do List
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu menu-horizontal p-0 ">{navItems}</ul>
      </div>
      <div className="navbar-end lg:visible md:visible sm:invisible invisible w-full "></div>
    </div>
  );
};

export default Navigation;
