import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Input from "../../../globalComponents/shared/Input";
import { useState } from "react";
import Button from "../../../globalComponents/shared/button/Button";

const UserChangePassword = () => {
  const [oldPasswordType, setOldPasswordType] = useState("text");
  const [newPasswordType, setNewPasswordType] = useState("text");
  const [confirmPasswordType, setConfirmPasswordType] = useState("text");

  const handleShowOldPassword = () => {
    setOldPasswordType(!oldPasswordType);
  };
  const handleShowNewPassword = () => {
    setNewPasswordType(!newPasswordType);
  };

  const handleShowConfirmPassword = () => {
    setConfirmPasswordType(!confirmPasswordType);
  };
  return (
    <div className="mx-auto container px-4">
      <h3 className="font-[500] text-lg md:text-2xl mb-8">Change Password</h3>
      <div className="grid grid-cols-1 mt-4 gap-4">
        <Input
          type={oldPasswordType ? "password" : "text"}
          label="Old Password"
          icon={oldPasswordType ? <FaRegEye /> : <FaRegEyeSlash />}
          onIconClick={handleShowOldPassword}
          placeholder="Old Password"
        />
        <Input
          type={newPasswordType ? "password" : "text"}
          label="New Password"
          icon={newPasswordType ? <FaRegEye /> : <FaRegEyeSlash />}
          onIconClick={handleShowNewPassword}
          placeholder="New Password"
        />
        <Input
          type={confirmPasswordType ? "password" : "text"}
          label="Confirm New Password"
          icon={confirmPasswordType ? <FaRegEye /> : <FaRegEyeSlash />}
          onIconClick={handleShowConfirmPassword}
          placeholder="Confirm New Password"
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-1 md:gap-4 mt-5 justify-end">
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

export default UserChangePassword;
