import React, { useState } from "react";
import Header from "./Header";
import { motion } from "framer-motion";

function HeroPage() {

  const home_page_logoVariants = {
    hidden: {
      opacity: 0,
      scale:0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        delay: .2,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  const socialsVaiants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1.1,
        duration: 1.5,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.5,
      },
    },
  };
    
   

  return (
    <div className="hero_section_container flex flex-col justify-center items-center px-[30px] pb-[20px] gap-[40px]  ">
      <div className="nav_bar w-full  z-[10] ">
        <Header />
      </div>
      <div className="home_page flex flex-col justify-center items-center gap-[40px] ">
        <motion.div variants={home_page_logoVariants} animate='visible' initial='hidden' className="home_page_logo w-full flex justify-center items-center h-full max-h-[410px]">
          <img
            className="md:max-w-[48em] max-w-[350px] w-full "
            src="./Beings Web Assets/logo-beings.png"
            alt=""
          />
        </motion.div>
        <motion.div variants={socialsVaiants} initial='hidden' animate='visible' className="socials flex-col flex md:flex-row gap-[15px] md:gap-[30px] justify-center font-bold items-center mb-[10px]">
          <button className="social_links discord px-[30px] py-[17px] border-[2px] border-[white] rounded-[30px] ">
            Discord
          </button>
          <button className="social_links twitter px-[30px] py-[17px] border-[2px] border-[white] rounded-[30px] ">
            Twitter
          </button>
          <button className="social_links opensea px-[30px] py-[17px] border-[2px] border-[white] rounded-[30px] ">
            Opensea
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroPage;
