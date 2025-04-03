import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define active link style
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900 shadow-md py-3 xl:py-4'
          : 'bg-gray-900 py-5 xl:py-6'
      }`}
    >
      <div className="w-full max-w-[2000px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-gradient-to-r from-blue-700 to-indigo-900 w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-md flex items-center justify-center shadow-md">
              <span className="text-white text-xl sm:text-2xl xl:text-3xl font-bold">CC</span>
            </div>
            <div className="ml-3 xl:ml-4">
              <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold text-white">Career</h1>
              <p className="text-sm xl:text-base -mt-1 text-blue-300">Counseling</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Book a Call', path: '/booking' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 xl:px-5 xl:py-3 mx-1 rounded-md font-medium text-base xl:text-lg ${
                  isActive(item.path)
                    ? 'bg-white/10 text-white' 
                    : 'text-white hover:bg-white/10'
                } transition-colors duration-300`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="ml-2 xl:ml-4 px-5 py-2 xl:px-6 xl:py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-md shadow-md transition-colors duration-300 text-base xl:text-lg"
            >
              Free Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none text-white"
            aria-label="Toggle menu"
          >
            {!isOpen ? (
              <svg
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 space-y-2 sm:px-8 sm:py-6 sm:space-y-3">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Book a Call', path: '/booking' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 sm:px-4 sm:py-3 rounded-md ${
                isActive(item.path)
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              } transition-colors duration-300 font-medium text-base sm:text-lg`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="block mt-4 sm:mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-md text-center text-base sm:text-lg"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 