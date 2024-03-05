import React from "react";
import Info from '../assets/SVG.png'

// Reusable Component for Analyst Figures
const AnalystFigure = ({ label, percentage, barWidth, barColor }) => (
  <div className="flex gap-2.5 justify-between py-2 max-md:flex-wrap max-md:max-w-full">
    <div className="text-base leading-6">{label}</div>
    <div className={`my-auto h-2 rounded-sm ${barColor} w-[${barWidth}px]`} />
    <div className="flex-auto text-sm leading-5">{percentage}%</div>
  </div>
);

const AnalystEstimates = () => {
  const analystData = [
    { label: "Buy", percentage: 76, barWidth: 349, barColor: "bg-emerald-500" },
    { label: "Hold", percentage: 8, barWidth: 33, barColor: "bg-neutral-300" },
    { label: "Sell", percentage: 16, barWidth: 66, barColor: "bg-red-500" },
  ];

  return (
    <div className="flex flex-col max-w-[710px]">
      <header className="flex gap-1.5 justify-between pr-20 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <h1>Analyst Estimates</h1>
        <img
          loading="lazy"
          src={Ingo}
          alt="Insight icon"
          className="w-5 aspect-square"
        />
      </header>
      <section className="mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
            <div className="flex justify-center items-center self-stretch px-8 mx-auto font-medium text-emerald-500 whitespace-nowrap bg-emerald-50 h-[119px] rounded-[59.22px] w-[119px] max-md:px-5 max-md:mt-10">
              <div className="flex gap-0.5 justify-between py-1.5">
                <div className="grow text-4xl">76</div>
                <div className="grow my-auto text-base leading-6">%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow self-stretch my-auto font-medium text-gray-500 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
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
