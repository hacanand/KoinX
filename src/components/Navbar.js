import React, { useState } from "react";
import KoinXLogo from "../assets/KoinXLogo.png";
import { RxDropdownMenu } from "react-icons/rx";

const HeaderLink = ({ children, onClick }) => (
  <div
    className="grow justify-center self-stretch py-7 my-auto bg-white cursor-pointer"
    onClick={onClick}
  >
    {children}
  </div>
);

const DropdownMenu = ({ links, onSelect }) => (
  <div className="absolute top-full right-0 bg-white shadow-md rounded-lg mt-1 py-2">
    {links.map((link) => (
      <div
        key={link}
        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
        onClick={() => onSelect(link)}
      >
        {link}
      </div>
    ))}
  </div>
);

const DropDown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const links = ["Crypto Taxes", "Free Tools", "Resource Center"];

  const handleSelect = (link) => {
    setIsDropdownOpen(false);  
  };

    return (
      <div className="md:mx-8 mx-4 mt-1  ">
        <nav className="flex gap-5 justify-between items-center md:pl-20 text-slate-900 md:flex-wrap md:max-w-full">
          <div className="hidden md:gap-6 md:flex">
            {links.map((link) => (
              <HeaderLink key={link}>{link}</HeaderLink>
            ))}
          </div>
          <div className="flex   md:hidden relative">
            <button
              className="py-2 px-4  text-white  bg-blue-500 rounded-lg"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <RxDropdownMenu />
            </button>
            {isDropdownOpen && (
              <DropdownMenu links={links} onSelect={handleSelect} />
            )}
          </div>
        </nav>
      </div>
    );
};

const Navbar = () => {
  return (
    <header className="flex gap-5 justify-between   text-base font-semibold tracking-normal whitespace-nowrap bg-white border-b border-solid shadow-sm border-b-zinc-200 md:flex-wrap md:px-3">
      <img
        src={KoinXLogo}
        alt="Company Logo"
        className="md:my-auto m-2 md:w-24 aspect-[4] md:ml-16"
        loading="lazy"
      />
      <div className="flex md:mr-16 gap-5 justify-between md:flex-wrap md:max-w-full">
        <DropDown />
        <button className="justify-center  py-3 my-auto text-white rounded-lg hidden md:block bg-blue-700  md:px-5">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
