import React, { useState } from "react";
import Button from "../../../globalComponents/shared/button/Button";
import Input from "../../../globalComponents/shared/Input";
import TextArea from "../../../globalComponents/shared/TextArea";
import Dropdown from "../../../globalComponents/shared/Dropdown";

const GeneralInformation = ({ setCurrentStep }) => {
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
          <Input type="text" placeholder="First name" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="text" placeholder="Last name" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="email" placeholder="Email Address" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="tel" placeholder="Phone number" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="number" placeholder="Password/ID" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="number" placeholder="License number" />
        </div>
        <div className="col-span-12">
          <TextArea placeholder="Description" rows={4} />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Dropdown
            options={[{ option: "Junior" }, { option: "Senior" }]}
            defaultText="Experience level"
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="number" placeholder="Date of birth" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Input type="text" placeholder="Address" />
        </div>
        <div className="col-span-12 flex justify-end">
          <Button onClick={buttonClickHandler} text="Next" width="w-[120px] sm:w-[153px]" />
        </div>
      </form>
    </div>
  );
};

export default GeneralInformation;
