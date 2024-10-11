import React from "react";
import Progress from "./Progress";

const UsageCard = ({ heading, icon, percentage, color }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border-[1px]">
      <div className="flex gap-3 items-start">
        <div>
          <Progress percentage={percentage} color={color} />
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              <p className="text-xs sm:text-sm text-[#11111199] font-[500]">
                {heading}
              </p>
              <p className="text-[8px] sm:text-[10px] text-[#8FF96A]">
                Energy Savings: 25%
              </p>
              <p className="text-[8px] sm:text-[10px] text-[#E72F2F99]">
                Max Usage: 85%
              </p>
              <p className="text-[8px] sm:text-[10px] text-[#007AFF]">
                Min Usage: 15%
              </p>
              <p className="text-[8px] sm:text-[10px]">AVG Usage: 45%</p>
            </div>
            <div className="flex justify-end grow">{icon}</div>
          </div>
          <div className="mt-1">
            <p className="text-xs text-[#11111199]">
              Description: <br />
              Monitors real-time energy consumption, optimizing distribution and
              reducing usage by 25%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageCard;
