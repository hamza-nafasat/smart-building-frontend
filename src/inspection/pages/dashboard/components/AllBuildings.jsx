import React from "react";
// import { buildings } from '../../../../data/data'

import BuildingCard from "./BuildingCard";
import { SearchIcon } from "../../../../assets/svgs";

export const buildings = [
  {
    id: 1,
    name: "Building 1",
    address: "Lahore",
    sensors: 123,
    temperature: 89,
    tvoc: 96,
    co2: 66,
  },
  {
    id: 2,
    name: "Building 2",
    address: "Lahore",
    sensors: 123,
    temperature: 89,
    tvoc: 96,
    co2: 66,
  },
  {
    id: 3,
    name: "Building 3",
    address: "Lahore",
    sensors: 123,
    temperature: 89,
    tvoc: 96,
    co2: 66,
  },
  {
    id: 4,
    name: "Building 4",
    address: "Lahore",
    sensors: 123,
    temperature: 89,
    tvoc: 96,
    co2: 66,
  },
];
export const floors = [
  {
    id: 1,
    name: "Floor 1",
    address: "Lahore",
    sensors: 123,
    temperature: 89,
    tvoc: 96,
    co2: 66,
  },
  {
    id: 2,
    name: "Floor 2",
    address: "Lahore",
    sensors: 123,
    temperature: 89,
    tvoc: 96,
    co2: 66,
  },
  {
    id: 3,
    name: "Floor 3",
    address: "Lahore",
    sensors: 123,
    temperature: 89,
    tvoc: 96,
    co2: 66,
  },
  {
    id: 4,
    name: "Floor 4",
    address: "Lahore",
    sensors: 123,
    temperature: 89,
    tvoc: 96,
    co2: 66,
  },
  {
    id: 5,
    name: "Floor 5",
    address: "Lahore",
    sensors: 123,
    temperature: 89,
    tvoc: 96,
    co2: 66,
  },
  {
    id: 6,
    name: "Floor 6",
    address: "Lahore",
    sensors: 123,
    temperature: 89,
    tvoc: 96,
    co2: 66,
  },
];

const AllBuildings = ({ title = "List" }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md border-[1px]">
      <div className="flex justify-between sm:flex-row flex-col">
        <h5>{title}</h5>
        <FilterSection />
      </div>
      {buildings.map((building, i) => (
        <BuildingCard
          key={i}
          id={building.id}
          name={building.name}
          address={building.address}
          sensors={building.sensors}
          temperature={building.temperature}
          tvoc={building.tvoc}
          co2={building.co2}
          link={`/inspection/inspection-detail`}
        />
      ))}
    </div>
  );
};

export default AllBuildings;

const FilterSection = () => {
  return (
    <div className="flex flex-wrap  gap-4 sm:mt-0 mt-2">
      <div className="flex items-center gap-1 border border-[#e7e7e7] rounded-lg h-[34px] bg-white px-3 basis-[35%] flex-1">
        <SearchIcon />
        <input
          type="search"
          placeholder="Search"
          className="focus:outline-none text-sm w-full"
        />
      </div>
      <div className="flex items-center justify-between gap-1 border border-[#e7e7e7] rounded-lg h-[34px] bg-white px-3 ">
        <p className="text-sm text-[#7e7e7e]">Sort By:</p>
        <select className="focus:outline-none text-sm">
          <option className="w-full">Newest</option>
          <option className="w-full">Oldest</option>
        </select>
      </div>
    </div>
  );
};
