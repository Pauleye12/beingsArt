import React from "react";
import GalleryImageWrapper from "./GalleryImageWrapper";

function Info() {
 

  return (
    <div className="info_container pt-[40px] px-[30px] bg-[#3d3c70] rounded-t-3xl">
      <div className="info_wrapper">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-center font-[700] text-[#f0f0ff] text-[40px] md:text-[60px] mb-[20px] ">
            Bringing color back to the DOT
          </h1>
          <p className="my-[20px] md:text-center text-justify max-w-[900px] font-[500] w-full">
            {" "}
            Beings is a 5615 NFT collection on the Ethereum blockchain dedicated
            to building a community-focused platform that prioritizes providing
            value to holders, unique storytelling, and immersive applications.
            With a focus on collaboration and inclusivity, we believe that the
            true value of NFTs lies in bringing people together to share
            experiences and create an atmosphere truly special that all Beings
            can truly be themselves. Join us as we embark on a mission to
            explore the vast potential of NFTs in community building and value
            progression.
          </p>
        </div>
        <div className="mt-[30px] px-[50px]">
          <GalleryImageWrapper />
        </div>
      </div>
    </div>
  );
}

export default Info;
