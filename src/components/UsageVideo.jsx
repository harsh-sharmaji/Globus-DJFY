import React from "react";

const UsageVideo = () => {
  return (
    <div className="usage-video relative bg-custom-bg1 bg-cover bg-center font-montserrat font-medium min-h-screen flex flex-col items-center justify-center text-white">
      {/* Background Blur and Opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-60 "></div>

      {/* Content */}
      <div className="relative z-10 text-center p-8 max-w-5xl w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-red-500 mb-5">
          <span className="text-white">USAGE</span> VIDEO
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-12">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>

        {/* Video Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Large Left Card (Landscape) */}
          <div className="content-card text-black rounded-lg shadow-lg overflow-hidden md:col-span-2">
            <img
              src="https://wrapbootstrap.com/assets/items/full/d31efac1bac81f1ed2be73dc4a6fe35070f2e7ff13657a6df7c492efe4b99afe.webp?v=1710580878"
              alt="Landscape Video"
              className="w-full h-60 object-cover"
            />
          </div>

          {/* Stacked Right-Side Cards */}
          <div className="grid grid-rows-2 gap-6 h-full">
            {/* Top Small Card */}
            <div className="content-card bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Portrait Video 1</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Short description of the video.
                </p>
              </div>
            </div>

            {/* Bottom Small Card */}
            <div className="content-card bg-red-300 text-black rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Portrait Video 2</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Short description of the video.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageVideo;
