import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBag, Gift, Award, Clock, ChevronRight, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import RegistrationForm from '../form/RegistrationForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MartService = () => {

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
  const navigate = useNavigate()

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
      description: "Annie Mart Launched a ₹99 per month subscription  unlocks huge savings on home essentials products, letting you shop smart  without compromising on quality!",
      highlightColor: "from-red-500 to-red-600",
      iconBg: "bg-red-500",
      delay: 0
    },
    {
      icon: <Gift size={32} />,
      title: "Massive Discounts",
      description: "Enjoy massive discounts from 10% to 90% on a wide variety of products. Our smart pricing lets you save more on essentials without compromising on quality!",
      highlightColor: "from-red-600 to-red-700",
      iconBg: "bg-red-600",
      delay: 0.2
    },
    {
      icon: <Award size={32} />,
      title: "Quality Products",
      description: "At Annie Mart, quality is our priority. We carefully select fresh, high-quality items to meet your needs, ensuring that you receive only the best products every time you shop with us.",
      highlightColor: "from-red-700 to-red-800",
      iconBg: "bg-red-700",
      delay: 0.4
    },
    {
      icon: <Clock size={32} />,
      title: "Convenient Shopping",
      description: "Annie Mart provides a seamless shopping experience with well-organized aisles, friendly staff, and quick checkout options, making it easy for you to find everything you need, whether in-store or online.",
      highlightColor: "from-red-800 to-red-900",
      iconBg: "bg-red-800",
      delay: 0.6
    }
  ];
  const stats = [
    { label: "Active Members", value: "2,000+" },
    { label: "Orders Delivered", value: "500+" },
    { label: "Variety of Product", value: "100+" },
    { label: "Happy Customers", value: "10,000+" },
  ];

  return (
    <>
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
        <div

          className="text-center mb-16 relative"
        >
          <h1 className="text-2xl lg:text-5xl font-bold text-white " data-aos="fade-up">
            ANNIE MART
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full lg:mt-2"></div>
          <p className="text-gray-400 text-sm lg:text-lg max-w-2xl mt-2 mx-auto" data-aos="fade-right">
            Experience the future of shopping with our innovative features and unbeatable offers
          </p>
        </div>

        <div className="container mx-auto max-w-6xl mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up-right"
                data-aos-delay={200 + (index * 100)}
                className="text-center"
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-500 mb-2">{stat.value}</h3>
                <p className="text-gray-400 ">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-delay={100 + (index * 100)}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-700 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300">
                  {/* Icon Container */}
                  <div className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                    <div

                      className="text-white"
                    >
                      {feature.icon}
                    </div>
                  </div>

                  <h2 className="text-lg lg:text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                    {feature.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-md ">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial section animation */}
          <div className="container mx-auto max-w-4xl mt-16">
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
                <p className="text-gray-300 text-sm lg:text-lg mb-6 italic">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <p className="text-white font-semibold">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-red-500">{testimonials[activeTestimonial].role}</p>
              </div>
            </AnimatePresence>
          </div>;

          {/* CTA Section */}
          <div

            className="text-center relative mt-16"
          >
            <h3 className="text-xl lg:text-4xl font-bold text-white mb-6" data-aos="fade-left">
              Save Big on Groceries Today!
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm" data-aos="fade-right">
              Shop now and enjoy discounts of up to 90% on your favorite products. Don't miss out on these unbeatable deals!
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
        </div>
        <div>
          {showUserForm && <RegistrationForm onClose={() => setShowUserForm(false)} />}
        </div>
      </div>

    </>
  );
};

export default MartService;