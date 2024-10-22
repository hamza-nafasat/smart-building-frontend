import React from "react";
import Input from "../../../globalComponents/shared/Input";
import Button from "../../../globalComponents/shared/button/Button";

const Security = () => {
  return (
    <div>
      <h3 className="md:text-lg text-base text-[#007AFF] my-5">
        Change Password
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <Input
          type="password"
          placeholder="Current Password"
          label="Current Password"
        />
        <Input
          type="password"
          placeholder="New Password"
          label="New Password"
        />
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
  );
};

export default Security;
