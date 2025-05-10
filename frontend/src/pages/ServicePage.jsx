import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBag, Gift, Award, Clock, ChevronRight, Star } from 'lucide-react';
import Banner from '../components/Banner';
import GymService from '../components/services/GymService';
import FoodService from '../components/services/FoodService';
import SalonService from '../components/services/SalonService';
import MembershipPage from '../components/layout/MembershipDetails';

const ServicePage = () => {

  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);

  const testimonials = [
    {
      name: "Emily Davis",
      role: "Happy Shopper",
      content: "This mart has everything I need at unbeatable prices. The discounts are incredible!",
      rating: 5,
    },
    {
      name: "John Smith",
      role: "Frequent Customer",
      content: "Shopping here is always a pleasure. Great deals and friendly staff make it my go-to mart.",
      rating: 5,
    },
    {
      name: "Sophia Brown",
      role: "Bargain Hunter",
      content: "The weekly offers and variety of products are unmatched. Highly recommend!",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: <ShoppingBag size={32} />,
      title: "Affordable Subscription",
      description: "Aarna Mart offers an unbeatable subscription for just ₹99/month. This low-cost membership unlocks fantastic savings, ensuring that you can shop for your essentials without straining your budget or compromising quality.",
      highlightColor: "from-red-500 to-red-600",
      iconBg: "bg-red-500",
      delay: 0
    },
    {
      icon: <Gift size={32} />,
      title: "Massive Discounts",
      description: "Enjoy discounts ranging from 10% to 90% on a wide variety of products at Aarna Mart! Our pricing strategy ensures that you save significantly on grocery bills, making shopping both smart and affordable.",
      highlightColor: "from-red-600 to-red-700",
      iconBg: "bg-red-600",
      delay: 0.2
    },
    {
      icon: <Award size={32} />,
      title: "Quality Products",
      description: "At Aarna Mart, quality is our priority. We carefully select fresh, high-quality items to meet your needs, ensuring that you receive only the best products every time you shop with us.",
      highlightColor: "from-red-700 to-red-800",
      iconBg: "bg-red-700",
      delay: 0.4
    },
    {
      icon: <Clock size={32} />,
      title: "Convenient Shopping",
      description: "Aarna Mart provides a seamless shopping experience with well-organized aisles, friendly staff, and quick checkout options, making it easy for you to find everything you need, whether in-store or online.",
      highlightColor: "from-red-800 to-red-900",
      iconBg: "bg-red-800",
      delay: 0.6
    }
  ];

  return (
    <>
      <Banner />
      <MembershipPage />
      <div className="min-h-screen bg-black py-16 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="h-24 bg-red-500/20 rounded-lg transform rotate-12"></div>
            ))}
          </div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Aarna Mart
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mt-2 mx-auto">
            Experience the future of shopping with our innovative features and unbeatable offers
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="container mx-auto max-w-6xl relative">
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
                <div className="relative  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300">
                  {/* Icon Container */}
                  <div className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                    <motion.div
                      animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-white"
                    >
                      {feature.icon}
                    </motion.div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                    {feature.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial section animation */}
          <div className="container mx-auto max-w-4xl mt-16">
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
                    <Star key={i} size={20} className="text-red-500 fill-red-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 italic">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <p className="text-white font-semibold">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-red-500">{testimonials[activeTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>;

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center relative mt-16"
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              Save Big on Groceries Today!
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Shop now and enjoy discounts of up to 90% on your favorite products. Don't miss out on these unbeatable deals!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-red-500 transition-all duration-300"
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-red-500 text-red-500 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-red-500 transition-all duration-300"
              >
                View Offers
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
      <GymService />
      <FoodService />
      <SalonService />
    </>
  );
};

export default ServicePage;