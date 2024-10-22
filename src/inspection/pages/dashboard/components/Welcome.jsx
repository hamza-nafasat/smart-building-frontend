import React, { useEffect, useState } from "react";
import WelcomeImage from "../../../../assets/images/inspection/welcome-image.png";

import { WelcomeIcon } from "../../../../assets/svgs";

const Welcome = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="shadow-md border-[1px] rounded-xl bg-white p-4 lg:bg-welcome bg-no-repeat bg-right-top bg-contain grid grid-cols-1 lg:grid-cols-12 gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="lg:col-span-8">
        <div className="flex ">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <h4 className="text-base md:text-md text-[#7e7e7e] leading-none">
                  Welcome To
                </h4>
                <h2 className="text-lg md:text-2xl font-semibold text-[#060606cc] leading-none my-1 md:my-0">
                  Your Inspection Management Area
                </h2>
              </div>
              <div
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transform: isHovered ? `translateY(-10px)` : `translateY(0)`,
                }}
              >
                <WelcomeIcon />
              </div>
            </div>
            <p className="text-sm md:text-base text-[#7e7e7e] leading-[25px] max-w-[500px]">
              Efficiently monitor and manage all aspects of your inspections
              from this central hub. Streamline processes, track progress, and
              ensure compliance with ease.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 flex justify-center md:justify-end  ">
        <img
          src={WelcomeImage}
          alt="image"
          className="w-[220px]"
          style={{
            animation: isHovered ? "bounce 2s infinite" : "none",
            transition: "box-shadow 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default Welcome;
