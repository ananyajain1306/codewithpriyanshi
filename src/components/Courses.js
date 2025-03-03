import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaPaintBrush,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 via-purple-100 to-gray-50 text-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-12 leading-snug">
          Explore Our <span className="text-indigo-600">Courses</span>
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card Template */}
          {[
            {
              title: "Basics of Computer",
              icon: <FaLaptopCode className="text-5xl" />,
              color: "bg-blue-500",
              topics: [
                "Introduction of computer and its components",
                "File/Folder Management",
                "Microsoft Office Basics",
                "Typing Skills and Keyboard Shortcuts",
                "Internet/Email Essentials",
              ],
            },
            {
              title: "Frontend Development",
              icon: <FaCode className="text-5xl" />,
              color: "bg-green-500",
              topics: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
            },
            {
              title: "Backend Development",
              icon: <FaDatabase className="text-5xl" />,
              color: "bg-purple-500",
              topics: ["Python", "Node.js", "PHP", "MySQL", "MongoDB"],
            },
            {
              title: "Designing Course",
              icon: <FaPaintBrush className="text-5xl" />,
              color: "bg-yellow-500",
              topics: ["Figma (UI/UX Tool)", "Canva", "Adobe Photoshop", "CorelDRAW"],
            },
            {
              title: "Full Stack Development",
              icon: <FaTools className="text-5xl" />,
              color: "bg-red-500",
              topics: [
                "Frontend Development",
                "Backend Development",
                "Database Management",
                "Interview Preparation",
              ],
            },
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Card Icon Header */}
              <div
                className={`${course.color} text-white p-8 flex items-center justify-center`}
              >
                {course.icon}
              </div>
              {/* Card Body */}
              <div className="p-8 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {course.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>
              {/* Enroll Button */}
              <div className="p-6 flex justify-center">
                <Link to="/login">
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transform transition hover:scale-105">
                  Enroll Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
