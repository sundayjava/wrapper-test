import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/logo2.png";
import img2 from "../../assets/agg.jpg";
import { IoIosLogOut } from "react-icons/io";
import { FaUpload } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";

const Side = () => {
  const [active, setActive] = useState(0);
  // Logout function
  const handleLogout = () => {
    if (typeof onLogout === "function") {
      onLogout();
    }
  };

  const sidebarItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
      url: "/dashboard",
    },
    {
      id: 2,
      name: "Uploads",
      icon: <FaUpload />,
      url: "/dashboard/upload",
    },
    {
      id: 3,
      name: "Withdrawal",
      icon: <BiMoneyWithdraw />,
      url: "/dashboard/withdrawal/form",
    },
    {
      id: 4,
      name: "Settings",
      icon: <CiSettings />,
      url: "/dashboard/settings",
    },
  ];

  return (
    <div className="w-[15%] bg-blue-600 flex flex-col h-[100vh] overflow-hidden">
      <div className="w-[100%] items-center flex flex-col my-4">
        <div className="flex flex-col items-center my-[2em]">
          <img className="w-[50%]" src={img} alt="logo" />
        </div>

        {sidebarItems.map((item) => (
          <NavLink
          onClick={()=>setActive(item.id)}
            to={item.url}
            className={`${
              active === item.id ? "bg-green-800 rounded-md" : ""
            } lg:pl-16 pl-2 py-2 text-[1em] gap-3 flex items-center text-white decoration-none w-full hover:bg-green-800`}
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
        <NavLink
          className="text-white/50 pl-16 mt-16 text-[1em] gap-3 flex items-center decoration-none w-full active:bg-green-500 active:rounded-md"
          onClick={handleLogout}
          to="/"
        >
          {" "}
          <IoIosLogOut /> Logout{" "}
        </NavLink>
        <div className="w-[20vw] items-center flex flex-col my-20">
          <div className="w-[20vw] flex flex-col justify-center items-center">
            <h5 className="text-white text-center text-[14px] font-[600]">TUTORIAL GUIDE</h5>
            <NavLink to="/ebook" className="w-[8vw] h-[20vh] ">
              <img src={img2} alt="tutorial1" />
            </NavLink>
          </div>
          <button className="w-[10vw] bg-green-800 h-12 rounded-2xl text-white text-xl  border-none">
            customer care
          </button>
        </div>
      </div>
    </div>
  );
};

export default Side;
