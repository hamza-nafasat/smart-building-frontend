import React from "react";

const TextArea = ({ ...rest }) => {
  return (
    <textarea
      {...rest}
      className="shadow-sm border-[1px] border-[#54545499] rounded-[6px] w-full px-[20px] py-[12px] text-[#414141] leading-tight focus:outline-none focus:shadow-outline"
    />
  );
};

export default TextArea;
