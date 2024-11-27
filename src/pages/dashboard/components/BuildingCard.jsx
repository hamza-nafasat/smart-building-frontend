import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import CardBg from "../../../assets/images/building/building-card-bg.png";
import buildingImage from "../../../assets/images/building/image.png";
import { PieChart, Pie, Cell } from "recharts";
import { AreaIcon, FloorIcon, SensorIcon } from "../../../assets/svgs";
import Button from "../../../globalComponents/shared/button/Button";

const BuildingCard = ({
  imageUrl,
  subtitle,
  title,
  numberOfFloors,
  totalArea,
  buildingId,
  sensorCount,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFav, setIsFav] = useState(false);

  const toggleFavorite = () => {
    setIsFav(!isFav);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const statuses = [
    { label: "Total Floors", value: 12, icon: <FloorIcon /> },
    { label: "Total Area", value: `${34}(sq)`, icon: <AreaIcon /> },
    { label: "Total Sensors", value: 65, icon: <SensorIcon /> },
  ];

  const data = [
    { name: "Sensor 1", value: 33 },
    { name: "Sensor 2", value: 41 },
    { name: "Sensor 3", value: 48 },
  ];

  const COLORS = ["#5B61D6", "#3070F5", "#57BEB5"];

  return (
    <>
      <div className="relative rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Image Section */}
        <div className="relative">
          <img
            src={buildingImage}
            alt="Featured"
            className="h-48 w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-0 left-0 bg-primary text-white text-xs  px-2 py-1 rounded-md">
            A+
          </div>
          <div
            className="absolute right-8 top-[170px] p-2 bg-white rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
            onClick={toggleFavorite}
          >
            {isFav ? (
              <MdFavorite className="text-primary text-3xl" />
            ) : (
              <MdFavoriteBorder className="text-primary text-3xl" />
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-2">
          {/* Title */}
          <h3 className="text-base md:text-xl font-[500] text-gray-800 capitalize">
            Torshov 0476
          </h3>
          <p className="text-xs text-gray-500 uppercase ">
            1220 E St NW, Washington, DC 20004
          </p>
          <div className="border-t border-gray-200 my-3"></div>

          {/* Status Section */}
          <div className="grid grid-cols-3 gap-2 text-center">
            {statuses.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-wrap">
                <span className="text-xs font-medium text-gray-700">
                  {item.label}
                </span>
                <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
                  {item.icon}
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background & Pie Chart */}
        <div className="relative">
          <img
            src={CardBg}
            alt="Background"
            className="absolute -bottom-20 right-0 w-[218px] h-[124px] z-0"
          />
        </div>

        {/* Footer Button */}
        <div className="p-4 flex justify-between items-start md:items-center flex-wrap-reverse md:gap-0 gap-3">
          <Link>
            <Button text="View Details" />
          </Link>

          <PieChart width={200} height={70}>
            <Pie
              data={data}
              cx="50%"
              cy="120%"
              innerRadius={40}
              outerRadius={70}
              startAngle={180}
              endAngle={0}
              paddingAngle={1}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default BuildingCard;
