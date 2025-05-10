import { CheckCircle2, Scissors, Users, Heart, Clock, Trophy, ArrowRight, Check, X } from 'lucide-react';
import aarnaSalonBg from '../../assets/images/unisex-salon.jpg';
import haircut from '../../assets/images/salon-category/haircut.jpg'
import haircolor from '../../assets/images/salon-category/Hair-Color.jpg'
import facial from '../../assets/images/salon-category/facial.webp'
import makeup from '../../assets/images/salon-category/makeup.jpg'
import bridal from '../../assets/images/salon-category/bridal.jpeg'
import waxing from '../../assets/images/salon-category/waxing.jpg'
import mobilesalon from '../../assets/images/mobile/mobile-salon.png'
import React, { useState } from 'react';
import MembershipFormPage from '../formpage/MembershipFormPage';

const AarnaSalon = () => {

    const [showUserForm, setshowUserForm] = useState(false);

    const features = [
        { title: "Professional Styling", icon: <Scissors className="w-6 h-6" />, description: "Expert haircuts and styling by trained professionals" },
        { title: "Skincare", icon: <Heart className="w-6 h-6" />, description: "Advanced skincare treatments for all skin types" },
        { title: "Expert Guidance", icon: <Trophy className="w-6 h-6" />, description: "Personalized beauty advice from experienced beauticians" },
        { title: "Affordable Luxury", icon: <Heart className="w-6 h-6" />, description: "Premium services at budget-friendly prices" }
    ];

    const category = [
        { name: 'Haircuts & Styling', image: haircut },
        { name: 'Hair Coloring', image: haircolor },
        { name: 'Facials', image: facial },
        { name: 'Makeup Services', image: makeup },
        { name: 'Bridal Packages', image: bridal },
        { name: 'Waxing & Threading', image: waxing }
    ]

    const services = [
        { name: "Haircuts & Styling", included: true },
        { name: "Hair Coloring", included: true },
        { name: "Facials", included: true },
        { name: "Makeup Services", included: true },
        { name: "Bridal Packages", included: true },
        { name: "Waxing & Threading", included: true }
    ];

    const comparisonData = [
        {
            category: "Membership Offers",
            aarna: [
                "Huge savings on memberships!",
                "All-inclusive beauty services",
                "No hidden costs",
                "Flexible membership plans"
            ],
            others: [
                "Limited or no discounts",
                "Additional fees for premium services",
                "Hidden costs may apply",
                "Rigid pricing structure"
            ]
        },
        {
            category: "Beauty Services",
            aarna: [
                "Comprehensive hair and skin treatments",
                "Professional makeup services",
                "Customized beauty packages",
                "Bridal and pre-bridal services included"
            ],
            others: [
                "Limited service range",
                "Extra charges for specialized treatments",
                "Generic beauty solutions",
                "Expensive bridal packages"
            ]
        },
        {
            category: "Facilities",
            aarna: [
                "Modern, hygienic salon environment",
                "High-end beauty products",
                "Experienced beauticians",
                "Relaxing and comfortable setting"
            ],
            others: [
                "Basic salon setup",
                "Standard product range",
                "Less experienced staff",
                "Minimal customer comfort"
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
                            src={aarnaSalonBg}
                            alt="Salon Background"
                            className="w-full h-full hidden lg:block md:block object-cover"
                        />
                        <img src={mobilesalon} className='w-screen h-screen opacity-60 block md:hidden lg:hidden' />
                    </div>
                    <div className="relative z-10 container mx-auto px-4 h-full flex items-center ml-[450px]">
                        <div className="max-w-3xl">
                            <h1 className="text-2xl lg:text-5xl font-bold mb-6 leading-tight text-center">
                                Welcome to Aarna UniSex<br></br> Salon Beauty Redefined
                                <span className="block text-white"></span>
                            </h1>
                            <p className="lg:text-xl mb-8 text-white text-center">
                                Transform your look with premium beauty services, expert stylists,
                                <br></br>and unbeatable prices.
                            </p><br></br>
                            <div className="space-x-4 ml-48">
                                <button
                                    
                                    onClick={() => setshowUserForm(true)}
                                    className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                                    Join Now for ₹99
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Special Offer Section */}
                <div className="bg-red-500 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl lg:text-4xl font-bold mb-4">Special Offer: 75% OFF</h2>
                        <p className="text-sm lg:text-xl mb-8">Join now for just ₹99 per month!</p>
                        <button
                            onClick={() => setshowUserForm(true)}
                            className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 mx-auto">
                            Claim Offer Now
                            <ArrowRight className="w-5 h-5" />
                        </button>
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
                                            <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                                            <span className='text-md lg:text-lg'>{service.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setshowUserForm(true)}
                                    className="mt-8 bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                                    Start Your Beauty Journey
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-8 lg:py-24 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8 lg:mb-16">Why Choose Aarna Salon?</h2>
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

                {/* Services Section */}
                <div className="py-8 lg:py-24 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-8 lg:mb-16">Our Services</h2>
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
                        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6">Why We're Different</h2>
                        <p className="text-sm lg:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                            Discover how Aarna Salon offers unparalleled beauty services and value.
                        </p>

                        {comparisonData.map((section, index) => (
                            <div key={index} className="mb-16 max-w-7xl mx-auto">
                                <h3 className="text-3xl font-bold mb-8 text-center text-red-500">{section.category}</h3>
                                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                    {/* Aarna Salon Column */}
                                    <div className="bg-gray-900 rounded-lg p-8">
                                        <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                            <span className="text-red-500">Aarna Salon</span>
                                            <div className="h-1 flex-grow bg-red-500/20 rounded"></div>
                                        </div>
                                        <div className="space-y-4">
                                            {section.aarna.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <Check className="text-green-500 w-4 h-4 lg:h-5 lg:w-5 flex-shrink-0" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Other Salons Column */}
                                    <div className="bg-gray-900/50 rounded-lg p-8">
                                        <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                            <span className="text-gray-500">Other Salons</span>
                                            <div className="h-1 flex-grow bg-gray-500/20 rounded"></div>
                                        </div>
                                        <div className="space-y-4">
                                            {section.others.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <X className="text-red-600 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
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
                <div className="bg-black">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-8">Ready to Look Your Best?</h2>
                        <p className="text-sm lg:text-xl text-gray-400 mb-8">Join Aarna Salon today and transform your beauty!</p>
                        <button
                            onClick={() => setshowUserForm(true)}
                            className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                            Join Membership
                        </button>
                    </div>
                </div>
            </div>
            {showUserForm && (
                <div className='text-black'>
                    <MembershipFormPage onClose={() => setshowUserForm(false)} />
                </div>)}
        </>
    );
};

export default AarnaSalon;