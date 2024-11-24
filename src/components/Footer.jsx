import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#07091F] text-white py-16 border-t-2 border-t-transparent" style={{ borderImage: 'linear-gradient(to right, #FDDF09, #E82B34) 1' }}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Logo and Description Section */}
        <div className="md:col-span-4">
          <img src="/logo.png" alt="DJFY" className="w-32 mb-6" />
          <p className="text-gray-300 mb-6">
            Connecting DJs and music enthusiasts for seamless event experiences and vibrant community engagement.
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-[#ff5533] to-[#ff3333] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Sign Up as User
            </button>
            <button className="bg-gradient-to-r from-[#ff5533] to-[#ff3333] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Sign Up as DJ
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-bold mb-4">Under the Hood</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="/use-cases" className="text-gray-300 hover:text-white">Use Cases</a></li>
            <li><a href="/events" className="text-gray-300 hover:text-white">Events</a></li>
            <li><a href="/web-apps" className="text-gray-300 hover:text-white">Web Apps</a></li>
            <li><a href="/usage-video" className="text-gray-300 hover:text-white">Usage Video</a></li>
            <li><a href="/gallery" className="text-gray-300 hover:text-white">Gallery</a></li>
            <li><a href="/testimonials" className="text-gray-300 hover:text-white">Clients Testimonials</a></li>
            <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="md:col-span-5">
          <h3 className="text-lg font-bold mb-4">HelpDesk</h3>
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>+91 1234 5678 90</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>team@djfyapp.com</span>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff5533]"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff5533]"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff5533]"
            ></textarea>
            <div className="flex justify-between items-center">
              <div className="bg-white rounded">
                {/* Replace with actual reCAPTCHA component */}
                <div className="w-[200px] h-[50px]"></div>
              </div>
              <button className="bg-gradient-to-r from-[#ff5533] to-[#ff3333] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 DjFy. All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">Connect -</span>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="hover:text-[#ff5533]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-[#ff5533]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="hover:text-[#ff5533]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-[#ff5533]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

