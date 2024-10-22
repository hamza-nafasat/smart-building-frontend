// GanttChart.js
import React from "react";
import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const GanttChart = () => {
  // Define the tasks to be displayed on the Gantt chart
  const tasks = [
    {
      id: "1",
      // name: "Building 1",
      start: new Date(2021, 2, 13, 10, 0),
      end: new Date(2021, 2, 13, 11, 0),
      type: "task",
      progress: 100,
      styles: { progressColor: "#3e85f7", backgroundColor: "#3e85f7" },
    },
    {
      id: "2",
      name: "Building 2",
      start: new Date(2021, 2, 13, 11, 0),
      end: new Date(2021, 2, 13, 12, 0),
      type: "task",
      progress: 50,
      styles: { progressColor: "#f7463e", backgroundColor: "#f7463e" },
    },
    {
      id: "3",
      // name: "Building 3",
      start: new Date(2021, 2, 13, 12, 0),
      end: new Date(2021, 2, 13, 13, 0),
      type: "task",
      progress: 75,
      styles: { progressColor: "#42a846", backgroundColor: "#42a846" },
    },
    {
      id: "4",
      // name: "Building 4",
      start: new Date(2021, 2, 13, 13, 0),
      end: new Date(2021, 2, 13, 14, 0),
      type: "task",
      progress: 80,
      styles: { progressColor: "#f7d63e", backgroundColor: "#f7d63e" },
    },
    {
      id: "5",
      // name: "Building 5",
      start: new Date(2021, 2, 13, 14, 0),
      end: new Date(2021, 2, 13, 15, 0),
      type: "task",
      progress: 90,
      styles: { progressColor: "#3e85f7", backgroundColor: "#3e85f7" },
    },
  ];

  return (
    <div>
      <h2>Gantt Chart</h2>
      <Gantt
        tasks={tasks}
        viewMode={ViewMode.Hour} // To show hourly view
        locale="en-GB"
      />
    </div>
  );
};

export default GanttChart;
