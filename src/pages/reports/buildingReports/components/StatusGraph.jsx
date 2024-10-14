import React, { useState } from "react";
import BarChartIcon from "../../../../assets/svgs/report/BarChartIcon";
import LineChartIcon from "../../../../assets/svgs/report/LineChartIcon";
import {
  LineChart as RechartsLineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Line chart data
const lineData = [
  { name: "Jan", Electricity: 30, Water: 20, Gas: 10, FireDetection: 50 },
  { name: "Feb", Electricity: 20, Water: 60, Gas: 40, FireDetection: 30 },
  { name: "Mar", Electricity: 50, Water: 30, Gas: 20, FireDetection: 60 },
  { name: "Apr", Electricity: 40, Water: 50, Gas: 30, FireDetection: 40 },
  { name: "May", Electricity: 70, Water: 40, Gas: 50, FireDetection: 30 },
  { name: "Jun", Electricity: 60, Water: 80, Gas: 60, FireDetection: 70 },
  { name: "Jul", Electricity: 90, Water: 70, Gas: 80, FireDetection: 90 },
  { name: "Aug", Electricity: 80, Water: 60, Gas: 70, FireDetection: 80 },
  { name: "Sep", Electricity: 85, Water: 90, Gas: 75, FireDetection: 85 },
  { name: "Oct", Electricity: 70, Water: 50, Gas: 65, FireDetection: 95 },
  { name: "Nov", Electricity: 75, Water: 40, Gas: 55, FireDetection: 90 },
  { name: "Dec", Electricity: 85, Water: 75, Gas: 80, FireDetection: 100 },
];

// Line chart component
const LineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={420}>
      <RechartsLineChart
        data={lineData}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" tickLine={true} />
        <YAxis
          domain={[10, 100]}
          tickLine={true}
          tickFormatter={(tick) => `${tick}%`}
        />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey="Electricity"
          stroke="#007AFF"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Water"
          stroke="#49DA8F"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Gas"
          stroke="#FF8932"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="FireDetection"
          stroke="#7B42F6"
          strokeWidth={3}
          dot={false}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

// Bar chart data
const barData = [
  { name: "Jan", Electricity: 30, Water: 20, Gas: 10, FireDetection: 50 },
  { name: "Feb", Electricity: 20, Water: 60, Gas: 40, FireDetection: 30 },
  { name: "Mar", Electricity: 50, Water: 30, Gas: 20, FireDetection: 60 },
  { name: "Apr", Electricity: 40, Water: 50, Gas: 30, FireDetection: 40 },
  { name: "May", Electricity: 70, Water: 40, Gas: 50, FireDetection: 30 },
  { name: "Jun", Electricity: 60, Water: 80, Gas: 60, FireDetection: 70 },
  { name: "Jul", Electricity: 90, Water: 70, Gas: 80, FireDetection: 90 },
  { name: "Aug", Electricity: 80, Water: 60, Gas: 70, FireDetection: 80 },
  { name: "Sep", Electricity: 85, Water: 90, Gas: 75, FireDetection: 85 },
  { name: "Oct", Electricity: 70, Water: 50, Gas: 65, FireDetection: 95 },
  { name: "Nov", Electricity: 75, Water: 40, Gas: 55, FireDetection: 90 },
  { name: "Dec", Electricity: 85, Water: 75, Gas: 80, FireDetection: 100 },
];

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={420}>
      <RechartsBarChart
        data={barData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />

        <Bar
          dataKey="Electricity"
          fill="#5AA8FD"
          stroke="#007AFF"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="FireDetection"
          fill="#B89BF4"
          stroke="#834DF7"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="Gas"
          fill="#F3C5A3"
          stroke="#FF8932"
          radius={[4, 4, 0, 0]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

// StatusGraph component
const StatusGraph = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="p-5 rounded-lg shadow-lg border-[1px] h-full">
      <div className="flex items-center justify-between">
        <h3 className="sm:text-base text-sm font-[600] text-[#383838]">
          Status Graph
        </h3>
        <div className="flex gap-3">
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 0
                ? "bg-blue-500 text-white border-[2px] border-black"
                : "bg-blue-400 text-white"
            }`}
            onClick={() => setActiveTab(0)}
          >
            <BarChartIcon />
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 1
                ? "bg-blue-500 text-white border-[2px] border-black"
                : " bg-blue-400 text-white"
            }`}
            onClick={() => setActiveTab(1)}
          >
            <LineChartIcon />
          </button>
        </div>
      </div>

      <div className="">
        {activeTab === 0 && <CustomBarChart />}
        {activeTab === 1 && <LineChart />}
      </div>
    </div>
  );
};

export default StatusGraph;
