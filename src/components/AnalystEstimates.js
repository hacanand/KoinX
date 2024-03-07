import React from "react";
import Info from "../assets/SVG.png";

// Reusable Component for Analyst Figures
//how to make width dynamic
 

const AnalystFigure = ({ label, bgColor, width, percentage }) => (
  <div className="flex gap-1.5 justify-between py-2 pr-2  max-md:max-w-full">
    <div className="text-base leading-6">{label}</div>
    <div
      className={`my-auto max-w-full h-2 ${[bgColor]} rounded-md`}
      style={{ width }}
    ></div>
    <div className="flex-auto text-sm leading-5">{percentage}</div>
  </div>
);

const AnalystEstimates = () => {
    const analystData = [
    {
      label: "Buy",
      bgColor: "bg-emerald-500",
      width: "349px",
      percentage: "76%",
    },
    {
      label: "Hold",
      bgColor: "bg-neutral-300",
      width: "33px",
      percentage: "8%",
    },
    {
      label: "Sell",
      bgColor: "bg-red-500",
      width: "66px",
      percentage: "16%",
    },
  ];


  return (
    <div className="flex m-4 flex-col max-w-full">
      <header className="flex gap-2 pr-20 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <h1>Analyst Estimates</h1>
        <img loading="lazy" src={Info} alt="Insight icon" />
      </header>
      <section className="mt-4 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[16%] h-[16%] max-md:ml-0 max-md:w-full">
            <div className="flex justify-center items-center self-stretch px-6 mx-auto font-medium text-emerald-500 whitespace-nowrap bg-emerald-50 h-[119px] w-[119px] rounded-[59.22px] max-md:px-5 max-md:mt-5">
              <div className="flex gap-0.5 justify-between md:py-1.5">
                <div className=" text-4xl">76</div>
                <div className="my-auto text-base leading-6">%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-10 max-w-[75%] justify-center max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto font-medium text-gray-500 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
              {analystData.map((item, index) => (
                <AnalystFigure key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalystEstimates;
