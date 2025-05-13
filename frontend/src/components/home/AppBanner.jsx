import React from 'react';
import { Phone, Apple, Play, Star, Download } from 'lucide-react';
import mobile from '../../assets/images/mobile/mobileimage.jpg'

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
                SNBA Consumers
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-md mx-auto lg:mx-0">
              Download our app and unlock a world of wellness, beauty, and exclusive member benefits.
            </p>
            {/* Rating Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 fill-yellow-600" />
                ))}
              </div>
              <span className="text-white text-sm sm:text-base lg:text-lg">4.0/5 (1k+ Reviews)</span>
            </div>

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
            <div className="relative w-56 md:w-72 lg:w-80 h-[390px] md:h-[520px] lg:h-[580px] bg-black rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-6 sm:border-8 border-gray-900 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Screen Content */}
              <div className="absolute inset-2 bg-gradient-to-br from-red-700 via-red-600 to-red-500 rounded-[34px] sm:rounded-[42px] md:rounded-[48px] overflow-hidden">
                <img
                  src={mobile}
                  alt="App Interface"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Floating Download Stats */}
              <div className="absolute -right-8 sm:-right-10 bottom-1/4 bg-red-500 backdrop-blur-lg p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  <div className="text-white">
                    <p className="text-[10px] md:text-sm opacity-80 text-white">Downloads</p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl font-bold">1K+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;


// import React from 'react';

// export default function ZomatoAppBanner() {
//   return (
//     <div className="bg-pink-50 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
//       {/* Left Section - Text and Download Buttons */}
//       <div className="mb-8 md:mb-0 md:w-1/2">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Download the app now!</h2>
//         <p className="text-gray-600 text-lg mb-6">
//           Experience seamless online ordering 
//           <br />only on the Zomato app
//         </p>
        
//         {/* App Store Buttons */}
//         <div className="flex flex-wrap gap-4">
//           {/* Google Play Button */}
//           <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
//             <div className="mr-2">
//               <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
//                 <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
//               </svg>
//             </div>
//             <div className="flex flex-col text-left">
//               <span className="text-xs">GET IT ON</span>
//               <span className="font-medium">Google Play</span>
//             </div>
//           </button>
          
//           {/* App Store Button */}
//           <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
//             <div className="mr-2">
//               <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
//                 <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
//               </svg>
//             </div>
//             <div className="flex flex-col text-left">
//               <span className="text-xs">Download on the</span>
//               <span className="font-medium">App Store</span>
//             </div>
//           </button>
//         </div>
//       </div>
      
//       {/* Right Section - Phone with QR Code */}
//       <div className="md:w-1/2 flex justify-center">
//         <div className="relative">
//           {/* Phone Frame */}
//           <div className="w-64 h-96 bg-white rounded-3xl shadow-xl border-4 border-gray-100 relative">
//             {/* Notch */}
//             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl"></div>
            
//             {/* QR Code Content */}
//             <div className="flex flex-col items-center justify-center h-full p-4">
//               <p className="text-gray-600 text-center mb-4">
//                 Scan the QR code to 
//                 <br />download the app
//               </p>
              
//               {/* QR Code */}
//               <div className="w-40 h-40 border border-gray-200 rounded-lg p-2">
//                 <div className="bg-white h-full w-full relative">
//                   {/* Simplified QR Code Pattern */}
//                   <div className="absolute top-0 left-0 w-6 h-6 bg-red-500 p-1 m-1 rounded-sm">
//                     <div className="bg-white h-full w-full rounded-sm"></div>
//                   </div>
//                   <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 p-1 m-1 rounded-sm">
//                     <div className="bg-white h-full w-full rounded-sm"></div>
//                   </div>
//                   <div className="absolute bottom-0 left-0 w-6 h-6 bg-red-500 p-1 m-1 rounded-sm">
//                     <div className="bg-white h-full w-full rounded-sm"></div>
//                   </div>
                  
//                   {/* QR Code Patterns */}
//                   <div className="grid grid-cols-8 gap-1 h-full w-full p-6">
//                     {Array(64).fill().map((_, i) => (
//                       <div key={i} className={`bg-black rounded-sm ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`}></div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }