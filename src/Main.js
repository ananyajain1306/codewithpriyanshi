import React from "react";
import { FaPaintBrush, FaCode, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-b from-white to-indigo-100 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <div className="flex-1 flex justify-center items-center relative md:-mt-20 -mt-10">
          <img
            src="/asset/vv-removebg-preview.png"
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
            Your ultimate hub for coding tutorials, engaging projects, and
            resources that ignite your programming passion.
          </p>
          <p className="text-xl font-medium text-purple-700 max-w-lg md:text-left mt-4">
            Unleash your creativity and build the skills to thrive in the tech
            world. Learn, create, and grow with us!
          </p>

          <Link to="/signin">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transform transition duration-300 hover:scale-105 mt-6">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gradient-to-r from-purple-100 to-indigo-100 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="/images__1_-removebg-preview.png"
            alt="About Us"
            className="rounded-lg shadow-lg w-9/12 max-w-lg md:max-w-xl"
          />
          <div>
            <h2 className="text-4xl font-bold text-purple-700 mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">
                It all began with a dream.
              </span>{" "}In 2023, we set out to create a space where people of all skill
              levels could learn to code, collaborate, and innovate. Today,
              we’re proud to be a hub for developers worldwide.
            </p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              We believe in{" "}
              <span className="text-purple-600 font-semibold">community</span>,
              <span className="text-purple-600 font-semibold"> creativity</span>,
              and{" "}
              <span className="text-purple-600 font-semibold"> collaboration</span>.
            </p>
            <Link to="/about">
              <button className="px-6 mt-8 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-500 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="h-screen flex flex-col items-center bg-gradient-to-b from-indigo-100 to-purple-100 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl font-medium px-6 mb-10">
          Explore our range of services tailored to developers at every level.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {[
            { icon: FaPaintBrush, title: "UI/UX Design", color: "purple", desc: "Create stunning designs with seamless UX." },
            { icon: FaLaptopCode, title: "Full-Stack Development", color: "indigo", desc: "Build scalable web applications." },
            { icon: FaCode, title: "Programming Languages", color: "pink", desc: "Master JavaScript, Python, and more." },
          ].map((service, index) => (
            <div
              key={index}
              className={`bg-${service.color}-200 shadow-lg rounded-lg p-6 h-80 flex flex-col items-center justify-between hover:shadow-2xl transform hover:scale-105 transition`}
            >
              <service.icon className={`text-${service.color}-600 text-6xl mb-4`} />
              <h3 className={`text-2xl font-bold text-${service.color}-700 mb-4`}>{service.title}</h3>
              <p className="text-gray-700 text-center">{service.desc}</p>
              <Link to="/courses">
                <button className="px-6 mt-8 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-500 transition">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <div className="flex flex-col -mt-60 md:flex-row bg-gradient-to-b from-purple-100 to-indigo-100 items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/contact-removebg-preview.png"
            alt="Contact"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>

        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            We'd love to hear from you! Reach out to us through any of the following means.
          </p>
          <div className="space-y-3">
            <p className="text-lg text-gray-700">📍 <strong>Address:</strong> 123 Street, City, Country</p>
            <p className="text-lg text-gray-700">📞 <strong>Phone:</strong> +123 456 7890</p>
            <p className="text-lg text-gray-700">✉️ <strong>Email:</strong> contact@example.com</p>
            <p className="text-lg text-gray-700">🌐 <strong>Website:</strong> www.example.com</p>
            <Link to="/contact">
              <button className="px-6 mt-8 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-500 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Main;
