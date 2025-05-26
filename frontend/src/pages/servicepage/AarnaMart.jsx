import React, { useState } from 'react';
import { ShoppingCart, Package, Award, Truck, Clock, Shield, ArrowRight, Check, X } from 'lucide-react';

import mart from '../../assets/images/martbanner.jpg'
import skincare from '../../assets/images/mart-category/personal-care.jpg'
import grocery from '../../assets/images/mart-category/grocery.jpg'
import beverages from '../../assets/images/mart-category/beverages.webp'
import dairyproduct from '../../assets/images/mart-category/dairy-products.jpg'
import freshproduct from '../../assets/images/mart-category/fresh-product.png'
import homeessential from '../../assets/images/mart-category/home-essential.webp'
import mobilemart from '../../assets/images/mobile/mart.jpg'
import { Link, useNavigate } from 'react-router-dom';
import MembershipForm from '../formpage/MembershipFormPage';

const AarnaMart = () => {

    //call to action for mart
    const [showUserForm, setshowUserForm] = useState(false);

    const features = [
        { title: "Wide Selection", icon: <ShoppingCart className="w-10 h-10 b" />, description: "Our store offers an extensive range of products, find everything you need under one roof. From household essentials to specialty items, you can browse through a variety of categories." },
        { title: "Premium Quality", icon: <Award className="w-10 h-10" />, description: "We pride ourselves on offering only the finest products from top brands. Our carefully curated selection ensures that you get the freshest items, all of which meet high standards of quality." },
        { title: "Fast Delivery", icon: <Truck className="w-10 h-10" />, description: "Enjoy peace of mind knowing that your orders will be delivered promptly and reliably. We work with trusted couriers to ensure that your items reach you as quickly as possible." },
        { title: "Bulk Discounts", icon: <Package className="w-10 h-10" />, description: "Take advantage of our exclusive bulk purchase discounts! Whether you're buying for a business, a large family, or stocking up for future use, you'll save significantly when you buy in bulk." }
    ];

    const navigate = useNavigate()

    const categories = [
        { name: "Fresh Produce", image: freshproduct },
        { name: "Groceries & Staples", image: grocery },
        { name: "Beverages & Snacks", image: beverages },
        { name: "Dairy & Frozen", image: dairyproduct },
        { name: "Personal Care", image: skincare },
        { name: "Household Essentials", image: homeessential },
    ];

    const premiumBenefits = [
        { name: "Upto 90% OFF on all items", included: true },
        { name: "Priority Delivery", included: true },
        { name: "Early Access to Deals", included: true },
        { name: "Premium Customer Support", included: true },
        { name: "Exclusive Member Events", included: true },
        { name: "Special Seasonal Offers", included: true }
    ];

    const comparisonData = [
        {
            category: "Membership Benefits",
            aarna: [
                "Huge savings Get upto 90% off",
                "No hidden costs",
                "Flexible shopping plans"
            ],

            others: [
                "Limited or no discounts",
                "Hidden costs may apply",
                "Rigid membership structure"
            ]
        },
        {
            category: "Shopping Experience",
            aarna: [
                "Wide product selection",
                "Premium quality assured",
                "Doorstep delivery included"
            ],
            others: [
                "Limited product range",
                "Varying product quality",
                "Delivery charges extra"
            ]
        },
        {
            category: "Exclusive Features",
            aarna: [

                "Priority customer service",
                "Member-only events",
                "Bulk purchase discounts"
            ],
            others: [

                "Regular customer service",
                "No exclusive events",
                "Limited bulk discounts"
            ]
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-black text-white overflow-hidden">
                {/* Hero Section */}
                {/* <div className="relative h-screen">
                    <div className=" inset-0 bg-gradient-to-r from-black to-transparent">
                        <img
                            src={mart}
                            alt="Mart Background"
                            className="w-screen h-screen object-fill overflow-hidden  hidden md:block lg:block xl:block opacity-70"
                        />
                        <img src={mobilemart} className='w-screen  block md:hidden lg:hidden' />
                        
                    </div>
                    <div className=" z-10 container max-w-3x mx-auto px-4 lg:flex lg:items-center">
                        <div className=" mx-auto pt-8 lg:mt-72">
                            <h1 className="text-2xl lg:text-5xl font-bold mb-6">
                                Welcome to <span className='text-red-600 '>Aarna Mart</span>
                                <span className="block text-white">Your Premium Shopping Destination</span>
                            </h1>
                            <p className="lg:text-xl mb-8 text-white">
                                Experience premium shopping with incredible discounts, wide selection, and exceptional service.
                            </p>
                            <div className="space-x-4">
                                <button
                                    className="bg-red-600 text-white text-sm md:text-md lg:text-lg px-2 py-2 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                                    onClick={() => setshowUserForm(true)}>
                                    Join Now for ₹99
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="relative h-screen overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={mart}
                            alt="Mart Background"
                            className="hidden md:block w-full h-full object-cover opacity-90"
                        />
                        <img
                            src={mobilemart}
                            alt="Aarna Mart Mobile"
                            className="block md:hidden h-screen w-screen object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col lg:flex-row container px-4">
                        <div className="mt-[150px] lg:mt-56 text-left lg:ml-32 lg:text-left lg:max-w-xl">
                            <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-white ">
                                Welcome to <br /> <span className="text-red-600 text-3xl text-outline-white lg:text-5xl ">Aarna Mart</span>
                                <span className="block">Your Premium Shopping Destination</span>
                            </h1>
                            {/* <p className="lg:text-xl mb-8 text-white">
                                Experience premium shopping with incredible discounts, wide selection, and exceptional service.
                            </p> */}
                            <div className="space-x-4">
                                <button
                                    className="bg-red-600 text-white text-sm md:text-md lg:text-lg px-4 py-2 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
                                    onClick={() => setshowUserForm(true)}
                                >
                                    Join Now for ₹99
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Premium Membership Section */}
                <div className="py-8 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 lg:mb-16"> Membership Benefits</h2>
                            <div className="bg-gray-800 rounded-lg p-8">
                                <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">₹99/month</div>
                                <div className="text-gray-400 mb-8"> Special Offer</div>
                                <div className="space-y-4">
                                    {premiumBenefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <Check className="text-green-500 w-3 h-3 lg:w-5 lg:h-5 flex-shrink-0" />
                                            <span className='text-sm lg:text-lg'>{benefit.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setshowUserForm(true)}
                                    className="mt-8 text-sm lg:text-xl bg-red-500 text-white px-2 py-2 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                                    Become a Member
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Features Section */}
                <div className="py-10 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8 lg:mb-16">Why Choose Aarna Mart?</h2>
                        <div className="grid grid-cols-1  lg:max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-gray-900 p-5 lg:p-9 rounded-lg hover:transform hover:scale-105 transition-transform duration-300 shadow-md shadow-red-500">
                                    <div className="text-red-500 mb-2 ">{feature.icon}</div>
                                    <h3 className="text-lg lg:text-2xl font-semibold mb-4">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm lg:text-md text-justify">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="py-10 lg:py-6 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl lg:text-4xl font-bold text-center  mb-8 lg:mb-16">Explore Our Categories</h2>
                        <div className="grid grid-cols-2 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categories.map((category, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-lg">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
                                    <div className="absolute bottom-0 left-0 p-2">
                                        <h3 className="text-md md:text-xl lg:text-2xl font-bold ">{category.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="py-8 lg:py-24 bg-gradient-to-b from-gray-800 to-black">
                    <div className="container mx-auto px-4 max-w-5xl ">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">Why We're Different !</h2>
                        <p className="text-sm lg:text-xl text-gray-400 text-center mb-8 lg:mb-16 max-w-3xl mx-auto">
                            See how Aarna Mart stands out from the competition with our comprehensive offerings and member-first approach.
                        </p>

                        {comparisonData.map((section, index) => (
                            <div key={index} className="mb-8">
                                <h3 className="text-2xl font-bold mb-8 text-center text-red-500">{section.category}</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-black border border-gray-800 rounded-lg p-8">
                                        <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                            <span className="text-red-500">Aarna Mart</span>
                                            <div className="h-1 flex-grow bg-red-500/20 rounded"></div>
                                        </div>
                                        <div className="space-y-4">
                                            {section.aarna.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <Check className="text-green-500 h-4 w-4 lg:w-5 lg:h-5 flex-shrink-0" />
                                                    <span className="text-gray-300 text-sm md:text-md lg:text-lg">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-black border border-gray-800 rounded-lg p-8">
                                        <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                            <span className="text-gray-500 text-lg">Other Marts</span>
                                            <div className="h-1 flex-grow bg-gray-500/20 rounded"></div>
                                        </div>
                                        <div className="space-y-4">
                                            {section.others.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <X className="text-red-500 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                                                    <span className="text-gray-400 text-sm md:text-md lg:text-lg">{feature}</span>
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
                <div className="py-0 bg-black mb-8">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Start Shopping Smarter Today</h2>
                        <p className="text-sm md:text-emerald-50 lg:text-xl text-gray-400 mb-8">Join Aarna Mart and transform your shopping experience!</p>
                        <button
                            onClick={() => setshowUserForm(true)}
                            className="bg-red-500 text-white text-sm md:text-md lg:text-lg px-2 py-2 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                            Join Membership
                        </button>
                    </div>
                </div>

            </div>
            {showUserForm && (
                <div className='text-black'>
                    <MembershipForm onClose={() => setshowUserForm(false)} />
                </div>)}

        </>
    );
};

export default AarnaMart;