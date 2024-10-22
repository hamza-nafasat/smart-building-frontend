import React from "react";
import Welcome from "./components/Welcome";
import SmallCard from "./components/SmallCard";

import AllBuildings from "./components/AllBuildings";
import {
  CompletedIcon,
  InprogressIcon,
  PendingIcon,
  TotalInspectionIcon,
} from "../../../assets/svgs";
import GanttChart from "./components/GanttChart";
import DatePicker from "./components/datePicker/DatePicker";

const cardsData = [
  {
    icon: <TotalInspectionIcon />,
    heading: "Total Inspection",
    count: 1220,
  },
  {
    icon: <InprogressIcon />,
    heading: "Inprogress",
    count: 7,
  },

  {
    icon: <PendingIcon />,
    heading: "Pending",
    count: 43,
  },

  {
    icon: <CompletedIcon />,
    heading: "Completed",
    count: 1550,
  },
];

const InspectionDashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-9 flex flex-col">
          <div className="grid grid-cols-1 grow">
            <Welcome />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-4 grow ">
            {cardsData.map((card, i) => (
              <SmallCard card={card} key={i} />
            ))}
          </div>
        </div>
        <div className="col-span-12 xl:col-span-3 ">
          {" "}
          <DatePicker />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 xl:col-span-7 ">
          <AllBuildings />
        </div>

        <div className="col-span-12 xl:col-span-5 ">
          <GanttChart />
        </div>
      </div>
    </div>
  );
};

export default InspectionDashboard;
