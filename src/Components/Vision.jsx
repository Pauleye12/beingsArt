import React from "react";
import VisionCardWrapper from "./visionCardWrapper";

function Vision() {
  return (
    <div
      id="Vision"
      className=" bg-[#3d3c70] my-[200px] px-[20px] flex flex-col justify-center items-center gap-[40px] relative z-[1000]"
    >
      <h1 className="text-center font-[700] text-[50px] md:text-[75px] ">
        Our Visions
      </h1>
      <VisionCardWrapper />
    </div>
  );
}

export default Vision;
