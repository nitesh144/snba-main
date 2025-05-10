import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import grocery from "../../assets/images/services/supermart.jpg";
import salon from "../../assets/images/services/salon.jpg";
import gym from "../../assets/images/services/fitness.jpg";
import food from "../../assets/images/services/restraunt.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    image: grocery,
    title: "Supermarket",
    description: "Explore a variety of fresh, high-quality grocery items at our store. We take pride in providing a comprehensive selection to fulfill all your daily needs.",
    discount: "Upto 90%",
    link: "/aarna-mart",
  },
  {
    image: gym,
    title: "Fitness Training",
    description: "Transform your fitness journey with our gym services, designed to help you achieve your health goals through expert guidance and top facilities.",
    discount: "Flat 75%",
    link: "/aarna-gym",
  },
  {
    image: salon,
    title: "Personal Grooming",
    description: "Our luxurious salon service enhance your beauty and well-being. Enjoy a range of treatments to help you look and feel your best.",
    discount: "Flat 75%",
    link: "/aarna-salon",
  },
  {
    image: food,
    title: " Restaurant",
    description: "Explore our delicious food, restaurant, and sweet offerings. Whether you're a food lover or a dessert enthusiast, we have something special for everyone!.",
    discount: "Flat 25%",
    link: "/aarna-foodcourt",
  }
];

const ServicesSection = () => {
  return (
    <section className="py-10 lg:py-16 pb-20 lg:pb-20 bg-black ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
          initial={{opacity:0}}
          animate={{opacity:1}}
          className="text-2xl md:text-5xl font-bold text-white mb-3 ">
            Our Services
          </motion.h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-1 bg-red-700 rounded-full mx-2" />
            <div className="w-8 h-1 bg-gray-600 rounded-full mx-2" />
            <div className="w-16 h-1 bg-red-700 rounded-full mx-2" />
          </div>
          <p className="max-w-3xl mx-auto text-sm md:text-xl text-gray-300 mt-2">
            Experience the premium services under one roof with exclusive membership benefits and amazing discounts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 ">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              key={index}
              className="relative group overflow-hidden shadow-lg shadow-red-500 bg-gray-800 hover:shadow-2xl transition duration-500 rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[15px] rounded-br-[15px]"
            >
              {/* Service Image */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-48 md:h-72 lg:h-80 object-cover transition-opacity duration-700"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
              />

              {/* Dark Overlay */}
              <motion.div
                className="absolute inset-0 bg-black transition-opacity duration-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.05 }}
                viewport={{ once: true }}
              ></motion.div>

              {/* Service Details */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center text-center p-2 opacity-0 transition-opacity duration-700"
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay:0.6 }} 
                className="text-xl md:text-2xl lg:text-4xl lg:mb-2 font-bold text-white">
                  {service.title}
                </motion.h3>
                <div className="w-16 h-1 md:h-1 bg-red-600 mx-auto rounded-full mb-1 lg:mb-3" />
                <p className="text-sm md:text-lg lg:text-lg lg:px-7 lg:mb-2 text-white">
                  {service.description}
                </p>

                {/* Discount Badge */}
                <div className="mt-2 flex items-center bg-black/80 px-3 md:py-1 rounded-full ">
                  <span className="font-semibold text-white text-sm md:text-sm lg:text-lg">
                    {service.discount} OFF
                  </span>
                </div>

                {/* Learn More Button */}
                <Link
                  to={service.link}
                  className="mt-2 lg:mt-5 flex items-center text-white hover:text-red-500 font-medium transition-colors duration-300"
                >
                  <span className="text-sm md:text-md lg:text-xl">Learn More</span>
                  <ChevronRight className="h-3 w-3 lg:h-5 lg:w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

