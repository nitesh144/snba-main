import React from 'react';
import Card from '@/components/ui/card';
import Mart from '../../assets/images/franchise/mart1.jpg';
import Salon from '../../assets/images/franchise/salon.jpg';
import Gym from '../../assets/images/franchise/gym.jpg';
import Food from '../../assets/images/franchise/food.jpg';
import { motion } from 'framer-motion';

const Header = () => {
  const services = [
    {
      title: "AARNA MART",
      discount: "UPTO 90%",
      image: Mart,
    },
    {
      title: "AARNA UNISEX SALON",
      discount: "FLAT 75%",
      image: Salon,
    },
    {
      title: "AARNA GYM",
      discount: "FLAT 75%",
      image: Gym,
    },
    {
      title: "AARNA FOOD COURT",
      discount: "FLAT 25%",
      image: Food,
    }
  ];

  return (
    <section className="py-1 lg:py-1 bg-black ">
      <div className="max-w-7xl mx-auto px-4 m-5 sm:px-6 lg:px-8">
        <div className="text-center py-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Become a Partner with</h1>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600">SNBA Consumers</h2>
          </div>
          <button className="bg-red-600 text-white px-8 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
            Apply now
          </button>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              // initial={{ opacity: 0, x: 100 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index} className="relative group mt-5">
              <Card className={`overflow-hidden transition-transform duration-300 group-hover:scale-105`}>
                {/* Service Image */}
                <div className="relative h-72 md:h-[350px]  shadow-red-500 border-2 border-white rounded-tl-[50px] rounded-br-[50px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-br-[50px] rounded-tl-[50px]"
                  />
                  {/* Red Banner with Title */}
                  <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay:0.5}}
                  className="absolute top-1 left-2 bg-red-600 text-white py-2 px-4 block transform skew-x-12 rounded-md rounded-tl-[30px] rounded-br-[30px]">
                    <span className=" text-sm font-bold">
                      {service.title}
                    </span>
                  </motion.div>
                  {/* Discount Badge */}
                  <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay:0.6 }} 
                  className="absolute bottom-1 right-2 bg-red-600 text-white py-1 px-2 transform -skew-x-12 rounded-md rounded-tl-[30px] rounded-br-[30px]">
                      {/* <span className="text-sm">UPTO</span> */}
                      <span className="text-2xl font-bold ml-2">{service.discount}</span>
                      <span className="text-sm ml-1">OFF</span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
