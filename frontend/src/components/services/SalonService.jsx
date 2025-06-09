import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scissors, Tag, Star, Users, 
  Sparkles, Clock, Crown, Heart
} from 'lucide-react';
import RegistrationForm from '../form/RegistrationForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SalonService = () => {

    useEffect(() => {
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        offset: 120,
        easing: 'ease-in-out'
      });
    }, []);

  const [hoveredCard, setHoveredCard] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
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
      icon: <Scissors size={32} />,
      title: "Affordable Subscription",
      description: "At Annie Unisex Salon, our subscription is only ₹99/month. This membership offers incredible value, allowing you to access premium beauty services without breaking the bank.",
      highlightColor: "from-pink-500 to-pink-600",
      iconBg: "bg-gradient-to-br from-red-500 to-red-600",
      delay: 0
    },
    {
      icon: <Tag size={32} />,
      title: "Amazing Discounts",
      description: "Enjoy a generous 75% off on all salon services! Annie Salon's significant discount allows you to indulge in expert haircuts, stylish makeovers, and relaxing treatments.",
      highlightColor: "from-pink-600 to-pink-700",
      iconBg: "bg-gradient-to-br from-red-600 to-red-700",
      delay: 0.2
    },
    {
      icon: <Sparkles size={32} />,
      title: "Quality Services",
      description: "We prioritize quality at Annie Unisex Salon. Annie Unisex Salon's skilled professionals use high-quality products and techniques to ensure you receive the best possible care.",
      highlightColor: "from-pink-700 to-pink-800",
      iconBg: "bg-gradient-to-br from-red-700 to-red-800",
      delay: 0.4
    },
    {
      icon: <Crown size={32} />,
      title: "Trendy Styles",
      description: "Stay updated with the latest beauty trends! Annie Salon's stylists are trained in modern techniques and styles, ensuring you leave the salon looking fresh and fabulous.",
      highlightColor: "from-red-800 to-red-900",
      iconBg: "bg-gradient-to-br from-red-800 to-red-900",
      delay: 0.6
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Client",
      content: "The subscription model at Annie makes premium salon services so affordable. The quality is consistently excellent!",
      rating: 5
    },
    {
      name: "Raj Patel",
      role: "Old Member",
      content: "Their trendy styles and expert stylists keep me coming back. The discounts make it even better!",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Beauty Enthusiast",
      content: "Best salon experience in the city. Professional staff and amazing value for money with their subscription plan.",
      rating: 5
    }
  ];

  const stats = [
    { label: "Happy Clients", value: "5,000+" },
    { label: "Expert Stylists", value: "15+" },
    { label: "Services Offered", value: "25+" },
    { label: "Years of Excellence", value: "10+" }
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
      <div
        
        className="text-center mb-16 relative"
      >
        <h1 className="text-2xl lg:text-5xl font-bold text-white ">
          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text" data-aos="fade-up">
            ANNIE UNISEX SALON
          </span>
        </h1>
        <div className="w-40 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full lg:mt-2
        "></div>
        <p className="text-gray-300 text-sm lg:text-xl max-w-3xl mt-6 mx-auto font-light" data-aos="fade-right">
          Experience premium beauty services at unbeatable prices with our innovative subscription model
        </p>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto max-w-6xl mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up-right"
                data-aos-delay={200 + (index * 100)}
              
              className="text-center"
            >
              <h3 className="text-xl lg:text-3xl font-bold text-red-500 mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto max-w-6xl relative mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
               data-aos="flip-left"
                data-aos-delay={100 + (index * 100)}
              
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-700 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm hover:border-red-500 transition-all duration-300">
                <div className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                  <div
                    animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white"
                  >
                    {feature.icon}
                  </div>
                </div>
                
                <h2 className="text-lg lg:text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {feature.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto max-w-4xl mb-16">
        <AnimatePresence mode="wait">
          <div
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
          </div>
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <div
      
        className="text-center relative"
      >
        <h3 className="text-xl lg:text-4xl font-bold text-white mb-6" data-aos="fade-right">
          Transform Your Look Today!
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm lg:text-lg" data-aos="fade-right">
        Subscribe now and get your service at 75% off, plus exclusive access to premium treatments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          <button
            
            data-aos="fade-up"
            className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold lg:py-4 lg:px-8 px-2 py-2 text-sm lg:text-lg rounded-full transition-all duration-300"
            onClick={()=> setShowUserForm(true)}
          >
            Subscribe Now
          </button>
        </div>
      </div>
      <div>
        {showUserForm && <RegistrationForm onClose={() => setShowUserForm(false)} />}
      </div>
    </div>
  );
};

export default SalonService;