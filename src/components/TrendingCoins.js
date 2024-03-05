import React, { useEffect, useState } from "react";
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
    <div className="flex gap-2 justify-between px-2.5 py-1.5 text-center fill-emerald-500  bg-emerald-50 rounded">
      <img
       
        src={percentageImageSrc}
        alt=''
        className="my-auto aspect-[1.37] fill-emerald-50 w-[11px]"
      />
      <div>{percentage}%</div>
    </div>
  </div>
);

function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  useEffect(() => {
   
      const fetchTrendingCoins = async () => {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        const firstThreeCoins = data.coins.slice(0, 3);
        setTrendingCoins(firstThreeCoins);
      };
    fetchTrendingCoins();
  }, []);
//   const coins = [
//     {
//       name: "Ethereum (ETH)",
//       imageSrc: "Logo ",
//       percentage: "8.21",
//       percentageImageSrc: "",
//     },
//     {
//       name: "Bitcoin (BTC)",
//       imageSrc: "Logo",
//       percentage: "5.26",
//       percentageImageSrc: "lo",
//     },
//     {
//       name: "Polygon (MATIC)",
//       imageSrc: "Logo",
//       percentage: "4.32",
//       percentageImageSrc: "logo",
//     },
//   ];

  return (
    <div className="flex flex-col p-6 text-base font-medium bg-white rounded-lg max-w-[427px]">
      <header className="text-2xl font-semibold leading-7 text-slate-900">
        Trending Coins (24h)
      </header>
      {trendingCoins && trendingCoins.map((coins, index) => (
        <TrendingCoin
          key={coins?.item?.id}
          name={coins?.item.symbol}
          imageSrc={coins?.item.small}
          percentage={coins?.item.data?.price_change_percentage_24h?.usd.toFixed(2)}
            percentageImageSrc={Polygon}
        />
      ))}
    </div>
  );
}

export default TrendingCoins;
