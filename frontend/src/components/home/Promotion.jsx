import { ChevronRight, Heart, Sparkles, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import RegistrationForm from '../form/RegistrationForm';


const PROMO_KEY = 'lastSeenPromotion';
const PROMO_DELAY = 24 ; // 24 hours in milliseconds

const Promotion = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if promo should be shown
    const lastSeen = localStorage?.getItem(PROMO_KEY);
    const hasExpired = !lastSeen || (Date.now() - Number(lastSeen)) > PROMO_DELAY;

    if (hasExpired) {
      setIsMounted(true);
      // Delayed entrance for better mobile experience
      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      // Icon animation delay
      const iconTimer = setTimeout(() => {
        setAnimateIcon(true);
      }, 2000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(iconTimer);
      };
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    
    // Store timestamp to prevent showing again for 24 hours
    // if (typeof localStorage !== 'undefined') {
    //   localStorage.setItem(PROMO_KEY, Date.now().toString());
    // }
    
    // Clean up component after animation
    setTimeout(() => {
      setIsMounted(false);
    }, 400);
  };

  // Auto-hide after 20 seconds for mobile (longer than desktop)
  // useEffect(() => {
  //   if (isVisible && !showUserForm) {
  //     const autoHideTimer = setTimeout(() => {
  //       handleClose();
  //     }, 20000);

  //     return () => clearTimeout(autoHideTimer);
  //   }
  // }, [isVisible, showUserForm]);

  // Prevent body scroll when form is open (mobile fix)
  useEffect(() => {
    if (showUserForm) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [showUserForm]);

  if (!isMounted) return null;

  return (
    <>
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .h-safe-area-inset-bottom {
          height: env(safe-area-inset-bottom);
        }
        
        /* iOS specific fixes */
        @supports (-webkit-touch-callout: none) {
          .mobile-card {
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
          }
        }
      `}</style>

      {/* Main promotion card - Mobile optimized */}
      <div
        className={`fixed bottom-4 left-4 right-4 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-sm z-50 transition-all duration-400 ease-out ${
          isVisible && !isClosing 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}
        role="dialog"
        aria-labelledby="promo-title"
        aria-describedby="promo-description"
      >
        <div className="mobile-card bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-2xl shadow-2xl overflow-hidden border border-red-500/30 backdrop-blur-sm">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-700 to-red-500 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <Sparkles
                className={`text-yellow-300 mr-2 transition-all duration-500 ${
                  animateIcon ? 'animate-pulse scale-110' : ''
                }`}
                size={18}
              />
              <span className="text-white font-semibold text-sm tracking-wide">
                Limited Time Offer
              </span>
            </div>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 -mr-1 transition-all duration-200 active:scale-95"
              aria-label="Close promotion"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="p-5  ">
            <h3 
              id="promo-title" 
              className="text-md font-bold text-white text-center leading-tight mb-4"
            >
              Experience The Aarna Difference
            </h3>

            <div id="promo-description" className="mb-2">
              {/* Offer details - Mobile optimized grid */}
              <div className="bg-gradient-to-r from-red-500/40 to-transparent rounded-xl p-2 mb-2 border-l-3 border-red-500">
                <div className="grid grid-cols-1 gap-2 text-sm text-white/90">
                  <div className="flex justify-between items-center ">
                    <span className="font-medium">GYM & SALON</span>
                    <span className="font-bold text-red-500 text-base">75% OFF</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <span className="font-medium">MART</span>
                    <span className="font-bold text-red-500 text-base">Up to 90% OFF</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <span className="font-medium">FOODCOURT</span>
                    <span className="font-bold text-red-500 text-base">25% OFF</span>
                  </div>
                </div>
              </div>

              {/* Feature highlight */}
              <div className="flex items-start text-white/80 text-xs leading-relaxed mb-4 mt-2">
                <Heart size={14} className="text-red-500 mr-2  flex-shrink-0 mt-1" />
                <p>Expert aestheticians • Premium facilities • Proven results</p>
              </div>
            </div>

            {/* CTA Button - Mobile optimized */}
            <button
              onClick={() => setShowUserForm(true)}
              className="flex mx-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-2 py-2 rounded-xl font-semibold text-base transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none group active:scale-[0.98] shadow-lg"
              style={{ minHeight: '42px' }} // iOS touch target minimum
            >
              <span className="flex items-center justify-center">
                Claim Your Membership
                <ChevronRight 
                  size={20} 
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                />
              </span>
            </button>

            {/* Urgency indicator */}
            <div className="text-center pt-1">
              <span className="text-xs text-yellow-300 font-medium animate-pulse">
                ⏰ Limited spots available!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showUserForm && (
        <RegistrationForm onClose={() => setShowUserForm(false)} />
      )}
    </>
  );
};

export default Promotion;