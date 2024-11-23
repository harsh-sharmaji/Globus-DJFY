import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#07091F] text-white py-8 relative">
      {/* Top Gradient Border */}
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FDDF09] to-[#E82B34]"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="DJFY Logo"
              className="h-10 w-10"
            />
            <h2 className="text-lg font-bold">DJFY</h2>
          </div>
          <p className="mt-3 text-sm text-gray-400 leading-6">
            Connecting DJs and music enthusiasts for seamless event experiences
            and vibrant community engagement.
          </p>
          <div className="flex mt-4 space-x-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-sm font-medium py-2 px-4 rounded">
              Sign Up as User
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-sm font-medium py-2 px-4 rounded">
              Sign Up as DJ
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-base font-semibold mb-3">Under the Hood</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About</li>
            <li>Use Cases</li>
            <li>Events</li>
            <li>Web Apps</li>
            <li>Usage Video</li>
            <li>Gallery</li>
            <li>Clients Testimonials</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-base font-semibold mb-3">HelpDesk</h3>
          <div className="text-sm text-gray-400 mb-4">
            <p>
              <span className="font-medium">WhatsApp:</span> +91 1234 5678 90
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:team@djfyapp.com" className="text-blue-400">
                team@djfyapp.com
              </a>
            </p>
          </div>
          {/* Form Container */}
          <div className="bg-[#0E1525] rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-white mb-4">
              Send Us your Message
            </h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-md bg-gray-800 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-md bg-gray-800 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <textarea
                placeholder="Write message"
                className="w-full p-3 rounded-md bg-gray-800 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows="4"
              ></textarea>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="not-a-robot" />
                <label htmlFor="not-a-robot" className="text-sm text-gray-400">
                  I’m not a robot
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium text-sm hover:opacity-90"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2024 DJFY. All Rights Reserved</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
