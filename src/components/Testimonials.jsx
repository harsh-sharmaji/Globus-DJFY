import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Elessa Berg",
      position: "Manager @Club",
      quote: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      id: 2,
      name: "Mark Jhon",
      position: "CEO @Pentagon",
      quote: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      id: 3,
      name: "Tom Kelvis",
      position: "MD @Hexn",
      quote: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
  ];

  return (
    <section className="bg-[#09173C] text-white py-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <span className="bg-gray-700 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
        </div>
        <h2 className="text-3xl font-bold text-red-500">
          CLIENT <span className="text-white">TESTIMONIALS</span>
        </h2>
        <p className="text-gray-300 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-800 relative rounded-lg overflow-hidden shadow-lg w-80"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-40 object-cover opacity-40"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6 text-center">
              <p className="text-white text-sm italic">"{testimonial.quote}"</p>
              <h3 className="text-lg font-bold mt-4">{testimonial.name}</h3>
              <p className="text-sm text-yellow-400">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6">
        <div className="h-2 w-2 bg-yellow-500 rounded-full mx-1"></div>
        <div className="h-2 w-2 bg-gray-400 rounded-full mx-1"></div>
        <div className="h-2 w-2 bg-gray-400 rounded-full mx-1"></div>
      </div>
    </section>
  );
};

export default Testimonials;
