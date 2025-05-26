

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
// import aarnalogo from '../../assets/images/logo/aarna-logo.png';
// import snbalogo from '../../assets/images/logo/logo.png';
// import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import bg from '../../assets/images/bg.jpg'
// import facebook from '../../assets/images/svg/facebook.svg'
// import whatsapp from '../../assets/images/svg/whatsapp.svg'
// import instagram from '../../assets/images/svg/instagram.svg'
// import youtube from '../../assets/images/svg/youtube.svg'


// const Footer = () => {
//     const currentYear = new Date().getFullYear();

//     const socialLinks = [
//         {svg:facebook, alt:'facebook', href:'https://www.facebook.com/profile.php?id=61571678816978' },
//         {svg:whatsapp, alt:'whatsapp', href:'https://wa.me/+917400866821'},
//         {svg:youtube, alt:'youtube', href:'https://www.youtube.com/@SnbaConsumers'},
//         {svg:instagram, alt:'instagram', href:'https://www.instagram.com/aarnagroupsofficial/' },
//        ]


//     return (
//         <footer className="bg-black text-gray-300">
//             <div className='relative h-[950px] md:h-[550px] flex items-center overflow-hidden bg-center bg-black' >
//                 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 md:py-20 ">
//                     {/* Main footer content */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 ">
//                         {/* First Column - Logos and Company Info */}
//                         <div className="space-y-6 px-2 sm:px-3 md:px-4 mt-10 ">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 100 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.2 }}
//                                 className="flex flex-col space-y-6 items-center md:items-start">
//                                 <img
//                                     src={snbalogo}
//                                     alt="SNBA Logo"
//                                     className="h-12 w-40 sm:h-[55px] sm:w-[180px]"
//                                 />
//                                 <img
//                                     src={aarnalogo}
//                                     alt="Aarna Logo"
//                                     className="h-24 w-32 sm:h-[120px] sm:w-[170px]"
//                                 />
//                             </motion.div>
//                         </div>

//                         {/* Second Column - Services */}
//                         <div className="space-y-6 md:space-y-8 px-2 sm:px-3">
//                             <div className="space-y-4 sm:space-y-6">
//                                 <h3 className="text-white md:text-xl sm:text-lg font-semibold">Our Services</h3>
//                                 <motion.ul
//                                     initial={{ opacity: 0, y: 40 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: 0.3 }}
//                                     className="space-y-3 sm:space-y-4">
//                                     {['AARNA MART', 'AARNA GYM', 'AARNA SALON', 'AARNA FOODCOURT'].map((service, index) => (
//                                         <li key={index}>
//                                             <Link
//                                                 to={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
//                                                 className="group flex items-center text-white space-x-2 hover:text-white transition-colors text-sm sm:text-base"
//                                             >
//                                                 <ExternalLink size={14} className="opacity-100 md:group-hover:opacity-100 transition-opacity shrink-0 text-red-500" />
//                                                 <span className="break-words text-xs md:text-lg">{service}</span>
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </motion.ul>
//                             </div>
//                         </div>

//                         {/* Third Column - Quick Links */}
//                         <div className="space-y-6 md:space-y-8 px-2 sm:px-3">
//                             <div className="space-y-4 sm:space-y-6">
//                                 <h3 className="text-white md:text-xl sm:text-lg font-semibold">Quick Links</h3>
//                                 <motion.ul
//                                     initial={{ opacity: 0, y: 40 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: 0.4 }}
//                                     className=" space-y-3 sm:space-y-4">
//                                     {['Contact Us', 'Blogs Page', 'Terms of Services', 'Privacy Policy', 'Refund Policy', 'Shipping Policy'].map((link, index) => (
//                                         <li key={index}>
//                                             <Link
//                                                 to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
//                                                 className="group flex items-center text-white space-x-2 hover:text-white transition-colors text-sm sm:text-base"
//                                             >
//                                                 <ExternalLink size={14} className="opacity-100 md:group-hover:opacity-100 transition-opacity shrink-0 text-red-500" />
//                                                 <span className="break-words md:text-lg">{link}</span>
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </motion.ul>
//                             </div>
//                         </div>

