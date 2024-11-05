import { useState } from "react";
import Button from "../../../globalComponents/shared/button/Button";
import Input from "../../../globalComponents/shared/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [dob, setDob] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("First Name:", fname);
    console.log("Last Name:", lname);

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("address:", address);
    console.log("First Name:", fname);
    console.log("City:", city);
    console.log("State:", state);
    console.log("DOB:", dob);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white border-[1px] rounded-lg w-72 md:w-96 p-5">
        <h3 className="text-xl text-center mb-2">SignUp</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex gap-3">
              <Input
                type="text"
                label="First Name"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <Input
                type="text"
                label="Last Name"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <Input
              type="email"
              label="Email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="number"
              label="Phone Number"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <Input
              type="password"
              label="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="text"
              label="Address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              type="date"
              label="DOB"
              placeholder="Address"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <Input
              type="text"
              label="City"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              type="text"
              label="State"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <input type="checkbox" className="text-gray-400" />
            <label className="text-gray-400 text-sm">Remember Me</label>
          </div>

          <Button type="submit" text="submit" width="w-full" />
        </form>
        <p className="text-sm text-gray-400 mt-4 cursor-pointer">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-primary">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
