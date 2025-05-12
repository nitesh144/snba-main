import React from 'react';
import { Users, MapPin, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />,
      number: "1000+",
      label: "Members"
    },
    {
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />,
      number: "15+",
      label: "Multiple Locations"
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />,
      number: "100%",
      label: "Indian Owned"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />,
      number: "5 Star",
      label: "Quality Commitment"
    }
  ];

  return (
    <div className=" bg-gradient-to-b from-black to-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          Statistics
        </h2>
        <div className="flex items-center justify-center">
            <div className="w-16 h-1 bg-red-700 rounded-full mx-2" />
            <div className="w-8 h-1 bg-gray-600 rounded-full mx-2" />
            <div className="w-16 h-1 bg-red-700 rounded-full mx-2" />
          </div>
        <p className="text-gray-400 max-w-md sm:max-w-lg md:max-w-2xl mx-auto mt-3 text-sm sm:text-base md:text-lg">
          Discover how we're making a difference in the community through our commitment to excellence and service.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-8 lg:gap-10 mt-10 max-w-xl lg:max-w-7xl mx-auto ">
        {stats.map((stat, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.4 }}
            key={index}
            className="group relative p-5 sm:p-6 md:p-8 rounded-tl-[30px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[30px] bg-gray-800/50 backdrop-blur-sm border shadow-lg shadow-red-500 border-gray-700/50 hover:border-red-500/50 transition-all duration-300 m-5"
          >
            {/* Icon Container */}
            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative mb-4 flex justify-center">
              <div className="absolute inset-0 bg-white/25 blur-xl rounded-full group-hover:bg-red-500/30 transition-all duration-300" />
              <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-red-500 border border-white/20 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
            </motion.div>

            {/* Stats Content */}
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-lg sm:text-xl font-semibold text-white">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
