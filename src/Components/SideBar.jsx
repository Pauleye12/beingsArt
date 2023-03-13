import React from "react";
import { motion } from "framer-motion";

function SideBar() {
  const SideBarVariant = {
    hidden: {
      y: "-15%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.3,
      },
    },
    exit: {
      y: "-15%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  const rocketVariant = {
    inView: {
      y: [0, -10, 5, -10, 5, -100],
      opacity: [1, 1, 1, 1, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.3,
        repeatDelay: 2,
      },
    },
  };

  return (
    <motion.div
      variants={SideBarVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-[#3d3c70] fixed top-0 mt-[74px] right-0 left-0 w-screen flex justify-center items-center z-[-100] pt-[10px] pb-[25px]"
    >
      <div>
        <ul className="nav_links font-bold flex justify-center items-center gap-[25px] flex-col">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Vision</a>
          </li>
          <li className="academy_link font-bold px-[17px] py-[8px]  flex justify-center items-center rounded-3xl border-[3px] border-[#f7c5ff]">
            <a
              className="  "
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center items-center">
                <p>Academy</p>
                <motion.div
                  variants={rocketVariant}
                  whileInView="inView"
                  className="academy_img "
                >
                  <img src="./Beings Web Assets/rocket.svg" alt="" />
                </motion.div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default SideBar;
