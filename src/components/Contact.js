import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields');
      return;
    }
    setError(null);
    alert('Form submitted!');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-gray-800">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-t from-teal-300 via-indigo-400 to-gray-300 opacity-30 absolute"></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full z-10" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="0.4" d="M0,160L1440,32L1440,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto p-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-indigo-700 mb-4 text-gradient">Contact Us</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you! Choose the best way to get in touch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500 transition-transform transform hover:scale-105">
            <div className="text-4xl text-indigo-500 mb-4">
              <FontAwesomeIcon icon={faPhoneAlt} className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600 mt-2">+1 (555) 123-4567</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500 transition-transform transform hover:scale-105">
            <div className="text-4xl text-indigo-500 mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600 mt-2">contact@example.com</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500 transition-transform transform hover:scale-105">
            <div className="text-4xl text-indigo-500 mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Address</h3>
            <p className="text-gray-600 mt-2">123 Main Street, City, Country</p>
          </div>
        </div>

        <h1 className="text-5xl font-extrabold text-center mb-12 text-gradient animate-title">
          We'd Love to Hear From You
        </h1>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-10 bg-white rounded-xl shadow-lg border-l-8 border-indigo-500">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full mt-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 transform hover:scale-105"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 transform hover:scale-105"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full mt-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 transform hover:scale-105"
              placeholder="Write your message"
              rows="6"
              required
            ></textarea>
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-indigo-500 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
