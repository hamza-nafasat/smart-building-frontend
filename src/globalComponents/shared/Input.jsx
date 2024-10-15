import React from "react";

const Input = ({ type, label, ...rest }) => {
  return (
    <div>
      {label && (
        <label className="block text-[#11111199] text-sm mb-2">{label}</label>
      )}
      <input
        className={` ${
          type === "color"
            ? "w-[30px] h-[35px] border-[0px] shadow-none "
            : "shadow-sm border-[1px] border-[#54545499] rounded-[6px] w-full px-[20px] py-[12px] text-[#414141] leading-tight focus:outline-none focus:shadow-outline"
        } `}
        type={type}
        autoCorrect={false}
        autoCapitalize={false}
        {...rest}
      />
    </div>
  );
};

export default Input;
