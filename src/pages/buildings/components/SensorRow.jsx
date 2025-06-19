import React from "react";
import Input from "../../../globalComponents/shared/Input";
import TextArea from "../../../globalComponents/shared/TextArea";

const SensorRow = ({ sensor, idx, isCustom, onCheck, onTypeChange, onQuantityChange, onBrandChange, onDetailsChange }) => (
  <div className="grid grid-cols-12 gap-4 items-center mb-2" key={idx + sensor.type}>
    <div className="col-span-3 flex items-center gap-2">
      <input
        type="checkbox"
        checked={sensor.checked}
        onChange={e => onCheck(e.target.checked)}
        className="accent-[#007AFF] w-4 h-4 rounded mr-2"
      />
      {isCustom ? (
        <Input
          type="text"
          placeholder="Custom sensor type"
          value={sensor.type}
          onChange={e => onTypeChange(e.target.value)}
        />
      ) : (
        <span className={idx === 0 ? "font-semibold" : "font-normal"}>{sensor.type}</span>
      )}
    </div>
    <div className="col-span-3">
      <Input
        type="number"
        placeholder="Quantity"
        value={sensor.quantity}
        onChange={e => onQuantityChange(e.target.value)}
      />
    </div>
    <div className="col-span-2">
      <Input
        type="text"
        placeholder="Brand"
        value={sensor.brand}
        onChange={e => onBrandChange(e.target.value)}
      />
    </div>
    <div className="col-span-4">
      <TextArea
        placeholder="Other Details*"
        rows={1}
        value={sensor.details}
        onChange={e => onDetailsChange(e.target.value)}
      />
    </div>
  </div>
);

export default SensorRow; 