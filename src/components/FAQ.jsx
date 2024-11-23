import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-white/90 hover:text-white transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-white/70">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "What is DJFY?",
      answer: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performer/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances."
    },
    {
      question: "How does DJFY work?",
      answer: "DJFY works by connecting performers with their audience through our platform, enabling real-time song requests and interactions."
    },
    {
      question: "Can I use DJFY for free?",
      answer: "Yes, DJFY offers a basic free tier with essential features. Premium features are available through paid subscriptions."
    },
    {
      question: "How do I earn money with DJFY?",
      answer: "You can earn money through paid song requests, tips, and special event bookings through the platform."
    },
    {
      question: "Can I reject song requests on DJFY?",
      answer: "Yes, performers have full control over which song requests they accept or decline."
    },
    {
      question: "How are paid song requests handled on DJFY?",
      answer: "Paid requests are processed securely through our platform with instant notifications to performers."
    },
    {
      question: "Is DJFY available for all types of events?",
      answer: "DJFY supports various event types including clubs, weddings, street performances, and private parties."
    },
    {
      question: "How do I sign up for DJFY?",
      answer: "Simply visit our website and click the sign-up button to create your account as a performer or venue."
    },
    {
      question: "Can I use DJFY on my mobile device?",
      answer: "Yes, DJFY is fully optimized for mobile devices with apps available for both iOS and Android."
    },
    {
      question: "How can I get support if I have questions or issues with DJFY?",
      answer: "Our support team is available 24/7 through the app or website to assist with any questions or concerns."
    },
    {
      question: "Can I make money promoting DJFY App?",
      answer: "Yes, we offer affiliate and referral programs for promoting DJFY to other performers and venues."
    },
    {
      question: "What are DJFY's administrative fees and charges?",
      answer: "DJFY charges a small percentage on transactions. Detailed fee structures are available in your account settings."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07091F] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="rounded-full bg-red-500/10 p-3 mb-4">
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center text-red-500">FAQ</h2>
          <div className="w-12 h-1 bg-red-500/20 mt-2"></div>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

