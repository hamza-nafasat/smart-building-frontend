import React from "react";
import { GoDotFill } from "react-icons/go";

import { Link, useNavigate } from "react-router-dom";
import {
  LocationIcon,
  PurpleCalender,
  TotalAreaIcon,
  TotalFloorsIcon,
} from "../../../../../assets/svgs";
import Building from "../../../../../assets/images/default/building-image.png";

const BuildingCard = ({
  id,
  name,
  address,
  sensors,
  temperature,
  tvoc,
  co2,
  link,
}) => {
  return (
    <div className="border-b-[1px] border-[#00000030] p-2 border-[1px] rounded-lg shadow-md">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 py-2">
        <BuildingInfo
          id={id}
          name={name}
          address={address}
          sensors={sensors}
          link={link}
        />
        <SensorInfo />
      </div>
    </div>
  );
};

export default BuildingCard;

const BuildingInfo = ({ name, address, sensors }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-2 ">
      <section className="w-[200px] md:w-[248px] h-[90px] md:h-[118px] border-[1px] rounded-lg  border-black flex-none">
        <img
          src={Building}
          alt="Description"
          className="w-full h-full object-cover rounded-lg "
        />
      </section>
      <div className="flex flex-col justify-center gap-3 ">
        <section className="flex justify-between">
          <div>
            <h2 className="text-sm md:text-base font-[600] w-0 xl:min-w-[200px]">
              Building
            </h2>

            <div className="flex gap-2 items-center">
              {" "}
              <LocationIcon />
              <h6 className="text-xs text-[#47484B]">
                {" "}
                1250 Maryland Avenue SW, Washington, DC 20024
              </h6>
            </div>
          </div>
        </section>
        <section className="flex items-center gap-2">
          <PurpleCalender />
          <div className="flex gap-3 text-[#007AFF]">
            <h3 className="text-xs">24/08/2024</h3>
          </div>
        </section>
      </div>
    </div>
  );
};

const SensorInfo = ({ id, temperature, tvoc, co2, link }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end items-center">
      <div className="flex flex-col min-w-[50%]">
        <div className="mr-2 ">
          <h4 className="text-xs md:text-sm text-[#424242] mb-1 font-[500]">
            Inspection Details:
          </h4>
        </div>
        <div className="p-3 bg-[#007AFF] text-white font-[600] rounded-lg min-w-[80%]">
          <div className="flex justify-between items-center">
            <h3 className="text-xs md:text-base">Details:</h3>
            <h3 className="text-xs md:text-base">Floor 01-05</h3>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-xs md:text-base">Type:</h3>
            <h3 className="text-xs md:text-base">Complete Inspection</h3>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <TotalInfo
            label="Total Floors"
            icon={<TotalFloorsIcon />}
            value={7}
          />
          <TotalInfo label="Total Area" icon={<TotalAreaIcon />} value={78} />
          <TotalInfo
            label="Total Sensors"
            icon={<TotalFloorsIcon />}
            value={120}
          />
        </div>
      </div>
    </div>
  );
};

const TotalInfo = ({ label, icon, value }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-1">
        <p className={`text-center text-[#424242] font-[500]  text-xs`}>
          {label}
        </p>
        <div className="flex items-center space-x-1">
          {icon}
          <p className="text-gray-600 text-xs">{value}</p>
        </div>
      </div>
    </div>
  );
};
