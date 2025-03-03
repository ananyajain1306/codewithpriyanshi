import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-24 bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-500 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="-mt-4">
          <img
  src="/plogo-removebg-preview.png"
  alt="Logo"
  className="h-32 w-max"
/>
          </div>

          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:space-x-8 text-xl font-medium text-white mt-4 md:mt-0`}
          >
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <button className="px-5 py-2 bg-white text-pink-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition">
                Sign In
              </button>
            </Link>
            <Link to="/login">
              <button className="px-5 py-2 bg-pink-600 text-white font-semibold rounded-md shadow-md hover:bg-pink-700 transition">
                Login
              </button>
            </Link>
          </div>

          <button
            className="md:hidden block text-yellow-300 focus:outline-none text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
       </div>
      </nav>
    </>
  );
};

export default Navbar;
