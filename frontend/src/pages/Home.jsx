import React, { useContext } from "react";
import Nav from "../Component/Nav";
import { listingDataContext } from "../Context/ListingContext";
import Card from "../Component/Card";
import Footer from "../Component/Footer";

function Home() {
  let { newListData } =
    useContext(listingDataContext);
    if (!newListData) {
    return (
     <div className="flex flex-col items-center gap-4">
  <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
  <p className="text-xl font-semibold text-indigo-600">
    Loading Properties...
  </p>
</div>
    );
  }
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-200 min-h-screen">
      <Nav />
      
      <div className="w-full min-h-[500px] md:min-h-[600px] bg-gradient-to-r from-indigo-500 to-purple-500 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center">
          Find Your Perfect Stay
        </h1>

        <p className="mt-4 text-lg md:text-xl text-center text-slate-300">
          Discover apartments, villas and homes across India
        </p>

        <button 
         onClick={() =>
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    })
  }
        className="mt-6 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-xl">
          Explore Listings
        </button>
        <div className="flex gap-8 md:gap-20 mt-12 text-center bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl">
  <div>
    <h2 className="text-2xl md:text-4xl font-bold">
  {newListData.length}+
</h2>
    <p className="text-slate-300">Properties</p>
  </div>

  <div>
    <h2 className="text-2xl md:text-4xl font-bold">100+</h2>
    <p className="text-slate-300">Cities</p>
  </div>

  <div>
    <h2 className="text-2xl md:text-4xl font-bold">10K+</h2>
    <p className="text-slate-300">Bookings</p>
  </div>
</div>
      </div>
      <div className="text-center mt-16">
  <h2 className="text-3xl font-bold text-slate-800">
    Popular Properties
  </h2>

  <p className="text-slate-500 mt-2">
    Explore the most loved stays by travelers
  </p>
</div>
      <div
        className="w-full min-h-screen flex
justify-center gap-8 flex-wrap mt-12 pb-16 px-4"
      >
         {newListData.length === 0 && (
    <div className="w-full text-center text-2xl text-gray-500 mt-20">
      No Properties Found 😔
    </div>
  )}
        {newListData.map((list) => (
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
            ratings={list.ratings}
            host={list.host}
            guest={list.guest}
            isBooked={list.isBooked}
          />
        ))}
      </div>
      <div className="w-full py-16 bg-white text-center">
  <h2 className="text-3xl font-bold text-slate-800">
    Why Choose StayFinder?
  </h2>

  <div className="flex flex-wrap justify-center gap-8 mt-10">
    <div className="bg-slate-100 p-6 rounded-xl w-[250px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <h3 className="font-bold text-lg">Verified Properties</h3>
      <p className="text-slate-500 mt-2">
        Safe and trusted stays.
      </p>
    </div>
       <div className="bg-slate-100 p-6 rounded-xl w-[250px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <h3 className="font-bold text-lg">Best Prices</h3>
      <p className="text-slate-500 mt-2">
        Affordable rent options.
      </p>
    </div>
      <div className="bg-slate-100 p-6 rounded-xl w-[250px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <h3 className="font-bold text-lg">Easy Booking</h3>
      <p className="text-slate-500 mt-2">
        One-click booking process.
      </p>
    </div>
  </div>
</div>
    <div className="w-full py-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-center text-white">
  <h2 className="text-4xl font-bold">
    Ready To Find Your Dream Stay?
  </h2>

  <p className="mt-3 text-lg">
    Explore hundreds of verified properties.
  </p>

  <button
  onClick={() =>
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    })
  }
    className="mt-6 px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold"
  >
    Start Exploring
  </button>
</div>
<div className="mt-10">
  <Footer />
</div>
    </div>
  );
}

export default Home;
