import React from 'react'

const BuildingCardList = () => {
    return (
      <div className="flex flex-wrap border-b">
        <img
          src="https://placehold.co/200x100"
          className="sm:basis-[40%] w-full h-[100px] object-cover"
        />
        <div className="sm:basis-[60%] flex flex-col justify-center px-4 md:px-6 py-2">
          <h4 className="text-sm font-semibold text-[#252424]">Torshov 0476</h4>
          <div className="flex items-center gap-1">
            <PiMapPinLineLight color="#3bf184" />
            <p className="text-[10px] text-gray-500">
              1220 E St NW, Washington, DC 20004
            </p>
          </div>
          <div className="flex items-center justify-center mt-4 md:mt-8">
            <FloorList
              title="Total Floors"
              value="93"
              icon={<TotalFloorsIcon />}
            />
            <FloorList
              title="Total Area"
              value="80"
              icon={<TotalAreaIcon />}
              border
            />
            <FloorList
              title="Total Sensors"
              value="1212(sq)"
              icon={<TotalSensorIcon />}
            />
          </div>
        </div>
      </div>
    );
  };
  

export default BuildingCardList

const FloorList = ({ title, value, icon, border }) => {
    return (
      <div
        className={`flex items-center flex-col gap-1 px-4 md:px-8 ${
          border && "border-x border-[#D8D8D8]"
        }`}
      >
        <h6 className="text-center text-[#424242] text-[8px] font-bold">
          {title}
        </h6>
        <div className="flex items-center gap-1">
          {icon}
          <h6 className="text-[8px] font-semibold text-[#4F4F4FB2]">{value}</h6>
        </div>
      </div>
    );
  };
  