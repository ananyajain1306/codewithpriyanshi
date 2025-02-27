import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-gray-100 text-gray-800 flex flex-col items-center py-12 px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-600 mb-6 text-center">
        Code Beyond Limits 🚀
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl text-center font-medium">
        Empowering developers, transforming ideas into reality, and building a
        global community of tech innovators.
      </p>

      <div className="max-w-6xl w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="best-removebg-preview.png"
            alt="Coding Illustration"
            className=" object-contain shadow-xl rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">
            Born from a Passion for Code
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In a world driven by technology, we saw a gap—a place where
            creativity, logic, and passion for coding could merge seamlessly.
            <span className="font-semibold text-gray-900">
              {" "}
              Code with Priyanshi
            </span>{" "}
            isn’t just another coding platform; it’s a revolution.
          </p>
        </div>
      </div>

      <div className="max-w-6xl w-full mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="bg-indigo-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-indigo-700 mb-3">
            🌟 Learning, Reimagined
          </h3>
          <p className="text-gray-700">
            Engaging, interactive, and real-world challenges to keep you ahead.
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-purple-700 mb-3">
            🌍 Global Community
          </h3>
          <p className="text-gray-700">
            Join a worldwide network of developers, collaborate, and grow.
          </p>
        </div>
        <div className="bg-pink-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-pink-700 mb-3">
            🛠️ Build & Innovate
          </h3>      
          <p className="text-gray-700">
            More than learning—turn your skills into real-world applications.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-xl font-medium text-gray-800 text-center">
          Your journey starts here. Your impact starts now. Are you ready to
          code your future?
        </p>
        <Link to="/contact">
        <button className="mt-6 ml-80 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transform transition duration-300 hover:scale-105">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
