import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import rectangle2 from "../assets/Rectangle 11947 (1).png";
import rectangle1 from "../assets/Rectangle 11947.png";

// Reusable Component
const InfoCard = ({ imageUrl, altText, title, buttonText ,bgColor }) => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    
    <div className={`flex flex-col grow justify-center pr-4 leading-7 max-md:mt-4 rounded-md max-w-[388px] min-h-[151px] ${bgColor}`} >
      <div className="flex md:gap-5 gap-1  justify-between py-3 pr-6 pl-3 rounded-md max-md:pr-5">
        <img
          loading="lazy"
          src={imageUrl}
          alt={altText}
          className="w-32 max-w-full aspect-square"
        />
        <div className="flex flex-col flex-1 justify-center my-auto">
          <div className="text-xl font-bold text-white">{title}</div>
          <div className="flex flex-col justify-center px-5 py-0.5 mt-4 w-full text-sm font-semibold bg-white rounded-lg text-slate-900 max-md:px-5">
            <button className="flex gap-1.5 justify-between pr-2.5 items-center w-full">
              <span>{buttonText}</span>
               <GrFormNextLink className="w-5 text-xl aspect-square"/>
                
              
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
      bgColor:"bg-gradient-to-r from-sky-500 to-indigo-500",
       
    },
    {
      imageUrl: rectangle2,
      altText: "Calculate Tax",
      title: "Calculate your tax liability",
        buttonText: "Check Now",
      bgColor:"bg-gradient-to-r from-purple-500 to-pink-500",
       
    },
  ];

  return (
    <section className="flex  flex-col max-w-[807px]">
      <header className="w-full text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        Already Holding Bitcoin?
      </header>
      <div className="mt-2 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {cardData.map((card, index) => (
            <InfoCard key={`card-${index}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialAdviceSection;
