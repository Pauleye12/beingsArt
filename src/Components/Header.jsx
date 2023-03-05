import React from 'react'

function Header() {
  return (
    <div className=" nav_container min-h-[90px] w-full flex justify-start items-center text-[white]">
      <div className="h-full max-w-[750px] w-full flex justify-between items-center gap-[] ">
        <div className="logo_wrapper w-[70px]">
          <img className='' src=" ./public/Beings Web Assets/BEINGS-LOGO.png " alt="" />
        </div>
        <div className="nav_links font-bold">
          <ul className="flex gap-[20px]">
            <li>Home</li>
            <li>About</li>
            <li>Vision</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header