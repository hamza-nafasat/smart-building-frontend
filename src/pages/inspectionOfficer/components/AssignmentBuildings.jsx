import React from "react";
import Search from "../../../globalComponents/shared/Search";
import Button from "../../../globalComponents/shared/button/Button";
import InspectionBuildingCard from "./InspectionBuildingCard";

const AssignmentBuildings = ({ setCurrentStep }) => {
  const buttonClickHandler = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  return (
    <div>
      <h4 className="text-[#414141] text-lg md:text-xl font-medium text-center">
        Assignment Buildings
      </h4>
      <div className="mt-4 border border-[#41414129] rounded-md shadow-md">
        <div className="flex flex-wrap gap-4 px-4 md:px-8 items-center justify-between py-2 shadow-md">
          <h6 className="text-sm font-semibold text-[#414141CC]">
            Building Details
          </h6>
          <Search />
        </div>
        <div className="p-2 h-[328px] overflow-y-scroll custom-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <InspectionBuildingCard key={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-end gap-4 mt-4">
        <Button
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          text="Back"
          width="w-[120px] sm:w-[153px]"
          bg="bg-transparent text-primary border-primary border-[1px] hover:bg-primary hover:text-white"
        />
        <Button onClick={buttonClickHandler} text="Next" width="w-[120px] sm:w-[153px]" />
      </div>
    </div>
  );
};

export default AssignmentBuildings;
