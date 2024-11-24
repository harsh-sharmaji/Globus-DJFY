import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="relative p-6 rounded-3xl bg-gradient-to-b from-[#1B378280] to-[#09173C33] border border-[#ffffff15]">
      <div className="absolute -top-6 left-6">
        <div className="p-4 rounded-full bg-[#ff5533] bg-opacity-90">
          {icon}
        </div>
      </div>
      <div className="pt-8">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const Card = () => {
  return (
    <div className="min-h-screen bg-[#07091F] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-medium ">
            <span className="text-white">HERE'S HOW </span>
            <span className="text-[#ff5533]">DJFY WORKS</span>
          </h2>
          <div className="flex justify-center mt-2">
            <div className="flex gap-1">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#ff5533]" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid font-montserrat font-medium grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
            title="Free Account Creation"
            description="DJs, live musicians/bands, and venue owners can sign up for a free account on DJFY, gaining instant access to a world of new opportunities."
          />

          <FeatureCard
            icon={
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            }
            title="QR Code Sharing"
            description="Upon registration, users receive a personalized QR code that they can share with their audience. This QR code acts as a gateway for guests to submit song requests and interact with the performance in real-time."
          />

          <FeatureCard
            icon={
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Flexible Monetization Options"
            description="Musicians have full control over their earnings with DJFY. They can set a minimum bidding amount for each song request or offer free requests to their audience. Additionally, guests have the option to tip the performers, further enhancing the artist's revenue potential."
          />

          <FeatureCard
            icon={
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            }
            title="CUSTOMIZABLE PLAYLIST"
            description="Artists can curate their playlist on DJFY, giving guests the freedom to choose which songs they want to hear during the performance. This interactive feature enhances audience engagement and ensures a memorable experience for everyone involved."
          />

          <FeatureCard
            icon={
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            }
            title="SONG REQUEST MANAGEMENT"
            description="DJs and musicians have the final say on song requests. They can accept or reject requests based on their preferences and the overall vibe of the event. For paid requests, guests will only be charged if the DJ accepts the request and plays the song within 30 minutes, ensuring a fair and efficient process."
          />
        </div>
      </div>
    </div>
  )
}

export default Card

