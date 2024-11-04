import React from "react";
import Button from "../../../globalComponents/shared/button/Button";
import {
  EditIcon,
  TotalAreaIcon,
  TotalFloorsIcon,
  TotalSensorIcon,
} from "../../../assets/svgs";
import { PiMapPinLineLight } from "react-icons/pi";

const Confirmation = ({ setCurrentStep }) => {
  return (
    <div>
      <h4 className="text-[#414141] text-lg md:text-xl font-medium text-center">
        Confirmation
      </h4>
      <div className="mt-4 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <div className="border border-[#959595] rounded-lg bg-[#F5F5F5B2]">
          <div className="flex items-center justify-between shadow-md px-4 md:px-6 py-2">
            <h6 className="text-[10px] font-medium text-[#414141CC]">
              Building Assign
            </h6>
            <div className="cursor-pointer">
              <EditIcon color="#A9A9A9" />
            </div>
          </div>
          <BuildingDetails />
        </div>
        <div className="border border-[#959595] rounded-lg bg-[#F5F5F5B2]">
          <div className="flex items-center justify-between px-4 md:px-6 py-2 shadow-md">
            <h6 className="text-[10px] font-medium text-[#414141CC]">
              Building Assign
            </h6>
            <div className="cursor-pointer">
              <EditIcon color="#A9A9A9" />
            </div>
          </div>
          <div className="h-[250px] overflow-y-scroll overflow-hidden custom-scroll">
            <BuildingCardList />
            <BuildingCardList />
            <BuildingCardList />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-end gap-4 mt-4">
        <Button
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          text="Back"
          width="w-[120px] sm:w-[153px]"
          bg="bg-transparent text-primary border-primary border-[1px] hover:bg-primary hover:text-white"
        />
        <Button text="Confirm" width="w-[120px] sm:w-[153px]" />
      </div>
    </div>
  );
};

export default Confirmation;

const BuildingCardList = () => {
  return (
    <div className="flex flex-wrap border-b">
      <img
        src="https://placehold.co/200x100"
        className="sm:basis-[40%] w-full h-[100px] object-cover"
      />
      <div className="sm:basis-[60%] flex flex-col justify-center px-4 md:px-6 py-2">
        <h4 className="text-sm font-semibold text-[#252424]">Torshov 0476</h4>
        <div className="flex items-center gap-1">
          <PiMapPinLineLight color="#3bf184" />
          <p className="text-[10px] text-gray-500">
            1220 E St NW, Washington, DC 20004
          </p>
        </div>
        <div className="flex items-center justify-center mt-4 md:mt-8">
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

const BuildingDetails = () => {
  return (
    <div className="mt-4 px-4 md:px-6 py-2">
      <BuildingList title="Full name" value="Jhene Michal" />
      <BuildingList title="Email address" value="jhenemichal@gmail.com" />
      <BuildingList title="Phone number" value="239-728473647" />
      <BuildingList title="Password/ID" value="Jhene" />
      <BuildingList title="License number" value="2342342343" />
      <h6 className="text-[11px] font-medium text-[#414141E5] mt-1">
        Description
      </h6>
      <h6 className="text-[11px] font-medium text-[#414141B2] mb-1">
        An Inspection Officer ensures facilities or systems meet safety and
        quality standards by conducting inspections, reporting issues, and
        recommending improvements.
      </h6>
      <BuildingList title="Experience level" value="Experienced" />
      <BuildingList title="Date of birth" value="31-04-1949" />
      <BuildingList title="Address" value="st-24xyz" />
    </div>
  );
};

const BuildingList = ({ title, value }) => {
  return (
    <div className="flex items-center justify-between mb-1">
      <h6 className="text-[11px] font-medium text-[#414141E5]">{title}</h6>
      <h6 className="text-[11px] font-medium text-[#414141B2]">{value}</h6>
    </div>
  );
};

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
