import React, { useState } from "react";
import Button from "../../../globalComponents/shared/button/Button";
import Dropdown from "../../../globalComponents/shared/Dropdown";
import Input from "../../../globalComponents/shared/Input";
import TextArea from "../../../globalComponents/shared/TextArea";
import { FaChevronDown } from "react-icons/fa";

let floorCount = new Array(2).fill();

console.log(floorCount);
const RoomsInfo = ({ setCurrentStep }) => {
  const buttonClickHandler = () => setCurrentStep((prevStep) => prevStep + 1);
  return (
    <div>
      <h4 className="text-[#414141] text-lg md:text-xl font-medium text-center mb-4">
        Room Info
      </h4>
      {floorCount.map((floor, i) => (
        <div key={i} className="my-4">
          <Accordion floorNumber={i + 1} />
        </div>
      ))}

      <div className="flex flex-wrap items-center justify-end gap-4 mt-4">
        <Button
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          text="Back"
          width="w-[153px]"
          bg="bg-transparent text-primary border-primary border-[1px] hover:bg-primary hover:text-white"
        />
        <Button onClick={buttonClickHandler} text="Next" width="w-[153px]" />
      </div>
    </div>
  );
};

export default RoomsInfo;

const Accordion = ({ floorNumber }) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const handleOpenAccordion = () => {
    setOpenAccordion(!openAccordion);
  };
  return (
    <div className="border-[1px]  rounded-xl shadow-sm">
      <div
        className={`cursor-pointer hover:bg-[#00000005]  ${
          openAccordion && "border-b-[1px]"
        }`}
        onClick={handleOpenAccordion}
      >
        <div className="flex justify-between items-center p-5">
          <p>Floor {floorNumber}</p>
          <span
            className={`transition-all duration-300  ${
              openAccordion ? "rotate-180" : "rotate-0"
            }`}
          >
            <FaChevronDown fontSize={12} className="text-[#9CA3AF]" />
          </span>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          openAccordion ? "h-auto opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {openAccordion && (
          <div className="p-5">
            <AccordionBody />
          </div>
        )}
      </div>
    </div>
  );
};

const AccordionBody = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 gap-4">
        <div className="col-span-3 lg:col-span-1">
          <Dropdown
            options={[
              { option: "Floor 1" },
              { option: "Floor 2" },
              { option: "Floor 3" },
            ]}
            defaultText="Floor number"
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Input type="text" placeholder="Floor name/ID" />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Input type="text" placeholder="Total rooms" />
        </div>
        <div className="col-span-3">
          <TextArea placeholder="Description" rows={3} />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Dropdown
            options={[
              { option: "type 1" },
              { option: "type 2" },
              { option: "type 3" },
            ]}
            defaultText="Floor type"
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Input type="number" placeholder="Floor area(sq ft/m)" />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Input type="tel " placeholder="Contact details" />
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button text="Save" width="w-[153px]" />
      </div>
    </div>
  );
};
