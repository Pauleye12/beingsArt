import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroPage from "./Components/HeroPage";
import Info from "./Components/Info";
import Roadmap from "./Components/Roadmap";
import Vision from "./Components/Vision";

function App() {
  return (
    <div className="bg-[#3d3c70] text-[#f0f0ff] pt-[8px]">
      <HeroPage />
      <Info />
      <Vision />
      <Roadmap />
      <Footer/>
    </div>
  );
}

export default App;
