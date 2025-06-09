import React, { useEffect } from 'react';
import Card from '@/components/ui/card';
import Mart from '../../assets/images/franchise/mart1.jpg';
import Salon from '../../assets/images/franchise/salon.jpg';
import Gym from '../../assets/images/franchise/gym.jpg';
import Food from '../../assets/images/franchise/food.jpg';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
          easing: 'ease-in-out',
        });
      }, []);

  const services = [
    {
      title: "ANNIE MART",
      discount: "UPTO 90%",
      image: Mart,
    },
    {
      title: "ANNIE UNISEX SALON",
      discount: "FLAT 75%",
      image: Salon,
    },
    {
      title: "ANNIE GYM",
      discount: "FLAT 75%",
      image: Gym,
    },
    {
      title: "ANNIE FOOD COURT",
      discount: "FLAT 25%",
      image: Food,
    }
  ];

  return (
    <section className="py-1 lg:py-1 bg-black ">
      <div className="max-w-7xl mx-auto px-4 m-5 sm:px-6 lg:px-8">
        <div className="text-center py-2" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Become a Partner with</h1>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600">Annie Consumers</h2>
          </div>
          <a data-aos="fade-left" data-aos-delay="100"
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
            <div
              data-aos="slide-right"
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
                  <div
                  data-aos="fade-up" data-aos-delay="200"
                  className="absolute top-0 right-0 bg-red-600 text-white py-1 px-1 block transform skew-x-12 rounded-md">
                    <span className=" text-sm font-bold">
                      {service.title}
                    </span>
                  </div>
                  {/* Discount Badge */}
                  <div
                  data-aos="fade-right" data-aos-delay="100"
                  className="absolute bottom-0 left-0 bg-red-600 text-white py-1 px-1 transform -skew-x-12 rounded-md ">
                      {/* <span className="text-sm">UPTO</span> */}
                      <span className="lg:text-md font-bold lg:ml-2">{service.discount}</span>
                      <span className="text-sm mr-2 font-bold">OFF</span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
