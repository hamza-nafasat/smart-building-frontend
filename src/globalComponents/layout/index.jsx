import React from "react";
import Aside from "./aside/Aside";
import Header from "./header/Header";
import Main from "./main/Main";

const MainDashboard = () => {
  return (
    <div className="dashboard w-full p-4 flex justify-between bg-[#F5F7FB] h-screen overflow-hidden relative z-0">
      <Aside />
      <div className="flex-1">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default MainDashboard;
