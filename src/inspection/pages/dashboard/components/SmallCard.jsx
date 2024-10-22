import React from "react";

const SmallCard = ({ card }) => {
  const { icon, count, heading } = card;
  return (
    <div
      className={`border-[1px] shadow-md flex gap-5 justify-center items-center text-black hover:text-white  px-4 py-8 rounded-[30px] bg-white hover:bg-[#007AFF] `}
    >
      <p>{icon}</p>
      <div className="flex flex-col items-center">
        <h6 className="text-sm  w-fit">{heading}</h6>
        <h1 className="text-lg md:text-3xl">{count}</h1>
      </div>
    </div>
  );
};

export default SmallCard;
