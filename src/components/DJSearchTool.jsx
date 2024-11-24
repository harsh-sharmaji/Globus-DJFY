import React from 'react';

const EventCard = ({ date, name, location, imageUrl }) => (
  <div className="relative w-full max-w-[300px] h-[200px] rounded-lg overflow-hidden flex-shrink-0">
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
      <p className="text-yellow-400 text-sm">{date}</p>
      <h3 className="text-white text-lg font-bold">{name}</h3>
      <p className="text-white text-sm">{location}</p>
    </div>
  </div>
);

const DJSearchTool = () => {
  return (
    <div className="usage-video relative bg-custom-bg1 bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white">
      <div className="absolute inset-0 bg-[#0A0D2C] bg-opacity-80"></div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg">
          <h1
            className="text-3xl md:text-4xl text-center text-white mb-6 md:mb-8 tracking-wide font-eater font-normal"
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
          >
            THE ULTIMATE DJ TOOL
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Venues & DJs"
              className="w-full py-3 md:py-4 px-4 md:px-12 bg-white bg-opacity-20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex justify-between items-center space-x-4">
          <button className="text-white hidden md:block">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <div className="flex space-x-4 overflow-x-auto">
            <EventCard
              date="21 Jun 23"
              name="DJ Ocean & Thunder"
              location="Indira Nagar Bengaluru, India"
              imageUrl="/assets/g4.png"
            />
            <EventCard
              date="22 Jun 23"
              name="DJ SLING"
              location="Koramangla Bengaluru, India"
              imageUrl="/assets/g4.png"
            />
            <EventCard
              date="24 Jun 23"
              name="DJ Deep Bhamra"
              location="Padmavathi Bangalore, India"
              imageUrl="/assets/g4.png"
            />
          </div>

          <button className="text-white hidden md:block">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DJSearchTool;
