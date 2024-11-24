import React from 'react';

const UsageVideo = () => {
  return (
    <div className="usage-video relative bg-custom-bg1 bg-cover font-montserrat font-medium bg-center min-h-screen flex flex-col items-center justify-center text-white">
      {/* Overlay */}
      
      {/* Content */}
      <div className="relative z-10 text-center p-8 max-w-5xl w-full">
 

        {/* Title */}
        <h2 className="text-3xl font-bold text-red-500 mb-5"><span className='text-white'>USAGE</span> VIDEO </h2>



        {/* Description */}
        <p className="text-lg md:text-xl mb-12">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Video Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Large Left Card (Landscape) */}
          <div className="content-card  text-black rounded-lg shadow-lg overflow-hidden md:col-span-2">
            <img
              src="https://wrapbootstrap.com/assets/items/full/d31efac1bac81f1ed2be73dc4a6fe35070f2e7ff13657a6df7c492efe4b99afe.webp?v=1710580878"
              alt="Landscape Video"
              className="w-full h-60 object-cover"
            />
            {/* <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Landscape Video</h2>
              <p className="text-sm text-gray-600 mb-4">This is a detailed description of the landscape video.</p>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-blue-600">
                WATCH NOW
              </button>
            </div> */}
          </div>

          {/* Stacked Right-Side Cards */}
          <div className="grid grid-rows-2 gap-6 h-full">
            {/* Top Small Card */}
            <div className="content-card bg-white text-black rounded-lg shadow-lg overflow-hidden">
              {/* <img
                // src="https://example.com/portrait1.jpg"
                // alt="Portrait Video 1"
                className="w-full h-15 object-cover"
              // /> */}
              <div classNyame="p-4">
                <h2 className="text-lg font-bold mb-2">Portrait Video 1</h2>
                <p className="text-sm text-gray-600 mb-4">Short description of the video.</p>
              </div>
            </div>

            {/* Bottom Small Card */}
            <div className="content-card bg-red-300 text-black rounded-lg shadow-lg overflow-hidden">
              {/* <img
                src="https://example.com/portrait2.jpg"
                alt="Portrait Video 2"
                className="w-full h-15 object-cover"
              /> */}
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Portrait Video 2</h2>
                <p className="text-sm text-gray-600 mb-4">Short description of the video.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageVideo;
