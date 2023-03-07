import React from "react";

function GalleryImg({ image }) {
  return (
    <div className="w-full">
      <img className="rounded-xl" src={image} alt="" />
    </div>
  );
}

export default GalleryImg;
