import React, { useState } from "react";

const Input = ({ type, label, ...rest }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="relative">
      {label && (
        <label className="block text-[#11111199] text-sm mb-2">{label}</label>
      )}
      <input
        className={`${
          type === "file"
            ? "opacity-0 absolute inset-0 w-full h-full cursor-pointer"
            : type === "color"
            ? "w-[30px] h-[35px] border-[0px] shadow-none"
            : "shadow-sm border-[1px] border-[#54545499] rounded-[6px] w-full px-[20px] py-[12px] text-[#414141] leading-tight focus:outline-none focus:shadow-outline"
        }`}
        type={type}
        onChange={type === "file" ? handleFileChange : undefined}
        {...rest}
      />
      {type === "file" && (
        <div className="pointer-events-none text-sm border-[1px] border-[#54545499] rounded-[6px] w-full px-[20px] py-[12px] text-[#414141]">
          {fileName || (
            <>
              Smart Building <span className="text-[#aaa]">OR</span> Drop Logo
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
