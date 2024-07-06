import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Side from "../../components/sidebar/Side";
import Top from "../../components/topnav/Top";
import { FaBars } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import "../../pages/dashboard/dashboard.css";
import { IoArrowForwardSharp } from "react-icons/io5";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-container">
      <div className="flex justify-center">
        <div onClick={toggleSidebar}>
          {isOpen ? (
            <IoArrowForwardSharp
              size={23}
              color="white"
              className="text-white h-8 translate-x-72 translate-y-40 ml-[-6em] cursor-pointer"
            />
          ) : (
            <div className="bg-green-500 rounded-sm mt-10 px-2 h-[25px] flex justify-center items-center">
              <FaBars color="black" className="cursor-pointer" />
            </div>
          )}
        </div>
        {isOpen && <Side />}

        <div className="w-[85%] flex flex-col items-center h-[100vh]">
          <Top />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
