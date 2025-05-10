import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Utensils, Tag, Leaf, Grid,
  Star, Clock, Users, ArrowRight, Coffee, Pizza,
  ChefHat
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FoodService = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <ChefHat size={32} />,
      title: "Expert Chefs",
      description: "Experience culinary excellence with our team of skilled chefs who craft each dish with passion and precision, using traditional techniques and modern innovations.",
      highlightColor: "from-orange-500 to-orange-600",
      iconBg: "bg-gradient-to-br from-red-500 to-red-600",
      delay: 0
    },
    {
      icon: <Tag size={32} />,
      title: "Premium Value",
      description: "Enjoy exceptional dining at unbeatable prices. Aarna Mart offers ₹99/month subscription gives you access to exclusive discounts and special member-only offerings.",
      highlightColor: "from-orange-600 to-orange-700",
      iconBg: "bg-gradient-to-br from-red-600 to-red-700",
      delay: 0.2
    },
    {
      icon: <Pizza size={32} />,
      title: "Global Cuisine",
      description: "Travel the world through Aarna Mart's diverse menu featuring authentic dishes from various cultures. From Italian pasta to Indian curries, satisfy all your cravings.",
      highlightColor: "from-orange-700 to-orange-800",
      iconBg: "bg-gradient-to-br from-red-700 to-red-800",
      delay: 0.4
    },
    {
      icon: <Coffee size={32} />,
      title: "Premium Ambience",
      description: "Dine in style with our modern décor, comfortable seating, and perfect ambiance. Whether it's a casual lunch or special dinner, we provide the perfect setting.",
      highlightColor: "from-orange-800 to-orange-900",
      iconBg: "bg-gradient-to-br from-red-800 to-red-900",
      delay: 0.6
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "Food Enthusiast",
      content: "The variety and quality of food at Aarna FService is exceptional. The subscription makes it incredibly affordable!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Regular Customer",
      content: "From authentic Indian to Italian, every dish is perfectly prepared. The ambiance makes dining here a wonderful experience.",
      rating: 5
    },
    {
      name: "Mark Wilson",
      role: "Food Blogger",
      content: "A perfect blend of quality, variety, and value. The subscription model is revolutionary for regular diners.",
      rating: 5
    }
  ];

  const stats = [
    { label: "Satisfied Customers", value: "10,000+" },
    { label: "Global Cuisines", value: "15+" },
    { label: "Expert Chefs", value: "20+" },
    { label: "Signature Dishes", value: "100+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 via-transparent to-transparent animate-pulse"></div>
        <div className="grid grid-cols-12 gap-4 h-full opacity-30">
          {[...Array(48)].map((_, i) => (
            <div
              key={i}
              className="h-24 bg-gradient-to-r from-red-500 to-red-700 rounded-lg transform rotate-12"
            ></div>
          ))}
        </div>
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative"
      >
        <h1 className="text-2xl lg:text-5xl font-bold text-white ">
          <span className="bg-gradient-to-r from-red-500 to-red-700  bg-clip-text">
            AARNA FOOD COURT
          </span>
        </h1>
        <div className="w-40 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-1 rounded-full lg:mt-2"></div>
        <p className="text-gray-300 text-sm lg:text-xl max-w-3xl mt-6 mx-auto font-light">
          Experience culinary excellence with our diverse selection of global cuisines and premium dining atmosphere
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="container mx-auto max-w-6xl mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-xl lg:text-3xl font-bold text-red-500 mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto max-w-6xl relative mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-700 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm hover:border-red-500 transition-all duration-300">
                <div className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                  <motion.div
                    animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white"
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                <h2 className="text-lg lg:text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {feature.title}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto max-w-4xl mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700"></div>
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-gray-300 text-sm lg:text-lg mb-6 italic">"{testimonials[activeTestimonial].content}"</p>
            <p className="text-white font-semibold">{testimonials[activeTestimonial].name}</p>
            <p className="text-red-500">{testimonials[activeTestimonial].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center relative"
            >
              <h3 className="text-xl lg:text-4xl font-bold text-white mb-6">
              Let the taste adventure begin!
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm lg:text-lg">
              Subscribe now to get 30% off at food services and enjoy exclusive access to special menu items.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to='/membership-form'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold lg:py-4 lg:px-8 px-2 py-2 text-sm lg:text-lg rounded-full transition-all duration-300"
                >
                  Subscribe Now
                </motion.button></Link>
              </div>
            </motion.div>
    </div>
  );
};

export default FoodService;