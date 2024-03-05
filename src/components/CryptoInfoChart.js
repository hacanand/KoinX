import React from "react";
import TradingViewWidget from "./TradingViewChart"; // Import the TradingViewChart component
import Polygon from "../assets/Polygon.png";
import BitcoinIcon from "../assets/BitcoinImg.png";

const PriceSummary = ({ price, currency }) => (
  <div className="flex flex-col  text-slate-900">
    <div className="text-2xl font-bold leading-10">{price}</div>
    <div className="  font-medium  ">{currency}</div>
  </div>
);
const CryptoInfoCard = () => {
  return (
      <section className="flex flex-col py-4 pl-2  h-[711px] bg-white rounded-lg max-w-[881px] sm:pl-5">
        <header className="flex gap-6 justify-start whitespace-nowrap sm:flex-wrap sm:pr-5 sm:max-w-full">
          <div className="flex">
            <img
              src={BitcoinIcon}
              alt="Bitcoin Icon"
              className="w-9 aspect-square"
            />
            <div className="flex pl-2 mt-1">
              <div className="text-2xl font-semibold text-slate-900">
                Bitcoin
              </div>
              <div className=" font-medium m-2 text-gray-500">BTC</div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="px-2 py-1.5 text-base font-medium leading-5 text-white bg-slate-500 rounded-lg border border-slate-500">
              Rank #1
            </div>
          </div>
        </header>
        <div className="flex gap-5 mb-6 justify-between mt-5 max-w-full w-[583px] sm:flex-wrap">
          <PriceSummary price="$46,953.04" currency="₹ 39,42,343" />
          <div className="flex flex-col flex-1 justify-center items-start self-start py-px pr-16 font-medium whitespace-nowrap">
            <div className="flex gap-3 justify-center py-1">
              <div className="px-2.5 py-1.5 text-base text-center text-emerald-500 bg-emerald-50 rounded flex items-center gap-2">
                <img
                  src={Polygon}
                  alt=""
                  className="my-auto aspect-square fill-emerald-500 w-[11px]"
                />
                <div>2.51%</div>
              </div>
              <div className=" text-gray-400 ">(24h)</div>
            </div>
          </div>
        </div>
        <TradingViewWidget />
      </section>
    
  );
};

export default CryptoInfoCard;
