import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Sensor Type",
    selector: (row) => row.sensorType,
  },
  {
    name: "Current Value",
    selector: (row) => row.currentValue,
  },
  {
    name: "Max Value",
    selector: (row) => row.maxValue,
  },
  {
    name: "Min Value",
    selector: (row) => row.minValue,
  },
  {
    name: "AVG Value",
    selector: (row) => row.avgValue,
  },
  {
    name: "Performance(%)",
    selector: (row) => row.performance,
  },
  {
    name: "Status/Alert",
    selector: (row) => row.statusAlert,
  },
  {
    name: "Last Checked",
    selector: (row) => row.lastChecked,
  },
];

// Static array data
const data = [
  {
    sensorType: "Temperature",
    currentValue: "35°C",
    maxValue: "45°C",
    minValue: "25°C",
    avgValue: "33°C",
    performance: "75%",
    statusAlert: "Normal",
    lastChecked: "2024-10-10 10:00",
  },
  {
    sensorType: "Humidity",
    currentValue: "60%",
    maxValue: "80%",
    minValue: "40%",
    avgValue: "65%",
    performance: "80%",
    statusAlert: "Warning",
    lastChecked: "2024-10-10 09:30",
  },
  {
    sensorType: "Pressure",
    currentValue: "1012 hPa",
    maxValue: "1050 hPa",
    minValue: "980 hPa",
    avgValue: "1000 hPa",
    performance: "85%",
    statusAlert: "Normal",
    lastChecked: "2024-10-10 09:45",
  },
  {
    sensorType: "CO2 Level",
    currentValue: "400 ppm",
    maxValue: "600 ppm",
    minValue: "300 ppm",
    avgValue: "450 ppm",
    performance: "90%",
    statusAlert: "Critical",
    lastChecked: "2024-10-10 08:50",
  },
  {
    sensorType: "Air Quality",
    currentValue: "Good",
    maxValue: "Excellent",
    minValue: "Poor",
    avgValue: "Moderate",
    performance: "65%",
    statusAlert: "Normal",
    lastChecked: "2024-10-10 10:10",
  },
];

const SensorTable = () => {
  return (
    <div className="bg-white rounded-[15px] shadow-lg overflow-auto border-[1px] ">
      <DataTable
        columns={columns}
        data={data}
        // selectableRows
        selectableRowsHighlight
        customStyles={tableStyles}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="70vh"
      />
    </div>
  );
};

export default SensorTable;

const tableStyles = {
  headCells: {
    style: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#fff",
      background: "#007AFF",
    },
  },
  rows: {
    style: {
      borderRadius: "6px",
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
