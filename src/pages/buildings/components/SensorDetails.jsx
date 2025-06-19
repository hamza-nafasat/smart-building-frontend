import React, { useState } from "react";
import SensorSelector from "./SensorSelector";
import SensorRow from "./SensorRow";
import SensorFormFooter from "./SensorFormFooter";

const SENSOR_TYPES = [
  "Temperature Sensors",
  "Smoke & Fire Detectors",
  "Motion sensors",
  "Humidity Sensors",
  "Light Sensors",
  "CO2 Sensors",
  "Occupancy Sensors",
  "Water Leak Sensors",
];

const SensorDetails = ({ setCurrentStep }) => {
  const [floorNumber, setFloorNumber] = useState(null);
  const [floorName, setFloorName] = useState(null);
  const [sensors, setSensors] = useState(
    SENSOR_TYPES.map((type) => ({
      type,
      checked: false,
      quantity: "",
      brand: "",
      details: "",
    }))
  );
  const [customSensors, setCustomSensors] = useState([]);

  const handleSensorChange = (idx, field, value) => {
    setSensors((prev) =>
      prev.map((sensor, i) =>
        i === idx ? { ...sensor, [field]: value } : sensor
      )
    );
  };

  const handleCustomSensorChange = (idx, field, value) => {
    setCustomSensors((prev) =>
      prev.map((sensor, i) =>
        i === idx ? { ...sensor, [field]: value } : sensor
      )
    );
  };

  const addCustomSensor = () => {
    setCustomSensors((prev) => [
      ...prev,
      { type: "", checked: false, quantity: "", brand: "", details: "" },
    ]);
  };

  const handleNext = () => {
    // Implement next logic if needed
  };

  return (
    <section>
      <div className="bg-white shadow-md rounded-[10px] p-6">
        <h2 className="text-xl font-semibold text-center mb-6">Sensor Details</h2>
        <SensorSelector
          floorNumber={floorNumber}
          setFloorNumber={setFloorNumber}
          floorName={floorName}
          setFloorName={setFloorName}
        />
        <div className="grid grid-cols-12 gap-4 items-center mb-2 font-semibold text-[#414141] text-sm">
          <div className="col-span-3">Sensor Types</div>
          <div className="col-span-3">Quantity</div>
          <div className="col-span-2">Brand</div>
          <div className="col-span-4">Other Details*</div>
        </div>
        {sensors.map((sensor, idx) => (
          <SensorRow
            key={sensor.type}
            sensor={sensor}
            idx={idx}
            isCustom={false}
            onCheck={(checked) => handleSensorChange(idx, "checked", checked)}
            onTypeChange={() => {}}
            onQuantityChange={(val) => handleSensorChange(idx, "quantity", val)}
            onBrandChange={(val) => handleSensorChange(idx, "brand", val)}
            onDetailsChange={(val) => handleSensorChange(idx, "details", val)}
          />
        ))}
        {customSensors.map((sensor, idx) => (
          <SensorRow
            key={"custom-" + idx}
            sensor={sensor}
            idx={idx}
            isCustom={true}
            onCheck={(checked) => handleCustomSensorChange(idx, "checked", checked)}
            onTypeChange={(val) => handleCustomSensorChange(idx, "type", val)}
            onQuantityChange={(val) => handleCustomSensorChange(idx, "quantity", val)}
            onBrandChange={(val) => handleCustomSensorChange(idx, "brand", val)}
            onDetailsChange={(val) => handleCustomSensorChange(idx, "details", val)}
          />
        ))}
        <SensorFormFooter
          onAdd={addCustomSensor}
          onNext={handleNext}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </section>
  );
};

export default SensorDetails;
