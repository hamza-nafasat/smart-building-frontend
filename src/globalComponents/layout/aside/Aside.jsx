import React, { useState } from "react";
import logo from "../../../assets/images/default/logo.png";
import { ChevronIcon, Hambarger } from "../../../assets/svgs";
import { pages } from "./pages";
import { Link, useLocation } from "react-router-dom";

const Aside = () => {
  const [aside, setAside] = useState(false);
  const location = useLocation();
  const url = location.pathname;

  const asideToggleHandler = () => setAside(!aside);

  return (
    <div
      className={`${
        aside
          ? "relative"
          : "fixed 2xl:relative bg-[#00000099] 2xl:bg-transparent inset-0 2xl:inset-[unset] w-screen 2xl:w-auto h-screen 2xl:h-auto z-[999] p-4 2xl:p-0"
      }`}
      onClick={asideToggleHandler}
    >
      <aside
        className={`bg-primary rounded-xl transition-all duration-700 h-full ${
          aside
            ? "w-0 invisible opacity-0"
            : "w-[220px] visible opacity-100 p-4 mr-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <img src={logo} alt="logo" className="w-[30px]" />
          <div
            className={`cursor-pointer relative z-[999] ${
              aside ? "pt-4 invisible" : "pt-0 visible"
            }`}
            onClick={asideToggleHandler}
          >
            <Hambarger />
          </div>
        </div>
        <div className="my-5 w-full h-[2px] bg-[#FFFFFF33]"></div>
        <div className="flex flex-col gap-4">
          {pages.map((page, i) =>
            page.link ? (
              <Link
                to={page.link}
                key={i}
                className="bg-[#FFFFFF14] rounded-md py-[6px] px-4 flex items-center gap-4"
              >
                <span>{page.icon}</span>
                <div className="text-[12px] md:text-sm text-white tracking-wide">
                  {page.title}
                </div>
              </Link>
            ) : (
              <div
                key={i}
                className="bg-[#FFFFFF14] rounded-md py-[6px] px-4 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span>{page.icon}</span>
                  <div className="text-[12px] md:text-sm text-white tracking-wide">
                    {page.title}
                  </div>
                </div>
                <div className="transition-all">
                  <ChevronIcon />
                </div>
              </div>
            )
          )}
        </div>
      </aside>
      <div
        className={`fixed top-[4%] left-[1.6%] flex items-center justify-between w-[200px]`}
        onClick={asideToggleHandler}
      >
        <img
          src={logo}
          alt="logo"
          className={`w-[30px] hidden 2xl:block transition-all duration-300 ${
            aside ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`cursor-pointer transition-all duration-300 ${
            aside ? "opacity-100" : "opacity-0"
          }`}
        >
          <Hambarger />
        </div>
      </div>
    </div>
  );
};

export default Aside;
