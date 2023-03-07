import React from 'react'

function SideBar() {
  return (
    <div className="bg-[#3d3c70] fixed top-0 pt-[74px] right-0 left-0 w-screen flex justify-center items-center z-[100] ">
      <div>
        <ul className="nav_links font-bold flex justify-center items-center flex-col">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Vision</a>
          </li>
          <li className="academy_link font-bold px-[17px] py-[10px] rounded-3xl border-[3px] border-[#f7c5ff]">
            <a href="">Academy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar