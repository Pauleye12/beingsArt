import React from "react";

function Vision_cards({ content }) {
  return (
    <div className="vision_card_container py-[50px] p-[17px] border-[#7877b4] border-[5px] bg-[#c5c6ff] max-w-[1100px] w-full rounded-3xl">
      <div className="flex ">
        <div className="vision_img_wrapper w-[46%] flex justify-center items-center">
          <img className="rounded-3xl w-[90%]" src={content.image} alt="" />
        </div>
        <div className="vision_text_wrapper border-l-[3px] border-[#d5d6ff] flex flex-col justify-center items-start w-[46%] pl-[50px] ">
          <h1 className="text-[#2c2b58] leading-[50px] mt-[15px] text-[43px] font-[700] ">
            {content.title}
          </h1>
          <p className="text-[#2c2b58] mt-[20px] font-[500] ">
            {content.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision_cards;
