import React from "react";

const Progress = ({ percentage, color }) => {
  const circleRadius = 45;
  const circleCircumference = 2 * Math.PI * circleRadius;

  const progressOffset = ((100 - percentage) / 100) * circleCircumference;
  const remainder = 100 - percentage;

  return (
    <div className="flex flex-col items-center">
      <svg
        className="rotate-[0deg] w-24 h-24"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r={circleRadius}
          stroke={color}
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circleCircumference}
          strokeDashoffset="0"
        />

        <circle
          cx="50"
          cy="50"
          r={circleRadius}
          stroke="#ffffff"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circleCircumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          className="transition-stroke-dashoffset duration-500 ease-out"
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-2xl text-white font-bold"
        >
          {percentage}%
        </text>
      </svg>
      <div className="flex items-center gap-2 mt-2">
        <div
          className="w-3 h-3 rounded-full"
          style={{ background: color }}
        ></div>

        <p className="text-gray-500 text-sm">{remainder} %</p>
      </div>
    </div>
  );
};

export default Progress;
