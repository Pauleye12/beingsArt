import React from "react";
import Vision_cards from "./Vision_cards";

function VisionCardWrapper() {
  const details = [
    {
      id: Date.now,
      title: "Unleash Your Colors",
      content:
        "We believe that everyone has something valuable to offer and we are commited to providing a space where individuals can showcase their talents and passions.",
      image: "./Beings Web Assets/MINT-DAY.png",
    },
    {
      id: Date.now,
      title: "Inclusive Community",
      content:
        "Our vision is to create a community that celebrates diversity and encourages participation from all members, regardless of background, experience, or knowledge.",
      image: "./Beings Web Assets/Town hall.jpg",
    },
    {
      id: Date.now,
      title: "Unravel The Mystery",
      content:
        "At Beings, we aim to create a platform that offers engaging and interactive experiences for our community members in form of tasks, puzzles, quizzes and other related activities.",
      image: "./Beings Web Assets/THE HANGAR.jpg",
    },
    {
      id: Date.now,
      title: "Value Progression",
      content:
        "We believe that NFTs should be valuable and offer long-term benefits to our community members and holders. Our vision is to provide a system that rewards holders and believers",
      image: "./Beings Web Assets/THE DOT BANK.jpg",
    },
    {
      id: Date.now,
      title: "Beings Universe",
      content:
        "Our ultimate vision is to create a vibrant and dynamic Beings Universe, where members can explore, discover and enjoy",
      image: "./Beings Web Assets/BEING-UNIVERSE.png",
    },
  ];

  return (
    <div className=" flex items-center justify-center flex-col gap-[600px] ">
      {details.map((content, index) => (
        <Vision_cards key={index} content={content} />
      ))}
    </div>
  );
}

export default VisionCardWrapper;
