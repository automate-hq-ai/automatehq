import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', id: 'home', href: '/' },
  { label: 'Why Us?', id: 'why-us' },
  { label: 'Services', id: 'services' },
  { label: 'Case Studies', id: 'case-studies' },
  { label: 'Process', id: 'process' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', id: 'contact-us' },
  { label: 'Ask AutomateHQ GPT ?', href: '/chat' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: { id?: string; href?: string }) => {
    const currentPath = window.location.pathname;

    const scrollWithOffset = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -64; // Adjust this value to match your navbar height in px
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    if (item.href) {
      if (item.href === '/') {
        navigate('/');
        setTimeout(() => {
          if (item.id) {
            scrollWithOffset(item.id!);
          }
        }, 100);
      } else {
        navigate(item.href);
      }
    } else if (item.id) {
      if (currentPath !== '/') {
        navigate('/');
        setTimeout(() => {
          if (item.id) {
            scrollWithOffset(item.id!);
          }
        }, 100);
      } else {
        if (item.id) {
          scrollWithOffset(item.id!);
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
          >
            <AutoAwesomeIcon className="h-8 w-8 text-blue-500 animate-pulse" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              AutomateHQ
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.id || item.href}
                  onClick={() => handleNavigation(item)}
                  className={`px-2 py-1.5 rounded-md text-xs font-medium transition-colors duration-200 ${
                    item.label === 'Ask AutomateHQ GPT ?'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:text-white hover:shadow-lg hover:shadow-blue-500/25'
                      : 'text-gray-700 hover:text-blue-500'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-500 p-2 rounded-md"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.id || item.href}
              onClick={() => handleNavigation(item)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                item.label === 'Ask AutomateHQ GPT ?'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:text-white'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;