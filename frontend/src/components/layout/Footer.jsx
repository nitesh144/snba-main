

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import aarnalogo from '../../assets/images/logo/aarna-logo.png';
import snbalogo from '../../assets/images/logo/logo.png';
import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/bg.jpg'

const Footer = () => {
    const currentYear = new Date().getFullYear();

   

    return (
        <footer className="bg-black text-gray-300">
            <div className='relative h-[950px] md:h-[550px] flex items-center overflow-hidden bg-center bg-black' >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 md:py-20 ">
                    {/* Main footer content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 ">
                        {/* First Column - Logos and Company Info */}
                        <div className="space-y-6 px-2 sm:px-3 md:px-4 mt-10 ">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-col space-y-6 items-center md:items-start">
                                <img
                                    src={snbalogo}
                                    alt="SNBA Logo"
                                    className="h-12 w-40 sm:h-[55px] sm:w-[180px]"
                                />
                                <img
                                    src={aarnalogo}
                                    alt="Aarna Logo"
                                    className="h-24 w-32 sm:h-[120px] sm:w-[170px]"
                                />
                            </motion.div>
                        </div>

                        {/* Second Column - Services */}
                        <div className="space-y-6 md:space-y-8 px-2 sm:px-3">
                            <div className="space-y-4 sm:space-y-6">
                                <h3 className="text-white md:text-xl sm:text-lg font-semibold">Our Services</h3>
                                <motion.ul
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="space-y-3 sm:space-y-4">
                                    {['AARNA MART', 'AARNA GYM', 'AARNA SALON', 'AARNA FOODCOURT'].map((service, index) => (
                                        <li key={index}>
                                            <Link
                                                to={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="group flex items-center text-white space-x-2 hover:text-white transition-colors text-sm sm:text-base"
                                            >
                                                <ExternalLink size={14} className="opacity-100 md:group-hover:opacity-100 transition-opacity shrink-0 text-red-500" />
                                                <span className="break-words">{service}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            </div>
                        </div>

                        {/* Third Column - Quick Links */}
                        <div className="space-y-6 md:space-y-8 px-2 sm:px-3">
                            <div className="space-y-4 sm:space-y-6">
                                <h3 className="text-white md:text-xl sm:text-lg font-semibold">Quick Links</h3>
                                <motion.ul
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="space-y-3 sm:space-y-4">
                                    {['Contact Us', 'Blogs Page', 'Terms of Services', 'Privacy Policy', 'Refund Policy', 'Shipping Policy'].map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="group flex items-center text-white space-x-2 hover:text-white transition-colors text-sm sm:text-base"
                                            >
                                                <ExternalLink size={14} className="opacity-100 md:group-hover:opacity-100 transition-opacity shrink-0 text-red-500" />
                                                <span className="break-words text-lg">{link}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            </div>
                        </div>

                        {/* Fourth Column - Contact Info */}
                        <div className="space-y-4 md:space-y-5 text-white px-2 sm:px-3">
                            <h3 className="text-white md:text-xl sm:text-lg font-semibold mb-3 sm:mb-5">Get in Touch</h3>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="space-y-3 sm:space-y-4">
                                <a
                                    href="https://maps.app.goo.gl/bZDwXjpgNYbFmjbL8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start space-x-2 hover:text-white transition-colors"
                                >
                                    <MapPin size={20} className="text-red-500 mt-1 shrink-0" />
                                    <span className="md:text-[16px] sm:text-sm">SNBA Consumers, 1st floor, Mansarovar Bhawan, NIT Road, Raipur, 492010, Chhattisgarh, India</span>
                                </a>

                                <a
                                    href='https://wa.me/+917400866821'
                                    className="flex items-center space-x-3 hover:text-white transition-colors"
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <BsWhatsapp size={16} className="text-red-500 shrink-0" />
                                    <span className="md:text-[16px] sm:text-sm">7400866821</span>
                                </a>

                                <a
                                    href="tel:+919685522890"
                                    className="flex items-center space-x-3 hover:text-white transition-colors"
                                >
                                    <Phone size={16} className="text-red-500 shrink-0" />
                                    <span className="md:text-[16px] sm:text-sm">9685522890</span>
                                </a>

                                <a
                                    href="tel:+18002331112"
                                    className="flex items-center space-x-3 hover:text-white transition-colors"
                                >
                                    <BsTelephone size={16} className="text-red-500 shrink-0" />
                                    <span className="md:text-[16px] sm:text-sm">1800 233 1112 (Toll-free)</span>
                                </a>

                                <a
                                    href="mailto:info@snbaconsumers.com"
                                    className="flex items-center space-x-3 hover:text-white transition-colors"
                                >
                                    <Mail size={16} className="text-red-500 shrink-0" />
                                    <span className="md:text-[16px] sm:text-sm break-all">info@snbaconsumers.com</span>
                                </a>
                            </motion.div>
                        </div>
                        {/* Bottom bar */}
                        <div className="border-t border-gray-800 md:mt-8 md:pt-6 ">
                            <div className="flex justify-between items-center space-y-4 md:space-y-0 text-center">
                                <p className="text-xs text-gray-100 ">
                                    © {currentYear} SNBA Consumers. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </footer>
    );
};

export default Footer;