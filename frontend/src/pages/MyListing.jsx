import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../Context/UserContext";
import Card from "../Component/Card";

function MyListing() {
  let navigate = useNavigate();
  let { userData } = useContext(userDataContext);

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

      <div className="bg-white shadow-xl rounded-3xl px-12 py-8 mt-8 text-center min-w-[320px]">
        <h1 className="text-4xl font-bold text-gray-800">My Listings</h1>

        <p className="text-gray-500 text-center mt-2">
          Manage your listed properties
        </p>
        <p className="mt-4 inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full font-medium">
  Total Properties: {userData?.listing?.length || 0}
</p>
      </div>
      <div className="w-full max-w-7xl flex flex-wrap justify-center gap-8 mt-10">
        {userData?.listing?.length === 0 ? (
          <div className="bg-white shadow-xl rounded-2xl p-10  text-center max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Listings Found
            </h2>

            <p className="text-gray-500 mt-2">
              Start by adding your first property.
            </p>

            <button
              onClick={() => navigate("/listingpage1")}
              className="mt-5 px-6 py-3 bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition-all"
            >
              Add Property
            </button>
          </div>
        ) : (
          <div className="w-full max-w-7xl flex flex-wrap justify-center gap-8 mt-10">
            {userData?.listing?.map((list) => (
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
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyListing;
