import React from 'react'

function Roadmap() {
  return (
    <div className="mt-[100px] flex flex-col gap-[50px] justify-center items-center px-[20px] ">
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