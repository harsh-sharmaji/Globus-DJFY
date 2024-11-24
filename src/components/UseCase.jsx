import React from 'react'

const UseCaseSection = ({ title, description, imageUrl, isReversed }) => (
  <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-16`}>
    <div className="flex-1">
      <img 
        src={imageUrl} 
        alt={title}
        className="rounded-lg w-full h-[300px] object-cover"
      />
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <h3 className="text-[#ff5533] text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <button className="bg-gradient-to-r from-[#ff5533] to-[#ff3333] text-white px-6 py-2 rounded-full w-fit hover:opacity-90 transition-opacity">
        Register!
      </button>
    </div>
  </div>
);

const UseCase = () => {
  const cases = [
    {
      title: "BAR/CLUB/VENUE DJ",
      description: "In bars and clubs, our app empowers guests to influence the music and create an interactive atmosphere. Instead of shouting requests or songs from spotify or youtube library, while DJs curate a playlist that keeps the dance floor packed. It's a seamless experience that enhances the entertainment value.",
      imageUrl: "https://images.pexels.com/photos/7715613/pexels-photo-7715613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "MUSICIANS / BANDS",
      description: "Musicians and bands use our app to connect with fans during live shows. By displaying a QR code, they invite the audience to request songs, creating an interactive experience. Fans share requests, making each performance unique and engaging.",
      imageUrl: "https://img.freepik.com/free-photo/woman-performing-live-music-local-event_23-2149188081.jpg"
    },
    {
      title: "WEDDING / PRIVATE EVENT",
      description: "Our song request app makes weddings magical by letting guests shape the playlist. With each song choice submitted through the QR code, guests become part of the celebration. The music flows from love songs, ballads to dance-floor anthems, every song becomes a part of the celebration, uniting guests in joy and love.",
      imageUrl: "https://img.freepik.com/free-photo/nightlife-with-people-dancing-club_23-2149052667.jpg?t=st=1732425203~exp=1732428803~hmac=657af28e55c4ffbc47cfaebcdf9943a618154944db5a70f2a77f37c80b03203f&w=996"
    },
    {
      title: "KARAOKE EVENT",
      description: "At karaoke events with a DJ, our app makes singing seamless and fun. Guests scan the DJs QR code to access the event in the app and browse through thousands of songs to find their perfect performance, keeping the energy high and ensuring everyone gets their moment in the spotlight.",
      imageUrl: "https://img.freepik.com/free-photo/medium-shot-people-performing-concert_23-2149162946.jpg"
    },
    {
      title: "STREET PERFORMER/ARTIST",
      description: "For street performers and artists, our app and QR code system enables a new level of personal and financial connection with their audience. Passersby can easily make song requests and show appreciation through digital tips.",
      imageUrl: "https://img.freepik.com/free-photo/three-friends-enjoy-by-singing-acoustic-guitar-songs-rooftop_146671-14626.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#09173C] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="text-white">USE </span>
            <span className="text-[#ff5533]">CASES</span>
          </h2>
          <div className="flex justify-center mt-2">
            <div className="flex gap-1">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#ff5533]" />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-20">
          {cases.map((useCase, index) => (
            <UseCaseSection
              key={index}
              title={useCase.title}
              description={useCase.description}
              imageUrl={useCase.imageUrl}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCase;

