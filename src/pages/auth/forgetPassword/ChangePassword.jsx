import { useState } from "react";
import Button from "../../../globalComponents/shared/button/Button";
import Input from "../../../globalComponents/shared/Input";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("password:", password);
    console.log("confirm password:", confirmPassword);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white border-[1px] rounded-lg w-72 md:w-96 p-5">
        <h3 className="text-xl text-center mb-2">Change Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 mb-4">
            <Input
              type="password"
              label="Password"
              placeholder="Type Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              label="Confirm Password"
              placeholder="Re-Type Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <Button type="submit" text="submit" width="w-full" />
        </form>

        <p className="text-sm text-gray-400 mt-4 cursor-pointer">
          Go To{" "}
          <Link to="/login">
            <span className="text-primary">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ChangePassword;
