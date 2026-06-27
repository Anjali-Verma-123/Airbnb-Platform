import React, { useState, useContext } from "react";
import axios from "axios";
import { authDataContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MdLockReset } from "react-icons/md";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { serverUrl } = useContext(authDataContext);

  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    try {
      const result = await axios.post(serverUrl + "/api/auth/forget-password", {
        email,
      });

      toast.success(result.data.message);
      setTimeout(() => {
  navigate("/reset-password");
}, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }finally {
    setLoading(false);
  }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100">
      <form
        onSubmit={handleSendOtp}
        className="w-[90%] max-w-[500px] bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 flex flex-col gap-5 border border-gray-200"
      >
        <div className="flex justify-center">
          <MdLockReset className="text-rose-500 text-6xl" />
        </div>
        <h1 className="text-3xl font-bold text-center">Forgot Password</h1>

        <p className="text-gray-500 text-center">Enter your registered email</p>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border border-gray-300 rounded-xl
          p-4 outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent
           transition-all"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="text-sm text-gray-500 text-center">
          We'll send a verification OTP to your email.
        </p>
        <button
          disabled={loading}
          className={`bg-gradient-to-r from-rose-500 to-pink-500
        hover:from-rose-600 hover:to-pink-600 text-white
         py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl
         hover:-translate-y-1 transition-all duration-300
         ${!loading && "hover:from-rose-600 hover:to-pink-600 hover:-translate-y-1 hover:shadow-xl"}

         `}
        >
           {loading ? "Sending OTP..." : "Send OTP"}
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-center text-gray-500 hover:text-rose-500 cursor-pointer font-medium transition-all duration-300"
        >
         Back To Login
        </p>
      </form>
    </div>
  );
}

export default ForgetPassword;
