import React, { useState } from "react";

// Define a reusable component for menu items
const MenuItem = ({ name, isActive, onClick }) => {
  return (
    <button
      className={`flex-auto mx-2 ${
        isActive
          ? "font-bold rounded text-blue-700 md:whitespace-nowrap border-solid  border-b-[5px] border-b-blue-500"
          : ""
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("Overview");

  // Menu items data
  const menuItems = [
    "Overview",
    "Fundamentals",
    "NewsInsights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const handleItemClick = (name) => {
    setActiveItem(name);
  };
//md:max-w-[881px]
  return (
    <nav className="flex md:gap-2 md:w-full  overflow-x-auto gap-4 justify-between items-center  border-b border-solid  text-zinc-700   no-scrollbar">
      {menuItems.map((name) => (
        <MenuItem
          key={name}
          name={name}
          isActive={activeItem === name}
          onClick={() => handleItemClick(name)}
        />
      ))}
    </nav>
  );
};

export default NavigationBar;