//                         {/* Fourth Column - Contact Info */}
//                         <div className="space-y-4 md:space-y-5 text-white px-2 sm:px-3">
//                             <h3 className="text-white md:text-xl text-md font-semibold mb-3 sm:mb-5">Get in Touch</h3>
//                             <motion.div
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.5 }}
//                                 className="space-y-3 sm:space-y-4">
//                                 <a
//                                     href="https://maps.app.goo.gl/bZDwXjpgNYbFmjbL8"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-start space-x-2 hover:text-white transition-colors"
//                                 >
//                                     <MapPin size={20} className="text-red-500 mt-1 shrink-0" />
//                                     <span className="md:text-[16px] text-sm">SNBA Consumers, 1st floor, Mansarovar Bhawan, NIT Road, Raipur, 492010, Chhattisgarh, India</span>
//                                 </a>

//                                 <a
//                                     href='https://wa.me/+917400866821'
//                                     className="flex items-center space-x-3 hover:text-white transition-colors"
//                                     rel='noopener noreferrer'
//                                     target='_blank'
//                                 >
//                                     <BsWhatsapp size={16} className="text-red-500 shrink-0" />
//                                     <span className="md:text-[16px] text-sm">7400866821</span>
//                                 </a>

//                                 <a
//                                     href="tel:+919685522890"
//                                     className="flex items-center space-x-3 hover:text-white transition-colors"
//                                 >
//                                     <Phone size={16} className="text-red-500 shrink-0" />
//                                     <span className="md:text-[16px] text-sm">9685522890</span>
//                                 </a>

//                                 <a
//                                     href="tel:+18002331112"
//                                     className="flex items-center space-x-3 hover:text-white transition-colors"
//                                 >
//                                     <BsTelephone size={16} className="text-red-500 shrink-0" />
//                                     <span className="md:text-[16px] text-sm">1800 233 1112 (Toll-free)</span>
//                                 </a>

//                                 <a
//                                     href="mailto:info@snbaconsumers.com"
//                                     className="flex items-center space-x-3 hover:text-white transition-colors"
//                                 >
//                                     <Mail size={16} className="text-red-500 shrink-0" />
//                                     <span className="md:text-[16px] text-sm break-all">info@snbaconsumers.com</span>
//                                 </a>
//                             </motion.div>


//                             <div
//                                 className='flex flex-row bg-black gap-3 p-1 rounded-lg lg:pt-10'>
//                                 {
//                                     socialLinks.map((social, index) =>
//                                         <a href={social.href}
//                                             key={index}
//                                             className='transition-all duration-200 hover:scale-105'
//                                             rel='noopener noreferrer'
//                                             target='_blank'>
//                                             <img src={social.svg} alt={social.alt}
//                                                 className='h-6 w-6 lg:h-8 lg:w-8' />
//                                         </a>
//                                     )}
//                             </div>
//                         </div>
//                         {/* Bottom bar */}
//                         <div className="border-t border-gray-800 md:mt-8 md:pt-6 ">
//                             <div className="flex justify-between items-center space-y-4 md:space-y-0 text-center">
//                                 <p className="text-xs text-gray-100 ">
//                                     © {currentYear} SNBA Consumers. All rights reserved.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>



