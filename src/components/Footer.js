import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="text-center md:text-left w-1/3">
          <h2 className="text-xl font-bold">Code with priyanshi</h2>
          <p className="text-gray-400">Empowering Developers, One Line at a Time.</p>
        </div>
        
        <div className="text-center w-1/3">
          <h3 className="text-xl font-bold text-white">Services</h3>
          <ul className="text-gray-400 mt-2 space-y-1">
            <li>SEO Analysis</li>
            <li>Content Strategy</li>
            <li>Social Media</li>
            <li>Web Design & Development</li>
            <li>Google/FB Ads</li>
          </ul>
        </div>
        
        <div className="text-center md:text-left w-1/3">
          <h3 className="text-xl font-bold text-white">Newsletter</h3>
          <p className="text-gray-400">Register now to get the latest updates on promotions & coupons.</p>
          <form className="mt-4">
            <div className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Code with priyanshi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;