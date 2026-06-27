import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { useContext } from "react";
import { listingDataContext } from "../Context/ListingContext";

function ListingPage2() {
  let navigate = useNavigate();
  let { category, setCategory } = useContext(listingDataContext);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center relative py-10">
      <div
        className="group w-[50px] h-[50px] bg-white shadow-lg border border-gray-200
hover:bg-rose-500 transition-all duration-300 cursor-pointer
fixed top-6 left-6 z-50 rounded-full flex items-center justify-center"
        onClick={() => navigate("/listingpage1")}
      >
        <FaArrowLeftLong className="w-5 h-5 text-gray-700 group-hover:text-white transition-all duration-300" />
      </div>

      <div className="max-w-[900px] w-[95%] h-[550px] overflow-auto bg-white  shadow-2xl rounded-3xl p-8 border border-gray-100 flex flex-col items-center justify-start gap-[40px] mt-[30px]">
        <div className="px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-md">
  Step 2
</div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Choose Property Type
          </h1>

          <p className="text-gray-500 mt-2">
            Select the category that best describes your property
          </p>
        </div>

        <div className="w-[90%]">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Step 2 of 3</span>
            <span>Property Category</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="w-[66%] h-2 bg-rose-500 rounded-full"></div>
          </div>
        </div>
        <div
          className="max-w-[900px] w-[100%] h-[100%] flex flex-wrap items-center
     justify-center gap-[15px] md:w-[90%]"
        >
          <div
            className={`w-[180px] h-[140px] flex justify-center items-center flex-col cursor-pointer
        border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg hover:shadow-xl
hover:-translate-y-2
transition-all duration-300 
        ${category == "villa" ? "border-rose-500 bg-rose-50" : ""}`}
            onClick={() => setCategory("villa")}
          >
            <GiFamilyHouse className="w-10 h-10 text-rose-500 mb-2" />
            <h3>Villa</h3>
          </div>

          <div
            className={`w-[180px] h-[140px] flex justify-center items-center flex-col cursor-pointer
        border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg hover:shadow-xl
hover:-translate-y-2
transition-all duration-300
        ${category == "farmHouse" ? "border-rose-500 bg-rose-50" : ""}`}
            onClick={() => setCategory("farmHouse")}
          >
            <MdBedroomParent className="w-10 h-10 text-rose-500 mb-2" />
            <h3>Farm House</h3>
          </div>

          <div
            className={`w-[180px] h-[140px] flex justify-center items-center flex-col cursor-pointer
        border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg hover:shadow-xl
hover:-translate-y-2
transition-all duration-300
        ${category == "poolHouse" ? "border-rose-500 bg-rose-50" : ""}`}
            onClick={() => setCategory("poolHouse")}
          >
            <MdOutlinePool className="w-10 h-10 text-rose-500 mb-2" />
            <h3>Pool House</h3>
          </div>

          <div
            className={`w-[180px] h-[140px] flex justify-center items-center flex-col cursor-pointer
        border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg hover:shadow-xl
hover:-translate-y-2
transition-all duration-300
        ${category == "rooms" ? "border-rose-500 bg-rose-50" : ""}`}
            onClick={() => setCategory("rooms")}
          >
            <GiWoodCabin className="w-10 h-10 text-rose-500 mb-2" />
            <h3>Rooms</h3>
          </div>

          <div
            className={`w-[180px] h-[140px] flex justify-center items-center flex-col cursor-pointer
        border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg hover:shadow-xl
hover:-translate-y-2
transition-all duration-300
        ${category == "flat" ? "border-rose-500 bg-rose-50" : ""}`}
            onClick={() => setCategory("flat")}
          >
            <SiHomeassistantcommunitystore className="w-10 h-10 text-rose-500 mb-2" />
            <h3>Flat</h3>
          </div>

          <div
            className={`w-[180px] h-[140px] flex justify-center items-center flex-col cursor-pointer
        border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg hover:shadow-xl
hover:-translate-y-2
transition-all duration-300
                ${category == "pg" ? "border-rose-500 bg-rose-50" : ""}`}
            onClick={() => setCategory("pg")}
          >
            <IoBedOutline className="w-10 h-10 text-rose-500 mb-2" />
            <h3>PG</h3>
          </div>

          <div
            className={`w-[180px] h-[140px] flex justify-center items-center flex-col cursor-pointer
        border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg hover:shadow-xl
hover:-translate-y-2
transition-all duration-300
              ${category == "cabin" ? "border-rose-500 bg-rose-50" : ""}`}
            onClick={() => setCategory("cabin")}
          >
            <FaTreeCity className="w-10 h-10 text-rose-500 mb-2" />
            <h3>Cabins</h3>
          </div>

          <div
            className={`w-[180px] h-[140px] flex justify-center items-center flex-col cursor-pointer
        border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg hover:shadow-xl
hover:-translate-y-2
transition-all duration-300
                ${category == "shops" ? "border-rose-500 bg-rose-50" : ""}`}
            onClick={() => setCategory("shops")}
          >
            <BiBuildingHouse className="w-10 h-10 text-rose-500 mb-2" />
            <h3>Shops</h3>
          </div>
        </div>
       <div className="w-full flex justify-center mt-4">
        <button
          className="h-[50px] w-full md:w-auto
px-12 py-4 bg-rose-500 hover:bg-rose-600 hover:scale-110 shadow-lg transition-all duration-300 ..."
          onClick={() => navigate("/listingpage3")}
          disabled={!category}
        >
          Continue →
        </button>
        </div>
      </div>
    </div>
  );
}

export default ListingPage2;
