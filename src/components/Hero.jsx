import React from "react";
import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-between">
      <div className="flex flex-col justify-center m-auto sm: mx-5">
        <p className="text-2xl">Unique Sequencing & Production</p>
        <h1 className="text-5xl md:text-7xl py-3 font-bold">
          Cloud Management
        </h1>
        <p className="text-2xl">This is our Tech brand.</p>
        <button className="py-3 sm:w-[60%]">Get Started</button>{" "}
      </div>
      <div className="pt-10">
        <img src={bgImg} alt="/"></img>
      </div>
    </div>
  );
};

export default Hero;
