import Navbar from "../Navbar/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  const handleSignin = () => {
    if (username != null && password != null) {
      if (username == "admin" && password === "admin") {
            navigate("/dashboard")
        }
        else {
            navigate("/userDashboard")
        }
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto mt-32 w-[400px] px-5 py-5 border-2 border-slate-200 rounded-lg">
        <p className="text-xl font-bold">Login</p>
        <p className="text-sm mt-2">
          Enter your username below to login to your account
        </p>
        <p className="text-bold mt-3">Username</p>
        <Input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
        ></Input>
        <p className="text-bold mt-3">Password</p>
        <Input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        ></Input>
        <Button className="mt-5 w-full" onClick={()=> handleSignin()}>Sign In</Button>
      </div>
    </>
  );
};
export default Login;
