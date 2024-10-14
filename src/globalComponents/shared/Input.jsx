import React from "react";

const Input = ({ type, label, placeholder, ...rest }) => {
  return (
    <div>
      {label && (
        <label class="block text-[#11111199] text-sm mb-2">{label}</label>
      )}
      <input
        class="shadow-sm border-[1px] border-[#54545499] rounded-[6px] w-full px-[20px] py-[12px] text-[#54545499] leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        autoCorrect={false}
        autoCapitalize={false}
        {...rest}
      />
    </div>
  );
};

export default Input;
