import React, { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import SideBar from "./SideBar";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const SideBarToggle = () => setSideBarOpen((prev) => !prev);

  return (
    <div className=" nav_container min-h-[70px] w-full flex justify-start items-center text-[white] ">
      <div className="h-full  w-full flex justify-between items-center gap-[] ">
        <div className=" logo_wrapper w-[70px]">
          <img
            className=""
            src=" ./Beings Web Assets/BEINGS-LOGO.png "
            alt=""
          />
        </div>
        <div className=" hidden md:block nav_links font-bold">
          <ul className="flex gap-[20px]">
            <li>Home</li>
            <li>About</li>
            <li>Vision</li>
          </ul>
        </div>
        <a
          className=" hidden md:block academy_link font-bold px-[17px] py-[10px] rounded-3xl border-[3px] border-[#f7c5ff]"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Academy
        </a>
        <div className="md:hidden" onClick={SideBarToggle}>
          <UilBars size="40" />
        </div>
      </div>

      <AnimatePresence>{sideBarOpen && <SideBar />}</AnimatePresence>
    </div>
  );
}

export default Header;
