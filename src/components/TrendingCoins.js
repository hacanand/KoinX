import React, { useEffect, useState } from "react";

const TrendingCoin = ({ name, imageSrc, percentage, changeType }) => (
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
    <div
      className={`${
        changeType === "positive"
          ? "text-emerald-400 bg-emerald-500"
          : "text-red-400 bg-red-400"
      } flex px-2 py-1 my-auto text-xs rounded-sm bg-opacity-10`}
    >
      {percentage}
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

  return (
    <div className="flex flex-col  mt-8 p-6 text-base font-medium w-full bg-white rounded-lg max-w-[427px]">
      <header className="text-2xl font-semibold leading-7 text-slate-900">
        Trending Coins (24h)
      </header>
      {trendingCoins &&
        trendingCoins.map((coins, index) => (
          <TrendingCoin
            key={coins?.item?.id}
            name={coins?.item.symbol}
            imageSrc={coins?.item.small}
            percentage={coins?.item.data?.price_change_percentage_24h?.usd.toFixed(
              3
            )}
            changeType={
              coins?.item?.data?.price_change_percentage_24h?.usd > 0
                ? "positive"
                : "negative"
            }
          />
        ))}
    </div>
  );
}

export default TrendingCoins;
