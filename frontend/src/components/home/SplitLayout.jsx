import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import lifestyle from '../../assets/images/lifestyle.jpg';
import mart from '../../assets/images/aarnamart1.jpg';
import gym from '../../assets/images/gym.jpg';
import food from '../../assets/images/food.jpg';
import salon from '../../assets/images/salon.jpg';
import { Link, useNavigate } from 'react-router-dom';
import MembershipForm from '../../pages/formpage/MembershipFormPage';

const SplitLayout = () => {

  const [hoveredImage, setHoveredImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const sections = [
    {
      title: 'AARNA UNISEX GYM',
      subtitle: 'Where Wellness Meets Luxury',
      image: gym,
      text: 'Programs. Lessons. Sessions. Workouts. So many wonderful ways to spend time and reach your fitness goals in ultimate comfort.',
      path: "/aarna-gym",
    },
    {
      title: 'AARNA UNISEX SALON',
      subtitle: 'Exceptional Experiences',
      image: salon,
      text: 'Treat yourself to the best at Aarna Salon with our expert hair coloring, relaxing massages, and trendy styling services. We’re here to enhance your beauty and confidence, every step of the way!',
      path: "/aarna-salon",
    },
    {
      title: 'AARNA MART',
      subtitle: 'Curated Collections',
      image: mart,
      text: 'Aarna Mart offers unbeatable variety with fresh groceries, daily essentials, and exclusive discounts. Enjoy shopping with convenience, quality, and amazing savings on every visit!',
      path: "/aarna-mart",
    },
    {
      title: 'AARNA FOODCOURT',
      subtitle: 'Farm to Table Excellence',
      image: food,
      text: 'Enjoy a delicious experience with our wide variety of food, restaurant dishes, and sweets. Whether you are a food lover or someone who enjoys sweets, we have something special for everyone.',
      path: "/aarna-foodcourt",
    },
  ];

  const [showUserForm, setShowUserForm] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrolled = e.target.scrollTop > 50;
      setIsScrolled(scrolled);
    };

    const rightPanel = document.getElementById('rightPanel');
    if (rightPanel) {
      rightPanel.addEventListener('scroll', handleScroll);
      return () => rightPanel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen bg-black lg:py-16 py-10 ">
      {/* Left Side - Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden"
      >
        {/* Hero Image */}
        <div className="absolute inset-0">
          <motion.img
            src={lifestyle}
            alt="Lifestyle"
            className="h-full w-full object-cover overflow-hidden opacity-60"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" /> */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-10 lg:ml-[400px] text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className=" lg:mt-24">
            <h1 className="text-2xl lg:text-5xl font-bold text-white">
              Live Vibrantly
              <br />
              with
              <span className="mt-1 lg:mt-3 ml-26 lg:ml-0 block text-3xl lg:text-5xl bg-red-600 bg-clip-text text-transparent">
                SNBA
                <br />
                Consumers
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-end lg:justify-start"
          >
            <button className="group relative overflow-hidden rounded-lg bg-red-600 px-2 py-2 m-2 lg:px-8 lg:py-4 text-sm lg:text-xl font-bold text-white transition-all duration-300"
            onClick={()=> setShowUserForm(true)} >
              <span className="relative z-10 flex items-center">
                Buy Membership
                <ArrowRight className="ml-2 h-4 lg:h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Scrollable Content */}
      <div 
        id="rightPanel"
        className="w-full lg:w-1/2 h-1/2 lg:h-full overflow-y-auto bg-gradient-to-b from-black to-gray-900 scroll-smooth"
      >
        <div className="max-w-2xl p-6 lg:p-12 space-y-16 lg:space-y-32">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className={`sticky top-0 z-20 border-t-2 border-red-600 pt-4 backdrop-blur-sm transition-all duration-300 ${
              isScrolled ? 'bg-black/70' : 'bg-transparent'
            }`}
          >
            <h2 className="text-sm lg:text-lg font-bold uppercase tracking-wider text-red-600">
              LOVE YOUR LIFE
            </h2>
          </motion.div>

          {/* Content Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group space-y-6 lg:space-y-8"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white transition-colors duration-300 group-hover:text-red-600">
                  {section.title}
                </h2>
                <h3 className="text-xs lg:text-lg font-medium tracking-wider text-white">
                  {section.subtitle}
                </h3>
              </div>
              <p className="text-sm lg:text-lg leading-relaxed text-gray-300">
                {section.text}
              </p>

              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={section.image}
                  alt={section.title}
                  className={`h-full w-full object-cover transition-all duration-700 ${
                    hoveredImage === index
                      ? 'scale-110 brightness-90'
                      : 'scale-100 brightness-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Link to={section.path} className="flex items-center space-x-2 text-white">
                    <span className="text-xs lg:text-sm font-bold">EXPLORE MORE</span>
                    <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {showUserForm && <MembershipForm onClose={() => setShowUserForm(false)} />}
    </div>
  );
};

export default SplitLayout;