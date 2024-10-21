import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import MappingInfo from "./MappingInfo";
import RoomsInfo from "./RoomsInfo";
import SensorInfo from "./SensorInfo";
import AdditionalInfo from "./AdditionalInfo";
import { BuildingArrowIcon } from "../../../assets/svgs";

const BuildingStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <GeneralInfo setCurrentStep={setCurrentStep} />;
      case 1:
        return <MappingInfo setCurrentStep={setCurrentStep} />;
      case 2:
        return <RoomsInfo setCurrentStep={setCurrentStep} />;
      case 3:
        return <SensorInfo setCurrentStep={setCurrentStep} />;
      case 4:
        return <AdditionalInfo setCurrentStep={setCurrentStep} />;
      default:
        return null;
    }
  };

  const steps = [
    "General Info",
    "Mapping Info",
    "Rooms Info",
    "Sensor Info",
    "Additional Info",
  ];

  return (
    <div className="px-0 md:px-2">
      <h2 className="text-[#414141] text-xl md:text-2xl lg:text-[30px] font-semibold">
        Add Building
      </h2>
      <div className="mt-4 md:mt-6 flex flex-wrap items-center md:justify-center gap-4  :gap-6 2xl:gap-8">
        {steps.map((step, i) => (
          <Step
            step={step}
            index={i}
            key={i}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        ))}
      </div>
      <div className="mt-4 md:mt-6 2xl:mt-8">
        {renderStepContent(currentStep)}
      </div>
    </div>
  );
};

export default BuildingStepper;

const Step = ({ step, index, currentStep, setCurrentStep }) => {
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
      <BuildingArrowIcon />
    </div>
  );
};
