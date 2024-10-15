/* eslint-disable react/display-name */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calender } from "../../assets/svgs";

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div
    className="custom-input-wrapper shadow-sm w-full"
    onClick={onClick}
    ref={ref}
    style={{
      display: "flex",
      alignItems: "center",
      border: "1px solid #54545499",
      borderRadius: "6px",
      padding: "12px 20px",
      color: "#54545499",
      cursor: "pointer",
      width: "100%",
    }}
  >
    <Calender />
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
  </div>
));

const CustomDatePicker = ({ selectionType = "single" }) => {
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
        customInput={<CustomInput />}
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
