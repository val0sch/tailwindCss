import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { HiOutlineX } from "react-icons/hi";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="absolute w-screen bg-zinc-200 h-[80px] z-10 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
        <ul className="hidden md:flex pr-4">
          <li>More</li>
          <li>About</li>
          <li>Support</li>
          <li>Platform</li>
          <li>Pricing</li>
        </ul>
        <div className="hidden md:flex gap-5">
          <button className="border-none bg-transparent text-black">
            Sign In
          </button>
          <button>Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <BiMenu className="w-8 h-8" />
          ) : (
            <HiOutlineX className="w-8 h-8" />
          )}{" "}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">More</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platform</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>{" "}
      </ul>
    </div>
  );
}

export default NavBar;
