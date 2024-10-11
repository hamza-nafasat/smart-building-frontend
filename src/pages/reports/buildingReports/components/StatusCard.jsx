import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
const StatusCard = ({ icon, heading }) => {
  const isUp = true;
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border-[1px]">
      <div className="flex gap-5 items-center">
        {icon}
        <div>
          <h3 className="text-xs sm:text-sm font-[400] text-[#383838]">
            {heading}
          </h3>
          <h3 className="text-xl sm:text-2xl font-[500] text-[#383838]">
            25MWh
          </h3>
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className={`flex items-center gap-1  rounded-lg p-1 font-[500] ${
            isUp
              ? "text-[#61CA94] bg-[#61CA9430]"
              : "text-[#FA3D45] bg-[#FA3D4530]"
          } `}
        >
          <p className="text-xs">80%</p>{" "}
          {isUp ? (
            <GoArrowUpRight fontSize={14} />
          ) : (
            <GoArrowDownRight fontSize={14} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
