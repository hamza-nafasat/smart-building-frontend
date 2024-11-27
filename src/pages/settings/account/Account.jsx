import { useState } from "react";
import Button from "../../../globalComponents/shared/button/Button";
import Input from "../../../globalComponents/shared/Input";
import ProfilePic from "../../../assets/images/default/profile.png";
import { MdModeEdit } from "react-icons/md";

const Account = () => {
  const [profileImage, setProfileImage] = useState(ProfilePic);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="md:container md:mx-auto p-2 relative">
      <div className="flex justify-between items-center">
        <h3 className="font-[500] text-lg md:text-2xl">Edit Profile</h3>
        <div className="relative w-20 h-20 md:w-40 md:h-40 group">
          <input
            type="file"
            id="fileInput"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            accept="image/*"
          />

          <img
            src={profileImage}
            alt="Profile"
            className="cursor-pointer w-full h-full object-cover rounded-full"
            onClick={() => document.getElementById("fileInput").click()}
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#007aff90] p-2 rounded-full text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <MdModeEdit fontSize={20} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-5">
        <Input type="text" placeholder="First name" />
        <Input type="text" placeholder="Last name" />
        <div className="col-span-1 lg:col-span-2">
          <Input type="email" placeholder="Email (Uneditable)" readOnly />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <Input type="text" placeholder="Address 33656" />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <Input type="number" placeholder="Contact" />
        </div>
        <Input type="text" placeholder="City" />
        <Input type="text" placeholder="State" />
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-1 md:gap-4 mt-5 justify-center">
        <Button
          bg="bg-white text-primary border-primary hover:bg-primary hover:text-white hover:border-transparent border-[1px]"
          text="Cancel"
          width="w-full md:w-[200px]"
        />
        <Button text="Save" width="w-full md:w-[200px]" />
      </div>
    </div>
  );
};

export default Account;
