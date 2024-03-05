import React from "react";

// Reusable component for team member cards
const TeamMemberCard = ({ imageSrc, altText, name, designation, bio }) => {
  return (
    <div className="p-3 mt-6 bg-indigo-50 rounded-lg border-0 border-solid border-[color:var(--Absolute-SecondaryAccent-1,#0082FF)] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-4 text-center whitespace-nowrap max-md:mt-7">
            <img loading="lazy" src={imageSrc} alt={altText} className="self-center aspect-[0.93] w-[98px]" />
            <div className="mt-3.5 text-base font-semibold text-slate-900">{name}</div>
            <div className="mt-1 text-xs font-medium text-slate-500">{designation}</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
          <div className="self-stretch my-auto text-sm leading-6 text-slate-900 max-md:mt-10 max-md:max-w-full">
            {bio}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMembers = () => {
  const teamMembers = [
    { 
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fbb7bc3590db19a0f8528929c80d00b04c09f9713daf447a9b39dbebbf90007?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&",
      altText: "John Smith",
      name: "John Smith",
      designation: "Designation here",
      bio: "Lorem ipsum dolor sit amet consectetur... interdu"
    },
    { 
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7845ff58962c35e9bb1b56b9a0f2bbf7e5217a79bc3affe142491d3507eb8ee1?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&",
      altText: "Elina Williams",
      name: "Elina Williams",
      designation: "Designation here",
      bio: "Lorem ipsum dolor sit amet consectetur... interdu"
    },
    { 
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f57a082fad39fa53f60d6eb9ee40719da09c0001b5134b164aadfa213804d2f?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&",
      altText: "Alex Johnson",
      name: "Alex Johnson",
      designation: "Designation here",
      bio: "Lorem ipsum dolor sit amet consectetur... interdu"
    },
  ];

  return (
    <section className="flex flex-col py-9 pl-6 bg-white rounded-lg max-w-[881px] max-md:pl-5">
      <header className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">Team</header>
      <div className="mt-8 mr-7 text-base font-medium leading-7 text-zinc-700 max-md:mr-2.5 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </div>
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </section>
  );
};

export default TeamMembers;
 