import React from "react";
import GalleryImg from "./GalleryImg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function GalleryImageWrapper() {
  const images = [
    {
      imageId: Date.now,
      url: "./Beings Web Assets/1 (1).png",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/1.png",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/4.png",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/5.png",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/96.png",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/24.png",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/122.png",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/17.png",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/21.png",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/Piere dome legendary being.png",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/Obamadon.jpg",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/21 (1).png",
    },
    {
      imageId: Date.now,
      url: "./Beings Web Assets/ABRO.png",
    },
  ];
  return (
    <div>
      <Swiper className="pb-[40px]"
        slidesPerView={5.3}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide>
            <GalleryImg image={image.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GalleryImageWrapper;