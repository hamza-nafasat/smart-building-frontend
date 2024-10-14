import React, { useState } from "react";
import DataTable from "react-data-table-component";

// Columns Definition
const columns = [
  {
    name: "Sensor Type",
    selector: (row) => row.sensorType,
    sortable: true,
  },
  {
    name: "Sensor ID",
    selector: (row) => row.sensorID,
    sortable: true,
  },
  {
    name: "Issue",
    selector: (row) => row.issue,
    sortable: true,
  },
  {
    name: "Officer Contact",
    selector: (row) => row.officerContact,
    sortable: true,
  },
  {
    name: "Payments",
    selector: (row) => row.payments,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => (
      <span
        className={`${
          row.status === "Pending" ? "text-yellow-500" : "text-green-500"
        }`}
      >
        {row.status}
      </span>
    ),
  },
];

// Static data array
const data = [
  {
    sensorType: "Electricity",
    sensorID: "152318212",
    issue: "Poor wiring or connections",
    officerContact: "+47 1523 152 1123",
    payments: "Free",
    status: "Executed",
  },
  {
    sensorType: "Electricity",
    sensorID: "152318212",
    issue: "Poor wiring or connections",
    officerContact: "+47 1523 152 1123",
    payments: "200$",
    status: "Executed",
  },
  {
    sensorType: "Gas",
    sensorID: "152318212",
    issue: "Gas leaks or odor presence",
    officerContact: "+47 1523 152 1123",
    payments: "Free",
    status: "Pending",
  },
  {
    sensorType: "Water",
    sensorID: "152318212",
    issue: "Leaks in pipes or fittings",
    officerContact: "+47 1523 152 1123",
    payments: "Free",
    status: "Executed",
  },
  {
    sensorType: "Temperature",
    sensorID: "152318212",
    issue: "Malfunctioning HVAC systems",
    officerContact: "+47 1523 152 1123",
    payments: "200$",
    status: "Pending",
  },
  {
    sensorType: "Fire detection",
    sensorID: "152318212",
    issue: "Malfunctioning smoke or heat sensors",
    officerContact: "+47 1523 152 1123",
    payments: "Free",
    status: "Executed",
  },
  {
    sensorType: "Gas",
    sensorID: "152318212",
    issue: "Excessive gas pressure or low supply",
    officerContact: "+47 1523 152 1123",
    payments: "Free",
    status: "Executed",
  },
];

// Table Styles
const tableStyles = {
  headCells: {
    style: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#11111199",
      background: "#D8DADB70",
    },
  },
  rows: {
    style: {
      //   borderRadius: "6px",
      padding: "12px 0",
      margin: "5px 0",
      borderBottomWidth: "1 !important",
    },
  },
  cells: {
    style: {
      color: "rgba(17, 17, 17, 1)",
      fontSize: "14px",
    },
  },
};

// Inspection Table Component
const InspectionTable = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);

    // Filter data based on search query
    const filtered = data.filter(
      (row) =>
        row.sensorType.toLowerCase().includes(value) ||
        row.sensorID.includes(value) ||
        row.issue.toLowerCase().includes(value) ||
        row.officerContact.includes(value) ||
        row.payments.includes(value) ||
        row.status.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl h-[calc(100vh-80px)] overflow-auto border-[1px] ">
      <div className="flex justify-between items-center my-2 px-4 py-2 rounded-lg border-b-[1px]">
        <h2 className="text-base sm:text-lg font-bold text-[#414141] ">
          Inspection Detail
        </h2>
        {/* Search Box */}
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-md w-1/3 focus:outline-none"
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        customStyles={tableStyles}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="70vh"
      />
    </div>
  );
};

export default InspectionTable;
