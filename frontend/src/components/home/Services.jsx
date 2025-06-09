import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../constant/service";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ServicesSection = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="py-10 lg:py-16 pb-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-down" data-aos-delay="100">
          <h2

            className="text-2xl md:text-5xl font-bold text-white mb-3"
          >
            Our Services
          </h2>
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
            <div
              custom={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
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
              <div data-aos="fade-up"
                data-aos-delay={index * 150 + 100}
                className="absolute inset-0 flex flex-col justify-center items-center text-center p-3 opacity-100"
              >
                <h3
                  custom={index}
                  data-aos="fade-left"
                  className="text-2xl md:text-2xl lg:text-4xl lg:mb-2 font-bold text-white"
                >
                  {service.title}
                </h3>
                <div className="w-16 h-1 bg-red-600 mx-auto rounded-full mb-3 lg:mb-3" />
                <p className="text-sm md:text-lg lg:px-7 lg:mb-2 text-white" data-aos="fade-right">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
