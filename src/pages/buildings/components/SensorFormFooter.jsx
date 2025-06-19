import React from "react";
import Button from "../../../globalComponents/shared/button/Button";

const SensorFormFooter = ({ onAdd, onCancel, onNext, setCurrentStep }) => (
  <>
    <div className="mt-4">
      <Button
        text="Add more sensor"
        bg="bg-white text-black border border-black"
        onClick={onAdd}
      />
    </div>
    <div className="flex justify-end gap-4 mt-8">
      <Button
        text="Back"
        bg="bg-transparent text-primary border-primary border-[1px] hover:bg-primary hover:text-white"
        onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
      />
      <Button text="Submit" onClick={onNext} />
    </div>
  </>
);

export default SensorFormFooter;
