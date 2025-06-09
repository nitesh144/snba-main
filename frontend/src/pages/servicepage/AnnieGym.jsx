
import anniegym from '../../assets/images/gym-ban.jpg';
import cardio from '../../assets/images/gym-category/cardio.png';
import hiit from '../../assets/images/gym-category/HIIT.jpg';
import yoga from '../../assets/images/gym-category/yoga.jpg';
import pilates from '../../assets/images/gym-category/pilates.jpg';
import strengthtraining from '../../assets/images/gym-category/strength-training.jpg';
import zumba from '../../assets/images/gym-category/zumba.jpg';
import mobilegym from '../../assets/images/mobile/mobile-gym.png';
import { Dumbbell, Users, Clock, Award, Heart, Zap, Shield, Target, Check, X } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import RegistrationForm from '../../components/form/RegistrationForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnnieGym = () => {

     useEffect(() => {
            AOS.init({
                duration: 800,
                once: false,
                mirror: true,
                offset: 120,
                easing: 'ease-in-out'
            });
        }, []);

    const [showUserForm, setShowUserForm] = useState(false);

    const [visibleItems, setVisibleItems] = useState(new Set());
    const [hoveredItem, setHoveredItem] = useState(null);
    const sectionRef = useRef(null);

    const features = [
        {
            icon: <Dumbbell className="w-6 h-6" />,
            title: "Modern Equipment",
            description: "State-of-the-art fitness equipment from leading brands to maximize your workout potential."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Expert Trainers",
            description: "Certified personal trainers with years of experience to guide your fitness journey."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Access",
            description: "Train on your schedule with round-the-clock access to our premium facilities."
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Proven Results",
            description: "Join thousands of members who have achieved their fitness goals with our programs."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Health Focus",
            description: "Comprehensive wellness programs that prioritize your overall health and wellbeing."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "High Energy",
            description: "Dynamic group classes and energizing atmosphere to keep you motivated."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Safe Environment",
            description: "Clean, secure facilities with proper safety protocols and hygiene standards."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Goal Oriented",
            description: "Personalized training plans designed to help you reach your specific fitness targets."
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setTimeout(() => {
                            setVisibleItems(prev => new Set([...prev, index]));
                        }, index * 100); // Stagger the animations
                    }
                });
            },
            { threshold: 0.2, rootMargin: '50px' }
        );

        const items = sectionRef.current?.querySelectorAll('[data-index]');
        items?.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);
    
    const category = [
        { name: "Yoga", image: yoga },
        { name: "Zumba", image: zumba },
        { name: "HIIT", image: hiit },
        { name: "Strength Training", image: strengthtraining },
        { name: "Pilates", image: pilates },
        { name: "Cardio", image: cardio }
    ]

    const services = [
        { name: "Yoga Classes", included: true },
        { name: "Zumba Dance", included: true },
        { name: "Personal Training", included: true },
        { name: "Nutrition Guidance", included: true },
        { name: "Group Fitness Classes", included: true },
    ];
    const comparisonData = [
        {
            category: "Membership Offers",
            AnnieGym: [
                "Huge savings on gym memberships! Get 75% off",
                "All-inclusive access to facilities",
                "No hidden costs",
                "Flexible membership plans"
            ],
            others: [
                "Limited or no discounts",
                "Additional fees for premium services",
                "Hidden costs may apply",
                "Rigid membership structure"
            ]
        },
        {
            category: "Fitness Services",
            AnnieGym: [
                "Group & personalized Yoga sessions",
                "High-energy Zumba classes included",
                "Customized personal training",
                "Nutrition counseling included"
            ],
            others: [
                "Limited class variety",
                "Extra charges for Yoga/Zumba",
                "Generic training programs",
                "Nutrition guidance costs extra"
            ]
        },
        {
            category: "Facilities",
           AnnieGym: [
                "State-of-the-art equipment",
                "Dedicated Yoga & Zumba spaces",
                "Spacious workout areas",
                "Recovery & relaxation zones"
            ],
            others: [
                "Basic equipment only",
                "Limited space for classes",
                "Often crowded",
                "Minimal recovery areas"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
                    <img
                        src={anniegym}
                        alt="Gym Background"
                        className="w-full h-full hidden md:block lg:block object-cover"
                    />
                    <img src={mobilegym} className='h-screen w-screen block md:hiden lg:hidden xl:hidden opacity-7 0' />
                </div>
                <div className="relative z-10 container mx-auto px-4 flex items-center lg:ml-8">
                    <div className="mt-[150px] " data-aos="fade-up" data-aos-delay="200">
                        <h1 className="text-2xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                            Welcome to <span className='text-red-600 font-bold text-3xl lg:text-5xl text-outline-white'>Annie Gym</span>
                            <span className="block text-white">Your Ultimate Fitness<br></br> Destination</span>
                        </h1>
                        <div className="lg:ml-24" data-aos="fade-up" data-aos-delay="400">
                            <button onClick={() => setShowUserForm(true)}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                                Join Now for ₹99
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Membership Section */}
            <div className="py-8 lg:py-24 bg-gradient-to-b from-gray-900 to-black text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-5 lg:mb-16" data-aos="fade-up">Membership Benefits</h2>
                        <div className="bg-gray-800 rounded-lg p-8" data-aos="zoom-in" data-aos-delay="200">
                            <div className="text-3xl font-bold mb-2">₹99/month</div>
                            <div className="text-gray-400 mb-8"> Special Offer</div>
                            <div className="space-y-4">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center gap-3"
                                    data-aos="fade-right" 
                                            data-aos-delay={200 + (index * 100)}>
                                        <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                                        <span>{service.name}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setShowUserForm(true)}
                                className="mt-8 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300" data-aos="fade-up" data-aos-delay="400">
                                Become a Member
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-12 lg:py-20 gradient-bg text-white relative overflow-hidden" ref={sectionRef}>
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-32 h-32 border border-red-500 rounded-full"></div>
                    <div className="absolute top-1/2 right-20 w-24 h-24 border border-white rounded-full"></div>
                    <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-red-500 rounded-full blur-sm"></div>
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    {/* Enhanced Title */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-6xl font-bold mb-2 fade-in-down text-glow" data-aos="fade-up">
                            Why Choose
                            <span className="text-red-500 ml-4">Annie Gym?</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-white mx-auto rounded-full"></div>
                        <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto fade-in-down" style={{ animationDelay: '0.2s' }}>
                            Experience the difference with our premium facilities and expert guidance
                        </p>
                    </div>

                    {/* Enhanced Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                data-index={index}
                                data-aos="zoom-in"
                                    data-aos-delay={200 * index}
                                className={`
                  relative group card-hover glow-pulse
                  ${visibleItems.has(index) ? 'card-visible' : 'card-hidden'}
                  ${index % 2 === 0 ? 'float-animation' : ''}
                `}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    '--float-delay': `${index * 0.5}s`
                                }}
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                {/* Card Background with Shimmer */}
                                <div className="glass-morphism w-full h-72 p-8 rounded-2xl relative overflow-hidden shadow-2xl shadow-red-500/20 border-2 border-gray-700 group-hover:border-red-500/50 transition-all duration-500">

                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Enhanced Icon */}
                                    <div className="text-white mb-6 icon-bounce relative z-10">
                                        <span className="bg-gradient-to-br from-red-500 to-red-700 rounded-full p-4 shadow-lg shadow-red-500/30 icon-inner inline-flex items-center justify-center relative overflow-hidden group-hover:shadow-red-500/50 transition-all duration-300">
                                            {/* Icon Glow Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                                            <div className="relative z-10">{feature.icon}</div>

                                            {/* Ripple Effect */}
                                            {hoveredItem === index && (
                                                <div className="absolute inset-0 border-2 border-white rounded-full animate-ping"></div>
                                            )}
                                        </span>
                                    </div>

                                    {/* Enhanced Content */}
                                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-red-100 transition-colors duration-300 relative z-10">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed relative z-10">
                                        {feature.description}
                                    </p>

                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Bottom Gradient */}
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Accent */}
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center space-x-2 text-gray-400">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent to-red-500"></div>
                            <span className="text-sm font-light tracking-wider">PREMIUM FITNESS EXPERIENCE</span>
                            <div className="w-8 h-px bg-gradient-to-l from-transparent to-red-500"></div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Classes Section */}
            <div className="py-8 lg:py-24 bg-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8 lg:mb-16" data-aos="fade-up">Our Classes</h2>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {category.map((category, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg"
                            data-aos="fade-up"
                                    data-aos-delay={100 * index}>
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full lg:h-64 h-48 object-cover group-hover:scale-110 transition-transform duration-300"
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

            <div className="py-8 lg:py-2 bg-gradient-to-b from-gray-800 to-black">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6 text-white" data-aos="fade-up">Why We're Different</h2>
                    <p className="text-sm lg:text-xl text-gray-400 text-center mb-8 lg:mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        See how Annie Gym stands out from the competition with our comprehensive offerings and member-first approach.
                    </p>

                    {comparisonData.map((section, index) => (
                        <div key={index} className=" max-w-7xl mx-auto mb-8">
                            <h3 className="text-xl lg:text-3xl font-bold mb-8 text-center text-red-500" data-aos="fade-up">{section.category}</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Annie Gym Column */}
                                <div className="bg-gray-900 rounded-lg p-8" data-aos="fade-right" data-aos-delay="200">
                                    <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <span className="text-red-500">Annie Gym</span>
                                        <div className="h-1 flex-grow bg-red-500/20 rounded"></div>
                                    </div>
                                    <div className="space-y-4">
                                        {section.AnnieGym.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3" data-aos="fade-up" data-aos-delay={300 + (idx * 100)}>
                                                <Check className="text-green-500 h-4 w-4 lg:w-5 lg:h-5 flex-shrink-0" />
                                                <span className="text-gray-300 text-sm lg:text-lg">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Other Gyms Column */}
                                <div className="bg-gray-900/50 rounded-lg p-6 lg:p-8" data-aos="fade-left" data-aos-delay="200">
                                    <div className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <span className="text-gray-500">Other Gyms</span>
                                        <div className="h-1 flex-grow bg-gray-500/20 rounded"></div>
                                    </div>
                                    <div className="space-y-4">
                                        {section.others.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3" data-aos="fade-up" data-aos-delay={300 + (idx * 100)}>
                                                <X className="text-red-500 h-4 w-4 lg:w-5 lg:h-5 flex-shrink-0" />
                                                <span className="text-gray-400 text-sm lg:text-lg">{feature}</span>
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
            <div className=" bg-black pb-8 lg:pt-8">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-white" data-aos="fade-up">Ready to Transform Your Life?</h2>
                    <p className="text-sm lg:text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Join Annie Gym today and start your fitness journey!</p>
                    <button
                        onClick={() => setShowUserForm(true)}
                        className="bg-red-500 text-white px-5 py-2 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                        data-aos="zoom-in" data-aos-delay="400">
                        Join Membership
                    </button>
                </div>
            </div>

            {showUserForm && <RegistrationForm onClose={() => setShowUserForm(false)} />}
        </div>
    );
};



export default AnnieGym;
