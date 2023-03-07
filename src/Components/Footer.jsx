import React from "react";
import { UilTwitter } from "@iconscout/react-unicons";

function Footer() {
  return (
    <div className=" mt-[200px] flex flex-col justify-center items-center">
      <div className="footer_img w-[400px]">
        <img src="./Beings Web Assets/BEINGS-LOGO.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-[700] text-center text-[55px] max-w-[700px] w-full leading-[60px]">Join The Beings Community</h1>
        <div className="social_btns flex justify-center items-center gap-[15px] mt-[45px]">
          <a
            className="bg-[#c5c6ff] border-[4px] border-[#5a5992] rounded-[50%] p-[10px]"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilTwitter size="100" color="#1d9bf0" />
          </a>
          <a
            className="bg-[#c5c6ff] border-[4px] border-[#5a5992] rounded-[50%] p-[20px]"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className=" discord_footer w-[80px] "
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
              alt=""
            />
          </a>
          <a
            className="bg-[#c5c6ff] border-[4px] border-[#5a5992] rounded-[50%] p-[10px]"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
