import React from "react";

const AdditionalInfo = ({ setCurrentStep }) => {
  return (
    <div>
      <h4 className="text-[#414141] text-lg md:text-xl font-medium text-center">
        Additional Info
      </h4>

      <button onClick={() => setCurrentStep((prevStep) => prevStep - 1)}>
        Back
      </button>
      <button>Add Building</button>
    </div>
  );
};

export default AdditionalInfo;
