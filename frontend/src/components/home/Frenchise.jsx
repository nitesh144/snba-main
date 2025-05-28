import React from 'react';
import Card from '@/components/ui/card';
import Mart from '../../assets/images/franchise/mart1.jpg';
import Salon from '../../assets/images/franchise/salon.jpg';
import Gym from '../../assets/images/franchise/gym.jpg';
import Food from '../../assets/images/franchise/food.jpg';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
          {/* <button className="bg-red-600 text-white px-8 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
            Apply now
          </button> */}
          <a
              href="tel:7400866821"
              className="inline-flex items-center space-x-3 px-2 py-2 lg:px-8 lg:py-4 m-2 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-sm lg:text-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105"
            >
              {/* <Phone className="w-4 h-4 lg:w-6 lg:h-6" /> */}
              <span className='text-white'>Call Now</span>
              <ArrowRight className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
            </a>
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
                <div className="relative h-80 md:h-[350px]  shadow-red-500 border-2 border-white rounded-tl-[50px] rounded-br-[50px]">
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
                  className="absolute top-0 right-0 bg-red-600 text-white py-1 px-1 block transform skew-x-12 rounded-md">
                    <span className=" text-sm font-bold">
                      {service.title}
                    </span>
                  </motion.div>
                  {/* Discount Badge */}
                  <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay:0.6 }} 
                  className="absolute bottom-0 left-0 bg-red-600 text-white py-1 px-1 transform -skew-x-12 rounded-md ">
                      {/* <span className="text-sm">UPTO</span> */}
                      <span className="lg:text-md font-bold lg:ml-2">{service.discount}</span>
                      <span className="text-sm mr-2 font-bold">OFF</span>
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
