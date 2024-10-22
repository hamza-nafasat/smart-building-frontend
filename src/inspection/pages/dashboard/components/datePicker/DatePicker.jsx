import React, { useState } from "react";
import "./DatePicker.css"; // Assuming you save the CSS in a file named DatePicker.css
import { BiChevronLeft } from "react-icons/bi";
import { CgChevronRight } from "react-icons/cg";

const DatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(currentDate.getDate());
  console.log("aashgsah");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day);
  };

  const renderDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const days = [];

    // Fill in the days from the previous month
    for (let i = 1; i < firstDayOfMonth.getDay(); i++) {
      days.push(
        <button key={`prev-${i}`} className="date faded">
          {""}
        </button>
      );
    }

    // Fill in the days of the current month
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const isToday =
        day === currentDate.getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();
      const isSelected = day === selectedDate;

      days.push(
        <button
          key={day}
          className={`date ${isSelected ? "current-day" : ""}`}
          onClick={() => handleDateSelect(day)}
        >
          {day}
        </button>
      );
    }

    // Fill in the days from the next month
    for (let i = 1; days.length < 42; i++) {
      days.push(
        <button key={`next-${i}`} className="date faded">
          {""}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="datepicker border-[1px] shadow-md">
      <div className="datepicker-top">
        {/* <div className="btn-group">
          <button className="tag">Today</button>
          <button className="tag">Tomorrow</button>
          <button className="tag">In 2 days</button>
        </div> */}
        <div className="month-selector">
          <button className="arrow" onClick={handlePrevMonth}>
            <i className="material-icons">
              <BiChevronLeft />
            </i>
          </button>
          <span className="month-name">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button className="arrow" onClick={handleNextMonth}>
            <i className="material-icons">
              <CgChevronRight />
            </i>
          </button>
        </div>
      </div>
      <div className="datepicker-calendar">
        <span className="day">Mo</span>
        <span className="day">Tu</span>
        <span className="day">We</span>
        <span className="day">Th</span>
        <span className="day">Fr</span>
        <span className="day">Sa</span>
        <span className="day">Su</span>
        {renderDaysInMonth()}
      </div>
    </div>
  );
};

export default DatePicker;
