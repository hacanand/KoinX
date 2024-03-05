import React from "react";

const NavItem = ({ name, active }) => (
  <li
    className={`flex-auto self-stretch my-auto ${
      active ? "text-blue-700 border-b-3 border-blue-600" : ""
    }`}
  >
    {name}
  </li>
);

const NavigationBar = () => {
  const navItems = [
    { name: "Overview", active: true },
    { name: "Fundamentals", active: false },
    { name: "News Insights", active: false },
    { name: "Sentiments", active: false },
    { name: "Team", active: false },
    { name: "Technicals", active: false },
    { name: "Tokenomics", active: false },
  ];

  return (
    <nav className="flex gap-5 justify-between items-center text-base font-medium tracking-normal border-b border-solid border-gray-300 text-zinc-700 max-md:flex-wrap">
      {navItems.map((item) => (
        <NavItem key={item.name} name={item.name} active={item.active} />
      ))}
    </nav>
  );
};

export default NavigationBar;
