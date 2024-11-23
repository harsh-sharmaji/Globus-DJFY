import React from 'react';

// Reusable Card Component
const UseCaseCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#09173C] text-white rounded-lg shadow-lg p-5 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/3 rounded-lg object-cover"
      />
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold text-orange-400">{title}</h3>
        <p className="text-sm">{description}</p>
        <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
          Register
        </button>
      </div>
    </div>
  );
};

// Main Component
const UseCases = () => {
  const useCases = [
    {
      title: 'BAR/CLUB/VENUE DJ',
      description:
        'In bars and clubs, our app empowers guests to influence the music and request their top songs. By scanning a QR code, they can interact seamlessly.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'MUSICIANS / BANDS',
      description:
        'Musicians and bands use our app to connect with fans during live shows. By displaying a QR code, fans enjoy an interactive experience.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'WEDDING / PRIVATE EVENT',
      description:
        'Our song request app makes weddings magical by letting guests shape the playlist. Create unforgettable memories with music.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'KARAOKE EVENT',
      description:
        'At karaoke events, our app makes singing seamless and fun. Guests can choose their favorite songs and enjoy a lively atmosphere.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'STREET PERFORMER/ARTIST',
      description:
        'Street performers use our app and QR code system to interact with their audience, receive song requests, and gather feedback.',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="bg-[#09173C] text-white py-10 px-5 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">
        USE <span className="text-orange-400">CASES</span>
      </h2>
      <div className="flex flex-col space-y-10">
        {useCases.map((useCase, index) => (
          <UseCaseCard
            key={index}
            title={useCase.title}
            description={useCase.description}
            image={useCase.image}
          />
        ))}
      </div>
    </div>
  );
};

export default UseCases;
