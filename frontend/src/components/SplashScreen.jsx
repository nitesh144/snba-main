import React, { useEffect, useState, useRef } from 'react';
import annie_logo from '../assets/images/logo/Annie-consumer.png';

const SplashScreen = () => {
  const [appReady, setAppReady] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [logoRevealed, setLogoRevealed] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const particlesRef = useRef(null);

  // Particle animation setup
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        // Red particles with varying opacity
        this.color = `rgba(255, ${Math.random() * 30}, ${Math.random() * 30}, ${0.1 + Math.random() * 0.2})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const createParticles = () => {
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
      }
    };
    
    createParticles();
    
    const animate = () => {
      if (fadeOut) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      // Connect particles with lines
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 0, 0, ${0.05 * (1 - distance/100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Reveal logo after slight delay
    setTimeout(() => {
      setLogoRevealed(true);
      // Reveal text shortly after
      setTimeout(() => {
        setTextRevealed(true);
      }, 400);
    }, 600);
    
    return () => {
      particles.length = 0;
    };
  }, [fadeOut]);

  useEffect(() => {
    // Prevent scrolling while splash screen is active
    document.body.style.overflow = 'hidden';
    
    // Simulate loading progress with a more realistic pattern
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev < 30) {
          return prev + Math.random() * 4;
        } else if (prev < 60) {
          return prev + Math.random() * 3;
        } else if (prev < 85) {
          return prev + Math.random() * 1.5;
        } else {
          return prev + Math.random() * 0.8;
        }
      });
    }, 120);

    // Wait for the animation to complete before allowing the app to render
    const timer = setTimeout(() => {
      clearInterval(progressInterval);
      setLoadingProgress(100);
      
      // Trigger fade out animation
      setTimeout(() => {
        setFadeOut(true);
        
        // Hide splash after fade out completes
        setTimeout(() => {
          setAppReady(true);
          document.body.style.overflow = 'auto'; // Restore scrolling
        }, 1200);
      }, 800);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (appReady) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-1200 ease-in-out ${fadeOut ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
    >
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      {/* Interactive particle network */}
      <canvas 
        ref={particlesRef}
        className="absolute inset-0 w-full h-full"
      ></canvas>
      
      {/* Central content container */}
      <div className="relative z-10 flex flex-col items-center max-w-md px-8">
        {/* Logo reveal container */}
        <div 
          className={`relative overflow-hidden rounded-full transition-all duration-1000 ease-out ${logoRevealed ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
        >
          {/* Pulsating highlight behind logo */}
          <div className="absolute inset-0 -m-10">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-900/20 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
          
          {/* Rotating halo effect */}
          <div className="absolute inset-0 -m-6">
            <div className="w-full h-full relative">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-white"
                  style={{ 
                    transform: `scale(${1 + i * 0.1})`,
                    animation: `rotateHalo ${6 + i * 2}s linear infinite ${i * 1}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Interactive circular progress */}
          <div className="absolute inset-0 -m-2">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              {/* Background track */}
              <circle 
                cx="100" cy="100" r="90" 
                fill="none" 
                stroke="rgba(255,255,255,0.08)" 
                strokeWidth="4"
                strokeDasharray="4,4"
              />
              
              {/* Progress indicator with dynamic dash offset */}
              <circle 
                cx="100" cy="100" r="90" 
                fill="none" 
                stroke="url(#progressGradient)" 
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="565.48"
                strokeDashoffset={565.48 - (565.48 * loadingProgress / 100)}
                style={{ 
                  transform: 'rotate(-90deg)', 
                  transformOrigin: 'center',
                  filter: 'drop-shadow(0 0 4px rgba(255, 0, 0, 0.8))'
                }}
              />
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff0000" />
                  <stop offset="50%" stopColor="#ff3333" />
                  <stop offset="100%" stopColor="#990000" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Logo container with reflection */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full"></div>
            
            {/* Logo image */}
            <div className="relative">
              <img
                src={annie_logo}
                alt="Annie-Consumers-Logo"
                className="w-40 h-40 object-contain drop-shadow-xl"
                style={{ 
                  filter: 'drop-shadow(0 0 8px rgba(255,0,0,0.4))'
                }}
              />
              
              {/* Reflection effect */}
              <div className="absolute top-full left-0 right-0 h-20 overflow-hidden">
                <div 
                  className="w-48 h-48 mx-auto opacity-30 blur-sm"
                  style={{ 
                    transform: 'rotateX(180deg) translateY(-40px)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
                  }}
                >
                  <img
                    src={annie_logo}
                    alt="annie consumers"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Animated dots around circle */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-red-600 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 30}deg) translateY(-120px)`,
                    opacity: (i % 3 === 0) ? 0.8 : 0.4,
                    animation: `pulseDot 2s infinite ${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated text reveal */}
        <div 
          className={`mt-8 overflow-hidden transition duration-1000 ease-out ${textRevealed ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500" style={{
            textShadow: '0 0 20px rgba(255, 0, 0, 0.3)'
          }}>
            ANNIE CONSUMERS
          </h1>
          
          {/* Animated underline */}
          <div className="h-0.5 w-0 mx-auto mt-2 bg-gradient-to-r from-red-600 to-red-800" style={{
            animation: textRevealed ? 'expandLine 1.5s forwards 0.2s' : 'none'
          }}></div>
        </div>
        
        {/* Elegant loading indicator */}
        <div 
          className={`mt-10 w-full transition-all duration-1000 ease-out ${textRevealed ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Status text with fade in animation */}
          <div className="flex justify-between items-center mb-2">
            <p className="text-white/70 text-sm font-medium">
              {loadingProgress < 100 ? 'Preparing your experience' : 'Ready to launch'}
            </p>
            <p className="text-white/90 text-sm font-medium">
              {Math.round(loadingProgress)}%
            </p>
          </div>
          
          {/* Premium progress bar */}
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-red-800 via-red-600 to-red-500 transition-all duration-300 relative"
              style={{ width: `${loadingProgress}%` }}
            >
              {/* Animated shine effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                style={{ animation: 'shineEffect 2s infinite' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fixed global styles without the jsx attribute */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulseDot {
          0%, 100% { transform: rotate(${Math.random() * 360}deg) translateY(-120px) scale(1); }
          50% { transform: rotate(${Math.random() * 360}deg) translateY(-120px) scale(1.5); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        
        @keyframes rotateHalo {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes expandLine {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        @keyframes shineEffect {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default SplashScreen;