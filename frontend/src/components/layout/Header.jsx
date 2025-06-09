import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/logo/new-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Close side menu when route changes
    setIsSideMenuOpen(false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Membership Plan', path: '/membershipplans' },
    { name: 'Career', path: '/career' },
    {name: 'Franchise', path: '/franchise' },
  ];

  return (
    <div className="relative z-50">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center z-10">
            {/* Placeholder for logo - replace with your actual logo */}
            <Link to='/'>
            <div className="h-10 w-40 lg:h-14 lg:w-48 flex items-center justify-center">
              <img src={logo} alt="annie-logo" />
            </div>
            </Link>
          </div>

          {/* Desktop Navigation Links - hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8 text-lg font-semibold text-white">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-red-600 transition-colors duration-200 relative ${
                  isActive(item.path) ? 'text-white' : 'text-white'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-red-600 rounded-md"></span>
                )}
              </Link>
            ))}

          </div>

          {/* Hamburger Menu Button - visible on all screen sizes */}
          <button
            onClick={toggleSideMenu}
            className="text-white focus:outline-none z-10 md:hidden lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Overlay - shown when side menu is open */}
      {isSideMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleSideMenu}
        ></div>
      )}

      {/* Side Navigation Menu - slides from right */}
      <div 
        className={`fixed top-0 right-0 h-screen w-1/2 sm:w-80 bg-black/80 z-50 transform transition-transform duration-300 ease-in-out ${
          isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={toggleSideMenu}
              className="text-white focus:outline-none p-2"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col space-y-8 mt-12 items-left">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-semibold hover:text-red-600 transition-colors duration-200 ${
                  isActive(item.path) ? 'text-red-600' : 'text-white'
                }`}
                onClick={toggleSideMenu}
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;