import React from "react";

const Gallery = () => {
  const images = [
    "https://c0.wallpaperflare.com/preview/356/780/918/adult-audience-band-celebration-thumbnail.jpg",
    "https://cambridgemask.com/cdn/shop/articles/Air-Quality-at-Music-Festivals-Cambridge-Mask-Co-59820990_600x.jpg?v=1726783282",
    "https://img.freepik.com/premium-photo/new-year-celebration-friends-bachelorette-party-birthday-concept-three-beautiful-woman-evening-dresses-dancing-club_380164-76715.jpg?w=360",
    "https://media.licdn.com/dms/image/v2/D4D12AQEec3fDJhsIeg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689418294947?e=2147483647&v=beta&t=POoKwBojmcDSUd3Ct_Al3Z-wqzOa9m0vEA9b2I8DMwc",
    "https://www.rajwadaevents.com/uploaded-files/celebrity-images/Bachelor-Party-Planner0611.jpg",
    "https://c1.wallpaperflare.com/preview/273/451/810/entertainment-dj-stage-crowd.jpg",
    "https://img.freepik.com/premium-photo/dj-player-audio-mixing-electronic-music-nightclub-party-created-with-generative-ai-technology_67092-4133.jpg",
    "https://c4.wallpaperflare.com/wallpaper/562/719/645/bar-club-dance-dancing-wallpaper-preview.jpg",
  ];

  return (
    <section className="bg-[#07091F] text-white py-10 flex flex-col items-center">
      {/* Title Section */}
      <div className="text-center mb-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-gray-700 p-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-red-500">GALLERY</h2>
        <p className="text-gray-400 mt-2 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-screen-md">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            {/* Image */}
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-40 object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
