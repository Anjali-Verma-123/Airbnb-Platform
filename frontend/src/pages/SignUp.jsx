import React from "react";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import { authDataContext } from "../Context/AuthContext";
import { userDataContext } from "../Context/UserContext";
import { toast } from "react-toastify";

function SignUp() {
  let [show, setShow] = useState(false);
  let navigate = useNavigate();
  let { serverUrl } = useContext(authDataContext);
  let { setUserData } = useContext(userDataContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { loading, setLoading } = useContext(authDataContext);

  const handleSignUp = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      let result = await axios.post(
        serverUrl + "/api/auth/signup",
        {
          name,
          email,
          password,
        },
        { withCredentials: true },
      );
      setLoading(false);
      setUserData(result.data);
      navigate("/");
      toast.success("Signup Successfully");
      console.log(result);
    } catch (error) {
      console.log(error);
      console.log(error.response?.data);

      toast.error(error.response?.data?.message || "Something went wrong");

      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center relative px-5">
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
        className="max-w-[500px] w-full bg-white shadow-2xl rounded-3xl p-10
          border border-gray-100  flex flex-col
           gap-5"
        onSubmit={handleSignUp}
      >
        <div className="mx-auto px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-md mb-4">
          Sign Up
        </div>
        <div className="text-center mb-4">
         
          <h1 className="text-4xl font-bold text-gray-800">Create Account</h1>

          <p className="text-gray-500 mt-2">
            Join Airbnb and start your journey
          </p>
        </div>
        <div className="w-full flex items-start justify-start flex-col gap-[10px] mt-[30px]">
          <label htmlFor="name" className="text-[20px]">
            User Name
          </label>
          <input
            type="text"
            autoComplete="name"
            id="name"
            className="
w-full
h-[50px]
border
border-gray-300
rounded-xl
px-4
text-lg
outline-none
focus:ring-2
focus:ring-rose-400
focus:border-transparent
transition-all
"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="w-full flex items-start justify-start flex-col gap-[10px]">
          <label htmlFor="email" className="text-[20px]">
            Email
          </label>
          <input
            type="email"
            autoComplete="email"
            id="email"
            className="
w-full
h-[50px]
border
border-gray-300
rounded-xl
px-4
text-lg
outline-none
focus:ring-2
focus:ring-rose-400
focus:border-transparent
transition-all
"
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
            autoComplete="new-password"
            className="
w-full
h-[50px]
border
border-gray-300
rounded-xl
px-4
text-lg
outline-none
focus:ring-2
focus:ring-rose-400
focus:border-transparent
transition-all
"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {!show && (
            <IoMdEye
              className="w-[22px] h-[22px] cursor-pointer absolute right-4 top-[48px]"
              onClick={() => setShow((prev) => !prev)}
            />
          )}
          {show && (
            <IoEyeOff
              className="w-[22px] h-[22px] cursor-pointer absolute right-4 bottom-[10px]"
              onClick={() => setShow((prev) => !prev)}
            />
          )}
        </div>
        <button
          className="
w-full
h-[55px]
bg-gradient-to-r
from-rose-500
to-pink-500
text-white
font-semibold
rounded-xl
shadow-lg
hover:shadow-2xl
hover:-translate-y-1
transition-all
duration-300
disabled:opacity-50
"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <span
            className="font-semibold cursor-pointer hover:text-rose-600 text-center text-gray-500 mt-2"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
