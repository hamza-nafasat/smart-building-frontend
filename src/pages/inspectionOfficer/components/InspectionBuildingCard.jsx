import React from "react";
import { PiMapPinLineLight } from "react-icons/pi";
import { TotalAreaIcon, TotalFloorsIcon, TotalSensorIcon } from "../../../assets/svgs";

const InspectionBuildingCard = () => {
  return (
    <div className="rounded-md border border-[#00000033]">
      <img
        src="https://placehold.co/300x400"
        alt="image"
        className="w-full h-[100px] object-cover rounded-tl-md rounded-tr-md"
      />
      <div className="bg-[#e9e9e9] rounded-bl-md rounded-br-md p-4 border-b">
         <h6 className="text-gray-700 text-base md:text-lg font-semibold">Torshov 0476</h6>
         <div className="flex items-center gap-1 border-b border-[#d0d0d0] pb-4">
            <PiMapPinLineLight color="#3bf184" />
            <p className="text-[10px] text-gray-500">1220 E St NW, Washington, DC 20004</p>
         </div>
         <div className="flex items-center justify-center mt-4">
          <FloorList
            title="Total Floors"
            value="93"
            icon={<TotalFloorsIcon />}
          />
          <FloorList
            title="Total Area"
            value="80"
            icon={<TotalAreaIcon />}
            border
          />
          <FloorList
            title="Total Sensors"
            value="1212(sq)"
            icon={<TotalSensorIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default InspectionBuildingCard;

const FloorList = ({ title, value, icon, border }) => {
  return (
    <div
      className={`flex items-center flex-col gap-1 px-4 md:px-8 ${
        border && "border-x border-[#D8D8D8]"
      }`}
    >
      <h6 className="text-center text-[#424242] text-[8px] font-bold">
        {title}
      </h6>
      <div className="flex items-center gap-1">
        {icon}
        <h6 className="text-[8px] font-semibold text-[#4F4F4FB2]">{value}</h6>
      </div>
    </div>
  );
};
