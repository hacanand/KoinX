import React from "react";
import RightFrame from "../assets/RightFrame.png";
import { GrFormNextLink } from "react-icons/gr";

const ButtonWithIcon = ({ buttonText }) => (
  <button className="flex flex-col justify-center px-6 py-2.5 mt-5   text-base font-semibold leading-7 whitespace-nowrap bg-white rounded-lg text-slate-900 max-w-[237px] w-full ">
    <div className="flex gap-1.5 justify-between ">
      <div className="grow">{buttonText}</div>
      <GrFormNextLink className="mt-1 text-xl" />
    </div>
  </button>
);

const RightCard = () => {
  return (
    <section className="flex flex-col items-center px-10 pt-8 pb-10 bg-blue-600 rounded-lg  w-full flex-wrap">
      <header className="text-2xl text-balance flex-wrap font-bold leading-10 text-center text-white w-full ">
        Get Started with KoinX for FREE
      </header>
      <p className="self-stretch mt-3.5 text-sm text-balance font-medium leading-6 text-center text-zinc-100">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img
        loading="lazy"
        src={RightFrame}
        alt="KoinX feature visual"
        className="mt-10 w-full aspect-w-16/9 max-w-[237px]"
      />
      <ButtonWithIcon buttonText="Get Started for FREE" />
    </section>
  );
};

export default RightCard;
