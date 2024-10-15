import React, { useState } from "react";
import Button from "../../../../../globalComponents/shared/button/Button";
import Input from "../../../../../globalComponents/shared/Input";
import Dropdown from "../../../../../globalComponents/shared/Dropdown";
import Modal from "../../../../../globalComponents/shared/Modal";
import { Csv, Sample } from "../../../../../assets/svgs";
import { Pdf } from "../../../../../assets/svgs";
import { Excel } from "../../../../../assets/svgs";
import CustomDatePicker from "../../../../../globalComponents/shared/DatePicker";

const AllTextFields = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <div>
      <div className="grid grid-cols-1">
        <div className="">
          <Dropdown
            label="Report Title"
            options={[{ option: "option 1" }, { option: "option 2" }]}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 mt-4 gap-4">
        <div className="">
          <Dropdown
            label="Select Building"
            options={[{ option: "option 1" }, { option: "option 2" }]}
          />
        </div>
        <div className="">
          <Dropdown
            label="Select Sensor"
            options={[{ option: "option 1" }, { option: "option 2" }]}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 mt-4 gap-4">
        <div className="">
          <Input type="date" label="Range From" />
        </div>
        <div className="">
          <Input type="date" label="Range To" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-[#11111199] text-sm mb-2">
          Select Sample
        </label>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          <img src={Sample} className="cursor-pointer" />
          <img src={Sample} className="cursor-pointer" />
          <img src={Sample} className="cursor-pointer" />
          <img src={Sample} className="cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-4">
        <div className="">
          <Input type="file" label="Select Logo" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-[#11111199] text-sm mb-2">
          Customize Colors
        </label>
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <Input type="color" />
            <h3 className="text-[#707070] text-xs ">Primary Color</h3>
          </div>
          <div className="flex items-center gap-2">
            <Input type="color" />
            <h3 className="text-[#707070] text-xs ">Secondary Color</h3>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-[#11111199] text-sm mb-2">Report In</label>

        <input type="checkbox" label="In tables " />
        <label className="ml-2 text-[#11111199] text-sm mb-2">In Tables</label>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 mt-4 gap-4">
        <div className="">
          <Input type="date" label="Date" />
        </div>
        <div className="">
          <Input type="time" label="Time" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-end mt-4 gap-4">
        <Button
          text="cancel"
          bg="transparent"
          textColor="#007AFF"
          borderColor="#007AFF"
          width="sm:w-[130px] w-full"
        />
        <Button
          text="preview"
          bg="#007AFF"
          textColor="white"
          borderColor="white"
          onClick={handleOpenModal}
          width="sm:w-[130px] w-full"
        />

        <Button
          text="export"
          bg="#007AFF"
          textColor="white"
          borderColor="white"
          width="sm:w-[130px] w-full"
        />
      </div>
      {openModal && (
        <Modal title="Export" onClose={() => setOpenModal(false)}>
          <div>
            <ModalBody />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AllTextFields;

const ModalBody = () => {
  const [showInput, setShowInput] = useState(false);

  const handleShowFields = () => {
    setShowInput(true);
  };
  return (
    <div>
      <p className="text-sm  text-[#707070]">
        Select the file type you would like for your report
      </p>

      <div className="mt-2 flex flex-wrap gap-2">
        <div className="flex gap-2 items-start px-4 py-2 border-[2px] rounded-md w-fit cursor-pointer">
          <img src={Csv} className="h-5" />
          <p className="text-sm">CSV file</p>
        </div>
        <div className="flex gap-2 items-start px-4 py-2 border-[2px] rounded-md w-fit cursor-pointer">
          <img src={Pdf} className="h-5" />
          <p className="text-sm">PDF file</p>
        </div>
        <div className="flex gap-2 items-start px-4 py-2 border-[2px] rounded-md w-fit cursor-pointer">
          <img src={Excel} className="h-5" />
          <p className="text-sm">Excel file</p>
        </div>
      </div>

      {showInput && (
        <div className="mt-2 transition-all duration-300">
          <div className="mt-4">
            <Input type="email" placeholder="Enter your email" label="Email" />
          </div>
          <div className="mt-4">
            <CustomDatePicker />
          </div>
        </div>
      )}

      <div className="flex justify-end mt-4 gap-4 flex-col md:flex-row">
        <Button
          text="Draft"
          bg="transparent"
          textColor="#007AFF"
          borderColor="#007AFF"
          width="md:w-[120px] w-full"
        />
        <Button
          text="Email"
          bg="transparent"
          textColor="#007AFF"
          borderColor="#007AFF"
          width="md:w-[120px] w-full"
          onClick={handleShowFields}
        />

        <Button
          text="Download"
          bg="#007AFF"
          textColor="white"
          borderColor="white"
          width="md:w-[120px] w-full"
          onClick={() => setShowInput(false)}
        />
      </div>
    </div>
  );
};
