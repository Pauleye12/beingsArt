import React from "react";

function Vision_cards({ content }) {
  return (
    <div className="vision_card_container p-[17px] border-[#7877b4] border-[5px] bg-[#c5c6ff]">
      <div className="flex ">
        <div className="vision_img_wrapper w-[46%]">
          <img src={content.image} alt="" />
        </div>
        <div className="vision_text_wrapper border-l-[2px] flex flex-col justify-center items-start w-[46%] ">
          <h1>{content.title}</h1>
          <p>{content.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Vision_cards;
