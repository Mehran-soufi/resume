import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";

function Menu() {
  return (
    <menu className="fixed left-1 top-[50%] transform translate-y-[-50%] z-50">
      <ul className="w-36 flex flex-col justify-center items-center gap-1">
        <li className="w-full cursor-pointer flex justify-between items-center gap-1 text-lg bg-white backdrop-blur-sm opacity-70 p-1 rounded-md">
          <span>خانه</span>
          <IoHome />
        </li>
        <li className="w-full cursor-pointer flex justify-between items-center gap-1 text-lg bg-white backdrop-blur-sm opacity-70 p-1 rounded-md">
          <span>درباره من</span>
          <FaAddressCard />
        </li>
        <li className="w-full cursor-pointer flex justify-between items-center gap-1 text-lg bg-white backdrop-blur-sm opacity-70 p-1 rounded-md">
          <span>مهارت ها</span>
          <SiHyperskill />
        </li>
        <li className="w-full cursor-pointer flex justify-between items-center gap-1 text-lg bg-white backdrop-blur-sm opacity-70 p-1 rounded-md">
          <span>خدمات ها</span>
          <MdMiscellaneousServices />
        </li>
      </ul>
    </menu>
  );
}

export default Menu;
