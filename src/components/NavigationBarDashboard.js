import React from "react";
import SvgInfo from "../assets/SVG.png";
import PolyGon from "../assets/Polygon.png";
import CryptoStats from "./CryptoStats";
// Statistic information component for reusability
const StatisticInfo = ({ title, value }) => (
  <div className="flex flex-col pt-1.5 pb-3.5 text-gray-700 whitespace-nowrap">
    <div className="text-sm leading-5">{title}</div>
    <div className="mt-2.5 text-base font-medium leading-6">{value}</div>
  </div>
);

// Indicator component
const Indicator = () => (
  <div className="flex flex-col flex-1 justify-center  my-auto rounded-lg bg-gradient-to-r from-red-600 to-green-400">
    <div className="shrink-0 rounded-xl h-2" />
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
    <section className="flex flex-col px-6 pt-7 pb-12 bg-white rounded-lg w-full md:px-5">
      <PageHeader title="Performance" />
      <div className="flex gap-2 px-px mt-4 md:flex-wrap relative">
        <StatisticInfo title="Today’s Low" value="46,930.22" />
        <Indicator />
        <img
          src={PolyGon}
          alt=""
          className="absolute top-10 right-24 md:right-48 h-4 w-4"
        />
        <div className="absolute top-10  right-24 md:right-28 text-sm md:leading-5 text-gray-700 md:mr-2.5">
          $48,637.83
        </div>
        <StatisticInfo title="Today’s High" value="49,343.83" />
      </div>

      <div className="flex gap-2 px-px mt-4 md:flex-wrap">
        <StatisticInfo title="52W Low" value="16,930.22" />
        <Indicator />
        <StatisticInfo title="52W High" value="49,743.83" />
      </div>
 <CryptoStats/>
    </section>
  );
}

export default NavigationBarDashboard;
