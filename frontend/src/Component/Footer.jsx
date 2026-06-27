import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-slate-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">StayFinder</h2>
          <p className="text-slate-400">
            Find apartments, villas and homes across India.
          </p>
          <p className="text-slate-400 mt-3">
            Trusted by thousands of travelers across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-slate-400">
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-white"
            >
              Home
            </li>
            <li
              onClick={() => navigate("/mylisting")}
              className="cursor-pointer hover:text-white"
            >
              Listings
            </li>
            <li
              onClick={() => navigate("/mybooking")}
              className="cursor-pointer hover:text-white"
            >
              Bookings
            </li>
            <li
              onClick={() => window.open("mailto:av854803@gmail.com")}
              className="cursor-pointer hover:text-white"
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-slate-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>

          <p className="text-slate-400 break-all">av854803@gmail.com</p>

          <p className="text-slate-400 mt-2">+91 6390219336</p>

          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded text-black"
            />

            <button
              onClick={() => alert("Thanks for subscribing")}
              className="w-full mt-2 bg-rose-500 py-2 rounded hover:bg-rose-600"
            >
              Subscribe
            </button>
          </div>

          <div className="flex gap-4 mt-4 text-2xl">
            <FaInstagram
              className="cursor-pointer hover:text-pink-400"
              onClick={() => window.open("https://instagram.com", "_blank")}
            />
            <FaGithub
              className="cursor-pointer hover:text-gray-400"
              onClick={() =>
                window.open("https://github.com/yourusername", "_blank")
              }
            />
            <FaLinkedin
              className="cursor-pointer hover:text-blue-400"
              onClick={() =>
                window.open("https://linkedin.com/in/yourusername", "_blank")
              }
            />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-slate-400">
        © 2026 StayFinder. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
