import React, {useContext} from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {userDataContext} from '../Context/UserContext';
import Card from '../Component/Card';

function MyBooking() {
  let navigate = useNavigate();
  let {userData} = useContext(userDataContext)

  return (
    <div
  className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50
  flex flex-col items-center py-10 px-5 relative"
>
      <div
  className="group w-[50px] h-[50px] bg-white shadow-lg border border-gray-200
  hover:bg-rose-500 transition-all duration-300 cursor-pointer
  fixed top-6 left-6 z-50 rounded-full flex items-center justify-center"
  onClick={() => navigate("/")}
>
  <FaArrowLeftLong className="w-5 h-5 text-gray-700 group-hover:text-white transition-all duration-300" />
</div>
      <div className="bg-white shadow-xl rounded-2xl px-10 py-4 mt-8">
  <h1 className="text-4xl font-bold text-gray-800 text-center">
    My Bookings
  </h1>

  <p className="text-gray-500 text-center mt-2">
    All your booked properties
  </p>

  <p className="text-gray-500 text-center mt-3">
    Total Bookings: {userData?.booking?.length || 0}
  </p>
</div>
      <div className="w-full max-w-7xl flex flex-wrap justify-center gap-8 mt-10">
        {userData?.booking?.length === 0 ? (
  <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
    <h2 className="text-2xl font-semibold text-gray-700">
      No Bookings Yet
    </h2>

    <p className="text-gray-500 mt-2">
      Explore properties and book your first stay.
    </p>

    <button
      onClick={() => navigate("/")}
      className="mt-5 px-6 py-3 bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition-all"
    >
      Explore Properties
    </button>
  </div>
) : (
  userData.booking.map((list) => (
    <Card
      key={list._id}
      title={list.title}
      landmark={list.landmark}
      city={list.city}
      image1={list.image1}
      image2={list.image2}
      image3={list.image3}
      rent={list.rent}
      id={list._id}
      isBooked={list.isBooked}
      ratings={list.ratings}
      host={list.host}
      status={list.isBooked ? "Occupied" : "Available"}
    />
  ))
)}
      </div>
    </div>
  );
}

export default MyBooking;
