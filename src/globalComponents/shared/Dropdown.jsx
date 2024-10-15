import React, { useEffect, useRef, useState } from "react";
import { ChevronDownSimple, ChevronDownStylish } from "../../assets/svgs";

const Dropdown = ({
  options,
  defaultText = "Select",
  onSelect,
  initialValue,
  width,
  simpleArrow = true,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const selectHandler = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option?.value || "not set");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      style={{ width: width || "100%" }}
    >
      {label && (
        <label class="block text-[#11111199] text-sm mb-2">{label}</label>
      )}
      <button
        type="button"
        className="shadow-sm border-[1px] border-[#54545499] flex gap-[5px] items-center justify-between rounded-[6px] px-[20px] py-[12px] text-sm md:text-base text-[#54545499]"
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: width || "100%" }}
      >
        <span className="text-sm text-[#414141] font-[500]">
          {selected ? selected.option : defaultText}
        </span>
        <div
          className={`transition-all duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {simpleArrow ? <ChevronDownSimple /> : <ChevronDownStylish />}
        </div>
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 h-fit rounded-[6px] shadow-md cursor-pointer border-[1px] border-[#54545433] mt-1 bg-white"
          style={{ width: width || "100%" }}
        >
          {options.map((option) => (
            <li
              className="py-2 text-xs px-3 border-b hover:bg-[#00000005]"
              key={option.value}
              onClick={() => selectHandler(option)}
            >
              {option.option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
