import React from 'react'

function Roadmap() {
  return (
    <div
      id="Roadmap"
      className="mt-[100px] bg-[#3d3c70] flex flex-col gap-[50px] justify-center items-center px-[20px] relative z-[1000] "
    >
      <h1 className=" text-center font-[700] text-[#f0f0ff] text-[40px] md:text-[55px]">
        Roadmap
      </h1>
      <div className="flex justify-center items-center ">
        <img
          className="md:w-[83%] w-full rounded-2xl"
          src="./Beings Web Assets/Beings Roadmap.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Roadmap