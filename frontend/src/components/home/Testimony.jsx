import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Flame } from 'lucide-react';
import dp1 from '../../assets/images/testimony/DP1.jpg';
import dp2 from '../../assets/images/testimony/DP2.jpg';
import dp3 from '../../assets/images/testimony/DP3.jpg';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Amit',
      role: 'Premium Member',
      content: 'The ₹99 Membership has completely transformed my lifestyle! I love having access to the gym, salon, and food court all in one place. It makes my daily routine so much more convenient.',
      rating: 5,
      image: dp1
    },
    {
      id: 2,
      name: 'Mukul',
      role: 'Regular Customer',
      content: 'SNBA Lifestyle Hub is a game changer! The quality of services is top-notch, and I appreciate the focus on wellness and community. It truly feels like a home away from home.',
      rating: 5,
      image: dp2
    },
    {
      id: 3,
      name: 'Kamal',
      role: 'Fitness Enthusiast',
      content: 'I was skeptical about the membership at first, but it has exceeded my expectations. The variety of options available for beauty, health, and dining is incredible. I feel supported in my wellness journey!',
      rating: 5,
      image: dp3
    }
  ];

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => 
        prev === null ? 0 : (prev + 1) % testimonials.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-red-950/10 via-red-600/10 to-red-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto relative"
      >
        {/* Header Section */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16 relative"
        >
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold ">
            <span className="bg-white text-transparent bg-clip-text">
              Customer Review
            </span>
          </h1>
          <div className="flex items-center justify-center mt-3">
            <div className="w-16 h-1 bg-red-700 rounded-full mx-2" />
            <div className="w-24 h-1 bg-gray-600 rounded-full mx-2" />
            <div className="w-16 h-1 bg-red-700 rounded-full mx-2" />
          </div>
          <Flame className="absolute top-1 lg:h-10 lg:w-10 lg:top-1 right-4 md:right-1/4 lg:right-1/4 text-red-500 fill-yellow-500" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative m-5"
              onMouseEnter={() => {
                setActiveIndex(index);
                setAutoplay(false);
              }}
              onMouseLeave={() => {
                setActiveIndex(null);
                setAutoplay(true);
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-red-950/20 via-red-800/20 to-red-600/20 rounded-xl shadow-lg shadow-red-600 transform transition-all duration-700 ${
                activeIndex === index ? 'scale-105 opacity-100' : 'scale-100 opacity-50'
              }`} />
              
              <div className={`relative border border-transparent hover:border-red-500 rounded-xl p-8 backdrop-blur-sm transition-all duration-500 h-full ${
                activeIndex === index ? 'bg-gray-900/80' : 'bg-gray-900/40'
              }`}>
                {/* Quote Icon */}
                <motion.div
                  animate={{ rotate: activeIndex === index ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-4 -left-4 bg-gradient-to-br from-red-800 via-red-600 to-red-400 p-3 rounded-full"
                >
                  <Quote className="w-4 h-4 text-white" />
                </motion.div>

                {/* Rating */}
                <div className="flex justify-center mb-4 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="h-3.5 w-3.5 lg:w-5 lg:h-5 text-yellow-500 fill-yellow-500" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <motion.p 
                  className="text-gray-300 mb-6 text-sm lg:text-lg leading-relaxed text-justify"
                  whileHover={{ scale: 1.02 }}
                >
                  {testimonial.content}
                </motion.p>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-600 to-red-400 rounded-full blur-sm" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover relative z-10"
                    />
                  </motion.div>
                  <div className="text-center">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-red-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-400 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: activeIndex === index ? '100%' : '0%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;