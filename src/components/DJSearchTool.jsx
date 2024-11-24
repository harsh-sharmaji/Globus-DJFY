import React from 'react';

const EventCard = ({ date, name, location, imageUrl }) => (
  <div className="relative w-[300px] h-[200px] rounded-lg overflow-hidden">
    <img src={"url('custom-bg1')"} alt={name} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
      <p className="text-yellow-400 text-sm">{date}</p>
      <h3 className="text-white text-lg font-bold">{name}</h3>
      <p className="text-white text-sm">{location}</p>
    </div>
  </div>
);

const DJSearchTool = () => {
  return (
    <div className="min-h-screen bg-[#0a0b1a] py-20 px-4 bg-cover bg-center" style={{backgroundImage: "url('/assets/bg1.png')"}}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wide font-['Divine_Razier']" style={{textShadow: '0 0 10px rgba(255,255,255,0.5)'}}>
            THE ULTIMATE DJ TOOL
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Venues & DJs"
              className="w-full py-4 px-12 bg-white bg-opacity-20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <div className="flex space-x-4 overflow-x-auto">
            <EventCard
              date="21 Jun 23"
              name="DJ Ocean & Thunder"
              location="Indira Nagar Bengaluru, India"
              imageUrl="https://img.freepik.com/free-photo/medium-shot-musicians-playing-guitars_23-2149162992.jpg"
            />
            <EventCard
              date="22 Jun 23"
              name="DJ SLING"
              location="Koramangla Bengaluru, India"
              imageUrl="https://i.ytimg.com/vi/3qIQyWbd0C8/sddefault.jpg"
            />
            <EventCard
              date="24 Jun 23"
              name="DJ Deep Bhamra"
              location="Padmavathi Bangalore, India"
              imageUrl="https://img.freepik.com/premium-photo/dj-woman-having-fun-playing-music-club-party-generative-ai-image-aig30_31965-203884.jpg"
            />
          </div>

          <button className="text-white">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DJSearchTool;

