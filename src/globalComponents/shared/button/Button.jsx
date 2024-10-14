import React from "react";

const Button = ({ text, firstIcon = false, lastIcon = false, ...rest }) => {
  return (
    <button
      className={`rounded-[8px] px-[21px] py-[6px] flex gap-3`}
      style={{ background: "#007AFF", color: "white" }}
      {...rest}
    >
      {firstIcon && { firstIcon }}
      {text}
      {lastIcon && { lastIcon }}
    </button>
  );
};

export default Button;
