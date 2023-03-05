import React from "react";
import Header from "./Header";

function HeroPage() {
  return (
    <div className="hero_section_container flex flex-col justify-center items-center px-[20px] pb-[20px] gap-[40px] ">
      <div className="nav_bar w-full">
        <Header />
      </div>
      <div className="home_page flex flex-col justify-center items-center gap-[40px] ">
        <div className="home_page_logo h-full max-h-[410px]">
          <img src="./Beings Web Assets/logo-beings.png" alt="" />
        </div>
        <div className="socials flex gap-[30px] justify-center font-bold items-center mb-[10px]">
          <button className="social_links discord px-[30px] py-[17px] border-[2px] border-[white] rounded-[30px] ">
            Discord
          </button>
          <button className="social_links twitter px-[30px] py-[17px] border-[2px] border-[white] rounded-[30px] ">
            Twitter
          </button>
          <button className="social_links opensea px-[30px] py-[17px] border-[2px] border-[white] rounded-[30px] ">
            Opensea
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
