import React, { useEffect } from 'react';
import { ArrowRight, Target, Users, TrendingUp, Building, Heart, ShoppingCart, Dumbbell, Scissors, UtensilsCrossed } from 'lucide-react';
import about from '../assets/images/annie-about.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const segments = [
    { title: 'Supermart', description: 'Buy products on mart', icon: <ShoppingCart className="w-8 h-8" />, path: "/annie-mart" },
    { title: 'Gym', description: 'Enhance your fitness', icon: <Dumbbell className="w-8 h-8" />, path: "/annie-gym" },
    { title: 'Salon', description: 'Salon and spa services', icon: <Scissors className="w-8 h-8" />, path: "/annie-salon" },
    { title: 'Food Court', description: 'Dining options', icon: <UtensilsCrossed className="w-8 h-8" />, path: "/annie-foodcourt" },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full ">
              <div className="rounded-lg overflow-hidden ml-5 mt-16" data-aos="zoom-in">
                <img
                  src={about}
                  alt="Annie Consumers"
                  className=" h-[250px] w-[350px] lg:w-[600px] lg:h-[450px] object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full space-y-6 mt-5 ">
              <h1 className="text-3xl font-bold text-white m-5" data-aos="fade-up">
                About <span className="text-red-500">Us</span>
              </h1>

              <h2 className="text-2xl font-bold text-white m-5" data-aos="fade-left">
                Revolutionizing Convenience and Savings
              </h2>

              <p className="text-gray-300 text-sm lg:text-lg m-5 text-justify" data-aos="fade-right" data-aos-delay="100">
                At Annie Consumers, we are committed to providing an innovative and highly rewarding business model that offers unparalleled benefits to both franchisees and consumers alike. Our business is built around the idea of creating value for everyone in the ecosystem, whether you're a consumer seeking substantial savings or a franchisee looking for a profitable and scalable opportunity. Through our smartly designed franchise system, we deliver on our promise to provide more profit with less investment.
              </p>

              <div className="flex items-center" data-aos="fade-down">
                <div className="h-px w-12 bg-red-500 ml-5"></div>
                <span className="ml-10 text-red-400 font-medium">Discover Our Story</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gradient-to-r from-red-900/20 to-black py-5 ">
        <div className="container mx-auto  lg:max-w-7xl" data-aos="fade-up" >
          <div className="bg-black border border-red-500/20 rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-10 h-10 text-red-500" />
              <h2 className="text-lg lg:text-2xl md:text-3xl font-bold">Our Vision: Empowering Consumers, Enriching Lives</h2>
            </div>
            <p className="text-gray-300">
              We understand the dynamic needs of today's consumers and the evolving market trends that demand convenience, affordability, and quality. With this in mind, our vision is to create a multi-segment, integrated ecosystem that offers a wide range of essential services in one membership, making life easier and more affordable for everyone. From fitness enthusiasts to food lovers, beauty seekers to everyday shoppers, Annie is designed to cater to all aspects of daily life.
            </p>
          </div>
        </div>
      </div>

      {/* Business Model Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Franchise Business Model
          </h2>
          <p className="text-gray-300 mb-10 text-center max-w-3xl mx-auto">
            One of the key pillars of Annie Consumers is our unique franchise business model. Whether you are an aspiring entrepreneur or an established business owner, our franchise model provides a fantastic opportunity to grow your business with minimal risk and investment.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          >
            {segments.map((segment) => (
              <Link
                key={segment.title}
                to={segment.path}
                className="bg-gradient-to-b from-black to-red-900/30 border border-gray-500 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-md hover:shadow-red-600/10 group text-center"
                data-aos="flip-up"
                data-aos-delay="200"
              >
                <div className="text-red-500 mb-4 flex items-center justify-center">{segment.icon}</div>
                <h3 className="text-xl font-bold mb-2">{segment.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {segment.description}
                </p>
              </Link>
            ))}
          </div>

          <p className="text-gray-300 text-sm lg:text-lg" data-aos="fade-in">
            We've streamlined the business process to ensure that our franchisees can focus on growth while we take care of the heavy lifting in terms of support, training, and marketing. Through our tried-and-tested business model, franchisees benefit from a consistent stream of revenue across different sectors, ensuring resilience in any market condition.
          </p>
        </div>
      </div>

      {/* Membership Section */}
      <div className="bg-gradient-to-b from-red-900/20 to-black py-16">
        <div className="container mx-auto px-4 lg:max-w-7xl">
          <div className="flex items-center justify-center mb-8 gap-5" data-aos="fade-down">
            <Users className="w-8 h-8 text-red-500" />
            <h2 className="text-xl lg:text-3xl font-bold text-center">Consumer-Centric Membership</h2>
          </div>

          <div className="bg-black/70 border border-red-500/20 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center" data-aos="fade-right">
              <span className="text-red-500">99 Rupees</span> Monthly Membership Plan
            </h3>
            <p className="text-gray-300 mb-8 text-sm lg:text-xl " data-aos="fade-left">
              At the heart of our business model is our only 99 Rupees Monthly Membership Plan. This plan is designed to give consumers an unbeatable combination of convenience and value. For a nominal monthly fee, members gain access to discounts across all four segments, offering them unbeatable savings on a wide range of services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: 'Supermart', discount: 'Upto 90% OFF', desc: 'On grocery items and daily essentials' },
                { title: 'Gym', discount: '75% OFF', desc: 'On gym memberships and services' },
                { title: 'Salon', discount: '75% OFF', desc: 'On salon treatments' },
                { title: 'Food Court', discount: '25% OFF', desc: 'At our food court' }
              ].map((item) => (
                <div key={item.title} className="bg-gradient-to-b from-red-900/30 to-black border border-red-500/10 rounded-lg p-6 hover:border-red-500/30 transition-all"
                data-aos="flip-up" >
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-2xl font-bold text-red-500 mb-2">{item.discount}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up-right">Why Choose Annie?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Massive Savings",
                icon: <TrendingUp className="w-10 h-10 text-red-500" />,
                description: "Our members enjoy some of the best discounts in the market. The value you get from our membership far exceeds the cost, making it an investment that pays off every month."
              },
              {
                title: "Diverse Offerings",
                icon: <Building className="w-10 h-10 text-red-500" />,
                description: "From a supermart that saves you time and money to a state-of-the-art gym, a premium salon, and a variety of food options, Annie is a one-stop solution for all your needs."
              },
              {
                title: "Community Focus",
                icon: <Heart className="w-10 h-10 text-red-500" />,
                description: "Annie is not just a business; it's about creating a community where consumers and franchisees thrive together. We're building lasting relationships that benefit everyone involved."
              }
            ].map((feature) => (
              <div data-aos="slide-left"
            data-aos-delay="200" 
               key={feature.title} className="bg-black border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all hover:shadow-md hover:shadow-red-600/10">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-b from-red-900/20 to-black py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-left">
            Join Us in Our Journey
          </h2>
          <p className="text-gray-300 mb-8" data-aos="fade-right">
            At the heart of our business model is our 99 Rupees only Monthly Membership Plan. This plan is designed to give consumers an unbeatable combination of convenience and value. For a nominal monthly fee, members gain access to discounts across all four segments, offering them unbeatable savings on a wide range of services.
          </p>
          <Link to='/contact-us'>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg flex items-center mx-auto transition-colors duration-300 font-medium" data-aos="fade-down-left">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;