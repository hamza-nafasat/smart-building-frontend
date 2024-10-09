import React from "react";
import { Logo } from "../../assets/svgs";

const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed inset-0 w-[100vw] h-1[100vh] z-10 bg-[#00000080]">
      <Logo />
    </div>
  );
};

export default Loader;