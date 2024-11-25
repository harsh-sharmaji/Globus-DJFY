import React from 'react';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Testimonials = () => {
  return (
    <div className="bg-[#0A1229] py-16 px-4 sm:px-6 font-montserrat font-medium lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Star Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-white/10 p-3 rounded-lg">
            <StarIcon />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-white">CLIENT </span>
          <span className="text-red-500">TESTIMONIALS</span>
        </h2>

        {/* Decorative Bar */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-red-500"></div>
        </div>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="w-full flex-shrink-0 px-4">
            <div className="relative max-w-md mx-auto">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/abstract-vaporwave-portrait-woman_23-2148950765.jpg?t=st=1732427095~exp=1732430695~hmac=85937ffa1390a5f6ed044bd67a8f6762805d8d13cef2d438324f67282b0da432&w=360"
                  alt="Elessa Berg"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  <span className="text-6xl font-serif mb-6">"</span>
                  <p className="text-lg mb-6">
                    I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.
                  </p>
                  <h3 className="text-xl font-bold mb-2">Elessa Berg</h3>
                  <p className="text-sm text-gray-300">Manager @Club</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="w-full flex-shrink-0 px-4">
            <div className="relative max-w-md mx-auto">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/vibrant-scene-with-dj-techno-party_23-2150551533.jpg?t=st=1732430527~exp=1732434127~hmac=0c018f3d0e25a8980d7ed2c22549f7ec72081e19c800b7224d73d832afea94fa&w=360"
                  alt="Mark Jhon"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  <span className="text-6xl font-serif mb-6">"</span>
                  <p className="text-lg mb-6">
                    I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.
                  </p>
                  <h3 className="text-xl font-bold mb-2">Mark Jhon</h3>
                  <p className="text-sm text-gray-300">CEO @Pentagon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="w-full flex-shrink-0 px-4">
            <div className="relative max-w-md mx-auto">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7715464/pexels-photo-7715464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Tom Kelvis"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  <span className="text-6xl font-serif mb-6">"</span>
                  <p className="text-lg mb-6">
                    I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.
                  </p>
                  <h3 className="text-xl font-bold mb-2">Tom Kelvis</h3>
                  <p className="text-sm text-gray-300">Manager @Tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-yellow-500' : 'bg-gray-500'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

