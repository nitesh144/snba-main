import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../constant/service";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.2 + 0.1 },
  }),
};

const ServicesSection = () => {
  return (
    <section className="py-10 lg:py-16 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold text-white mb-3"
          >
            Our Services
          </motion.h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-1 bg-red-700 rounded-full mx-2" />
            <div className="w-8 h-1 bg-gray-600 rounded-full mx-2" />
            <div className="w-16 h-1 bg-red-700 rounded-full mx-2" />
          </div>
          <article className="max-w-3xl mx-auto text-sm md:text-xl text-gray-300 mt-2">
            Experience the premium services under one roof with exclusive membership benefits and amazing discounts.
          </article>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={index}
              className="relative group overflow-hidden shadow-lg shadow-red-500 bg-gray-800 hover:shadow-2xl transition duration-500 rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[15px] rounded-br-[15px] min-h-[240px]"
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 md:h-72 lg:h-80 object-cover opacity-50"
              />

              {/* Optional Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-10"></div>

              {/* Service Details */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center text-center p-3 opacity-100"
              >
                <motion.h3
                  custom={index}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-2xl md:text-2xl lg:text-4xl lg:mb-2 font-bold text-white"
                >
                  {service.title}
                </motion.h3>
                <div className="w-16 h-1 bg-red-600 mx-auto rounded-full mb-3 lg:mb-3" />
                <p className="text-sm md:text-lg lg:px-7 lg:mb-2 text-white">
                  {service.description}
                </p>

                {/* Discount Badge */}
                <div className="mt-2 flex items-center bg-black/80 px-3 md:py-1 rounded-full">
                  <span className="font-semibold text-white text-sm lg:text-lg">
                    {service.discount} OFF
                  </span>
                </div>

                {/* Learn More Button */}
                <Link
                  to={service.link}
                  className="mt-3 lg:mt-5 flex items-center text-white hover:text-red-500 font-medium transition-colors duration-300"
                >
                  <span className="text-lg lg:text-xl">Learn More</span>
                  <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
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
