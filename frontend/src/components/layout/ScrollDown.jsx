
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const ScrollDown = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress
      const totalScrollable = documentHeight - windowHeight;
      const progress = Math.min(scrollTop / totalScrollable, 1);
      setScrollProgress(progress);

      // Determine if we're at top or bottom
      setIsAtTop(scrollTop < 100);
      
      // Hide indicator when very close to bottom
      const isVeryNearBottom = scrollTop + windowHeight > documentHeight - 50;
      setIsVisible(!isVeryNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = async () => {
    if (isScrolling) return; // Prevent multiple clicks
    
    setIsScrolling(true);
    
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    
    if (isAtTop) {
      // Scroll to bottom
      window.scrollTo({
        top: documentHeight - windowHeight,
        behavior: 'smooth',
      });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Reset scrolling state after animation completes
    setTimeout(() => setIsScrolling(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <>

      <div className={`fixed bottom-6 right-6 z-50 scroll-indicator ${!isVisible ? 'hidden' : ''}`}>
        <div
          className={`relative cursor-pointer group transition-all duration-500 hover:scale-110 active:scale-95 ${isScrolling ? 'animate-pulse' : 'breathe'}`}
          onClick={handleScroll}
          title={isAtTop ? "Scroll to bottom" : "Scroll to top"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleScroll()}
        >
          {/* Progress Ring */}
          <div className="absolute -inset-2 z-0">
            <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 56 56">
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="rgba(239, 68, 68, 0.8)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${163.36} ${163.36}`}
                strokeDashoffset={163.36 - (scrollProgress * 163.36)}
                className="progress-ring transition-all duration-300 drop-shadow-sm"
                style={{
                  filter: 'drop-shadow(0 0 3px rgba(239, 68, 68, 0.6))'
                }}
              />
            </svg>
          </div>

          {/* Main Button */}
          <div className="w-10 h-10 border-2 border-white/30 rounded-full glass-effect flex items-center justify-center relative overflow-hidden shadow-2xl hover-glow transition-all duration-500 group-hover:border-red-500/70 group-hover:shadow-red-500/30">
            
            {/* Animated Chevrons */}
            {isAtTop ? (
              <>
                <div className="absolute animate-smooth-slide-down z-20">
                  <ChevronDown className="w-5 h-5 text-white group-hover:text-red-300 transition-all duration-500 drop-shadow-lg" />
                </div>
                <div className="absolute animate-smooth-slide-down-delayed z-15 opacity-70">
                  <ChevronDown className="w-5 h-5 text-white/80 group-hover:text-red-200 transition-all duration-500" />
                </div>
              </>
            ) : (
              <>
                <div className="absolute animate-smooth-slide-up z-20">
                  <ChevronUp className="w-5 h-5 text-white group-hover:text-red-300 transition-all duration-500 drop-shadow-lg" />
                </div>
                <div className="absolute animate-smooth-slide-up-delayed z-15 opacity-70">
                  <ChevronUp className="w-5 h-5 text-white/80 group-hover:text-red-200 transition-all duration-500" />
                </div>
              </>
            )}

            {/* Inner Glow */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none"></div>
            
            {/* Center Highlight */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full pointer-events-none"></div>
          </div>

          {/* Hover Ripples */}
          <div className="absolute inset-0 rounded-full border border-red-500 opacity-0 group-hover:opacity-40 group-hover:scale-150 transition-all duration-1000 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full border border-white opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-800 pointer-events-none" style={{ transitionDelay: '0.2s' }}></div>
          <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-15 blur-xl transition-all duration-700 pointer-events-none group-hover:animate-pulse"></div>

          {/* Click Effect */}
          {isScrolling && (
            <div className="absolute inset-0 rounded-full border-2 border-red-400 click-ripple pointer-events-none"></div>
          )}

          {/* Label */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-90 transition-all duration-500 pointer-events-none">
            <span className="text-xs text-white font-light tracking-widest whitespace-nowrap bg-black/60 px-3 py-1 rounded backdrop-blur-sm border border-red-500/30">
              {isAtTop ? ' ' : ' '}
            </span>
          </div>

          {/* Progress Indicator */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-70 transition-all duration-500 pointer-events-none">
            <div className="text-xs text-red-400 font-mono bg-black/40 px-2 py-1 rounded">
              {Math.round(scrollProgress * 100)}%
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-visible opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full float-particle-1" style={{ top: '15%', left: '20%' }}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full float-particle-2" style={{ top: '60%', right: '15%' }}></div>
          <div className="absolute w-0.5 h-0.5 bg-red-400 rounded-full float-particle-3" style={{ bottom: '25%', left: '25%' }}></div>
          <div className="absolute w-1 h-1 bg-red-300 rounded-full float-particle-1" style={{ top: '80%', right: '30%', animationDelay: '1.5s' }}></div>
          <div className="absolute w-0.5 h-0.5 bg-white/80 rounded-full float-particle-2" style={{ top: '40%', left: '70%', animationDelay: '0.5s' }}></div>
        </div>

        {/* Ambient Light */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-red-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none blur-xl scale-150"></div>
      </div>
    </>
  );
};

export default ScrollDown;