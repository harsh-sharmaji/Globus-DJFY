export default function WebApp() {
    return (
      <div className="min-h-screen bg-[#07091F] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header Section */}
          <div className="mb-8">
            <div className="inline-block p-3 rounded-full bg-gray-800/30 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12" y2="18" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-2">WEB <span className="text-red-500">APPS</span></h1>
            <div className="flex justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-16" viewBox="0 0 100 20">
                <rect x="0" y="8" width="100" height="4" fill="#ff4444" />
              </svg>
            </div>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Scan the QR Code, Connect to the event and request your song. No need to Download or install any App
            </p>
          </div>
  
          {/* Phone Mockups */}
          <div className="flex justify-center items-center gap-4 mb-8">
            {/* VR Movie Phone */}
            <div className="w-48 h-[400px] bg-gradient-to-b from-purple-900 to-purple-600 rounded-3xl p-2 overflow-hidden">
              <div className="h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">Watch movies in Virtual Reality</h3>
                <p className="text-xs text-gray-300 mb-4">Download and watch offline wherever you are</p>
                <button className="px-4 py-1 bg-purple-500 rounded-full text-xs">Sign up</button>
              </div>
            </div>
  
            {/* Movie Selection Phone */}
            <div className="w-52 h-[420px] bg-gradient-to-b from-emerald-900 to-emerald-600 rounded-3xl p-2 z-10">
              <div className="h-full bg-black/90 rounded-2xl p-3">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold">What would you like to watch?</h3>
                  <div className="flex items-center bg-white/10 rounded-full p-1.5">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="Search" className="bg-transparent border-none focus:outline-none text-xs ml-2 w-full" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-medium">New movies</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-[2/3] bg-gray-800 rounded-lg" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Movie Details Phone */}
            <div className="w-48 h-[400px] bg-gradient-to-b from-gray-900 to-gray-600 rounded-3xl p-2 overflow-hidden">
              <div className="h-full bg-black/90 rounded-2xl p-3">
                <div className="space-y-3">
                  <div className="aspect-video bg-gray-800 rounded-lg mb-2" />
                  <h3 className="text-sm font-bold">Eternals</h3>
                  <div className="flex space-x-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-6">
  {[1, 2, 3, 4, 5].map((i) => (
    <div
      key={i}
      className={`h-1.5 w-1.5 rounded-full ${i === 3 ? 'bg-yellow-400' : 'bg-gray-600'}`}
    />
  ))}
</div>

  
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded text-sm font-semibold hover:opacity-90 transition-opacity">
              Sign Up as User
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded text-sm font-semibold hover:opacity-90 transition-opacity">
              Sign Up as DJ
            </button>
          </div>
        </div>
      </div>
    )
  }