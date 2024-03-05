import React from "react";

function InformationSection() {
  return (
    <section className="flex flex-col px-6 pt-7 bg-white rounded-lg max-w-[881px] max-md:px-5">
      <h1 className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        About Bitcoin
      </h1>
      <Article
        title="What is Bitcoin?"
        content="Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC."
      />
      <Divider />
      <Article
        title="Lorem ipsum dolor sit amet"
        content="Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique phasellus. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
      <br /><br />
      Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
      <br /><br />
      Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui"
      />
      <Divider />
      <HoldingBitcoinSection />
      <Divider />
      <p className="mt-4 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
        <br />
        <br />
      </p>
    </section>
  );
}

function Article({ title, content }) {
  return (
    <>
      <h2 className="mt-8 text-lg font-bold leading-5 text-slate-900 max-md:max-w-full">
        {title}
      </h2>
      <p className="mt-2.5 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
        {content}
      </p>
    </>
  );
}

function Divider() {
  return (
    <hr className="shrink-0 mt-4 h-px bg-slate-300 opacity-60 max-md:max-w-full" />
  );
}

function HoldingBitcoinSection() {
  return (
    <section className="mt-4 max-md:max-w-full">
      <h2 className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
        Already Holding Bitcoin?
      </h2>
      <div className="mt-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <ActionCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/42ad733e1ba3caf9e0f7dff3b923a6314b59d61739ec99b6a194292908801e43?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
            altText="Placeholder image for Calculate your Profits"
            actionText="Calculate your Profits"
          />
          <ActionCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d49955e7b08d9715884c9f9f48e87e6101bdd40ef23b2be35fb00b0baa533010?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
            altText="Placeholder image for Calculate your tax liability"
            actionText="Calculate your tax liability"
          />
        </div>
      </div>
    </section>
  );
}

function ActionCard({ imageSrc, altText, actionText }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center pr-4 max-md:mt-4">
        <div className="py-3 pr-7 pl-3 rounded-md max-md:pr-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={imageSrc}
                alt={altText}
                className="w-32 max-w-full aspect-square max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch my-auto leading-7 max-md:mt-10">
                <div className="text-xl font-bold text-white">{actionText}</div>
                <button className="flex justify-center items-center px-6 py-0.5 mt-4 w-full text-sm font-semibold bg-white rounded-lg text-slate-900 max-md:px-5">
                  <span>Check Now</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0247c8ab353cda7b46693a0027f0af09220bdcc84aa39162ce00e1259f37f095?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
                    alt=""
                    className="ml-1.5 w-5 aspect-square"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;
