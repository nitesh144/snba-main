
import React from "react";
import { ShieldCheck, Users, Zap, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

const fadeUpItem = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Diverse Range of Services",
      description:
        "From supermarkets and restaurants to salons and gyms, Aarna Groups brings multiple essential services under one roof, ensuring convenience and quality in every experience.",
      icon: ShieldCheck,
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Your satisfaction is our priority. We take pride in providing the best possible service with dedicated before and after-sales support.",
      icon: Users,
    },
    {
      title: "Unmatched Quality & Customer Satisfaction",
      description:
        "We prioritize customer satisfaction by offering premium services, top-quality products, and a seamless experience across all our businesses.",
      icon: Zap,
    },
    {
      title: "Exclusive Discounts & Membership Benefits",
      description:
        "Enjoy exciting discounts ranging from 10% to 90% across various services, making luxury and comfort accessible to everyone.",
      icon: BadgeDollarSign,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 top-0 w-1/2 h-1/2 bg-red-600/10 rounded-full " />
        <div className="absolute -left-1/4 bottom-0 w-1/2 h-1/2 bg-red-600/10 rounded-full " />
        <div className="absolute left-1/2 top-1/4 w-1/3 h-1/3 bg-red-600/5 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Why Choose <span className="text-red-500">Us</span>
          </motion.h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-1 bg-gray-700 rounded-full mx-2" />
            <div className="w-24 h-1 bg-red-600 rounded-full mx-2" />
            <div className="w-16 h-1 bg-gray-700 rounded-full mx-2" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
            Experience excellence across our services with benefits that set us apart
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUpItem}
                key={index}
                className={`group transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg
                  ${isEven ? "hover:shadow-red-600" : "hover:shadow-red-500"}`}
              >
                <div className="bg-gray-900 backdrop-blur-sm rounded-xl p-6 h-full border border-gray-800 hover:border-red-900/50 transition-colors duration-300">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className={`flex items-center justify-center w-16 h-16 rounded-lg 
                        ${isEven ? "bg-gradient-to-br from-red-600 to-red-800" : "bg-gradient-to-br from-red-500 to-red-700"}
                        shadow-md shadow-white transform group-hover:rotate-6 transition-transform duration-300`}>
                        <feature.icon size={28} className="text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-sm md:text-base flex-grow">
                      {feature.description}
                    </p>

                    <div className="mt-4 h-1 w-12 bg-red-600 rounded-full opacity-70 group-hover:w-24 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;