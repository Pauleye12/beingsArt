import React from "react";
import Header from "./Components/Header";
import HeroPage from "./Components/HeroPage";
import Info from "./Components/Info";

function App() {
  return (
    <div className="bg-[#3d3c70] text-[#f0f0ff] pt-[8px]">
      <HeroPage />
      <Info/>
    </div>
  );
}

export default App;
