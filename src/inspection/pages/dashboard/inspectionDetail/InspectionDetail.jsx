import React, { useState } from "react";
import BuildingCard from "./components/BuildingCard";
import Accordion from "./components/Accordion";
import Button from "../../../../globalComponents/shared/button/Button";
import Modal from "../../../../globalComponents/shared/Modal";

const InspectionDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const buildingDetail = [
    {
      floor: 1,
      buildingName: "Building A",
      sensorData: [
        {
          sensor: "electricity",
          issues: ["level1", "level 2", "level 3"],
          inspectionDate: "22 July 2024",
          result: 40,
        },
        {
          sensor: "gas",
          issues: ["level1", "level 2", "level 2"],
          inspectionDate: "22 July 2024",
          result: 80,
        },
        {
          sensor: "water",
          issues: ["level1", "level 2", "level 4"],
          inspectionDate: "22 July 2024",
          result: 20,
        },
      ],
    },
    {
      floor: 2,
      buildingName: "Building B",
      sensorData: [
        {
          sensor: "water",
          issues: ["leak", "pressure issue"],
          inspectionDate: "23 July 2024",
          result: 75,
        },
        {
          sensor: "water leakage",
          issues: ["leak", "pressure issue"],
          inspectionDate: "23 July 2024",
          result: 75,
        },
        {
          sensor: "gas",
          issues: ["leak", "pressure issue"],
          inspectionDate: "23 July 2024",
          result: 75,
        },
      ],
    },
    {
      floor: 3,
      buildingName: "Building C",
      sensorData: [
        {
          sensor: "temperature",
          issues: ["leak", "pressure issue"],
          inspectionDate: "23 July 2024",
          result: 75,
        },
        {
          sensor: "other",
          issues: ["leak", "level 2"],
          inspectionDate: "23 July 2024",
          result: 75,
        },
      ],
    },
  ];

  return (
    <div>
      <BuildingCard />
      {buildingDetail?.map((building, i) => (
        <div className="mt-2" key={i}>
          <Accordion floor={building.floor} sensorData={building.sensorData} />
        </div>
      ))}

      <div className="flex justify-end gap-3 mt-4">
        <Button
          text="Cancel"
          bg="text-primary bg-transparent border-primary border-[1px] hover:text-white hover:bg-primary "
        />
        <Button text="Submit" onClick={handleOpenModal} />
      </div>
      {isModalOpen && (
        <Modal onClose={handleOpenModal}>
          <BuildingCard />
          {buildingDetail?.map((building, i) => (
            <div className="mt-2" key={i}>
              <Accordion
                floor={building.floor}
                sensorData={building.sensorData}
              />
            </div>
          ))}

          <div className="flex justify-end gap-3 mt-4">
            <Button
              text="Cancel"
              bg="text-primary bg-transparent border-primary border-[1px] hover:text-white hover:bg-primary "
            />
            <Button text="Confirm" />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default InspectionDetail;
