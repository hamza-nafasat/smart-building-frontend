import React from "react";

const MappingInfo = ({ setCurrentStep }) => {
  const buttonClickHandler = () => setCurrentStep((prevStep) => prevStep + 1);
  return (
    <div>
      <h4 className="text-[#414141] text-lg md:text-xl font-medium text-center">
        Mapping Info
      </h4>

      <button onClick={() => setCurrentStep((prevStep) => prevStep - 1)}>
        Back
      </button>
      <button onClick={buttonClickHandler}>Next</button>
    </div>
  );
};

export default MappingInfo;