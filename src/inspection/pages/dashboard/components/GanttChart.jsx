// TimelineComponent.js
import React from "react";
import Timeline from "react-calendar-timeline";
import moment from "moment";
import "react-calendar-timeline/lib/Timeline.css";

const GanttChart = () => {
  const groups = [
    { id: 1, title: "" },
    { id: 2, title: "" },
    { id: 3, title: "" },
    { id: 4, title: "" },
    { id: 5, title: "" },
    { id: 6, title: "" },
    { id: 7, title: "" },
    { id: 8, title: "" },
  ];

  const today = moment().startOf("day");

  const items = [
    {
      id: 1,
      group: 1,
      title: "Building 1",
      start_time: today.clone().add(10, "hours"),
      end_time: today.clone().add(11, "hours"),
      address: "Address",
      color: "#007AFF",
    },
    {
      id: 2,
      group: 2,
      title: "Building 2",
      start_time: today.clone().add(11, "hours"),
      end_time: today.clone().add(12, "hours"),
      address: "Address",
      color: "#FFBBB2",
    },
    {
      id: 3,
      group: 5,
      title: "Building 3",
      start_time: today.clone().add(13, "hours"),
      end_time: today.clone().add(14, "hours"),
      address: "Address",
    },
    {
      id: 4,
      group: 6,
      title: "Building 4",
      start_time: today.clone().add(11, "hours"),
      end_time: today.clone().add(12, "hours"),
      address: "Address",
      color: "#61CA94",
    },
    {
      id: 5,
      group: 7,
      title: "Building 5",
      start_time: today.clone().add(12, "hours"),
      end_time: today.clone().add(13, "hours"),
      address: "Address",
    },
    {
      id: 6,
      group: 3,
      title: "Building 6",
      start_time: today.clone().add(12, "hours"),
      end_time: today.clone().add(13, "hours"),
      address: "Address",
      color: "#FA3D45",
    },
    {
      id: 7,
      group: 4,
      title: "Building 7",
      start_time: today.clone().add(10, "hours"),
      end_time: today.clone().add(11, "hours"),
      address: "Address",
      color: "#0F7FBA",
    },
    {
      id: 8,
      group: 8,
      title: "Building 8",
      start_time: today.clone().add(10, "hours"),
      end_time: today.clone().add(11, "hours"),
      address: "Address",
      color: "#CAAD61",
    },
  ];

  const itemRenderer = ({
    item,
    itemContext,
    getItemProps,
    getResizeProps,
  }) => {
    return (
      <div
        {...getItemProps({
          style: {
            backgroundColor: "#fff",
            borderRadius: "4px",
            textAlign: "left",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",

            color: "#333",
            borderLeft: `5px solid ${item.color || "#007AFF"}`,
            padding: "0px 5px",
          },
        })}
        className="flex flex-col "
      >
        <span className="text-sm">{item.title}</span>
        <span className="text-xs text-[#00000087]">{item.address}</span>
      </div>
    );
  };

  const headerRenderer = ({ headerContext }) => {
    return (
      <div
        style={{ display: "flex", backgroundColor: "#d32f2f", color: "#fff" }}
      >
        {headerContext.intervals.map((interval) => (
          <div
            key={interval.startTime}
            style={{
              flex: 1,
              borderRight: "1px solid #ddd",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            {interval.startTime.format("hh:mm A")}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="bg-white p-5 rounded-lg shadow-md border-[1px] h-full"
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <h3
        style={{ textAlign: "left", color: "#333" }}
        className="text-left text-[#333] font-bold"
      >
        Upcoming
      </h3>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={today.clone().add(10, "hours")}
        defaultTimeEnd={today.clone().add(14, "hours")}
        timeSteps={{ hour: 1 }}
        itemRenderer={itemRenderer}
        headerRenderer={headerRenderer}
        sidebarWidth={0}
        lineHeight={60}
        style={{
          paddingLeft: 0,
        }}
      />
    </div>
  );
};

export default GanttChart;
