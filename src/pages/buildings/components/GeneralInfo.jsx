import React, { useState } from "react";
import Button from "../../../globalComponents/shared/button/Button";
import Input from "../../../globalComponents/shared/Input";
import TextArea from "../../../globalComponents/shared/TextArea";
import Dropdown from "../../../globalComponents/shared/Dropdown";

const GeneralInfo = ({ setCurrentStep }) => {
  const [floorCount, setFloorCount] = useState();
  const handleChange = (e) => {
    setFloorCount(e.target.value);
  };

  const buttonClickHandler = () => {
    console.log("floor count", floorCount);
    setCurrentStep((prevStep) => prevStep + 1);
  };
  return (
    <div>
      <h4 className="text-[#414141] text-lg md:text-xl font-medium text-center">
        General Building Information
      </h4>
      <form className="mt-4 md:mt-6 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <Input type="text" placeholder="Building name" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="text" placeholder="Building address" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="text" placeholder="Owner/Manager name" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="tel" placeholder="Phone number" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="email" placeholder="Email address" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="number" placeholder="Total area (sq ft/m)" />
        </div>
        <div className="col-span-12">
          <TextArea placeholder="Description" rows={4} />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="number" placeholder="Number of floors" />
        </div>
        {/* <div className="col-span-12 lg:col-span-4">
          <Input type="number" placeholder="Total area (sq ft/m)" />
        </div> */}
        <div className="col-span-12 lg:col-span-4">
          <Input type="number" placeholder="Year of construction" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input
            type="number"
            placeholder="Total floors"
            onChange={handleChange}
            value={floorCount}
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Dropdown
            options={[{ option: "public" }, { option: "private" }]}
            defaultText="Building type"
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="text" placeholder="Other details" />
        </div>
        <div className="col-span-12 flex justify-end">
          <Button onClick={buttonClickHandler} text="Next" width="w-[153px]" />
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
