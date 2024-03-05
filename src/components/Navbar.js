import React from "react";
import KoinXLogo from "../assets/KoinXLogo.png";

const MenuButton = ({ children }) => (
  <button className="grow justify-center self-stretch py-7 my-auto bg-white text-slate-900">
    {children}
  </button>
);

const Navbar = () => {
  return (
    <header className="flex gap-5 justify-between px-14 mx-16 text-base font-semibold tracking-normal whitespace-nowrap bg-white border-b border-solid shadow-sm border-b-zinc-200 md:flex-wrap md:px-5">
      <img src={KoinXLogo} alt="" className="my-auto w-24 aspect-[4]" />
      <nav className="flex gap-5 justify-between md:flex-wrap md:max-w-full">
        <div className="flex gap-5 justify-between items-center pl-20 text-slate-900 md:flex-wrap md:max-w-full">
          <MenuButton>Crypto Taxes</MenuButton>
          <MenuButton>Free Tools</MenuButton>
          <MenuButton>Resource Center</MenuButton>
        </div>
        <div
          className="justify-center px-6 py-3 my-auto text-white rounded-lg bg-[linear-gradient(82deg,#2870EA_8.72%,#1B4AEF_85.01%)] cursor-pointer md:px-5"
          tabIndex="0"
          role="button"
        >
          Get Started
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
