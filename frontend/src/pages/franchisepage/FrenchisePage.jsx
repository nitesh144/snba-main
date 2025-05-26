
import React, { useState } from 'react';
import { Phone, Store, Dumbbell, Scissors, UtensilsCrossed, ArrowRight, Check, Building2, TrendingUp, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FranchiseForm from '../../components/form/FrenchiseForm'; // Import the FranchiseForm component

const FranchisePage = () => {
  const [selectedFranchise, setSelectedFranchise] = useState('mart');
  const [hoveredPolicyIndex, setHoveredPolicyIndex] = useState(null);
  const [hoveredBenefitIndex, setHoveredBenefitIndex] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control form visibility
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Established Brand",
      description: "Join a recognized brand with proven success across multiple sectors"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High ROI",
      description: "Benefit from our high-margin business model with quick returns"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Training & Support",
      description: "Comprehensive training and ongoing operational support"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Multiple Revenue Streams",
      description: "Generate income from gym, salon, mart, and food court services"
    }
  ];

  const franchises = {
    mart: {
      title: 'Aarna Mart',
      icon: Store,
      description: 'Join the Aarna Mart family and start your own retail franchise!',
      policies: [
        'Initial Investment for store setup and inventory',
        'One-time franchise fee for branding access',
        'Revenue sharing model',
        'Comprehensive training & support',
        'Marketing resources & branding guidelines',
        'Exclusive territory rights',
        'Ongoing operational support'
      ],
      benefits: [
        'Proven business model',
        'Established brand recognition',
        'Comprehensive training program',
        'Marketing support',
        'Operations manual',
        'Territory protection'
      ]
    },
    gym: {
      title: 'Aarna Gym',
      icon: Dumbbell,
      description: 'Turn your passion for fitness into a business with Aarna Gym franchise!',
      policies: [
        'Initial Investment for gym setup and equipment',
        'One-time franchise fee for brand access',
        'Revenue sharing model',
        'Fitness program training & support',
        'Marketing & advertising campaigns',
        'Exclusive territory rights',
        'Continuous operational guidance'
      ],
      benefits: [
        'Premium equipment packages',
        'Fitness program library',
        'Staff training modules',
        'Digital membership system',
        'Marketing campaigns',
        'Personal training programs'
      ]
    },
    salon: {
      title: 'Aarna Salon',
      icon: Scissors,
      description: 'Build your beauty empire with Aarna Salon franchise!',
      policies: [
        'Initial Investment for salon setup',
        'One-time franchise fee for brand rights',
        'Revenue sharing model',
        'Beauty services training & support',
        'Marketing resources & promotions',
        'Exclusive operational area',
        'Ongoing business support'
      ],
      benefits: [
        'Premium beauty products',
        'Staff training academy',
        'Booking system access',
        'Marketing templates',
        'Seasonal promotions',
        'Service menu updates'
      ]
    },
    foodCourt: {
      title: 'Aarna Food Court',
      icon: UtensilsCrossed,
      description: 'Create a culinary destination with Aarna Food Court franchise!',
      policies: [
        'Initial Investment for food court setup',
        'One-time franchise fee for brand access',
        'Revenue sharing model',
        'Food preparation & service training',
        'Marketing & promotional support',
        'Exclusive territory rights',
        'Continuous operational assistance'
      ],
      benefits: [
        'Recipe database access',
        'Kitchen layout designs',
        'Staff training modules',
        'Quality control system',
        'Vendor relationships',
        'Menu optimization'
      ]
    }
  };

  // Function to open the form
  const openForm = () => {
    setIsFormOpen(true);
  };

  // Function to close the form
  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-900 py-20 " >
        <div className="absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-3xl md:text-5xl mt-10 font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Unlock Your Future with a Proven Franchise Opportunity!
          </h1>
          <p className="text-sm md:text-lg max-w-3xl lg:max-w-7xl mx-auto text-gray-300 text-justify border-2 border-red-500 p-2 rounded-lg">
          At SNBA CONSUMERS, we're not just offering a business opportunity—we're providing a chance to be part of something bigger. With our established and successful franchise model, you're stepping into a world of support, innovation, and unlimited potential. As a franchise provider, we've perfected the formula for success, and now we're inviting investors like you to join our growing network. Our comprehensive training, marketing strategies, and ongoing support will ensure that you have everything you need to thrive. Don't just start a business—become a part of a brand that's changing the game and delivering remarkable returns. The future is waiting—let's build it together!
          </p>
        </div>
      </div>

      {/* Franchise Selection */}
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {Object.entries(franchises).map(([key, value]) => {
            const Icon = value.icon;
            return (
              <button
                key={key}
                className={`p-6 rounded-xl transition-all transform hover:scale-105 ${selectedFranchise === key
                  ? 'bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/20'
                  : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800'
                  }`}
                onClick={() => setSelectedFranchise(key)}
                aria-label={`Select ${value.title} franchise`}
              >
                <Icon className="w-8 h-8 mb-3 mx-auto" />
                <span className="block text-lg font-semibold">{value.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Franchise Details */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {franchises[selectedFranchise].title}
            </h2>
            <p className="text-xl mb-12 text-gray-300">
              {franchises[selectedFranchise].description}
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Policies */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Franchise Policy</h3>
                <div className="space-y-4">
                  {franchises[selectedFranchise].policies.map((policy, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 hover:translate-x-2 transition-transform"
                      onMouseEnter={() => setHoveredPolicyIndex(index)}
                      onMouseLeave={() => setHoveredPolicyIndex(null)}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${hoveredPolicyIndex === index ? 'bg-red-600' : 'bg-gray-700'
                        }`}>
                        {index + 1}
                      </div>
                      <p className="text-gray-300">{policy}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Key Benefits</h3>
                <div className="space-y-4">
                  {franchises[selectedFranchise].benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 hover:translate-x-2 transition-transform"
                      onMouseEnter={() => setHoveredBenefitIndex(index)}
                      onMouseLeave={() => setHoveredBenefitIndex(null)}
                    >
                      <Check className={`w-5 h-5 transition-colors ${hoveredBenefitIndex === index ? 'text-red-500' : 'text-gray-400'
                        }`} />
                      <p className="text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl lg:text-4xl font-bold text-center mb-16"
            >
              Why Choose Aarna Franchise?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md shadow-red-500"
                >
                  <div className="bg-red-600 p-3 rounded-lg inline-block mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h3>
          <p className="text-sm lg:text-xl mb-8 text-gray-300">
            Contact us today to learn more about our franchise opportunities and take the first step towards business ownership
          </p>
          <div className="text-center space-x-5 ">
            <button 
              className="inline-flex items-center space-x-3 px-2 py-2 lg:px-8 lg:py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-sm lg:text-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105"
              onClick={openForm} // Add onClick handler to open the form
            >
              Apply Now<ArrowRight className="w-4 h-4 lg:w-6 lg:h-6 ml-2" />  
            </button>
            <a
              href="tel:7400866821"
              className="inline-flex items-center space-x-3 px-2 py-2 lg:px-8 lg:py-4 m-2 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-sm lg:text-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105"
            >
              {/* <Phone className="w-4 h-4 lg:w-6 lg:h-6" /> */}
              <span>Call Now</span>
              <ArrowRight className="w-4 h-4 lg:w-6 lg:h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Render the FranchiseForm component */}
      <FranchiseForm 
        isOpen={isFormOpen} 
        onClose={closeForm} 
      />
    </div>
  );
};

export default FranchisePage;