import React from 'react';
import { Phone, Apple, Play, Star, Download } from 'lucide-react';
import mobile from '../../assets/images/mobile-app.png'

const AppBanner = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 md:top-20 md:left-20 md:w-72 md:h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 md:bottom-20 md:right-20 md:w-96 md:h-96 bg-red-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your
              <span className="block text-white mt-2 md:mt-4">
                life with
              </span>
              <span className='block text-red-500 mt-2 md:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                Annie Consumers
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-md mx-auto lg:mx-0">
              Download our app and unlock a world of wellness, beauty, and exclusive member benefits.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-row justify-center lg:justify-start gap-5">
              <button className="group relative w-32 sm:w-auto overflow-hidden shadow-sm shadow-red-500 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl lg:rounded-2xl transition-all duration-300">
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
                  <div className="text-left">
                    <p className="text-xs lg:text-lg opacity-80">Get it on</p>
                    <p className="text-xs lg:text-lg font-semibold">App Store</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>

              <button className="group relative w-32 sm:w-auto overflow-hidden shadow-sm shadow-red-500 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl lg:rounded-2xl transition-all duration-300">
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                  <div className="text-left">
                    <p className="text-xs lg:text-lg opacity-80">Get it on</p>
                    <p className="text-xs lg:text-lg font-semibold">Google Play</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Phone Mockup Section */}
          <div className="relative mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-56 md:w-72 lg:w-80 h-[450px] md:h-[520px] lg:h-[650px] bg-black rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-gray-900 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Screen Content */}
              <div className="absolute inset-2  rounded-[34px] sm:rounded-[42px] md:rounded-[48px] overflow-hidden">
                <img
                  src={mobile}
                  alt="App Interface"
                  className=" object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
