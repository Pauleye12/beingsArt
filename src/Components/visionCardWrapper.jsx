import React from "react";
import Vision_cards from "./Vision_cards";

function VisionCardWrapper() {
  const details = [
    {
      id: Date.now,
      title: "Unleash Your Colors",
      content:
        "Our vision is to provide a platform where individuals can express themselves and unleash their creativity through the creation and ownership of unique and rare NFTs. We believe that everyone has something valuable to offer and we are committed to providing a space where individuals can showcase their talents and passions. Our focus on creativity and self-expression is at the core of everything we do, and we aim to empower our community to boldly and fearlessly unleash their true colors.",
      image: "./Beings Web Assets/MINT-DAY.png",
    },
    {
      id: Date.now,
      title: "Inclusive Community",
      content:
        " We believe that inclusivity is essential to creating a strong and vibrant community, and we are committed to building a space where everyone feels welcome and valued. Our vision is to create a community that celebrates diversity and encourages participation from all members, regardless of background, experience, or knowledge. We believe that by fostering an inclusive environment, we can unlock the full potential of our community and create something truly remarkable.",
      image: "./Beings Web Assets/Town hall.jpg",
    },
    {
      id: Date.now,
      title: "Unravel The Mystery",
      content:
        "One fun part of beings is unravelling the mysteries of the NFT and Beings universe. At Beings, we aim to create a platform that offers engaging and interactive experiences for our community members in form of tasks, puzzles, quizzes and other related activities. We believe that there is untapped potential in the NFT space, and we are committed to exploring new frontiers and pushing boundaries. We aim to create a space where our community can discover and uncover hidden treasures, and where the possibilities are endless.",
      image: "./Beings Web Assets/THE HANGAR.jpg",
    },
    {
      id: Date.now,
      title: "Value Progression",
      content:
        "Our focus on value progression is at the core of everything we do. We believe that NFTs should be valuable and offer long-term benefits to our community members and holders. We aim to create something that truly stands the test of time. Our vision is to provide a system to reward members that have impacted the community, holders of our collections and everyone at large. We believe that by focusing on value progression, we can always give back to the community.",
      image: "./Beings Web Assets/THE DOT BANK.jpg",
    },
    {
      id: Date.now,
      title: "Beings Universe",
      content:
        "Our ultimate vision is to create a vibrant and dynamic Beings Universe, where members can explore, discover, and enjoy. We want to expand outside The Dot and build a Universe that can accommodate all. Our focus on community, creativity, and inclusivity is at the core of everything we do, and we believe that by bringing together a diverse group of individuals, we can create a universe and ecosystem that is rich in culture, creativity, excitement and also value oriented",
      image: "./Beings Web Assets/BEING-UNIVERSE.png",
    },
  ];

  return (
    <div className=" flex items-center justify-center flex-col gap-[40px] ">
      {details.map((content, index) => (
        <Vision_cards key={index} content={content} />
      ))}
    </div>
  );
}

export default VisionCardWrapper;
