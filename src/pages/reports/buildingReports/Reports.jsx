import React, { useState } from "react";
import Dropdown from "../../../globalComponents/shared/Dropdown";
import DatePicker from "../../../globalComponents/shared/DatePicker";
import CustomDatePicker from "../../../globalComponents/shared/DatePicker";
import StatusCard from "./components/StatusCard";
import UsageCard from "./components/UsageCard";
import Alerts from "./components/Alerts";
import SensorTable from "./components/SensorTable";
import InspectionTable from "./components/InspectionTable";
import {
  Fire,
  FireDetector,
  ReportPageIcon,
  Thermometer,
  Thunder,
} from "../../../assets/svgs";
import Drop from "../../../assets/svgs/report/Drop";
import StatusGraph from "./components/StatusGraph";
import Input from "../../../globalComponents/shared/Input";
import Button from "../../../globalComponents/shared/button/Button";
import { FiChevronDown } from "react-icons/fi";

const statusCardIcon = [
  { heading: "Electricity", icon: <Thunder /> },
  { heading: "Gas", icon: <Fire /> },
  { heading: "Temperature", icon: <Thermometer /> },
  { heading: "Water", icon: <Drop /> },
  { heading: "Fire Detectors", icon: <FireDetector /> },
];
const usageCardIcon = [
  {
    heading: "Electricity",
    icon: <Thunder />,
    percentage: 34,
    color: "#007AFF",
    stroke: "#a0d4fa",
  },
  {
    heading: "Gas",
    icon: <Fire />,
    percentage: 56,
    color: "#FF8932",
    stroke: "#fac7a0",
  },
  {
    heading: "Water",
    icon: <Drop />,
    percentage: 70,
    color: "#49DA8F",
    stroke: "#b3ffd7",
  },
  {
    heading: "Temperature",
    icon: <Thermometer />,
    percentage: 90,
    color: "#F02D2D",
    stroke: "#ffbaba ",
  },
];

const Reports = () => {
  const [activeTab, setActiveTab] = useState("Report");

  return (
    <div
      className="p-5"
      style={{
        background: "#FFFFFF",
        borderRadius: "14px",
      }}
    >
      <div
        className=" flex gap-5"
        style={{ borderBottom: "1px solid #00000020" }}
      >
        <button
          className="p-2 text-sm text-[##414141]"
          style={{
            borderBottom: activeTab === "Report" ? "2px solid #007AFF" : "none",
          }}
          onClick={() => setActiveTab("Report")}
        >
          Report
        </button>
        <button
          className="p-2 text-sm text-[##414141]"
          style={{
            borderBottom:
              activeTab === "Generate report" ? "2px solid #007AFF" : "none",
          }}
          onClick={() => setActiveTab("Generate report")}
        >
          Generate report
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "Report" && <Report />}
        {activeTab === "Generate report" && <GeneratedReport />}
      </div>
    </div>
  );
};

export default Reports;

const Report = () => {
  return (
    <div className="mt-3 shadow-lg bg-white rounded-md p-3">
      <div className="flex items-center justify-between pb-4 border-b-[1px]">
        <p className="font-[600] text-sm sm:text-base text-[#414141] ">
          Report
        </p>
        <div className="flex gap-2 items-center">
          <Dropdown
            width="130px"
            simpleArrow={false}
            options={[
              { option: "All Buildings", value: "All-Buildings" },
              { option: "Building 1", value: "Building-1" },
              { option: "Building 2", value: "Building-2" },
              { option: "Building 3", value: "Building-3" },
            ]}
          />
          <Dropdown
            width="140px"
            simpleArrow={false}
            options={[
              { option: "All Sensor", value: "All-Sensor" },
              { option: "Water", value: "Water" },
              { option: "Gas", value: "Gas" },
              { option: "Electricity", value: "Electricity" },
              { option: "Fire Detection", value: "Fire-detection" },
            ]}
          />
          <CustomDatePicker selectionType="range" />
        </div>
      </div>
      <div className="my-2">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 mt-4">
          {statusCardIcon.map((status, i) => (
            <div key={i}>
              <StatusCard icon={status.icon} heading={status.heading} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-12 xl:col-span-8">
            <StatusGraph />
          </div>
          <div className="col-span-12 xl:col-span-4">
            <Alerts />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mt-4">
          {usageCardIcon.map((status, i) => (
            <div key={i}>
              <UsageCard
                icon={status.icon}
                heading={status.heading}
                percentage={status.percentage}
                color={status.color}
                stroke={status.stroke}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4">
          <SensorTable />
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <InspectionTable />
        </div>
      </div>
    </div>
  );
};

const GeneratedReport = () => {
  return (
    <div className="mt-3 shadow-lg bg-white rounded-md ">
      <div className="p-4 border-b-[3px]">
        <div className="flex gap-4 items-center">
          <ReportPageIcon />

          <h3 className="text-sm sm:text-base font-[600]">Generate Report</h3>
        </div>
      </div>
      <div className="p-4">
        <Input type="text" placeholder="Choose File" />
        <Button text="submit" />
      </div>
    </div>
  );
};
