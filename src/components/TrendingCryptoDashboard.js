import React, { useRef } from "react";

const CoinCard = ({
  imgSrc,
  altText,
  symbol,
  change,
  changeType,
  price,
  chartSrc,
  chartAlt,
}) => (
  <div className="flex flex-none flex-col w-60 px-4 py-5 rounded-xl border border-solid border-gray-300">
    <div className="flex justify-between">
      <div className="flex items-start gap-2 text-neutral-800">
        <img
          loading="lazy"
          src={imgSrc}
          alt={altText}
          className="w-[26px] aspect-square"
        />
        <div>{symbol}</div>
      </div>
      <div
        className={`${
          changeType === "positive"
            ? "text-emerald-400 bg-emerald-500"
            : "text-red-400 bg-red-400"
        } grow justify-center px-1 py-1 my-auto text-xs rounded-sm bg-opacity-10`}
      >
        {change}
      </div>
    </div>
    <div className="mt-3 text-xl font-medium leading-6 text-neutral-900">
      {price}
    </div>
    <img
      loading="lazy"
      src={chartSrc}
      alt={chartAlt}
      className="self-center max-w-full aspect-[2.33] w-[140px]"
    />
  </div>
);

const Carousel = ({ children }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 p-3 text-xl  bg-blue-500 opacity-50 rounded-full focus:outline-none"
      >
        {"<"}
      </button>
      <div
        className="flex gap-4 overflow-x-auto no-scrollbar w-full"
        ref={scrollRef}
      >
        {children}
      </div>
      <button
        onClick={() => scroll("right")}
        className=" absolute right-0 p-3 text-xl bg-blue-500 opacity-50 rounded-full focus:outline-none"
      >
        {">"}
      </button>
    </div>
  );
};

const TrendingCryptoDashboard = () => {
  const coins = [
    // Coin data can be retrieved and set here (repeated for example)
    {
      imgSrc: "https://example.com/coin/bnb.png",
      altText: "BNB Logo",
      symbol: "BNB",
      change: "+0.52%",
      changeType: "positive",
      price: "$319.34",
      chartSrc: "https://example.com/chart/bnb.png",
      chartAlt: "BNB Chart",
    },
    {
      imgSrc: "https://example.com/coin/bnb.png",
      altText: "BNB Logo",
      symbol: "BNB",
      change: "+0.52%",
      changeType: "positive",
      price: "$319.34",
      chartSrc: "https://example.com/chart/bnb.png",
      chartAlt: "BNB Chart",
    },
    {
      imgSrc: "https://example.com/coin/bnb.png",
      altText: "BNB Logo",
      symbol: "BNB",
      change: "+0.52%",
      changeType: "positive",
      price: "$319.34",
      chartSrc: "https://example.com/chart/bnb.png",
      chartAlt: "BNB Chart",
    },
    {
      imgSrc: "https://example.com/coin/bnb.png",
      altText: "BNB Logo",
      symbol: "BNB",
      change: "+0.52%",
      changeType: "positive",
      price: "$319.34",
      chartSrc: "https://example.com/chart/bnb.png",
      chartAlt: "BNB Chart",
    },
    {
      imgSrc: "https://example.com/coin/bnb.png",
      altText: "BNB Logo",
      symbol: "BNB",
      change: "+0.52%",
      changeType: "positive",
      price: "$319.34",
      chartSrc: "https://example.com/chart/bnb.png",
      chartAlt: "BNB Chart",
    },
    {
      imgSrc: "https://example.com/coin/bnb.png",
      altText: "BNB Logo",
      symbol: "BNB",
      change: "+0.52%",
      changeType: "positive",
      price: "$319.34",
      chartSrc: "https://example.com/chart/bnb.png",
      chartAlt: "BNB Chart",
    },
    {
      imgSrc: "https://example.com/coin/bnb.png",
      altText: "BNB Logo",
      symbol: "BNB",
      change: "+0.52%",
      changeType: "positive",
      price: "$319.34",
      chartSrc: "https://example.com/chart/bnb.png",
      chartAlt: "BNB Chart",
    },
    {
      imgSrc: "https://example.com/coin/bnb.png",
      altText: "BNB Logo",
      symbol: "BNB",
      change: "+0.52%",
      changeType: "positive",
      price: "$319.34",
      chartSrc: "https://example.com/chart/bnb.png",
      chartAlt: "BNB Chart",
    },
    {
      imgSrc: "https://example.com/coin/bnb.png",
      altText: "BNB Logo",
      symbol: "BNB",
      change: "+0.52%",
      changeType: "positive",
      price: "$319.34",
      chartSrc: "https://example.com/chart/bnb.png",
      chartAlt: "BNB Chart",
    },
    {
      imgSrc: "https://example.com/coin/bnb.png",
      altText: "BNB Logo",
      symbol: "BNB",
      change: "+0.52%",
      changeType: "positive",
      price: "$319.34",
      chartSrc: "https://example.com/chart/bnb.png",
      chartAlt: "BNB Chart",
    },
    // Repeat your coin objects here
  ];

  return (
    <div className="flex flex-col pb-12 bg-white">
      <div className="flex flex-col px-16 pt-12 pb-8 w-full bg-white md:px-5 md:max-w-full">
        <header>
          <h2 className="text-2xl font-semibold leading-9 text-neutral-800 md:max-w-full">
            You May Also Like
          </h2>
        </header>
        <Carousel>
          {coins.map((coin, index) => (
            <CoinCard key={index} {...coin} />
          ))}
        </Carousel>
        <header>
          <h2 className="mt-8 text-2xl font-semibold leading-9 text-neutral-800 md:max-w-full">
            Trending Coins
          </h2>
        </header>
        <Carousel>
          {coins.map((coin, index) => (
            <CoinCard key={`trending-${index}`} {...coin} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingCryptoDashboard;
