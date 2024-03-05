import React from "react";
import sentimentMsgIcon from "../assets/sentimentMsgIcon.png";
import sentimentGraphIcon from "../assets/sentimentGraphIcon.png";
import SvgInfo from '../assets/SVG.png'

const InfoCard = ({ imageSrc, altText, title, description }) => (
  <div className="flex flex-col grow self-stretch px-5 pt-5 pb-10 w-full text-sm leading-5 bg-indigo-50 rounded-xl border-0 max-md:mt-3.5 max-md:max-w-full">
    <div className="flex gap-2 justify-between py-px">
      <img
        loading="lazy"
        src={imageSrc}
        alt={altText}
        className="self-start w-11 aspect-square"
      />
      <div className="flex flex-col flex-1">
        <div className="font-medium text-zinc-900">{title}</div>
        <div className="mt-2 text-slate-600">{description}</div>
      </div>
    </div>
  </div>
);

const SentimentAnalysis = () => {
  const infoCards = [
    {
      imageSrc:{sentimentMsgIcon}
        ,
      altText: "description for image 1",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.",
    },
    {
      imageSrc:
        {sentimentGraphIcon},
      altText: "description for image 2",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.",
    },
  ];

  return (
    <div className="flex flex-col px-6 pt-7 pb-12 bg-white rounded-lg max-w-[881px] max-md:px-5">
      <header className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        Sentiment
      </header>
      <div className="flex gap-1.5 justify-between pr-20 mt-6 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-start ">Key Events</div>
        <img
          loading="lazy"
          src={SvgInfo}
          alt="key events icon"
          className="w-5 aspect-square"
        />
      </div>
      <section className="mt-4 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </section>
      <div className="flex gap-1.5 justify-between pr-20 mt-8 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="grow">Analyst Estimates</div>
        <img
          loading="lazy"
          src={SvgInfo}
          alt="analyst estimates icon"
          className="w-5 aspect-square"
        />
      </div>
      <section className="mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {/* Repeat similar structure for Analyst Estimates as per design specs */}
        </div>
      </section>
    </div>
  );
};

export default SentimentAnalysis;
