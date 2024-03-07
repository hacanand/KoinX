import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import rectangle2 from "../assets/Rectangle 11947 (1).png";
import rectangle1 from "../assets/Rectangle 11947.png";

// Reusable Component
const InfoCard = ({ imageUrl, altText, title, buttonText, bgColor }) => (
  <div className="flex flex-col max-md:ml-0 max-md:w-full">
    <div
      className={`flex flex-col grow justify-center pr-4 max-md:mt-4 rounded-md max-w-[400px] min-h-[161px] ${bgColor}`}
    >
      <div className="flex md:gap-1 gap-1  justify-between py-2 pr-2 pl-2 rounded-md max-md:pr-5">
        <img loading="lazy" src={imageUrl} alt={altText} className=" max-lg:w-4/12 max-md:4/12 max-sm:w-6/12" />
        <div className="flex flex-col flex-1 justify-center my-auto">
          <div className="max-md:text-sm text-wrap font-bold  text-white">
            {title}
          </div>
          <div className="flex flex-col justify-center px-3 py-1 mt-4  text-sm font-semibold bg-white rounded-lg text-slate-900 max-md:px-5">
            <button className="flex gap-1 grow justify-between pr-1 items-center w-full">
              <span>{buttonText}</span>
              <GrFormNextLink className="w-5 text-xl aspect-square" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FinancialAdviceSection = () => {
  const cardData = [
    {
      imageUrl: rectangle1,
      altText: "Calculate Profits",
      title: "Calculate your Profits",
      buttonText: "Check Now",
      bgColor: "bg-gradient-to-r from-sky-500 to-indigo-500",
    },
    {
      imageUrl: rectangle2,
      altText: "Calculate Tax",
      title: "Calculate your tax liability",
      buttonText: "Check Now",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="flex mt-5 flex-col w-full">
      <header className="w-full text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        Already Holding Bitcoin?
      </header>
      <div className="mt-5 w-full max-md:max-w-full">
        <div className="flex gap-4 md:justify-evenly max-md:flex-col max-md:gap-2">
          {cardData.map((card, index) => (
            <InfoCard key={`card-${index}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialAdviceSection;
