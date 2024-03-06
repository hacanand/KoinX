import React from "react";
import { GrNext } from "react-icons/gr";

const CryptoItem = ({ imageSrc, imageAlt, label }) => (
  <header className="flex gap-3 justify-between px-5 py-0.5 text-slate-600">
    <div>{label}</div>
    <img
      loading="lazy"
      src={imageSrc}
      alt={imageAlt}
      className="self-start w-2.5 aspect-square"
    />
  </header>
);

const Navigation = () => {
  return (
    <div className="flex md:mx-16 mx-4  gap-1 my-4 text-sm whitespace-nowrap">
    
      <div className=" font-medium text-slate-500">Cryptocurrencies</div>
      <div className="font-medium text-slate-600 mt-1 flex ">
        <GrNext  />
        <GrNext  />
      </div>

      <div className="grow font-medium text-slate-900">Bitcoin</div>
    </div>
  );
};

export default Navigation;
