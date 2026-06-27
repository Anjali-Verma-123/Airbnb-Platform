import React, { useContext, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import Star from "../Component/Star"
import { bookingDataContext } from "../Context/BookingContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {userDataContext} from '../Context/UserContext';
import {authDataContext} from '../Context/AuthContext'
import {listingDataContext} from '../Context/ListingContext'
import { FaArrowLeftLong } from "react-icons/fa6";
 
function Booked() {
  let { bookingData } = useContext(bookingDataContext);
  let [star, setStar] = useState(null);
  let { serverUrl } = useContext(authDataContext)
  let { getCurrentUser } = useContext(userDataContext)
  let { getListing } = useContext(listingDataContext)
  let { cardDetails } = useContext(listingDataContext)

  let navigate = useNavigate();

  const handleRating = async(id) => {
    try {
      let result = await axios.post(serverUrl + `/api/listing/ratings/${id}`,{
        ratings:star
      },{withCredentials:true})
      await getListing()
      await getCurrentUser()
      console.log(result)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }



  const handleStar = async (value) => {
    setStar(value);
    console.log("You Rated", value);
  };
  if (!bookingData || !bookingData._id) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}
  return (
      <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex flex-col items-center justify-center py-10 px-5 relative">
      <div
        className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 mt-8"
      >
       <button
className="group w-[50px] h-[50px] bg-white shadow-lg border border-gray-200
hover:bg-rose-500 transition-all duration-300
fixed top-6 left-6 z-50 rounded-full flex items-center justify-center"
onClick={()=>navigate("/")}
>
<FaArrowLeftLong className="w-5 h-5 text-gray-700 group-hover:text-white"/>
</button>
       <div
         className="w-full flex flex-col items-center mb-6"
        >
          <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center">
    <GiConfirmed className="w-16 h-16 text-green-600 animate-pulse"/>
</div>
         <div className="px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-md mb-4">
  Booking Successful
</div>

<h1 className="text-4xl font-bold text-gray-800">
  Your Booking is Confirmed 🎉
</h1>

<p className="text-gray-500 mt-2">
  Thank you for choosing our service.
</p> 
        </div>
        <div className="w-full flex justify-between border-b py-3">
    <span className="text-gray-500">
        Booking ID
    </span>

    <span className="font-semibold">
        {bookingData?._id?.slice(0,12)}
    </span>
</div>
        <div className="w-full flex justify-between border-b py-3">
    <span className="text-gray-500">
        Owner
    </span>

    <span className="font-semibold">
        {bookingData?.host?.email}
    </span>
</div>
        <div className="w-full flex justify-between py-3">
    <span className="text-gray-500">
        Total Rent
    </span>

    <span className="text-rose-500 font-bold text-xl">
     ₹{bookingData?.totalRent.toLocaleString("en-IN")}
    </span>
</div>
      <div className="w-full bg-gray-50 rounded-2xl border border-gray-200 p-8 mt-8 flex flex-col items-center">

    <h2 className="text-2xl font-bold text-gray-800">
        Rate Your Stay
    </h2>

    <p className="text-gray-500 mt-2">
        Share your experience
    </p>

    <Star onRate={handleStar}/>

    <h2 className="text-lg font-medium text-gray-700 mt-4">
        {star ? `${star} out of 5 ⭐` : "Give your rating"}
    </h2>

    <p className="text-gray-500 mt-2">
        {star
            ? `You rated this property ${star} ⭐`
            : "Select your rating"}
    </p>

    <button
        disabled={!star}
        className={`w-full mt-6 h-[55px] rounded-xl font-semibold transition-all duration-300 ${
            star
                ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:-translate-y-1 hover:shadow-2xl"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        onClick={() => handleRating(cardDetails?._id)}
    >
        Submit
    </button>

    <button
        onClick={() => navigate("/")}
        className="w-full mt-3 h-[55px] border border-rose-500 text-rose-500 rounded-xl hover:bg-rose-50"
    >
        Back to Home
    </button>

    <p className="text-sm text-gray-400 mt-8 text-center">
        Thank you for staying with us ❤️
    </p>

</div>
  
      </div>
    </div>
  );
  
}

export default Booked;
