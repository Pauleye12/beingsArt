import React from 'react'
import { motion } from 'framer-motion';

function Roadmap() {

  const HeaderVariant = {
    hidden: {
      x: '50vw',
      opacity: 0
    },
    inView: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .7,
        ease: 'easeInOut',
        type:'spring',
        bounce: .5
      }
    },
    
  }

  const imgVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    inView: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    onHover: {
      scale: 1.2,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="Roadmap"
      className="mt-[100px] bg-[#3d3c70] flex flex-col gap-[50px] justify-center items-center px-[20px] relative z-[1000] overflow-hidden "
    >
      <motion.h1
        className=" text-center font-[700] text-[#f0f0ff] text-[40px] md:text-[55px]"
        variants={HeaderVariant}
        initial="hidden"
        whileInView="inView"
        viewport={{ once: true }}
      >
        Season 1
      </motion.h1>
      <motion.div
        className="flex justify-center items-center "
        variants={imgVariant}
        initial="hidden"
        whileInView="inView"
        whileHover="onHover"
        viewport={{ once: true }}
      >
        <img
          className="md:w-[83%] w-full rounded-2xl"
          src="./Beings Web Assets/Beings Roadmap.png"
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default Roadmap