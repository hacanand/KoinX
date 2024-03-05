import React, { useState } from "react";

// Define a reusable component for menu items
const MenuItem = ({ name, isActive, onClick }) => {
  return (
    <button
      className={`flex-auto  my-auto px-2 py-2 ${
        isActive
          ? "font-semibold text-blue-700 whitespace-nowrap border-solid aspect-[1.52] border-b-[3px] border-b-blue-600"
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
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <nav className="flex gap-5 max-w-[881px] justify-between items-center  border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)] text-zinc-700 max-md:flex-wrap">
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
