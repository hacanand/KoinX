import React from "react";
import SvgInfo from "../assets/SVG.png";
import PolyGon from "../assets/Polygon.png";
// Statistic information component for reusability
const StatisticInfo = ({ title, value }) => (
  <div className="flex flex-col pt-1.5 pb-3.5 text-gray-700 whitespace-nowrap">
    <div className="text-sm leading-5">{title}</div>
    <div className="mt-2.5 text-base font-medium leading-6">{value}</div>
  </div>
);

// Indicator component
const Indicator = () => (
  <div className="flex flex-col flex-1 justify-center my-auto rounded-lg bg-neutral-900 bg-opacity-30">
    <div className="shrink-0 rounded-xl h-[5px]" />
  </div>
);

// Information block component
const InformationBlock = ({ label, value }) => (
  <div className="flex flex-col grow pr-10 font-medium">
    <div className="flex justify-between py-4 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
      <div className="text-sm leading-5 text-slate-500">{label}</div>
      <div className="text-sm leading-5 text-right text-gray-900">{value}</div>
    </div>
  </div>
);

// Header component
const PageHeader = ({ title }) => (
  <header className="text-2xl font-semibold leading-7 text-slate-900">
    {title}
  </header>
);

function NavigationBarDashboard() {
  return (
    <section className="flex flex-col px-6 pt-7 pb-12 bg-white rounded-lg max-w-[881px] md:px-5">
      <PageHeader title="Performance" />
      <div className="flex gap-2 px-px mt-8 md:flex-wrap">
        <StatisticInfo title="Today’s Low" value="46,930.22" />
        <Indicator />
        <img
          src={PolyGon}
          alt=""
          className="mr-32 text-black h-[10px] w-[10px]  md:mr-2.5"
        />
        <div className="mt-2 mr-24 text-sm leading-5 text-gray-700 md:mr-2.5">
          
          $48,637.83
        </div>
        <StatisticInfo title="Today’s High" value="49,343.83" />
      </div>

      <div className="flex gap-2 px-px mt-4 md:flex-wrap">
        <StatisticInfo title="52W Low" value="16,930.22" />
        <Indicator />
        <StatisticInfo title="52W High" value="49,743.83" />
      </div>

      <div className="flex gap-1.5 self-start pr-20 mt-10 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap md:flex-wrap md:pr-5">
        <div className="grow">Fundamentals</div>
        <img
          src={SvgInfo}
          alt=""
          className="w-5 aspect-square"
        />
      </div>

      <div className="mt-4">
        <div className="flex gap-5 md:flex-col">
          <div className="flex flex-col w-6/12 md:w-full">
            <InformationBlock label="Bitcoin Price" value="$16,815.46" />
            <InformationBlock
              label="24h Low / 24h High"
              value="$16,382.07 / $16,874.12"
            />
            <InformationBlock
              label="7d Low / 7d High"
              value="$16,382.07 / $16,874.12"
            />
            <InformationBlock label="Trading Volume" value="$23,249,202,782" />
            <InformationBlock label="Market Cap Rank" value="#1" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 md:ml-0 md:w-full">
            <InformationBlock label="Market Cap" value="$323,507,290,047" />
            <InformationBlock label="Market Cap Dominance" value="38.343%" />
            <InformationBlock label="Volume / Market Cap" value="0.0718" />
            <InformationBlock
              label="All-Time High"
              value="$69,044.77 -75.6% Nov 10, 2021 (about 1 year)"
            />
            <InformationBlock
              label="All-Time Low"
              value="$67.81 24729.1% Jul 06, 2013 (over 9 years)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavigationBarDashboard;
