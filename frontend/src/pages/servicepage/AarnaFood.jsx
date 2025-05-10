import React, { useState } from 'react';
import {
    ArrowRight,
    CheckCircle2,
    Globe,
    Utensils,
    Smile,
    Users,
    Clock,
    Check,
    X
} from 'lucide-react';
import aarnafood from '../../assets/images/aarna-food.jpg'
import indian from '../../assets/images/food-category/indian-food.jpeg'
import chinese from '../../assets/images/food-category/chinese-food.jpeg'
import continental from '../../assets/images/food-category/continental-food.jpeg'
import streetfood from '../../assets/images/food-category/street-food.jpg'
import vegan from '../../assets/images/food-category/vegan-food.jpeg'
import healthy from '../../assets/images/food-category/healthy-food.jpeg'
import mobilefood from '../../assets/images/mobile/mobile-food.jpg'
import MembershipFormPage from '../formpage/MembershipFormPage';
import { motion } from 'framer-motion';

const AarnaFoodCourt = () => {

    const [showUserForm, setshowUserForm] = useState(false);

    const features = [
        {
            title: "Global Cuisines",
            icon: <Globe className="w-6 h-6" />,
            description: "Explore local and international flavors from our diverse menu"
        },
        {
            title: "Dietary Options",
            icon: <Utensils className="w-6 h-6" />,
            description: "Vegan, vegetarian, and gluten-free choices available"
        },
        {
            title: "Quick Service",
            icon: <Clock className="w-6 h-6" />,
            description: "Fast and convenient meals for busy schedules"
        },
        {
            title: "Mobile Ordering",
            icon: <Users className="w-6 h-6" />,
            description: "Order ahead and skip the wait"
        },

    ];


    const category = [
        { name: 'Indian', image: indian },
        { name: 'Chinese', image: chinese },
        { name: 'Continental', image: continental },
        { name: 'Vegan', image: vegan },
        { name: 'Street Food', image: streetfood },
        { name: 'Healthy Options', image: healthy }
    ]

    const services = [
        { name: "25% OFF Every Order", included: true },
        { name: "Local & International Cuisines", included: true },
        { name: "Vegan & Vegetarian Options", included: true },
        { name: "Mobile Ordering", included: true },
        { name: "Comfortable Dining Space", included: true },
        { name: "Loyalty Points Program", included: true }
    ];

    const comparisonData = [
        {
            category: "Membership",
            aarna: [
                "₹99/month with 25% OFF",
                "All-inclusive food access",
                "No hidden costs",
                "Flexible dining options"
            ],
            others: [
                "No membership discounts",
                "Higher individual meal prices",
                "Limited cuisine variety",
                "Basic dining experience"
            ]
        },
        {
            category: "Food Variety",
            aarna: [
                "Local and international cuisines",
                "Vegetarian & vegan options",
                "Healthy meal choices",
                "Diverse menu selection"
            ],
            others: [
                "Limited food options",
                "Mostly fast food",
                "Few healthy alternatives",
                "Repetitive menu"
            ]
        },
        {
            category: "Dining Experience",
            aarna: [
                "Modern, spacious environment",
                "Quick service",
                "Mobile ordering",
                "Comfortable seating"
            ],
            others: [
                "Crowded spaces",
                "Longer wait times",
                "Limited seating",
                "Basic amenities"
            ]
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-gray-900 text-white">
                {/* Hero Section */}
                <div className="relative h-screen">
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
                        <img
                            src={aarnafood}
                            alt="Food Court Background"
                            className="w-screen h-screen hidden md:block lg:block object-cover"
                        />
                        <img src={mobilefood} className='w-screen h-screen opacity-60 block md:hidden lg:hidden' />
                    </div>
                    <div className="relative z-10 container mx-auto px-4  h-full flex items-center">
                        <div className="max-w-3xl mt-24">
                            <h1 className="text-2xl lg:text-6xl font-bold mb-6 leading-tight">
                                Aarna Food Court
                                <span className="block text-white">Delicious Meals, Unbeatable Savings</span>
                            </h1>
                            <p className="lg:text-xl mb-8 text-white">
                                Experience a diverse culinary journey with 25% OFF on every order for just ₹99/month
                            </p>
                            <div className="space-x-4">
                                <button
                                    className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                                    onClick={() => setshowUserForm(true)}
                                >
                                    Join Now for ₹99
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Special Offer Section */}
                <div className="bg-red-500 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl lg:text-4xl font-bold mb-4">Special Offer: 25% OFF</h2>
                        <p className="text-sm lg:text-xl mb-8">Join now for just ₹99 per month!</p>
                        <motion.button
                        
                            onClick={() => setshowUserForm(true)}
                            className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 mx-auto">
                            Claim Offer Now
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>

                {/* Membership Section */}
                <div className="py-8 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl lg:text-4xl font-bold mb-8 lg:mb-16">Membership Benefits</h2>
                            <div className="bg-gray-800 rounded-lg p-8">
                                <div className="text-3xl font-bold mb-2">₹99/month</div>
                                <div className="text-gray-400 mb-8"> Special Offer</div>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <Check className="text-green-500 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                                            <span className='text-sm lg:text-lg'> {service.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setshowUserForm(true)}
                                    className="mt-8  bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                                    Become a Member
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-8 lg:py-24 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8 lg:mb-16">Why Choose Aarna Food Court?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-gray-900 p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300 shadow-md shadow-red-500">
                                    <div className="text-red-500 mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Cuisine Showcase */}
                <div className=" py-8 lg:py-24 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Our Cuisines</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.map((category, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-lg">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="py-8 lg:py-24 bg-gradient-to-b from-gray-800 to-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">Why We're Different</h2>
                        <p className="text-sm lg:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                            Discover how Aarna Food Court offers a superior dining experience compared to other food courts.
                        </p>

                        {comparisonData.map((section, index) => (
                            <div key={index} className="mb-16 max-w-5xl mx-auto">
                                <h3 className="text-3xl font-bold mb-8 text-center text-red-500">{section.category}</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-gray-900 rounded-lg p-8">
                                        <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                            <span className="text-red-500">Aarna Food Court</span>
                                            <div className="h-1 flex-grow bg-blue-500/20 rounded"></div>
                                        </div>
                                        <div className="space-y-4">
                                            {section.aarna.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gray-900/50 rounded-lg p-8">
                                        <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                            <span className="text-gray-500">Other Food Courts</span>
                                            <div className="h-1 flex-grow bg-gray-500/20 rounded"></div>
                                        </div>
                                        <div className="space-y-4">
                                            {section.others.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <X className="text-red-500 w-5 h-5 flex-shrink-0" />
                                                    <span className="text-gray-400">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className=" bg-black">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Ready to Taste the Difference?</h2>
                        <p className="text-sm lg:text-xl text-gray-400 mb-8">Join Aarna Food Court today and begin your food journey!</p>
                        <button
                            className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                            onClick={() => setshowUserForm(true)}
                        >
                            Join Membership
                        </button>
                    </div>
                </div>
            </div>

            {showUserForm &&
                <div>
                    <MembershipFormPage onClose={()=>{setshowUserForm(false)}} />
                </div>
            }
        </>
    );
};

export default AarnaFoodCourt;