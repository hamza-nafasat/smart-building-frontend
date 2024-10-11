import React, { useEffect, useRef, useState } from "react";
import { ChevronIcon, RingIcon } from "../../../assets/svgs";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const notificationRef = useRef();
  const profileRef = useRef();

  const notificationOpenHandler = (e) => {
    setIsNotificationOpen(!isNotificationOpen);
    if(profileRef.current && notificationRef.current.contains(e.target)){
      setIsProfileOpen(false)
    }
  };

  const profileOpenHandler = (e) => {
    setIsProfileOpen(!isProfileOpen);
    if(notificationRef.current && profileRef.current.contains(e.target)) {
      setIsNotificationOpen(false)
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target) &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setIsNotificationOpen(false);
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [notificationRef, profileRef]);

  return (
    <header className="h-[205px]">
      <div className="flex items-center justify-end gap-4 xl:gap-6">
        <div className="relative">
          <div
            className="cursor-pointer"
            onClick={notificationOpenHandler}
            ref={notificationRef}
          >
            <RingIcon />
            <p className="absolute top-1 left-[-4px] text-[8px] font-light text-white bg-[#FD4B2E] w-3 h-3 rounded-full grid place-items-center">
              9
            </p>
          </div>
          <div
            className={`absolute top-[35px] right-0 w-[320px] overflow-y-scroll border-2 border-[#e4e4e43b] shadow-md bg-white rounded-lg custom-scroll transition-all duration-700 ${
              isNotificationOpen
                ? "h-[300px] opacity-100"
                : "h-0 invisible opacity-0"
            }`}
          >
            <Notification />
          </div>
        </div>
        <div className="bg-[#FFFFFF80] py-2 px-5 rounded-lg flex items-center justify-center gap-2 relative">
          <img
            src="https://placehold.co/600x400/white/007aff?text=AZ"
            alt="image"
            className="w-6 h-6 rounded-full object-cover"
          />
          <div
            className="flex items-center gap-2 text-white text-xs font-semibold cursor-pointer"
            onClick={profileOpenHandler}
            ref={profileRef}
          >
            MKS
            <div
              className={`transition-all duration-400 ${
                isProfileOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronIcon />
            </div>
          </div>
          <div
            onClick={profileOpenHandler}
            className={`absolute top-[45px] right-0 border-2 border-[#e4e4e43b] w-[150px] shadow-md rounded-lg custom-scroll transition-all duration-400 ${
              isProfileOpen ? "h-[76px] opacity-100" : "h-0 invisible opacity-0"
            }`}
          >
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Notification = () => {
  return (
    <div>
      <h6 className="text-primary text-sm md:text-base font-semibold text-center py-2 border-b">
        Notifications
      </h6>
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <Link className="text-primary text-sm font-semibold text-center py-2 sticky bottom-0 left-0 bg-white block">
        See All Notifications
      </Link>
    </div>
  );
};

const NotificationItem = ({ icon, title, value, time }) => {
  return (
    <div className="flex items-center justify-between gap-4 py-2 px-3 border-b cursor-pointer">
      <div className="flex items-center gap-2">
        <img
          src="https://placehold.co/600x400/79baff/red?text=NT"
          alt="icon"
          className="w-6 h-6 object-cover rounded-full"
        />
        <div>
          <h6 className="text-sm font-medium">Sensors added</h6>
          <p className="text-[10px] text-[#323232e6] font-medium">
            2 sensors added in building one
          </p>
        </div>
      </div>
      <p className="text-[10px] text-[#6e6e6e] font-medium">2 min ago</p>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="w-full">
      <Link to={"/account"} className="flex items-center justify-between gap-4 px-2 py-2 border-b bg-white rounded-t-md hover:bg-[#a6d1ff]">
        <h6 className="text-[13px] font-medium">My Profile</h6>
        <IoChevronForwardOutline fontSize={18} />
      </Link>
      <div className="flex items-center justify-between gap-4 px-2 py-2 cursor-pointer bg-white rounded-b-md hover:bg-[#a6d1ff]">
        <h6 className="text-[13px] font-medium">Logout</h6>
        <IoLogOutOutline fontSize={18} />
      </div>
    </div>
  );
};
