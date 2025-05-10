
import React, { useState } from 'react';
import { Star } from 'lucide-react';

const ScrollingText = () => {
  const [isPaused, setIsPaused] = useState(false);

  const items = [
    {
      text: "Quality Services Guaranteed",
      icon: "★"
    },
    {
      text: "Dine in Style",
      icon: "✧"
    },
    {
      text: "Join the Revolution",
      icon: "⬥"
    },
    {
      text: "Exclusive Member Benefits",
      icon: "✦"
    },
    {
      text: "Convenience at Its Best",
      icon: "✶"
    }
  ];

  return (
    <div className="relative w-full py-2 overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-500 to-red-800" />
      
      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-500 to-red-800" />

      {/* Main Content */}
      <div 
        className={`p-2 relative ${isPaused ? 'pause-animation' : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* First Scroll */}
        <div className={`animate-[scroll_5s_linear_infinite] whitespace-nowrap transform-gpu ${isPaused ? 'pause-animation' : ''}`}>
          {[...Array(2)].map((_, index) => (
            <div key={index} className="inline-block">
              {items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="inline-block mx-12 group transition-transform duration-300 cursor-pointer"
                >
                  <span className="inline-block text-yellow-500 mr-3 group-hover:animate-spin">
                    {item.icon}
                  </span>
                  <span className="inline-block text-md md:text-xl font-bold bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent transition-colors duration-300">
                    {item.text}
                  </span>
                  <span className="inline-block text-yellow-500 ml-3 group-hover:animate-spin">
                    {item.icon}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;

// Add these styles to your CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes scroll-reverse {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .pause-animation {
    animation-play-state: paused !important;
  }
`;
document.head.appendChild(style);