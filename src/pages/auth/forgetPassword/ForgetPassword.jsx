import { useState } from "react";
import Button from "../../../globalComponents/shared/button/Button";
import Input from "../../../globalComponents/shared/Input";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    navigate("/change-password");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white border-[1px] rounded-lg w-72 md:w-96 p-5">
        <h3 className="text-xl text-center mb-2">Forget Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 mb-4">
            <Input
              type="email"
              label="Email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default ForgetPassword;
