import React from "react";
import Button from "../../../globalComponents/shared/button/Button";
import Dropdown from "../../../globalComponents/shared/Dropdown";
import Input from "../../../globalComponents/shared/Input";
import TextArea from "../../../globalComponents/shared/TextArea";

const RoomsInfo = ({ setCurrentStep }) => {
  const buttonClickHandler = () => setCurrentStep((prevStep) => prevStep + 1);

  return (
    <div>
      <h4 className="text-[#414141] text-lg md:text-xl font-medium text-center">
        Room Info
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 gap-4">
        <Dropdown
          options={[
            { option: "Floor 1" },
            { option: "Floor 2" },
            { option: "Floor 3" },
          ]}
          defaultText="Floor number"
        />
        <Input type="text" placeholder="Floor name/ID" />
        <Input type="text" placeholder="Total rooms" />
      <div className="md:col-span-2 xl:col-span-3 mt-4">
        <TextArea placeholder="Description" />
      </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 gap-4">
        <Dropdown
          options={[
            { option: "type 1" },
            { option: "type 2" },
            { option: "type 3" },
          ]}
          defaultText="Floor type"
        />
        <Input type="number" placeholder="Floor area(sq ft/m)" />
        <Input type="tel " placeholder="Contact details" />
      </div>

      <div className="flex flex-wrap items-center justify-end gap-4 mt-4">
        <Button
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          bg="#fff"
          textColor="#007aff"
          borderColor="#007aff"
          text="Back"
          width="w-[153px]"
        />
        <Button onClick={buttonClickHandler} text="Next" width="w-[153px]" />
      </div>
    </div>
  );
};

export default RoomsInfo;