//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { BsWhatsapp, BsTelephone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import aarnalogo from '../../assets/images/logo/aarna-logo.png';
import snbalogo from '../../assets/images/logo/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: 'facebook', href: 'https://www.facebook.com/profile.php?id=61571678816978' },
        { icon: 'whatsapp', href: 'https://wa.me/+917400866821' },
        { icon: 'youtube', href: 'https://www.youtube.com/@SnbaConsumers' },
        { icon: 'instagram', href: 'https://www.instagram.com/aarnagroupsofficial/' },
    ];

    const services = [
        { name: 'AARNA MART', path: '/aarna-mart' },
        { name: 'AARNA GYM', path: '/aarna-gym' },
        { name: 'AARNA SALON', path: '/aarna-salon' },
        { name: 'AARNA FOODCOURT', path: '/aarna-foodcourt' },
    ];

    const quickLinks = [
        { name: 'Contact Us', path: '/contact-us' },
        { name: 'Blogs Page', path: '/blogs-page' },
        { name: 'Terms of Services', path: '/terms-of-services' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Refund Policy', path: '/refund-policy' },
        { name: 'Shipping Policy', path: '/shipping-policy' },
    ];

    return (
        <footer className="relative text-white bg-gradient-to-b from-gray-900 to-black">
            {/* Decorative top border */}
            {/* <div className="w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div> */}
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiPjxwYXRoIGQ9Ik0zNiAzNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEycy01LjM3My0xMi0xMi0xMi0xMiA1LjM3My0xMiAxMiA1LjM3MyAxMiAxMiAxMnptMjQgMGM2LjYyNyAwIDEyLTUuMzczIDEyLTEycy01LjM3My0xMi0xMi0xMi0xMiA1LjM3My0xMiAxMiA1LjM3MyAxMiAxMiAxMnptLTEyIDEyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJzLTUuMzczLTEyLTEyLTEyLTEyIDUuMzczLTEyIDEyIDUuMzczIDEyIDEyIDEyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
            
            <div className="relative px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Logos Column */}
                    <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-6 items-center md:items-start">
                            <div className="transform transition-transform duration-300 hover:scale-105">
                                <img
                                    src={snbalogo}
                                    alt="SNBA Logo"
                                    className="h-14 w-auto object-contain"
                                />
                            </div>
                            <div className="transform transition-transform duration-300 hover:scale-105">
                                <img
                                    src={aarnalogo}
                                    alt="Aarna Logo"
                                    className="h-24 w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold tracking-wide text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mt-1 after:rounded-full">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                                    <Link
                                        to={service.path}
                                        className="group flex items-center space-x-2 text-gray-300 hover:text-white"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:w-2 group-hover:h-2 transition-all duration-300"></span>
                                        <span className="text-sm md:text-base">{service.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold tracking-wide text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mt-1 after:rounded-full">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                                    <Link
                                        to={link.path}
                                        className="group flex items-center space-x-2 text-gray-300 hover:text-white"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:w-2 group-hover:h-2 transition-all duration-300"></span>
                                        <span className="text-sm md:text-base">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl md:text-xl font-bold tracking-wide text-white after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mt-1 after:rounded-full">
                            Get in Touch
                        </h3>
                        <div className="space-y-4">
                            <a
                                href="https://maps.app.goo.gl/bZDwXjpgNYbFmjbL8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                <MapPin size={18} className="text-red-500 mt-1 shrink-0 group-hover:text-red-400" />
                                <span className="text-sm">SNBA Consumers, 1st floor, Mansarovar Bhawan, NIT Road, Raipur, 492010, Chhattisgarh, India</span>
                            </a>

                            <a
                                href="https://wa.me/+917400866821"
                                className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <BsWhatsapp size={16} className="text-red-500 shrink-0 group-hover:text-red-400" />
                                <span className="text-sm">7400866821</span>
                            </a>

                            <a
                                href="tel:+919685522890"
                                className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                <Phone size={16} className="text-red-500 shrink-0 group-hover:text-red-400" />
                                <span className="text-sm">9685522890</span>
                            </a>

                            <a
                                href="tel:+18002331112"
                                className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                <BsTelephone size={16} className="text-red-500 shrink-0 group-hover:text-red-400" />
                                <span className="text-sm">1800 233 1112 (Toll-free)</span>
                            </a>

                            <a
                                href="mailto:info@snbaconsumers.com"
                                className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                <Mail size={16} className="text-red-500 shrink-0 group-hover:text-red-400" />
                                <span className="text-sm break-all">info@snbaconsumers.com</span>
                            </a>
                        </div>

                        {/* Social Media Links */}
                        <div className="pt-4">
                            <h4 className="text-sm font-semibold mb-3 text-gray-100">Follow Us</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        aria-label={`Follow us on ${social.icon}`}
                                    >
                                        <SocialIcon name={social.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-2 mb-3 mt-10 border-t border-gray-800">
                    <div className="flex flex-col justify-between items-center text-gray-300">
                        <p className="text-sm">© {currentYear} <span className='text-red-500'> SNBA Consumers</span>. All rights reserved.</p>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Social Icon Component
const SocialIcon = ({ name }) => {
    switch (name) {
        case 'facebook':
            return (
                <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
            );
        case 'instagram':
            return (
                <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            );
        case 'youtube':
            return (
                <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
            );
        case 'whatsapp':
            return (
                <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
            );
        default:
            return null;
    }
};

export default Footer;