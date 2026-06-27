import React, { useContext, useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../Context/ListingContext";
import { userDataContext } from "../Context/UserContext";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { authDataContext } from "../Context/AuthContext";
import { FaStar } from "react-icons/fa";
import { bookingDataContext } from "../Context/BookingContext";
import { toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";

function ViewCard() {
  let { serverUrl } = useContext(authDataContext);
  let navigate = useNavigate();
  let { cardDetails } = useContext(listingDataContext);
  let { userData } = useContext(userDataContext);
  let [updatePopUp, setUpdatePopUp] = useState(false);
  let [bookingPopUp, setBookingPopUp] = useState(false);
  let [title, setTitle] = useState(cardDetails?.title || "");
  let [description, setDescription] = useState(cardDetails?.description || "");
  let [backEndImage1, setBackEndImage1] = useState(null);
  let [backEndImage2, setBackEndImage2] = useState(null);
  let [backEndImage3, setBackEndImage3] = useState(null);
  let [rent, setRent] = useState(cardDetails?.rent || "");
  let [city, setCity] = useState(cardDetails?.city || "");
  let [landmark, setLandmark] = useState(cardDetails?.landmark || "");
  let [category, setCategory] = useState(cardDetails?.category || "");
  let { updating, setUpdating } = useContext(listingDataContext);
  let { deleting, setDeleting } = useContext(listingDataContext);
  let [minDate, setMinDate] = useState("");
  let {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    total,
    setTotal,
    night,
    setNight,
    handleBooking,
    booking,
  } = useContext(bookingDataContext);

  useEffect(() => {
    if (checkIn && checkOut) {
      let inDate = new Date(checkIn);
      let OutDate = new Date(checkOut);
      let n = (OutDate - inDate) / (24 * 60 * 60 * 1000);
      setNight(n);
      let airBnbCharge = cardDetails.rent * (7 / 100);
      let tax = cardDetails.rent * (7 / 100);

      if (n > 0) {
        setTotal(cardDetails.rent * n + airBnbCharge + tax);
      } else {
        setTotal(0);
      }
    }
  }, [checkIn, checkOut, cardDetails.rent, total]);

  const handleUpdateListing = async () => {
    setUpdating(true);
    try {
      let formData = new FormData();
      formData.append("title", title);
      if (backEndImage1) {
        formData.append("image1", backEndImage1);
      }
      if (backEndImage2) {
        formData.append("image2", backEndImage2);
      }
      if (backEndImage3) {
        formData.append("image3", backEndImage3);
      }
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landmark", landmark);
      formData.append("category", category);
      let result = await axios.post(
        serverUrl + `/api/listing/update/${cardDetails._id}`,
        formData,
        { withCredentials: true },
      );
      console.log(result);
      toast.success("Listing Updated");
      navigate("/");
      setTitle("");
      setDescription("");
      setBackEndImage1(null);
      setBackEndImage2(null);
      setBackEndImage3(null);
      setRent("");
      setCity("");
      setLandmark("");
      setCategory("");
    } catch (error) {
      setUpdating(false);
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleDeleteListing = async () => {
    setDeleting(true);
    try {
      const result = await axios.delete(
        `${serverUrl}/api/listing/delete/${cardDetails._id}`,
        { withCredentials: true },
      );
      console.log(result.data);
      navigate("/");
      toast.success("Listing Deleted");
      setDeleting(false);
    } catch (error) {
      console.log(error);
      setDeleting(false);
      toast.error(error.response.data.message);
    }
  };

  const handleImage1 = (e) => {
    let file = e.target.files[0];
    setBackEndImage1(file);
  };

  const handleImage2 = (e) => {
    let file = e.target.files[0];
    setBackEndImage2(file);
  };

  const handleImage3 = (e) => {
    let file = e.target.files[0];
    setBackEndImage3(file);
  };

  useEffect(() => {
    let today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  return (
    <div>
      <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center gap-[10px] flex-col  relative pt-[80px]">
        <div
          className="group w-[50px] h-[50px] bg-white shadow-lg border border-gray-200
hover:bg-rose-500 transition-all duration-300 cursor-pointer
fixed top-6 left-6 z-50 rounded-full flex items-center justify-center"
          onClick={() => navigate("/")}
        >
          <FaArrowLeftLong className="w-5 h-5 text-gray-700 group-hover:text-white transition-all duration-300" />
        </div>

        <div
          className="w-[95%]  flex items-start justify-start text-[25px]
      md:w-[80%] mb-[10px]"
        >
          <h1
            className="text-3xl font-bold text-gray-800  md:text-[30px]
      text-ellipsis text-nowwrap overflow-hidden px-[70px] md:px-[0px] mt-[20px]"
          >
            {cardDetails.title}
            <p className="text-gray-500 mt-[3px]">
              📍 {cardDetails.landmark}, {cardDetails.city}
            </p>
          </h1>
        </div>
        <div className="w-[95%] md:w-[80%] bg-white shadow-md rounded-xl p-3">
          <h2 className="text-xl font-semibold mb-3">About this place</h2>

          <p className="text-gray-600 leading-7">{cardDetails.description}</p>
        </div>
        <div className="w-[95%] h-[450px] bg-white rounded-3xl shadow-2xl p-3 border border-gray-100 flex items-center justify-center flex-col md:w-[80%] md:flex-row">
          <div
            className="w-[100%] h-[65%] md:w-[70%] md:h-[100%]
        overflow-hidden flex items-center justify-center border-[2px] border-[white]
        "
          >
            <img
              src={cardDetails.image1}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
            />
          </div>

          <div
            className="w-[100%] h-[50%] flex items-center justify-center
        md:w-[50%] md:h-[100%] md:flex-col"
          >
            <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]">
              <img
                src={cardDetails.image2}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] ">
              <img
                src={cardDetails.image3}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="w-[95%] md:w-[80%] mt-4 bg-white rounded-xl shadow-md p-4">
          <h2 className="text-3xl font-bold text-rose-500">
            ₹{cardDetails.rent}
            <span className="text-base text-gray-500 font-normal">/night</span>
          </h2>
        </div>

        <div className="w-[95%] md:w-[80%] flex items-center justify-center mt-6">
          {cardDetails.host._id === userData?._id && (
            <button
              className="w-[95%] md:w-[80%] justify-center mt-6 px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-lg
              rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1
              transition-all duration-300 flex items-center gap-2 mb-5"
              onClick={() => setUpdatePopUp((prev) => !prev)}
            >
              <FaEdit />
              Edit Listing
            </button>
          )}
          {cardDetails.host._id !== userData?._id && !cardDetails.isBooked && (
            <button
              className="px-[60px] py-[14px] bg-gradient-to-r from-rose-500 to-pink-500 text-[white] font-semibold
              rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              onClick={() => setBookingPopUp(true)}
            >
              Reserve
            </button>
          )}
          {cardDetails.host._id !== userData?._id &&
            cardDetails.isBooked &&
            cardDetails.guest?._id === userData?._id && (
              <button
                className="px-[60px] py-[14px] bg-green-600 text-white font-semibold rounded-xl"
                disabled
              >
                Your Booking
              </button>
            )}
          {cardDetails.host._id !== userData?._id &&
            cardDetails.isBooked &&
            cardDetails.guest?._id !== userData?._id && (
              <button
                className="px-[60px] py-[14px] bg-gray-500 text-white font-semibold rounded-xl cursor-not-allowed"
                disabled
              >
                Already Booked
              </button>
            )}
        </div>
      </div>

      {/*Update Listing Page */}

      {updatePopUp && (
        <div
          className="w-full min-h-screen flex items-center justify-center
   bg-[#000000c6] absolute top-[0px] z-[100] backdrop-blur-sm"
        >
          <RxCross2
            className="w-[25px] h-[25px] bg-rose-500 hover:bg-rose-600 transition-all duration-300 cursor-pointer absolute top-[6%] left-[20px] rounded-[50%] flex items-center justify-center"
            onClick={() => setUpdatePopUp(false)}
          />

          <form
            action=""
            className="max-w-[900px] w-[90%] max-h-[85vh] overflow-y-auto flex items-center
     justify-start flex-col  gap-[10px] overflow-auto mt-[50px]
      text-white bg-[#272727] p-[20px] rounded-lg"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
              <label htmlFor="title" className="text-[20px]">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-[90%] h-[40px] border-[2px] border-[#555656] 
            rounded-lg text-[18px] px-[20px] text-[black]"
                placeholder="_bhk house or best title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
              <label htmlFor="des" className="text-[20px]">
                Description
              </label>
              <textarea
                name=""
                id="des"
                className="w-[90%] h-[80px] border-[2px] border-[#555656] 
              rounded-lg text-[18px] px-[20px] text-[black]"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>

            <div className="w-[90%] flex items-start justify-center flex-col gap-[10px]">
              <label htmlFor="img1" className="text-[20px]">
                Image1
              </label>
              <div
                className="w-[90%] flex items-center justify-start 
        h-[40px] border-[#555656] border-2 rounded-[10px]"
              >
                <input
                  type="file"
                  id="img1"
                  className="w-[100%] text-[15px] px-[10px]"
                  onChange={handleImage1}
                />
              </div>
            </div>

            <div className="w-[90%] flex items-start justify-center flex-col gap-[10px]">
              <label htmlFor="img2" className="text-[20px]">
                Image2
              </label>
              <div
                className="w-[90%] flex items-center justify-start 
        h-[40px] border-[#555656] border-2 rounded-[10px]"
              >
                <input
                  type="file"
                  id="img2"
                  className="w-[100%] text-[15px] px-[10px]"
                  onChange={handleImage2}
                />
              </div>
            </div>

            <div className="w-[90%] flex items-start justify-center flex-col gap-[10px]">
              <label htmlFor="img3" className="text-[20px]">
                Image3
              </label>
              <div
                className="w-[90%] flex items-center justify-start 
        h-[40px] border-[#555656] border-2 rounded-[10px]"
              >
                <input
                  type="file"
                  id="img3"
                  className="w-[100%] text-[15px] px-[10px]"
                  onChange={handleImage3}
                />
              </div>
            </div>

            <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
              <label htmlFor="rent" className="text-[20px]">
                Rent
              </label>
              <input
                type="number"
                id="rent"
                className="w-[90%] h-[40px] border-[2px] border-[#555656] 
                rounded-lg text-[18px] px-[20px] text-[black]"
                placeholder="Rs. _____/day"
                required
                onChange={(e) => setRent(e.target.value)}
                value={rent}
              />
            </div>

            <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
              <label htmlFor="city" className="text-[20px]">
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-[90%] h-[40px] border-[2px] border-[#555656] 
            rounded-lg text-[18px] px-[20px] text-[black]"
                placeholder="city, country"
                required
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>

            <div className="w-[90%] flex items-start justify-start flex-col gap-[10px]">
              <label htmlFor="landmark" className="text-[20px]">
                Landmark
              </label>
              <input
                type="text"
                id="landmark"
                className="w-[90%] h-[40px] border-[2px] border-[#555656] 
            rounded-lg text-[18px] px-[20px] text-[black]"
                required
                onChange={(e) => setLandmark(e.target.value)}
                value={landmark}
              />
            </div>
            <div className="w-[100%] flex items-center justify-center gap-[30px] mt-[20px]">
              <button
                className="px-[10px] py-[10px] bg-rose-500 hover:bg-rose-600 transition-all duration-300 text-[white] text-[15px] md:px-[100px] rounded-lg md:text-[18px] text-nowrap"
                onClick={handleUpdateListing}
                disabled={updating}
              >
                {updating ? "updating...." : "Update Listing"}
              </button>
              <button
                className="px-[10px] py-[10px]  bg-rose-500 hover:bg-rose-600 transition-all duration-300 text-[white] text-[15px] md:px-[100px] rounded-lg md:text-[18px] text-nowrap"
                onClick={handleDeleteListing}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Delete Listing"}
              </button>
            </div>
          </form>
        </div>
      )}

      {bookingPopUp && (
        <div
          className="w-[100%] min-h-[100%] flex items-center justify-center flex-col gap-[30px]
  bg-[#ffffffcd] absolute top-[0px] z-[100] p-[20px] backdrop-blur-sm md:flex-row md:gap-[100px]"
        >
          <RxCross2
            className="w-[30px] h-[30px] bg-rose-500 hover:bg-rose-600 transition-all duration-300 cursor-pointer absolute top-[6%] left-[25px] rounded-[50%] flex items-center justify-center"
            onClick={() => setBookingPopUp(false)}
          />

          <form
            className="max-w-[450px] w-[90%] h-[450px] overflow-auto
          bg-[#f7fbfcfe] p-[20px] rounded-lg flex items-center
          justify-center flex-col gap-[10px] border-[1px] border-[#dedddd]"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1
              className="w-[100%] flex items-center justify-center
            py-[10px] text-[25px] border-b-[1px] border-[#a3a3a3]"
            >
              Confirm & Book
            </h1>
            <div className="w-[100%] h-[70%]  mt-[10px] rounded-lg p-[10px] flex items-center justify-center flex-col">
              <h3 className="text-[19px] font-semibold">Your Trip -</h3>
              <div className="w-[90%] flex items-center justify-start gap-[24px] mt-[20px] md:justify-center flex-col md:flex-row md:items-start">
                <label htmlFor="checkIn" className="text-[18px] md:text-[20px]">
                  CheckIn
                </label>
                <input
                  type="date"
                  min={minDate}
                  id="checkIn"
                  className="border-[#555656] border-2 w-[200px] h-[40px] rounded-[10px] bg-transparent px-[10px] text-[15px] md:text-[18px]"
                  required
                  onChange={(e) => setCheckIn(e.target.value)}
                  value={checkIn}
                />
              </div>
              <div className="w-[90%] flex items-center justify-start gap-[10px] mt-[40px] md:justify-center flex-col md:flex-row md:items-start">
                <label
                  htmlFor="checkOut"
                  className="text-[18px] md:text-[20px]"
                >
                  CheckOut
                </label>
                <input
                  type="date"
                  min={minDate}
                  id="checkOut"
                  className="border-[#555656] border-2 w-[200px] h-[40px] rounded-[10px] bg-transparent px-[10px] text-[15px] md:text-[18px]"
                  required
                  onChange={(e) => setCheckOut(e.target.value)}
                  value={checkOut}
                />
              </div>
              <div className="w-[100%] flex items-center justify-center">
                <button
                  className="px-[8px] py-[10px] bg-rose-500 hover:bg-rose-600 transition-all duration-300 text-[white] text-[18px] md:px-[100px] 
                rounded-lg text-nowrap mt-[30px]"
                  onClick={() => handleBooking(cardDetails._id)}
                  disabled={booking}
                >
                  {booking ? "Booking..." : "Book Now"}
                </button>
              </div>
            </div>
          </form>
          <div
            className="max-w-[450px] w-[90%] h-[450px] bg-[#f7fbfcfe]
          p-[20px] rounded-lg flex items-center justify-center flex-col gap-[10px]
          border-[1px] border-[#e2e1e1]"
          >
            <div
              className="w-[95%] h-[30%] border-[1px] border-[#9b9a9a] rounded-lg
             flex justify-center items-center gap-[8px] p-[20px] overflow-hidden"
            >
              <div
                className="w-[70px] h-[90px] flex items-center justify-center flex-shrink-0 rounded-lg md:w-[100px]
              md:h-[100px]"
              >
                <img
                  className="w-[100%] h-[100%] rounded-lg"
                  src={cardDetails.image1}
                  alt=""
                />
              </div>
              <div className="w-[80%] h-[100px] gap-[5px]">
                <h1 className="w-[90%] truncate">{`IN ${cardDetails.landmark.toUpperCase()},${cardDetails.city.toUpperCase()}`}</h1>
                <h1>{cardDetails.title.toUpperCase()}</h1>
                <h1>{cardDetails.category.toUpperCase()}</h1>
                <h1 className="flex items-center justify-start gap-[5px]">
                  <FaStar className="text-[#eb6262]" />
                  {cardDetails.ratings || "New"}
                </h1>
              </div>
            </div>
            <div
              className="w-[95%] h-[60%] border-[1px] border-[#abaaaa]
            rounded-lg flex justify-start items-start p-[20px] gap-[15px] flex-col"
            >
              <h1 className="text-[22px] font-semibold">Booking Price - </h1>
              <p className="w-[100%] flex justify-between items-center px-[20px]">
                <span className="font-semibold">
                  {`Rs.${cardDetails.rent} X ${night} nights`}
                </span>
                <span>{cardDetails.rent * night}</span>
              </p>
              <p className="w-[100%] flex justify-between items-center px-[20px]">
                <span className="font-semibold">Tax</span>
                <span>{(cardDetails.rent * 7) / 100}</span>
              </p>
              <p className="w-[100%] flex justify-between items-center px-[20px] border-b-[1px] border-gray-500 pb-[10px]">
                <span className="font-semibold">Airbnb Charge</span>
                <span>{(cardDetails.rent * 7) / 100}</span>
              </p>
              <p className="w-[100%] flex justify-between items-center px-[20px]">
                <span className="font-semibold">Total Price</span>
                <span>{total}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ViewCard;
