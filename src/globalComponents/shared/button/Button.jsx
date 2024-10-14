import React, { useState } from "react";

const Button = ({
  text,
  textColor = "#fff",
  bg = "#007AFF",
  hoverBg,
  hoverTextColor,
  firstIcon = false,
  lastIcon = false,
  borderColor = "transparent",
  width,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
<<<<<<< Updated upstream
      className={`rounded-[8px] px-[21px] py-[6px] flex gap-1 items-center justify-center capitalize ${
=======
      className={`rounded-md px-[21px] py-[10px] flex gap-1 items-center justify-center ${
>>>>>>> Stashed changes
        width ? width : "w-fit"
      }`}
      style={{
        backgroundColor: isHovered ? hoverBg : bg,
        color: isHovered ? hoverTextColor : textColor,
        transition: "background-color 0.3s ease, color 0.3s ease",
        border: `1px solid ${borderColor}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {firstIcon && <span>{firstIcon}</span>}
      {text}
      {lastIcon && <span>{lastIcon}</span>}
    </button>
  );
};

export default Button;
