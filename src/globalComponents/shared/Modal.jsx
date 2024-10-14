import React from "react";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ title, onClose, children, width, headingIcon }) => {
  return (
    <div
      className="modal bg-[#00000099] fixed top-0 left-0 inset-0 z-[99] p-6 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-[12px] shadow-lg p-4 md:p-6 overflow-y-scroll h-fit max-h-full no-scrollbar ${
          width ? width : "w-[300px] md:w-[600px] lg:w-[900px] xl:w-[1200px]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <span className="flex gap-1">
            {headingIcon && <span>{headingIcon}</span>}
            <h2 className="text-[#111111] font-semibold text-base md:text-xl">
              {title}
            </h2>
          </span>
          <div className="cursor-pointer" onClick={onClose}>
            <RxCross2 />
          </div>
        </div>
        <div className="mt-4 md:mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
