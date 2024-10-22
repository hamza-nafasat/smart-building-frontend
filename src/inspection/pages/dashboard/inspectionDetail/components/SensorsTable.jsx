import React, { useState } from "react";
import DataTable from "react-data-table-component";
import CircularProgressBar from "../../../../../globalComponents/CircularProgressBar/CircularProgressBar";
import {
  BuildingIcon,
  BuildingsIcon,
  Calender,
  DateofInspection,
  ElectricityIcon,
  FeedbackIcon,
  GasIcon,
  InspectionOfficer,
  InspectionType,
  IssuesIcon,
  LeakageIcon,
  RatingIcon,
  ResultIcon,
  SensorsIcon,
  TemperatureIcon,
  WaterIcon,
} from "../../../../../assets/svgs/index";
import TextArea from "../../../../../globalComponents/shared/TextArea";

// Sample sensor data
export const sensorData = [
  {
    sensor: "electricity",
    issues: ["level1", "level 2", "level 3"],
    building: "Building A",
    inspectionDate: "22 July 2024",
    result: 40,
  },
  {
    sensor: "water",
    issues: ["leak", "pressure issue"],
    building: "Building B",
    inspectionDate: "23 July 2024",
    result: 75,
  },
  {
    sensor: "water leakage",
    issues: ["leak", "pressure issue"],
    building: "Building B",
    inspectionDate: "23 July 2024",
    result: 75,
  },
  {
    sensor: "gas",
    issues: ["leak", "pressure issue"],
    building: "Building B",
    inspectionDate: "23 July 2024",
    result: 75,
  },
  {
    sensor: "temperature",
    issues: ["leak", "pressure issue"],
    building: "Building B",
    inspectionDate: "23 July 2024",
    result: 75,
  },
  {
    sensor: "other",
    issues: ["leak", "pressure issue"],
    building: "Building B",
    inspectionDate: "23 July 2024",
    result: 75,
  },
];

const SensorsTable = ({ sensorData }) => {
  // State to track selected issues for each sensor
  const [selectedIssues, setSelectedIssues] = useState({});
  const [sensorFeedback, setSensorFeedback] = useState(sensorData);
  const handleRatingChange = (index, value) => {
    const newSensorData = [...sensorFeedback];
    const ratingValue = Math.max(0, Math.min(10, Number(value))); // Ensures rating is between 0 and 10
    newSensorData[index].rating = ratingValue;
    setSensorFeedback(newSensorData);
  };

  // Function to handle issue selection/deselection
  const handleIssueSelect = (sensor, issue) => {
    setSelectedIssues((prevSelectedIssues) => {
      const currentIssues = prevSelectedIssues[sensor] || [];

      // Toggle the selection of the issue
      if (currentIssues.includes(issue)) {
        return {
          ...prevSelectedIssues,
          [sensor]: currentIssues.filter((i) => i !== issue),
        };
      } else {
        return {
          ...prevSelectedIssues,
          [sensor]: [...currentIssues, issue],
        };
      }
    });
  };

  const columns = [
    {
      name: (
        <div className="flex flex-col gap-1 items-center">
          <SensorsIcon />
          <span>Sensors</span>
        </div>
      ),
      selector: (row) => (
        <div className="flex items-center gap-3 ">
          <div className="flex gap-2">
            <span className="text-sm font-[600] capitalize">{row.sensor}</span>
            {row.sensor === "electricity" && <ElectricityIcon />}
            {row.sensor === "water" && <WaterIcon />}
            {row.sensor === "water leakage" && <LeakageIcon />}
            {row.sensor === "gas" && <GasIcon />}
            {row.sensor === "temperature" && <TemperatureIcon />}
          </div>
        </div>
      ),
    },
    {
      name: (
        <div className="flex flex-col gap-1 items-center">
          <FeedbackIcon />
          <span>Feedback</span>
        </div>
      ),
      selector: (row) => (
        <div className="flex items-center gap-1">
          <div className="flex flex-col">
            {/* <span className="text-sm">{row.building}</span> */}
            <TextArea placeholder="Feedback" />
          </div>
        </div>
      ),
    },
    {
      name: (
        <div className="flex flex-col gap-1 items-center">
          <RatingIcon />
          <span>Rating 10/10</span>
        </div>
      ),
      selector: (row, index) => (
        <div className="flex items-center gap-1">
          <div className="flex flex-col">
            {/* <span className="text-sm">{row.inspectionDate}</span> */}
            <input
              type="number"
              value={sensorFeedback[index].rating}
              onChange={(e) => handleRatingChange(index, e.target.value)}
              min="0"
              max="10"
              className="border-[1px] border-[#54545499] rounded-lg p-1 text-center w-[80px] h-[60px] text-sm focus:outline-none"
              placeholder="10"
            />
          </div>
        </div>
      ),
    },
    {
      name: (
        <div className="flex flex-col gap-1 items-center">
          <IssuesIcon />
          <span>Issues</span>
        </div>
      ),
      selector: (row) => (
        <div className="flex flex-wrap gap-1">
          {row.issues.map((issue, index) => (
            <div
              key={index}
              onClick={() => handleIssueSelect(row.sensor, issue)}
              className={`text-xs border border-gray-300 rounded px-2 py-1 cursor-pointer ${
                selectedIssues[row.sensor]?.includes(issue)
                  ? "bg-primary text-white border-primary"
                  : ""
              }`}
            >
              {issue.trim()}
            </div>
          ))}
        </div>
      ),
    },
    {
      name: (
        <div className="flex flex-col gap-1 items-center">
          <ResultIcon />
          <span>Overall</span>
        </div>
      ),
      selector: (row) => (
        <div className="flex items-center">
          <CircularProgressBar
            percentage={row.result}
            width="w-[50px]"
            percentageSize="text-[12px]"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="parentContainer bg-white rounded-lg shadow-lg border-[1px]">
      <div className="piechart rounded-[15px] overflow-hidden">
        <DataTable
          columns={columns}
          data={sensorData}
          selectableRowsHighlight
          customStyles={tableStyles}
          fixedHeader
          fixedHeaderScrollHeight="70vh"
          noHeader
        />
      </div>
    </div>
  );
};

export default SensorsTable;

const tableStyles = {
  table: {
    style: {
      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
      border: "1px solid #00000020",
    },
  },
  rows: {
    style: {
      borderRadius: "6px",
      marginBottom: "5px",
    },
  },
  headCells: {
    style: {
      backgroundColor: "#007AFF",
      color: "#fff",
      fontSize: "12px",
      fontWeight: 600,
      padding: "10px",
      display: "flex",
      justifyContent: "center",
    },
  },
  cells: {
    style: {
      color: "rgba(17, 17, 17, 1)",
      fontSize: "14px",
      display: "flex",
      justifyContent: "center",
    },
  },
};
