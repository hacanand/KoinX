import React from "react";
import Polygon from "../assets/Polygon.png";

const TrendingCoin = ({ name, imageSrc, percentage, percentageImageSrc }) => (
  <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
    <div className="flex gap-1.5 my-auto leading-[150%] text-slate-900">
      <img
        loading="lazy"
        src={imageSrc}
        alt={name}
        className="w-6 aspect-square"
      />
      <div className="grow">{name}</div>
    </div>
    <div className="flex gap-2 justify-between px-2.5 py-1.5 text-center text-emerald-500 bg-emerald-50 rounded">
      <img
        loading="lazy"
        src={percentageImageSrc}
        alt
        className="my-auto aspect-[1.37] fill-emerald-500 w-[11px]"
      />
      <div>{percentage}%</div>
    </div>
  </div>
);

function TrendingCoins() {
  const coins = [
    {
      name: "Ethereum (ETH)",
      imageSrc:
        "Logo ",
      percentage: "8.21",
      percentageImageSrc: ""
      
    },
    {
      name: "Bitcoin (BTC)",
      imageSrc:
        "Logo",
      percentage: "5.26",
      percentageImageSrc:
        "lo",
    },
    {
      name: "Polygon (MATIC)",
      imageSrc:
        "Logo",
      percentage: "4.32",
      percentageImageSrc:
        "logo",
    },
  ];

  return (
    <div className="flex flex-col p-6 text-base font-medium bg-white rounded-lg max-w-[427px]">
      <header className="text-2xl font-semibold leading-7 text-slate-900">
        Trending Coins (24h)
      </header>
      {coins.map((coin, index) => (
        <TrendingCoin
          key={index}
          name={coin.name}
          imageSrc={coin.imageSrc}
          percentage={coin.percentage}
          percentageImageSrc={coin.percentageImageSrc}
        />
      ))}
    </div>
  );
}

export default TrendingCoins;
