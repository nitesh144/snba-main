import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="w-full h-[450px] lg:h-screen object-cover" 
        style={{ margin: 0, padding: 0 }}
      >
        <source src='https://res.cloudinary.com/di4cxxdxr/video/upload/v1740116889/Webvideo_vxzr2b.mp4' type="video/mp4"/>
      </video>
    </div>
  );
};

export default HeroSection;
