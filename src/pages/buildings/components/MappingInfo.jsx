import React, { useState } from "react";
import Button from "../../../globalComponents/shared/button/Button";
import Input from "../../../globalComponents/shared/Input";
import Map from "./Map";

const MappingInfo = ({ setCurrentStep }) => {
  const buttonClickHandler = () => setCurrentStep((prevStep) => prevStep + 1);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const latHandler = (e) => {
    setLat(e.target.value);
  };
  const lngHandler = (e) => setLng(e.target.value);

  const latLng = {
    lat,
    lng,
  };

  return (
    <div>
      <h4 className="text-[#414141] text-lg md:text-xl font-medium text-center">
        Mapping Info
      </h4>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
        <Input
          type="number"
          label="Latitude"
          placeholder="Enter Latitude"
          onChange={(e) => latHandler(e)}
        />
        <Input
          type="number"
          label="Longitude"
          placeholder="Enter Longitude"
          onChange={(e) => lngHandler(e)}
        />
      </div>

      <div className="lg:col-span-2 mt-4">
        <div className="h-[325px] rounded-lg shadow-md">
          <Map lat={lat} lng={lng} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-4 mt-4">
        <Button
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          bg="#fff"
          textColor="#007aff"
          borderColor="#007aff"
          text="Back"
          width="w-[153px]"
        />
        <Button onClick={buttonClickHandler} text="Next" width="w-[153px]" />
      </div>
    </div>
  );
};

export default MappingInfo;
