import React from "react";
import { GrNext } from "react-icons/gr";
import { useParams } from "react-router-dom";

const Navigation = () => {
  const { id } = useParams();
  function nav() {
    if (id === undefined || id === null || id === "" || id === " ") {
      return "Bitcoin";
    }
    else {
      return id;
    }
  }
  return (
    <div className=" relative flex md:mx-16 mx-4 gap-1 my-4 text-sm whitespace-nowrap">
      <div className=" font-medium text-slate-500">Cryptocurrencies</div>
      <div className=" font-medium text-slate-600 mt-1 flex ">
        <GrNext className="absolute ml-1"/>
        <GrNext  />
      </div>

      <div className="grow font-medium text-slate-900">{nav()}</div>
    </div>
  );
};

export default Navigation;
