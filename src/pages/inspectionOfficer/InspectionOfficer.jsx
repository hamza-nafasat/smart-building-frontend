import React, { useState } from "react";
import { BuildingArrowIcon } from "../../assets/svgs";
import GeneralInformation from "./components/GeneralInformation";
import AssignmentBuildings from "./components/AssignmentBuildings";
import Confirmation from "./components/Confirmation";

const InspectionOfficer = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <GeneralInformation setCurrentStep={setCurrentStep} />;
      case 1:
        return <AssignmentBuildings setCurrentStep={setCurrentStep} />;
      case 2:
        return <Confirmation setCurrentStep={setCurrentStep} />;
      default:
        return null;
    }
  };

  const steps = ["General Information", "Assignment Buildings", "Confirmation"];

  return (
    <div className="px-0 md:px-2">
      <h2 className="text-[#414141] text-xl md:text-2xl lg:text-[30px] font-semibold">
        Add Inspections Officer
      </h2>
      <div className="mt-4 md:mt-6 flex flex-wrap items-center md:justify-center gap-4  :gap-6 2xl:gap-8">
        {steps.map((step, i) => (
          <Step
            step={step}
            index={i}
            key={i}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            stepsLength={steps.length}
          />
        ))}
      </div>
      <div className="mt-4 md:mt-6 2xl:mt-8">
        {renderStepContent(currentStep)}
      </div>
    </div>
  );
};

export default InspectionOfficer;

const Step = ({ step, index, currentStep, setCurrentStep, stepsLength }) => {
  return (
    <div
      className={`flex items-center gap-1 ${
        currentStep >= index
          ? "opacity-100 cursor-pointer"
          : "opacity-50 grayscale pointer-events-none"
      }`}
      onClick={() => setCurrentStep(index)}
    >
      <span className="w-[32px] h-[32px] rounded-full border-2 border-[#007AFF] text-[#007AFF] text-xl font-semibold grid place-items-center">
        {index + 1}
      </span>
      <p className="text-xs sm:text-sm text-[#007AFF] font-medium">{step}</p>
      {index < stepsLength - 1 && <BuildingArrowIcon />}
    </div>
  );
};
