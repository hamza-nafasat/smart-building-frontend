import { FaPlus } from "react-icons/fa";
import { BlueBgLocationIcon, BlueBgPhoneIcon } from "../../../assets/svgs";
import { Link } from "react-router-dom";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Inspectionists = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-base md:text-lg">Inspectionists</h3>
        <Link to="/inspection-officer">
          <div className="flex cursor-pointer items-center gap-1 text-xs p-3 rounded-2xl border-[1px] border-primary text-primary">
            <FaPlus fontSize={10} />
            Add Inspectionist
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 mt-2 md:mt-4">
        <SingleInspectionCard />
        <SingleInspectionCard />
        <SingleInspectionCard />
        <SingleInspectionCard />
        <SingleInspectionCard />
        <SingleInspectionCard />
        <SingleInspectionCard />
        <SingleInspectionCard />
      </div>
    </div>
  );
};

export default Inspectionists;

const SingleInspectionCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-2 md:p-5">
      <div className="flex flex-col gap-2 items-center">
        <div className="relative w-full flex items-center justify-center">
          <img
            src="https://placehold.co/113x105"
            alt="profile"
            className="w-28 h-28 rounded-lg object-cover"
          />

          <div className="absolute top-0 right-2 text-gray-500 cursor-pointer">
            <PiDotsThreeOutlineVerticalFill size={20} />
          </div>
        </div>
        <h2 className="text-sm md:text-base font-bold">Angela Moss</h2>
        <div className="text-xs text-[#A5A5A5] flex items-center gap-1">
          Building Owner at{" "}
          <span className="text-[#047CFF]">Office Building</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex items-center gap-3">
          <BlueBgPhoneIcon />
          <p className="text-xs md:text-sm font-[500]">+12 345 6789 0</p>
        </div>
        <div className="flex items-center gap-3">
          <BlueBgLocationIcon />
          <p className="text-xs md:text-sm font-[500]">
            Springfield, IL 62704, USA
          </p>
        </div>
      </div>
    </div>
  );
};
