import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../Context/ListingContext";

function ListingPage1() {
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
  } = useContext(listingDataContext);

  const handleImage1 = (e) => {
    let file = e.target.files[0];
    setBackEndImage1(file);
    setFrontEndImage1(URL.createObjectURL(file));
  };

  const handleImage2 = (e) => {
    let file = e.target.files[0];
    setBackEndImage2(file);
    setFrontEndImage2(URL.createObjectURL(file));
  };

  const handleImage3 = (e) => {
    let file = e.target.files[0];
    setBackEndImage3(file);
    setFrontEndImage3(URL.createObjectURL(file));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center relative py-10">
      <form
        action=""
        className="max-w-[900px] w-[95%] bg-white shadow-2xl rounded-3xl p-8 flex flex-col gap-6 overflow-y-auto border border-gray-100"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/listingpage2");
        }}
      >
        <div
        className="group w-[50px] h-[50px] bg-white shadow-lg border border-gray-200
hover:bg-rose-500 transition-all duration-300 cursor-pointer
fixed top-6 left-6 z-50 rounded-full flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="w-5 h-5 text-gray-700 group-hover:text-white transition-all duration-300" />
      </div>
        <div className="w-full flex flex-col items-center mb-4">
          <h1 className="text-4xl font-bold text-gray-800">Setup Your Home</h1>

          <p className="text-gray-500 mt-2">Add details about your property</p>
        </div>
        <div className="w-full mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Step 1 of 3</span>
            <span>Property Details</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="w-1/2 h-2 bg-rose-500 rounded-full"></div>
          </div>
        </div>

        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
          <label
            htmlFor="title"
            className="text-lg font-semibold text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-[90%] h-[50px] border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all 
                    rounded-xl text-[18px] px-4"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="_bhk house or best title"
          />
        </div>

        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
          <label htmlFor="des" className="text-lg font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name=""
            id="des"
            className="w-[90%] h-[120px] border border-gray-300
                    rounded-xl text-[18px] px-4 py-3 outline-none focus:ring-2 focus:ring-rose-400 transition-all"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <div className="w-[90%] flex items-start justify-center flex-col gap-[10px]">
          <label htmlFor="img1" className="text-lg font-semibold text-gray-700">
            Image1
          </label>
          <div className="w-[90%] border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-rose-400 transition-all">
            <input
              type="file"
              id="img1"
              className="w-full text-[15px]"
              required
              onChange={handleImage1}
            />
          </div>
          {frontEndImage1 && (
            <img
              src={frontEndImage1}
              alt=""
              className="w-40 h-28 object-cover rounded-xl shadow-md mt-3"
            />
          )}
        </div>

        <div className="w-[90%] flex items-start justify-center flex-col gap-[10px]">
          <label htmlFor="img2" className="text-lg font-semibold text-gray-700">
            Image2
          </label>
          <div className="w-[90%] border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-rose-400 transition-all">
            <input
              type="file"
              id="img2"
              className="w-full text-[15px]"
              required
              onChange={handleImage2}
            />
          </div>
          {frontEndImage2 && (
            <img
              src={frontEndImage2}
              alt=""
              className="w-40 h-28 object-cover rounded-xl shadow-md mt-3"
            />
          )}
        </div>

        <div className="w-[90%] flex items-start justify-center flex-col gap-[10px]">
          <label htmlFor="img3" className="text-lg font-semibold text-gray-700">
            Image3
          </label>
          <div className="w-[90%] border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-rose-400 transition-all">
            <input
              type="file"
              id="img3"
              className="w-full text-[15px]"
              required
              onChange={handleImage3}
            />
          </div>
          {frontEndImage3 && (
            <img
              src={frontEndImage3}
              alt=""
              className="w-40 h-28 object-cover rounded-xl shadow-md mt-3"
            />
          )}
        </div>

        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
          <label htmlFor="rent" className="text-lg font-semibold text-gray-700">
            Rent
          </label>
          <input
            type="number"
            id="rent"
            className="w-[90%] h-[50px] border border-gray-300 rounded-xl px-4 outline-none focus:ring-2 focus:ring-rose-400 transition-all"
            required
            onChange={(e) => setRent(e.target.value)}
            value={rent}
            placeholder="Rs.______/day"
          />
        </div>

        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
          <label htmlFor="city" className="text-lg font-semibold text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-[90%] h-[50px] border border-gray-300 rounded-xl px-4 outline-none focus:ring-2 focus:ring-rose-400 transition-all"
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="city,country"
          />
        </div>

        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
          <label
            htmlFor="landmark"
            className="text-lg font-semibold text-gray-700"
          >
            Landmark
          </label>
          <input
            type="text"
            id="landmark"
            className="w-[90%] h-[50px] border border-gray-300 rounded-xl px-4 outline-none focus:ring-2 focus:ring-rose-400 transition-all"
            required
            onChange={(e) => setLandmark(e.target.value)}
            value={landmark}
          />
        </div>

        <button
          className="
  w-full md:w-auto
  px-12 py-4
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
"
        >
          Continue →
        </button>
      </form>
    </div>
  );
}

export default ListingPage1;
