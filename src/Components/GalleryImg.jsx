import React from "react";

function GalleryImg({ image }) {
  return (
    <div className="">
      <img className="rounded-xl" src={image} alt="" />
    </div>
  );
}

export default GalleryImg;
