import React from "react";
import Button from "../../../../../globalComponents/shared/button/Button";
import Input from "../../../../../globalComponents/shared/Input";
import Dropdown from "../../../../../globalComponents/shared/Dropdown";

const AllTextFields = () => {
  return (
    <div>
      <div className="grid grid-cols-1">
        <div className="">
          <label className="block text-[#11111199] text-sm mb-4">
            Report Title
          </label>
          <Dropdown
            options={[{ option: "option 1" }, { option: "option 2" }]}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 mt-4 gap-4">
        <div className="">
          <label className="block text-[#11111199] text-sm mb-4">
            Select Building
          </label>
          <Dropdown
            options={[{ option: "option 1" }, { option: "option 2" }]}
          />
        </div>
        <div className="">
          <label className="block text-[#11111199] text-sm mb-4">
            Select Sensor
          </label>
          <Dropdown
            options={[{ option: "option 1" }, { option: "option 2" }]}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 mt-4 gap-4">
        <div className="">
          <label className="block text-[#11111199] text-sm mb-4">
            Range From
          </label>
          <Input type="date" />
        </div>
        <div className="">
          <label className="block text-[#11111199] text-sm mb-4">
            Range to
          </label>

          <Input type="date" />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-4">
        <div className="">
          <label className="block text-[#11111199] text-sm mb-4">
            Select Logo
          </label>
          <Input type="file" />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 mt-4 gap-4">
        <div className="">
          <label className="block text-[#11111199] text-sm mb-4">Date</label>
          <Input type="date" />
        </div>
        <div className="">
          <label className="block text-[#11111199] text-sm mb-4">Time</label>
          <Input type="time" />
        </div>
      </div>

      <div className="flex justify-end mt-4 gap-4">
        <Button
          text="cancel"
          bg="transperant"
          textColor="#007AFF"
          borderColor="#007AFF"
        />
        <Button
          text="preview"
          bg="#007AFF"
          textColor="white"
          borderColor="white"
        />

        <Button
          text="export"
          bg="#007AFF"
          textColor="white"
          borderColor="white"
        />
      </div>
    </div>
  );
};

export default AllTextFields;
