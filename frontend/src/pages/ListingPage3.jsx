import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../Context/ListingContext";

function ListingPage3() {
  let navigate = useNavigate();

  let {
    title,
    setTitle,
    description,
    setDescription,
    frontEndImage1,
    setFrontEndImage1,
    frontEndImage2,
    setFrontEndImage2,
    frontEndImage3,
    setFrontEndImage3,
    backEndImage1,
    setBackEndImage1,
    backEndImage2,
    setBackEndImage2,
    backEndImage3,
    setBackEndImage3,
    rent,
    setRent,
    city,
    setCity,
    landmark,
    setLandmark,
    category,
    setCategory,
    handleAddListing,
    adding,
    setAdding,
  } = useContext(listingDataContext);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center flex-col py-10 relative">
       <div
        className=" group w-[50px] h-[50px] bg-white shadow-lg border border-gray-200
hover:bg-rose-500 transition-all duration-300 cursor-pointer
fixed top-6 left-6 z-50 rounded-full flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="w-5 h-5 text-gray-700 group-hover:text-white transition-all duration-300" />
      </div>
      <div className="px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-md mb-4">
        Step 3
      </div>
      <div className="w-[80%] mb-5">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Step 3 of 3</span>
          <span>Preview & Publish</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div className="w-full h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
        </div>
      </div>
      <div
        className="w-[95%] flex items-start justify-start text-[25px]
      md:w-[80%] mb-[10px]"
      >
        <h1
          className="text-[20px] text-[#272727] md:text-[30px]
      text-ellipsis text-nowwrap overflow-hidden px-[70px] md:px-[0px]"
        >
          {`In ${landmark.toUpperCase()}, ${city.toUpperCase()}`}
        </h1>
      </div>

      <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row">
        <div
          className="w-[100%] h-[65%] md:w-[70%] md:h-[100%]
        overflow-hidden flex items-center justify-center border-[2px] border-[white]
        "
        >
          <img
            src={frontEndImage1}
            alt=""
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>

        <div
          className="w-[100%] h-[50%] flex items-center justify-center
        md:w-[50%] md:h-[100%] md:flex-col"
        >
          <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]">
            <img
              src={frontEndImage2}
              alt=""
              className="w-full h-full object-cover rounded-tr-2xl"
            />
          </div>
          <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] ">
            <img
              src={frontEndImage3}
              alt=""
              className="w-full h-full object-cover rounded-tr-2xl"
            />
          </div>
        </div>
      </div>

      <div
        className="w-[95%] md:w-[80%] bg-white shadow-xl rounded-2xl p-6 mt-5"
      >
        <h2 className="text-3xl font-bold text-gray-800">
          {title}
        </h2>
        <span className="inline-block mt-3 px-4 py-1 bg-rose-100 text-rose-600 rounded-full font-medium">
          {category}
        </span>
      </div>
      <div
        className="w-[95%] md:w-[80%] bg-white shadow-xl rounded-2xl p-6 mt-5"
      >
        <p className="text-gray-600  leading-7">
          {description}
        </p>
      </div>
        <div className="w-[95%] md:w-[80%] bg-white shadow-xl rounded-2xl p-6 mt-5"
        >
          <h3 className="text-3xl font-bold text-rose-500">
            ₹{rent}
            <span className="text-lg text-gray-500"> / day</span>
          </h3>
      </div>

      <div className="w-full flex flex-col items-center mt-8">
        <p className="text-gray-500 text-center mb-4">
          Review your property details before publishing.
        </p>
        <button
          className="
h-[55px]
min-w-[250px]
bg-gradient-to-r
from-rose-500
to-pink-500
text-white
font-semibold
rounded-xl
shadow-lg
hover:shadow-2xl
hover:-translate-y-1
transition-all duration-300
disabled:opacity-50
disabled:cursor-not-allowed
"
          onClick={handleAddListing}
          disabled={adding}
        >
          {adding ?  "Publishing..." : "Publish Property"}
        </button>
      </div>
    </div>
  );
}

export default ListingPage3;
