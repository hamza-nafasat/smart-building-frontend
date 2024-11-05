import { useState } from "react";
import Button from "../../../globalComponents/shared/button/Button";
import Input from "../../../globalComponents/shared/Input";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white border-[1px] rounded-lg w-72 md:w-96 p-5">
        <h3 className="text-xl text-center mb-2">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-4">
            <Input
              type="email"
              label="Email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              label="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type="checkbox" className="text-gray-400" />
            <label className="text-gray-400 text-sm">Remember Me</label>
          </div>

          <Button type="submit" text="login" width="w-full" />
        </form>
        <Link to="/forget-password">
          <p className="text-sm text-gray-400 mt-4 cursor-pointer hover:text-primary">
            Forgot password?
          </p>
        </Link>
        <p className="text-sm text-gray-400 mt-4 cursor-pointer">
          Dont have account?{" "}
          <Link to="/signup">
            <span className="text-primary">Signup</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
