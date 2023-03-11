import React, { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import SideBar from "./SideBar";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const footer_logoVariant = {
    inView: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: -0.3,
      },
    },
  };

  const [sideBarOpen, setSideBarOpen] = useState(false);

  const SideBarToggle = () => setSideBarOpen((prev) => !prev);

  return (
    <div className=" nav_container min-h-[70px] w-full flex justify-start items-center text-[white] ">
      <div className="h-full  w-full flex justify-between items-center gap-[] ">
        <motion.div
          variants={footer_logoVariant}
          whileInView="inView"
          className=" logo_wrapper w-[70px]"
        >
          <img
            className=""
            src=" ./Beings Web Assets/BEINGS-LOGO.png "
            alt=""
          />
        </motion.div>
        <div className=" hidden md:block nav_links font-[700] text-[20px]">
          <ul className="flex gap-[30px]">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#About">
              {" "}
              <li>About</li>
            </a>
            <a href="#Vision">
              <li>Vision</li>
            </a>
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
