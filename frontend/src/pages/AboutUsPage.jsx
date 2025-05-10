
import React, { useState } from 'react';
import { ArrowRight, Target, Users, TrendingUp, Building, Heart, ShoppingCart, Dumbbell, Scissors, UtensilsCrossed } from 'lucide-react'
import about from '../assets/images/about.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const gridContainerVariants={
  hidden:{opacity: 0},
  show:{opacity:1,
    transition:{staggerChildren:0.25},
  },
}

const gridSquareVariants={
  hidden:{opacity:0},
  show:{opacity:1},
}

const AboutUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const segments = [
    { title: 'Supermart', description: 'by product on mart', icon: <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-red-500', path: "/aarna-mart" },
    { title: 'Gym', description: 'enhance the fitness', icon: <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-red-600', path: "/aarna-gym" },
    { title: 'Salon', description: 'salon and spa', icon: <Scissors className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-red-700', path: "/aarna-salon" },
    { title: 'Food Court', description: 'foodcourt', icon: <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'from-red-800', path: "/aarna-foodcourt" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Hero Section */}
      <div
        className="relative h-[400px] sm:h-[500px] md:h-[550px] flex items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="absolute inset-0 bg-red-900/20" />
        {/* <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_70%)]" />
        </div> */}
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text">
              SNBA Consumers
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-8 text-white">
              Revolutionizing Convenience and Savings
            </p>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <p className="text-sm p-1 lg:p-5 md:text-lg lg:text-xl text-white m-6 lg:max-w-7xl lg:mx-auto border-2 border-red-600 rounded-lg text-justify">
        At SNBA Consumers, we are committed to providing an innovative and highly rewarding business model that offers unparalleled benefits to both franchisees and consumers alike. Our business is built around the idea of creating value for everyone in the ecosystem, whether you're a consumer seeking substantial savings or a franchisee looking for a profitable and scalable opportunity. Through our smartly designed franchise system, we deliver on our promise to provide more profit with less investment.
      </p>

      {/* Enhanced Vision Section */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent rounded-xl md:rounded-2xl" />
          <div className="relative bg-gradient-to-tr from-black/60 to-red-600 p-6 sm:p-8 md:p-12 rounded-xl md:rounded-2xl border border-red-500/20 backdrop-blur-sm">
            <h2 className="text-lg sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <span>Our Vision: Empowering Consumers, Enriching Lives</span>
            </h2>
            <p className="text-sm md:text-lg lg:text-xl leading-relaxed text-gray-300 text-justify">
              We understand the dynamic needs of today’s consumers and the evolving market trends that demand convenience, affordability, and quality. With this in mind, our vision is to create a multi-segment, integrated ecosystem that offers a wide range of essential services in one membership, making life easier and more affordable for everyone. From fitness enthusiasts to food lovers, beauty seekers to everyday shoppers, SNBA is designed to cater to all aspects of daily life.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Business Model Section */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 border-2 border-red-500 rounded-lg">
        <h2 className="text-lg sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Our Franchise Business Model: A Win-Win Opportunity
        </h2>
        <p className='text-sm md:text-lg lg:text-xl mb-8 sm:mb-12 text-justify max-w-5xl mx-auto'>
          One of the key pillars of SNBA Consumers is our unique franchise business model. Whether you are an aspiring entrepreneur or an established business owner, our franchise model provides a fantastic opportunity to grow your business with minimal risk and investment. By partnering with us, you get access to a ready-made business blueprint that allows you to tap into four lucrative consumer segments:
        </p>
        <div 
        variants={gridContainerVariants} 
        initial="hidden"
        animate='show'
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 m-10">
          {segments.map((segment, index) => (
            <motion.a
              key={segment.title}
              href={segment.path}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${segment.color} to-red-600 opacity-90 
                group-hover:opacity-20 transition-opacity duration-500 rounded-lg md:rounded-xl`} />
              <div className="relative bg-gradient-to-b from-red-900/10 to-black/80 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl 
                border border-red-500/10 group-hover:border-red-500/30 transition-all duration-500
                transform group-hover:-translate-y-1 md:group-hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent 
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                {segment.icon}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2 sm:mt-4 mb-1 sm:mb-3">{segment.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {segment.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
        <p className='p-4 sm:p-5 text-sm sm:text-base md:text-lg lg:text-xl py-6 sm:py-8 md:py-10 max-w-5xl mx-auto text-justify'>
          We’ve streamlined the business process to ensure that our franchisees can focus on growth while we take care of the heavy lifting in terms of support, training, and marketing. Through our tried-and-tested business model, franchisees benefit from a consistent stream of revenue across different sectors, ensuring resilience in any market condition.
        </p>
      </div>

      {/* Enhanced Membership Section */}
      <div className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black" />
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
            <span>Consumer-Centric Membership</span>
          </h2>
          <div className="bg-black/70 p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl md:rounded-2xl border border-red-500/20 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
              <span className="text-red-500">99 Rupees</span> Monthly Membership Plan
            </h3>
            <p className='py-4 sm:py-6 md:py-8 text-sm md:text-lg lg:text-xl text-justify max-w-5xl mx-auto'>
              At the heart of our business model is our only 99 Rupees Monthly Membership Plan. This plan is designed to give consumers an unbeatable combination of convenience and value. For a nominal monthly fee, members gain access to discounts across all four segments, offering them unbeatable savings on a wide range of services. Here's how the membership works:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { title: 'Supermart', discount: 'Upto 90% OFF', desc: 'On grocery items and daily essentials' },
                { title: 'Gym', discount: '75% OFF', desc: 'On gym memberships and services' },
                { title: 'Salon', discount: '75% OFF', desc: 'On salon treatments' },
                { title: 'Food Court', discount: '25% OFF', desc: 'At our food court' }
              ].map((item) => (
                <div key={item.title}
                  className="relative group p-4 sm:p-6 md:p-8 bg-gradient-to-br from-red-800 to-gray-800 rounded-lg md:rounded-xl
                    border border-red-500/10 hover:border-red-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-500/0 
                    group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-500 rounded-lg md:rounded-xl" />
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{item.title}</h4>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500 mb-2 sm:mb-3">{item.discount}</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Why Choose Us Section */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Why Choose SNBA?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 m-8">
          {[
            {
              title: "Massive Savings",
              icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-500" />,
              description: "Our members enjoy some of the best discounts in the market. The value you get from our membership far exceeds the cost, making it an investment that pays off every month."
            },
            {
              title: "Diverse Offerings",
              icon: <Building className="w-12 h-12 text-red-500" />,
              description: "From a supermart that saves you time and money to a state-of-the-art gym, a premium salon, and a variety of food options, SNBA is a one-stop solution for all your needs."
            },
            {
              title: "Community Focus",
              icon: <Heart className="w-12 h-12 text-red-500" />,
              description: " SNBA is not just a business; it’s about creating a community where consumers and franchisees thrive together. We’re building lasting relationships that benefit everyone involved."
            }

          ].map((feature) => (
            <div key={feature.title}
              className="group p-4 sm:p-6 md:p-8 bg-gradient-to-br from-red-900/50 to-black rounded-lg md:rounded-xl
                border border-red-500/10 hover:border-red-500/30 transition-all duration-500
                transform hover:-translate-y-1 md:hover:-translate-y-2 shadow-md shadow-red-500 ">
              <div className="mb-4 sm:mb-6 transform group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm md:text-md lg:text-md text-justify text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Call to Action */}
      <div className="relative py-12 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-black" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
            Join Us in Our Journey
          </h2>
          <p className="text-sm md:text-lg mb-6 sm:mb-8 lg:text-xl text-gray-300 text-justify max-w-5xl mx-auto">
            At the heart of our business model is our 99 Rupees only Monthly Membership Plan. This plan is designed to give consumers an unbeatable combination of convenience and value. For a nominal monthly fee, members gain access to discounts across all four segments, offering them unbeatable savings on a wide range of services. Here's how the membership works:
          </p>
          <Link to='/contact-us'>
            <button className="bg-red-600 text-white px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 rounded-lg md:rounded-xl flex items-center mx-auto
            hover:bg-red-700 transition-colors duration-300 text-sm sm:text-base md:text-lg font-semibold
            hover:shadow-md md:hover:shadow-lg hover:shadow-red-600/30">
              Contact Us <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;