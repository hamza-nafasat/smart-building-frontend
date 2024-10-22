import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FiPlus } from "react-icons/fi";
import profile from "../../../assets/images/inspection/profile.png";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
// import Building from "../../../asset/svgs/inspection/history/Building";
// import Calender from "../../../asset/svgs/inspection/Calender";
// import Warning from "../../../asset/svgs/inspection/history/Warning";
// import SearchIcon from "../../../asset/svgs/inspection/SearchIcon";
// import Modal from "../../components/shared/modals/Modal";
// import InspectionPreview from "../dashboard/allFloors/inspectionPreview/InspectionPreview";
import CircularProgressBar from "../../../globalComponents/CircularProgressBar/CircularProgressBar";
import Modal from "../../../globalComponents/shared/Modal";
import {
  BuildingIcon,
  BuildingsIcon,
  Calender,
  DateofInspection,
  DetailsIcon,
  InspectionOfficer,
  InspectionType,
  ResultIcon,
  SearchIcon,
  Warning,
} from "../../../assets/svgs";

export const sensorData = [
  {
    id: 1,
    name: "John Doe",
    restRoom: "R001",
    status: "Active",
    time: "5 minutes ago",
    inspectionDate: "22 July 2024",
    building: "Arfa Tower",
    inspectionType: "Routine",
    inspectionReason: "Reason For Inspection",
    result: 50, // Progress percentage
  },
  {
    id: 2,
    name: "Jane Smith",
    restRoom: "R002",
    status: "Inactive",
    time: "3 minutes ago",
    inspectionDate: "22 July 2024",
    building: "Liberty Building",
    inspectionType: "Emergency",
    inspectionReason: "Emergency Check",
    result: 75, // Progress percentage
  },
];

const InspectionHistory = () => {
  // Move the state hook inside the component
  const [previewModal, setPreviewModal] = useState(false);

  const previewOpen = (modalType) => setPreviewModal(modalType);
  const previewClose = () => setPreviewModal(false);

  const columns = [
    {
      name: (
        <div className="flex flex-col gap-1 items-center">
          <InspectionOfficer />
          <span>Inspection Officer</span>
        </div>
      ),
      selector: (row) => (
        <div className="flex items-center gap-3 ">
          <img src={profile} alt="profile" className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-sm">{row.name}</span>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div className="flex flex-col gap-1 items-center">
          <BuildingsIcon />
          <span>Buildings</span>
        </div>
      ),
      selector: (row) => (
        <div className="flex items-center gap-1">
          <div className="flex flex-col">
            <span className="text-sm">{row.building}</span>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div className="flex flex-col gap-1 items-center">
          <DateofInspection />
          <span>Date of Inspection</span>
        </div>
      ),
      selector: (row) => (
        <div className="flex items-center gap-1">
          <div className="flex flex-col">
            <span className="text-sm">{row.inspectionDate}</span>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div className="flex flex-col gap-1 items-center">
          <InspectionType />
          <span>Inspection Type</span>
        </div>
      ),
      selector: (row) => (
        <div className="flex items-center gap-1">
          <div className="flex flex-col">
            <span className="text-sm ">{row.inspectionReason}</span>
          </div>
        </div>
      ),
    },
    {
      name: (
        <div className="flex flex-col gap-1 items-center">
          <ResultIcon />
          <span>Results</span>
        </div>
      ),
      selector: (row) => (
        <div className="flex items-center">
          <CircularProgressBar
            percentage={row.result}
            width="w-[50px]"
            percentageSize="text-[12px]"
          />
        </div>
      ),
    },
    {
      name: (
        <div className="flex flex-col gap-1 items-center">
          <DetailsIcon />
          <span>Details</span>
        </div>
      ),
      selector: (row) => (
        <div className="flex items-center">
          <IoEye
            fontSize={27}
            className="text-primary cursor-pointer "
            onClick={() => previewOpen("preview")}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="parentContainer bg-white rounded-lg shadow-lg border-[1px]">
      <div className="piechart p-4 lg:p-6  rounded-[15px] h-[calc(100vh-80px)] overflow-hidden">
        <div className="flex items-center justify-between">
          <h3 className="font-[500] text-lg">Inspection History</h3>
          <div className="flex items-center gap-2">
            <FilterSection />
          </div>
        </div>
        <div className="mt-5">
          <DataTable
            columns={columns}
            data={sensorData} // Dynamically pass data here
            selectableRowsHighlight
            customStyles={tableStyles}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="70vh"
            noHeader
          />
        </div>
      </div>
      {previewModal === "preview" && (
        <Modal width="w-fit" title="" onClose={previewClose}>
          <div>{/* <InspectionPreview showButton={false} /> */}</div>
        </Modal>
      )}
    </div>
  );
};

export default InspectionHistory;

const tableStyles = {
  table: {
    style: {
      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
      // padding: "3px",
      border: "1px solid #00000020",
    },
  },

  rows: {
    style: {
      // boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
      borderRadius: "6px",
      marginBottom: "5px",
    },
  },
  headCells: {
    style: {
      backgroundColor: "#007AFF",
      color: "#fff",
      fontSize: "12px",
      fontWeight: 600,
      padding: "10px",
      display: "flex",
      justifyContent: "center",
    },
  },

  cells: {
    style: {
      color: "rgba(17, 17, 17, 1)",
      fontSize: "14px",
      background: "#E4E7EB",
      display: "flex",
      justifyContent: "center",
    },
  },
};

const FilterSection = () => {
  return (
    <div className="flex flex-wrap  gap-4 sm:mt-0 mt-2">
      <div className="flex items-center gap-1 border border-[#e7e7e7] rounded-lg h-[34px] bg-white px-3 basis-[35%] flex-1">
        <SearchIcon />

        <input
          type="search"
          placeholder="Search"
          className="focus:outline-none text-sm w-full"
        />
      </div>
      <div className="flex items-center justify-between gap-1 border border-[#e7e7e7] rounded-lg h-[34px] bg-white px-3 ">
        <p className="text-sm text-[#7e7e7e]">Sort By:</p>
        <select className="focus:outline-none text-sm">
          <option className="w-full">Newest</option>
          <option className="w-full">Oldest</option>
        </select>
      </div>
    </div>
  );
};
