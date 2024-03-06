import React, { useState } from "react";

// Define a reusable component for menu items
const MenuItem = ({ name, isActive, onClick }) => {
  return (
    <button
      className={`flex-auto my-1 mx-2 h-10 py-2 ${
        isActive
          ? "font-semibold text-blue-700 md:whitespace-nowrap border-solid aspect-[1.52] border-b-[3px] border-b-blue-600"
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

  return (
    <nav className="flex md:gap-2  md:max-w-[881px] overflow-x-auto gap-6  justify-between items-center  border-b border-solid  text-zinc-700 md:flex-wrap">
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
