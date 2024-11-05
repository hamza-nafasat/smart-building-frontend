/* eslint-disable react/display-name */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalenderIcon, CustomCalenderIcon } from "../../assets/svgs";

// Destructure `label` inside the props parameter
const CustomInput = React.forwardRef(
  (
    { value, onClick, label, calenderIcon = true, customCalenderIcon = false },
    ref
  ) => (
    <div>
      {label && (
        <label className="block text-[#11111199] text-sm mb-2">{label}</label>
      )}
      <div
        className="custom-input-wrapper shadow-sm w-full"
        onClick={onClick}
        ref={ref}
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #54545499",
          borderRadius: "6px",
          padding: "11.5px 20px",
          color: "#54545499",
          cursor: "pointer",
          width: "100%",
        }}
      >
        {calenderIcon && <CalenderIcon />}
        <input
          type="text"
          value={value || "Select a date"}
          readOnly
          style={{
            marginLeft: "10px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            width: "100%",
            flexGrow: 1,
          }}
        />
        {customCalenderIcon && <CustomCalenderIcon />}
      </div>
    </div>
  )
);

const CustomDatePicker = ({
  selectionType = "single",
  label,
  calenderIcon = true,
  customCalenderIcon = false,
}) => {
  const defaultStartDate = new Date("2024-02-11");
  const defaultEndDate = new Date("2025-02-11");

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(
    selectionType === "range" ? defaultEndDate : null
  );

  const handleChange = (dates) => {
    if (selectionType === "range") {
      const [newStartDate, newEndDate] = dates;
      setStartDate(newStartDate);
      setEndDate(newEndDate);
    } else {
      setStartDate(dates);
      setEndDate(null);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <DatePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}
        selectsRange={selectionType === "range"}
        customInput={
          <CustomInput
            label={label}
            calenderIcon={calenderIcon}
            customCalenderIcon={customCalenderIcon}
          />
        }
        dateFormat="MM/dd/yy"
        placeholderText={
          selectionType === "range" ? "Select a date range" : "Select a date"
        }
        wrapperClassName="w-full"
        className="w-full"
      />
    </div>
  );
};

export default CustomDatePicker;
