import React from "react";
import Button from "../../../globalComponents/shared/button/Button";
import {
  EditIcon,
  TotalAreaIcon,
  TotalFloorsIcon,
  TotalSensorIcon,
} from "../../../assets/svgs";
// import { PiMapPinLineLight } from "react-icons/pi";
import BuildingCardList from "./BuildingCardList";

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
