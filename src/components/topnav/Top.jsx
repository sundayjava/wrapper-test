import React, { useContext } from "react";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";
import profile from "../../assets/profile.webp";

const Top = () => {
  const user = useContext(UserContext);

  const getInitials = (name) => {
    if (!name) return "";
    const initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
  };

  // console.log(user)

  const initials = getInitials(user ? user.name : "");

  return (
    <div className="h-[10vh] w-[85%] flex justify-between items-center">
      <div>
        {/* <input type="text" placeholder="Search" className='flex justify-center items-center h-[3em] w-[25vw] border-gray-200 outline-none px-[10px] rounded-3xl' /> */}
      </div>
      <div className="flex justify-center items-center gap-4 w-[25vw]">
        <div className="flex items-center cursor-pointer justify-center relative bg-green-500 rounded-xl bg-opacity-[0.1]">
          <FaRegEnvelope className="text-[2em] w-[60%] text-green-500 text-opacity-50" />
          <span className="bg-green-700 border-2 border-white text-white text-center rounded-full absolute -top-2 right-0 text-[10px] px-[1px] py-[1px]">
            12
          </span>
        </div>
        <div className="flex items-center cursor-pointer justify-center relative bg-green-500 rounded-xl bg-opacity-[0.1]">
          <IoMdNotificationsOutline className="text-[2em] w-[80%] text-green-500 text-opacity-50" />
          <span className="bg-green-700 border-2 border-white text-white text-center rounded-full absolute -top-2 right-0 text-[10px] px-[1px] py-[1px]">
            10
          </span>
        </div>
        <div className="h-[2.5em] w-[2em] ml-5 border border-white rounded-full">
          <img
            src={profile}
            className="h-full w-full rounded-full"
            alt="Profile"
          />
          {/* {user && user.profileImage ? (
                        <img src={user.profileImage} className='h-full w-full rounded-full' alt="Profile" />
                    ) : (
                        <span className='text-white rounded-full'>{initials}</span>
                    )} */}
        </div>
        <h3 className="flex items-center text-white text-[14px]">
          {user ? user.name : "Guest"}
        </h3>
        {/* <div><IoIosArrowDown className='text-white text-xl' /></div> */}
      </div>
    </div>
  );
};

export default Top;
