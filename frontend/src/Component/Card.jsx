import React, { useContext, useState } from "react";
import { userDataContext } from "../Context/UserContext";
import { listingDataContext } from "../Context/ListingContext";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import { bookingDataContext } from "../Context/BookingContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Card({
  title,
  landmark,
  image1,
  image2,
  image3,
  rent,
  city,
  id,
  ratings,
  isBooked,
  host,
  guest,
}) {
  let navigate = useNavigate();
  let { userData } = useContext(userDataContext);
  let { handleViewCard } = useContext(listingDataContext);
  let [popUp, setPopUp] = useState(false);
  let { cancelBooking } = useContext(bookingDataContext);
  
console.log("isBooked =", isBooked);
console.log("isOwner =", host?._id === userData?._id);
  const handleClick = () => {
    if (userData) {
      handleViewCard(id);
    } else {
      navigate("/login");
    }
  };
  const images = [image1, image2, image3].filter(Boolean);

  return (
        <div
  className="w-[350px] max-w-[85%] h-[500px] flex items-start
justify-start flex-col rounded-xl overflow-hidden cursor-pointer relative z-[10]
shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white group"
  onClick={handleClick}
>     
      <div
            className="relative w-full h-[67%] overflow-hidden rounded-t-xl"
          >

        {isBooked &&
(host?._id === userData?._id ||
guest?._id === userData?._id) && (
        <div
  className="absolute top-3 right-3 z-50 bg-green-500 text-white px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg"
>
          <GiConfirmed className="w-[20px] h-[20px] text-[green]" />
          Booked
        </div>
      )}
      {status && (
        <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md z-20">
          {status}
        </span>
      )}
      {isBooked && guest?._id === userData?._id && (
        <div className="absolute top-16  right-3 z-50 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg"
        onClick={(e) => {
    e.stopPropagation();
    setPopUp(true);
}}
        >
          <FcCancel className="w-[20px] h-[20px]" />
          Cancel Booking
        </div>
      )}
      {popUp && (
        <div
className="w-[300px] h-[100px]  bg-[#ffffffdf]
absolute top-[110px] left-1/2 -translate-x-1/2 rounded-lg z-50"
onClick={(e)=>e.stopPropagation()}
>
          <div
            className="w-[100%] h-[50%] text-[#2e2d2d] flex items-start
        justify-center rounded-lg overflow-auto text-[20px] p-[10px]"
          >
            Booking Cancel!
          </div>
          <div
            className="w-[100%] h-[50%] text-[18px] font-semibold flex items-start
        justify-center gap-[10px] text-[#986b6b]"
          >
            Are you sure?
            <button
              className="px-[20px] bg-rose-500 hover:bg-rose-600 transition-all duration-300 text-[white] rounded-lg"
              onClick={(e) => {
    e.stopPropagation();
    cancelBooking(id);
    setPopUp(false);
}}
            >
              Yes
            </button>
            <button
              className="px-[20px] bg-rose-500 hover:bg-rose-600 transition-all duration-300 text-[white] rounded-lg"
              onClick={(e) => {
    e.stopPropagation();
    setPopUp(false);
}}
              >
              No
            </button>
          </div>
        </div>
      )}
          
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              className="w-full h-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}
                className="w-full h-full"
                >
                  <img
                    src={img}
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
      </div>
      <div className="w-full h-[33%] p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[15px] font-semibold text-gray-800">{city}</p>

            <p className="text-[13px] text-gray-500">Near {landmark}</p>
          </div>

          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">{ratings || "New"}</span>
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900  line-clamp-2">
          {title}
        </h3>
        <span className="text-xl font-bold text-black">
          ₹{rent}
          <span className="text-[13px] text-gray-500 font-normal">/night</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
