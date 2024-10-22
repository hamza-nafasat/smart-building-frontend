import { useState } from "react";
import { BlueHome, CustomChevronDown } from "../../../../../assets/svgs";
import SensorsTable from "./SensorsTable";

const Accordion = ({ floor, sensorData }) => {
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
        <div className="flex justify-between items-center py-2 px-4">
          <div className="flex gap-3 items-center">
            <BlueHome />
            <p className="text-sm md:text-base font-[600]">Floor {floor}</p>
          </div>

          <div className="bg-[#007AFF1A] rounded-md p-3 flex justify-center items-center border-primary border-[1px]">
            <span
              className={` transition-all duration-300  ${
                openAccordion ? "rotate-180" : "rotate-0"
              }`}
            >
              <CustomChevronDown />
            </span>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          openAccordion ? "h-auto opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {openAccordion && (
          <div>
            {/* <AccordionBody /> */}
            <SensorsTable sensorData={sensorData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
