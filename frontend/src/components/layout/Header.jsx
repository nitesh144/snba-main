import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 px-4 py-2 lg:py-4 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black text-white shadow-md' : 'bg-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full py-2">
          <div className="flex items-center">
            <img
                transition={{type:"spring",
                    stiffness:100,
                    damping:10,
                    delay:0.2,
                }}
             src={logo} alt="SNBA Logo" className="h-9 w-13 lg:w-13 lg:h-12 ml-3" />
          </div>

          {/* Desktop Navigation Links */}
          <div 
           className="hidden md:flex items-center space-x-6 md:text-md lg:text-lg xl:text-xl font-semibold">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/aboutus' },
              { name: 'Membership Plan', path: '/membershipplans' },
              { name: 'Career', path: '/career' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-red-600 relative ${
                  isActive(item.path) ? 'text-white' : 'text-white'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-3 w-1/2 h-1 bg-red-600 rounded-md "></span>
                )}
              </Link>
            ))}

            <button className="px-4 py-2 rounded-full bg-red-600">
              <Link to="/frenchise">Apply for Franchisee</Link>
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentCol/or"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-9 h-9"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white z-40">
            {/* Close Button */}
            <button
              onClick={toggleMobileMenu}
              className="absolute top-5 right-5 text-white text-3xl focus:outline-none"
            >
              ✕
            </button>

            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/aboutus' },
              { name: 'Membership Plan', path: '/membershipplans' },
              { name: 'Career', path: '/career' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-semibold hover:text-red-600 ${
                  isActive(item.path) ? 'text-red-500' : 'text-white'
                }`}
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}

            <button className="px-5 py-2 rounded-full bg-red-600 text-white text-lg">
              <Link to="/frenchise" onClick={toggleMobileMenu}>
                Apply for Franchisee
              </Link>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
