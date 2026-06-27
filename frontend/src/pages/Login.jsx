import React from "react";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { authDataContext } from "../Context/AuthContext";
import axios from "axios";
import { userDataContext } from "../Context/UserContext";
import {toast} from 'react-toastify';

function Login() {
  let [show, setShow] = useState(false);
  let { serverUrl } = useContext(authDataContext);
  let { userData, setUserData } = useContext(userDataContext);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { loading, setLoading } = useContext(authDataContext);
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      setLoading(false);
      setUserData(result.data);
      navigate("/");
      toast.success("Login Successfully");
      console.log(result);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-purple-100">
     <div
        className="group w-[50px] h-[50px] bg-white shadow-lg border border-gray-200
hover:bg-rose-500 transition-all duration-300 cursor-pointer
fixed top-6 left-6 z-50 rounded-full flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="w-5 h-5 text-gray-700 group-hover:text-white transition-all duration-300" />
      </div>
      <form
        action=""
        className="max-w-[500px] w-full bg-white shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 p-8
            flex items-center justify-center flex-col
            md:items-start gap-[10px]"
        onSubmit={handleLogin}
      >
         <h1 className="text-[32px] font-bold text-slate-800">
  Welcome Back 👋
</h1>

<p className="text-slate-500">
  Login to access your StayFinder account
</p>
        <div className="w-full flex items-start justify-start flex-col gap-[10px]">
          <label htmlFor="email" className="text-[20px]">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-full h-[40px] border-[2px]  border-gray-300 focus:border-rose-500 focus:outline-none
                    rounded-lg text-[18px] px-[20px]"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-full flex items-start justify-start flex-col gap-[10px] relative">
          <label htmlFor="password" className="text-[20px]">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            id="password"
            className="w-full h-[40px] 
                    border-[2px] border-gray-300 focus:border-rose-500 focus:outline-none rounded-lg text-[18px] 
                    px-[20px] "
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {!show && (
            <IoMdEye
              className="w-[22px] h-[22px] cursor-pointer absolute right-[12%] bottom-[10px]"
              onClick={() => setShow((prev) => !prev)}
            />
          )}
          {show && (
            <IoEyeOff
              className="w-[22px] h-[22px] cursor-pointer absolute right-[12%] bottom-[10px]"
              onClick={() => setShow((prev) => !prev)}
            />
          )}
        </div>
        <p className="text-sm text-rose-500 cursor-pointer hover:underline"
        onClick={() => navigate("/forget-password")}>
  Forgot Password?
</p>
        <button className="px-[50px] py-[10px] bg-rose-500 hover:bg-rose-600 hover:scale-105 shadow-md transition-all duration-300 text-[white] text-[18px] md:px-[100px] rounded-lg" disabled={loading}>
          {loading?"Loading...":"Login"}
        </button>
        <p className="text-[18px]">
          Create new account?{" "}
          <span
            className="text-[19px] text-[red] cursor-pointer"
            onClick={() => navigate("/SignUp")}
          >
            SignUp
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
