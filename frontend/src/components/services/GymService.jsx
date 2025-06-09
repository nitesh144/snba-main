
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dumbbell, Badge, Building2, Users,
  ChevronRight, Trophy, Clock, Star,
  CalendarCheck, ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RegistrationForm from '../form/RegistrationForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GymService = () => {

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
  const navigate = useNavigate()

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
      icon: <Dumbbell size={32} />,
      title: "Premium Equipment",
      description: "Access state-of-the-art fitness equipment from leading brands. Our facility features the latest technology in cardio and strength training machines.",
      highlightColor: "from-red-500 to-red-600",
      iconBg: "bg-gradient-to-br from-red-500 to-red-600",
      delay: 0
    },
    {
      icon: <Trophy size={32} />,
      title: "Expert Trainers",
      description: "Work with certified personal trainers who create customized workout plans. Our experts help you achieve your fitness goals with personalized attention.",
      highlightColor: "from-red-600 to-red-700",
      iconBg: "bg-gradient-to-br from-red-600 to-red-700",
      delay: 0.2
    },
    {
      icon: <Clock size={32} />,
      title: "Discount & Offers",
      description: "Annie Unisex Gym is offering a 75% discount on memberships—just ₹99 per month! Enjoy flexible plans that provide great value for our services.",
      highlightColor: "from-red-700 to-red-800",
      iconBg: "bg-gradient-to-br from-red-700 to-red-800",
      delay: 0.4
    },
    {
      icon: <Star size={32} />,
      title: "Luxury Amenities",
      description: "Enjoy premium facilities including sauna, steam room, and recovery zone. Our amenities enhance your fitness experience and aid in post-workout recovery.",
      highlightColor: "from-red-800 to-red-900",
      iconBg: "bg-gradient-to-br from-red-800 to-red-900",
      delay: 0.6
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Athlete",
      content: "Annie Gym transformed my training regime. The facilities and expert guidance are unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Fitness Enthusiast",
      content: "Best gym experience ever! The equipment, trainers, and ambiance are top-notch.",
      rating: 5
    },
    {
      name: "Lisa Parker",
      role: "Yoga Instructor",
      content: "The atmosphere and community at Annie Gym are incredible. It's more than just a gym.",
      rating: 5
    }
  ];

  const stats = [
    { label: "Active Members", value: "2,500+" },
    { label: "Expert Trainers", value: "25+" },
    { label: "Fitness Classes", value: "50+" },
    { label: "Success Stories", value: "1,000+" }
  ];

  return (
    <div className=" bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full opacity-30">
          {[...Array(48)].map((_, i) => (
            <div
              key={i}
              className="h-24 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg transform rotate-12"
            ></div>
          ))}
        </div>
      </div>

      {/* Header Section */}
      <div

        className="text-center mb-16 relative"
      >
        <h1 className="text-2xl lg:text-5xl font-bold text-white " data-aos="fade-up">
          <span className="text-white bg-clip-text">
            ANNIE GYM
          </span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full lg:mt-2"></div>
        <p className="text-gray-300 text-sm lg:text-xl max-w-3xl mt-6 mx-auto font-light" data-aos="fade-right">
          Transform your life with premium fitness facilities, expert guidance, and a supportive community
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
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300">
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
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
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

        className="text-center relative mt-16"
      >
        <h3 className="text-xl lg:text-4xl font-bold text-white mb-6" data-aos="fade-left">
          Start Your Fitness Journey Today!
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm" data-aos="fade-right">
          Join now and get 75% off at Gym Services, plus a free personal training session
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <button
            data-aos="fade-up"
            className="bg-gradient-to-r from-red-500 to-red-700 text-white text-sm lg:text-lg font-bold py-2 px-2 lg:py-4 lg:px-8 rounded-full transition-all duration-300"
            onClick={() => navigate(setShowUserForm(true))}
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

export default GymService;