import React from 'react'
import { UilBars } from "@iconscout/react-unicons";
import SideBar from './SideBar';

function Header() {
  return (
    <div className=" nav_container min-h-[70px] w-full flex justify-start items-center text-[white] ">
      <div className="h-full  w-full flex justify-between items-center gap-[] ">
        <div className=" logo_wrapper w-[70px]">
          <img
            className=""
            src=" ./Beings Web Assets/BEINGS-LOGO.png "
            alt=""
          />
        </div>
        <div className=" hidden md:block nav_links font-bold">
          <ul className="flex gap-[20px]">
            <li>Home</li>
            <li>About</li>
            <li>Vision</li>
            
          </ul>
        </div>
        <a
          className=" hidden md:block academy_link font-bold px-[17px] py-[10px] rounded-3xl border-[3px] border-[#f7c5ff]"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Academy
        </a>
        <div className='md:hidden'>
          <UilBars size='40'/>
        </div>
      </div>
      <SideBar/>
    </div>
  );
}

export default Header