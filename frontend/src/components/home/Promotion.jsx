import { ChevronRight, Heart, Sparkles, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const PROMO_KEY = 'lastSeenPromotion';
const PROMO_DELAY = 24 * 60 * 60 * 1000; // 24 hours in ms

const Promotion = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem(PROMO_KEY);
    const hasExpired = !lastSeen || (Date.now() - Number(lastSeen)) > PROMO_DELAY;

    if (hasExpired) {
      setIsMounted(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
      
      // Start animating the icon after a delay
      setTimeout(() => {
        setAnimateIcon(true);
      }, 1000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(PROMO_KEY, Date.now().toString());
    setTimeout(() => {
      setIsMounted(false);
    }, 300);
  };

  if (!isMounted) return null;

  return (
    <div 
      className={`fixed bottom-6 right-6 max-w-md z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg shadow-xl overflow-hidden ml-5">
        <div className="relative">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-gray-800 to-red-500  px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <Sparkles 
                className={`text-yellow-300 mr-2 ${
                  animateIcon ? 'animate-pulse' : ''
                }`} 
                size={20} 
              />
              <span className="text-white font-semibold tracking-wide">Limited Time Offer</span>
            </div>
            <button 
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close promotion"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content area */}
          <div className="px-6 pt-4 pb-5 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              Experience The Aarna Difference
            </h3>
            
            <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm">
              For a limited time, enjoy <span className="font-semibold text-red-600 dark:text-red-400">75% OFF</span> on <span className="font-semibold">GYM</span> and <span className="font-semibold">SALON</span>, 
              Up to <span className="font-semibold text-red-600 dark:text-red-400">90% OFF</span> on <span className="font-semibold">MART</span> and 
              <span className="font-semibold text-red-600 dark:text-red-400"> 25% OFF</span> on <span className="font-semibold">FOODCOURT</span>.
            </p>
            
            <div className="flex items-center mb-4 text-gray-500 dark:text-gray-400 text-sm">
              <Heart size={16} className="text-pink-500 mr-2" />
              <p>Gentle, effective skincare with expert aestheticians</p>
            </div>
            
            <div className="flex justify-end">
              <button 
                className="flex items-center bg-gradient-to-r from-red-600 to-red-600 text-white px-4 py-2 rounded-md font-medium text-sm transition-all hover:shadow-lg hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none"
              >
                Buy Membership
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;

// import { ChevronRight, Heart, Sparkles, X } from 'lucide-react'
// import React, { useEffect, useState } from 'react'

// const PROMO_KEY = 'lastSeenPromotion';
// const PROMO_DELAY = 24 * 60 * 60 * 1000; // 24 hours in ms

// const Promotion = () => {
//   const [isVisible, setIsVisible] = useState(false); // Controls fade in/out
//   const [isMounted, setIsMounted] = useState(false); // Controls render/unmount

//   useEffect(() => {
//     const lastSeen = localStorage.getItem(PROMO_KEY);
//     const hasExpired = !lastSeen || (Date.now() - Number(lastSeen)) > PROMO_DELAY;

//     if (hasExpired) {
//       setIsMounted(true); // Mount component
//       setTimeout(() => {
//         setIsVisible(true); // Trigger fade-in
//       }, 100); // Small delay to allow initial render
//     }
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false); // Start fade-out
//     localStorage.setItem(PROMO_KEY, Date.now().toString());

//     // Wait for the transition to complete, then unmount
//     setTimeout(() => {
//       setIsMounted(false);
//     }, 300); // Match Tailwind's duration-300
//   };

//   if (!isMounted) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center transition-all">
//       <section
//         className={`relative w-[92%] max-w-3xl transition-all duration-300 ease-in-out 
//           ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
//         `}
//       >
//         <div className="bg-[#f32930] rounded-2xl p-6 sm:p-10 md:p-14 relative overflow-hidden shadow-2xl">
//           <button
//             onClick={handleClose}
//             className="absolute top-3 right-3 text-white bg-red-800/60 rounded-full p-2 hover:bg-red-700 transition"
//           >
//             <X className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>

//           {/* Promo Content */}
//           <div className="relative z-10 max-w-2xl mx-auto">
//             <div className="flex items-center mb-4 sm:mb-6">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center">
//                 <Sparkles className="text-yellow-400" />
//               </div>
//               <h3 className="text-lg sm:text-xl font-bold ml-3 text-white">Limited Time Offer</h3>
//             </div>

//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white leading-tight">
//               Experience The <br /> <span className="text-black">Aarna Difference</span>
//             </h2>

//             <p className="text-base sm:text-lg mb-6 text-white opacity-90">
//               For a limited time, enjoy <span className="font-bold text-xl underline decoration-white text-yellow-400 decoration-2 underline-offset-4">75% OFF</span> on <strong>GYM</strong> and <strong>SALON</strong>, <span className="font-bold text-yellow-400 text-xl underline decoration-white decoration-2 underline-offset-4">Upto 90% OFF</span> on <strong>MART</strong> and <span className="font-bold text-yellow-400 text-xl underline decoration-white decoration-2 underline-offset-4">25% OFF</span> on <strong>FOODCOURT</strong>.
//             </p>

//             <div className="flex items-center mb-6 sm:mb-8 bg-red-800/40 p-3 sm:p-4 rounded-xl text-white text-sm sm:text-base">
//               <Heart className="text-white mr-2 sm:mr-3" fill="white" />
//               <span>Gentle, effective skincare with expert aestheticians</span>
//             </div>

//             <button className="bg-white text-red-700 text-base sm:text-lg hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-red-900/30 flex items-center mx-auto">
//               Buy Membership <ChevronRight className="ml-2 w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Promotion;
