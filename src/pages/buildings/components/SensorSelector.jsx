import React from "react";
import Dropdown from "../../../globalComponents/shared/Dropdown";

const SensorSelector = ({
  floorNumber,
  setFloorNumber,
  floorName,
  setFloorName,
}) => (
  <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
    <div className="w-full md:w-1/2">
      <Dropdown
        options={[
          { option: "Floor 1", value: 1 },
          { option: "Floor 2", value: 2 },
          { option: "Floor 3", value: 3 },
        ]}
        defaultText="Floor number"
        onSelect={setFloorNumber}
      />
    </div>
    <div className="w-full md:w-1/2">
      <Dropdown
        options={[
          { option: "Main Hall", value: "main" },
          { option: "Conference Room", value: "conf" },
          { option: "Lobby", value: "lobby" },
        ]}
        defaultText="Floor Name"
        onSelect={setFloorName}
      />
    </div>
  </div>
);

export default SensorSelector;
