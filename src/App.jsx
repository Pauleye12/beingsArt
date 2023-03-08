import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroPage from "./Components/HeroPage";
import Info from "./Components/Info";
import Roadmap from "./Components/Roadmap";
import Vision from "./Components/Vision";

function App() {
  return (
    <div className="bg-[#3d3c70] text-[#f0f0ff] pb-[200px] md:pb-[10px] ">
      <div className="sticky top-0 z-[10]">
        <HeroPage />
      </div>

      <div className="bg-[#3d3c70] relative z-[100] rounded-t-3xl w-full border-[3px] border-[#3d3c70] ">
        <Info />
        <Vision />
        <Roadmap />
        <Footer />
      </div>
    </div>
  );
}

export default App;
