import React, { useState } from "react";
import ProfilePic from "../../../assets/images/default/profile.png";

// import { cities, states } from "../../../data/data";
import { FaPencilAlt } from "react-icons/fa";
import Input from "../../../globalComponents/shared/Input";
import Dropdown from "../../../globalComponents/shared/Dropdown";
import Button from "../../../globalComponents/shared/button/Button";

// Import your Button component

const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState(ProfilePic); // State to hold the profile image

  // Function to handle file input change
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the image to state
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <input
            type="file"
            id="fileInput"
            // key={fileInputKey}
            onChange={handleImageUpload}
            style={{ display: "none" }}
            accept="image/*"
          />
          <img
            src={ProfilePic}
            alt="Profile"
            className="cursor-pointer w-40 h-40 object-cover rounded-full "
            onClick={() => document.getElementById("fileInput").click()} // Click to upload
          />
        </div>
        <div className="flex-1">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <Input type="text" placeholder="Name" label="Name" />
              <Input type="text" placeholder="Last Name" label="Last Name" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <Input type="email" placeholder="Email" label="Email" />
              <Input
                type="number"
                placeholder="Phone Number"
                label="Phone Number"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <Input
                type="date"
                placeholder="Date of Birth"
                label="Date of Birth"
              />
              <Input type="tel" placeholder="Address" label="Address" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div>
                <h2 className="mb-2">City</h2>
                <Dropdown options={[{ option: "1" }]} defaultText="City" />
              </div>
              <div>
                <h2 className="mb-2">State</h2>
                <Dropdown options={[{ option: "1" }]} defaultText="State" />
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4 justify-end">
            <Button
              text="Back"
              bgColor="#C7C7C7"
              textColor="#fff"
              border="#C7C7C7"
              width="w-[175px]"
            />
            <Button
              text="Save"
              bgColor="rgba(0,122,255,1)"
              textColor="#fff"
              width="w-[175px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
