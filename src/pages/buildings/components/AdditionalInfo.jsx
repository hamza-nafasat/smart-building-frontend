import React from "react";
import Button from "../../../globalComponents/shared/button/Button";

const AdditionalInfo = ({ setCurrentStep }) => {
  return (
    <div>
      <h4 className="text-[#414141] text-lg md:text-xl font-medium text-center">
        Additional Info
      </h4>

      <div className="flex flex-wrap items-center justify-end gap-4">
        <Button
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          bg="#fff"
          textColor="#007aff"
          borderColor="#007aff"
          text="Back"
          width="w-[153px]"
        />
        <Button text="Add Building" width="w-[153px]" />
      </div>
    </div>
  );
};

export default AdditionalInfo;
