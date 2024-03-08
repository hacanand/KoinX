import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import TradingViewWidget from "./TradingViewChart"; // Import the TradingViewChart component

import BitcoinIcon from "../assets/BitcoinImg.png";

const PriceSummary = ({ price, currency }) => (
  <div className="flex flex-col  text-slate-900">
    <div className="text-2xl font-bold leading-10">${price}</div>
    <div className="  font-medium  ">₹{currency}</div>
  </div>
);
const CryptoInfoCard = () => {
const [idCheck, setIdCheck] = useState("bitcoin");


  function changeType(price) {
    if (price?.usd_24h_change > 0) {
      return "positive";
    } else {
      return "negative";
    }
  }

  const [coinsData, setCoinsData] = useState({});
  const [price, setPrice] = useState({});
  const { id } = useParams();

  function checkIfIdNull() {
    if (id === null || id === undefined || id === "") {
      setIdCheck("bitcoin");
    } else {
      setIdCheck(id);
    }
  }
  useEffect(() => {
  checkIfIdNull();
    fetchPrice();
    fetchCoinData();
  }, [idCheck]);

  const fetchPrice = async () => {
    const data = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${idCheck}&vs_currencies=inr%2Cusd&include_24hr_change=true`
    );
    const response = await data.json();
    setPrice(response[idCheck]);
  };
  const fetchCoinData = async () => {
    const data = await fetch(
      `https://api.coingecko.com/api/v3/coins/${idCheck}`
    );
    const response = await data.json();
    setCoinsData(response);
  };
  console.log(coinsData);
  console.log(price);
  console.log(idCheck,id);
  //max-w-[881px]
  return (
    <section className="flex w-full flex-col py-4 pl-2 h-[695px] bg-white rounded-lg sm:pl-5">
      <header className="flex gap-6 justify-start whitespace-nowrap sm:flex-wrap sm:pr-5 w-full">
        <div className="flex">
          <img
            src={coinsData?.image?.small || BitcoinIcon}
            alt="Bitcoin Icon"
            className="w-9 aspect-square"
          />
          <div className="flex pl-2 mt-1">
            <div className="text-2xl font-semibold text-slate-900">
              {coinsData?.name}
            </div>
            <div className=" font-medium m-2 text-gray-500">
              {coinsData?.symbol}
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="px-2 py-1.5 text-base font-medium leading-5 text-white bg-slate-500 rounded-lg border border-slate-500">
            Rank #1
          </div>
        </div>
      </header>
      <div className="flex gap-5 mb-6 justify-between mt-5 w-full sm:flex-wrap">
        <PriceSummary price={price?.usd} currency={price?.inr} />
        <div className="flex flex-col flex-1 w-full justify-center items-start self-start py-px pr-16 font-medium whitespace-nowrap">
          <div className="flex gap-3 justify-center py-1">
            <div
              className={`px-2.5 py-1.5 text-base text-center ${
                changeType(price) === "positive"
                  ? "text-emerald-400 bg-emerald-100"
                  : "text-red-400 bg-red-100"
              }   rounded flex items-center gap-2`}
            >
              <div>{price?.usd_24h_change?.toFixed(3)}%</div>
            </div>
            <div className=" text-gray-400 mt-1 ">(24h)</div>
          </div>
        </div>
      </div>
      <TradingViewWidget />
    </section>
  );
};

export default CryptoInfoCard;
