const Header = () => {
    return (
      <div className="relative bg-custom-bg1 bg-cover bg-center min-h-screen ">
        {/* Top Bar */}
        <div className="bg-[#09173C] text-white py-2 px-4">
        <div className="absolute bg-[#000000] bg-opacity-80"></div>
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp Support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>team@djfyapp.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+001 2345 6789 90</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="/login" className="hover:text-gray-300">Login</a>
              <span>/</span>
              <a href="/register" className="hover:text-gray-300">Register</a>
            </div>
          </div>
        </div>
  
        {/* Navigation */}
        <nav className="border-b border-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-8">
                <a href="/about-us">About us</a>
                <a href="/use-cases">Use Cases</a>
                <a href="/events">Events</a>
              </div>
              <div className="w-24">
                <img src="/logo.png" alt="DJFY Logo" className="w-full" />
              </div>
              <div className="flex items-center gap-8">
                <a href="/web-app">Web App</a>
                <a href="/faq">FAQ</a>
                <a href="/contact-us">Contact us</a>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Hero Section */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold text-white">
                    ABOUT <span className="text-red-500">DJFY</span>
                  </h1>
                  <svg className="w-12 h-12 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
                  </svg>
                </div>
                
                <p className="text-gray-300 text-lg">
                  Introducing DJFY, the ultimate platform revolutionizing the music industry by offering a seamless alternative stream of income for DJs, live musicians/bands, and street performers/musicians. With DJFY, every artist and venue owner can easily create a free account and receive a unique QR code to share with their audience, unlocking the power of interactive music experiences like never before.
                </p>
                
                <p className="text-gray-300 text-lg">
                  With DJFY, artists and venues can tap into a new revenue stream while providing an immersive and interactive music experience for their audience. Join DJFY today and unlock the potential of your performances like never before!
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute right-0 top-0 w-96 h-64 rounded-lg overflow-hidden">
                  <img 
                    src="../assets/bg2.png" 
                    alt="Party scene" 
                    className=" bg-custom-bg2 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute right-20 top-20 w-96 h-64 rounded-lg overflow-hidden">
                  <img 
                    src="/party-image-2.jpg" 
                    alt="Party scene" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Header