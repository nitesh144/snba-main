import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ShoppingCart, Dumbbell, Scissors, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import RegistrationForm from '../form/RegistrationForm';
// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const MembershipPage = () => {

   useEffect(() => {
          AOS.init({
              duration: 800,
              once: false,
              mirror: true,
              offset: 120,
              easing: 'ease-in-out'
          });
      }, []);

  const [activeSection, setActiveSection] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);

  const navigate = useNavigate()

  const services = [
    {

      title: "Annie Mart",
      icon: <ShoppingCart className="w-8 h-8" />,
      discount: "Upto 90% OFF",
      benefits: [
        "Massive Discounts on Groceries",
        "Early Access to Sales",
        "Member-exclusive deals"
      ],
      path: '/annie-mart'
    },
    {

      title: "Annie Gym",
      icon: <Dumbbell className="w-8 h-8" />,
      discount: "75% OFF",
      benefits: [
        "75% Discount on Gym Membership Fees",
        "Free Fitness Consultation",
        "Priority Access to New Classes",
      ],
      path: '/annie-gym'
    },
    {

      title: "Annie Salon",
      icon: <Scissors className="w-8 h-8" />,
      discount: "75% OFF",
      benefits: [
        "75% off on beauty treatments",
        "Free Hair and Skin Consultation",
        "Priority Booking",
      ],
      path: '/annie-salon'
    },

    {
      title: "Annie Food Court",
      icon: <Coffee className="w-8 h-8" />,
      discount: "25% OFF",
      benefits: [
        "25% off on all meals",
        "Exclusive Combo Deals",
        "Birthday Treats"
      ],
      path: '/annie-foodcourt'
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 lg:py-20">
        <h2 data-aos="fade-up"
          className="text-3xl lg:text-5xl font-bold text-center mb-16 "
        >
          Our Premium Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          {services.map((service, index) => (
            <div data-aos="zoom-in"
              id={service.id}
              key={service.title}
              
              className="bg-gray-900 rounded-tl-[15px] cursor-pointer rounded-br-[15px] rounded-tr-[50px] rounded-bl-[50px] p-6 hover:shadow-lg hover:shadow-red-500 transition-all duration-300"
              onClick={() => navigate(service.path)}
            >
              <div className="flex items-center mb-4 ">
                <div className="p-3 bg-red-600 rounded-lg mr-4" data-aos="fade-up-right">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold" data-aos="fade-left">{service.title}</h3>
                  <div className="text-red-500 font-bold" data-aos="fade-right">{service.discount}</div>
                </div>
              </div>
              <ul className="space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    data-aos="fade-down-right"
                    className="flex items-center ml-5"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
              {/* path link */}

            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div
        
        className="bg-gradient-to-r from-red-900/50 to-black py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">Ready to Join?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto px-4" data-aos="fade-left">
          Get exclusive access to all our premium services for just ₹99/month
        </p>
        <button
          data-aos="fade-down-left"
          className="bg-red-600 text-white lg:px-8 lg:py-3 px-2 py-2 rounded-full text-md lg:text-xl font-semibold hover:bg-red-700 transition-colors duration-300"
          onClick={() => setShowUserForm(true)}
        >
          Sign Up Now
        </button>
        <div className="mt-8 text-gray-100" data-aos="fade-left" data-aos-delay="200">
          <p>Contact us: 7400866821</p>
          <p>Email: info@annieconsumers.com</p>
        </div>
      </div>
      <div className='text-black'>
        {showUserForm && <RegistrationForm onClose={() => setShowUserForm(false)} />}

      </div>
    </div>
  );
};

export default MembershipPage;