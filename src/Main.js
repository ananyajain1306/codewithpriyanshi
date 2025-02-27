import React from "react";
import { FaPaintBrush, FaCode, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";  

import heroImage from "../assets/vv-removebg-preview.png";  // ✅ Fix image imports
import contactImage from "../assets/contact-removebg-preview.png";

const Main = () => {
  return (
    <>
      <section className="h-screen bg-gradient-to-b from-white to-indigo-100 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <div className="flex-1 flex justify-center items-center relative md:-mt-20 -mt-10">
          <img
            src={heroImage}  // ✅ Use imported image
            alt="Coding Illustration"
            className="w-4/5 md:w-[60%] object-contain shadow-xl rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center p-8 z-10">
          <h1 className="text-5xl md:text-5xl font-extrabold text-indigo-600 mb-4 leading-snug text-center md:text-left">
            Welcome to{" "}
            <span className="text-pink-500 bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent">
              Code with Priyanshi
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 font-light max-w-xl text-center md:text-left">
            Your ultimate hub for coding tutorials, engaging projects, and resources that ignite your programming passion.
          </p>
          <Link to="/signin">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transform transition duration-300 hover:scale-105 mt-6">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <section className="h-screen flex flex-col items-center bg-gradient-to-b from-indigo-100 to-purple-100 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <div className="bg-purple-200 shadow-lg rounded-lg p-6 h-80 flex flex-col items-center justify-between hover:shadow-2xl transform hover:scale-105 transition">
            <FaPaintBrush className="text-purple-600 text-6xl mb-4" />  {/* ✅ Fix Icon */}
            <h3 className="text-2xl font-bold text-purple-700 mb-4">UI/UX Design</h3>
            <p className="text-gray-700 text-center">Create stunning designs with seamless UX.</p>
            <Link to="/courses">
              <button className="px-6 mt-8 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-500 transition">
                Learn More
              </button>
            </Link>
          </div>

          <div className="bg-indigo-200 shadow-lg rounded-lg p-6 h-80 flex flex-col items-center justify-between hover:shadow-2xl transform hover:scale-105 transition">
            <FaLaptopCode className="text-indigo-600 text-6xl mb-4" />
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Full-Stack Development</h3>
            <p className="text-gray-700 text-center">Build scalable web applications.</p>
            <Link to="/courses">
              <button className="px-6 mt-8 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-500 transition">
                Learn More
              </button>
            </Link>
          </div>

          <div className="bg-pink-200 shadow-lg rounded-lg p-6 h-80 flex flex-col items-center justify-between hover:shadow-2xl transform hover:scale-105 transition">
            <FaCode className="text-pink-600 text-6xl mb-4" />
            <h3 className="text-2xl font-bold text-pink-700 mb-4">Programming Languages</h3>
            <p className="text-gray-700 text-center">Master JavaScript, Python, and more.</p>
            <Link to="/courses">
              <button className="px-6 mt-8 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-500 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row bg-gradient-to-b from-purple-100 to-indigo-100 items-center justify-center min-h-screen p-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={contactImage}  // ✅ Use imported image
            alt="Contact"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>

        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">We'd love to hear from you! Reach out to us through any of the following means.</p>
          <p className="text-lg text-gray-700">📞 <strong>Phone:</strong> +123 456 7890</p>
          <p className="text-lg text-gray-700">✉️ <strong>Email:</strong> contact@example.com</p>
          <Link to="/contact">
            <button className="px-6 mt-8 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-500 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <Footer />  {/* ✅ Ensure Footer is used properly */}
    </>
  );
};

export default Main;
