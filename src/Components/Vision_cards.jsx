import React from "react";

function Vision_cards({ content }) {
  return (
    <div className="vision_card_container py-[50px] p-[17px] border-[#7877b4] border-[5px] bg-[#c5c6ff] max-w-[1100px] w-full rounded-3xl sticky top-[70px] md:max-h-[547px] max-h-[647px] h-full ">
      <div className="flex flex-col md:flex-row justify-center h-full ">
        <div className="vision_img_wrapper md:w-[46%] flex justify-center items-center ">
          <img className="rounded-3xl w-[90%]" src={content.image} alt="" />
        </div>
        <div className="vision_text_wrapper text-center md:border-l-[3px] border-[#d5d6ff] flex flex-col justify-center items-start md:w-[46%] md:pl-[50px] mt-[20px] md:mt-0  ">
          <h1 className="text-[#2c2b58] md:leading-[50px] mt-[15px] text-center md:text-left text-[27px] md:text-[43px] font-[700] w-full ">
            {content.title}
          </h1>
          <p className="text-[#2c2b58] mt-[20px] font-[500] w-full md:text-left ">
            {content.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision_cards;
