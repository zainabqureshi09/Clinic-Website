import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Doctors', href: '/doctors' },
    { name: 'Specialists', href: '/specialties' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl py-2 sm:py-3 shadow-lg'
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-2 sm:py-3'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              aria-label="BSRV Medical & Dental Office Home"
            >
              <img src="/logo.png" alt="BSRV Medical & Dental Office" className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-auto object-contain" />
              <div>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 dark:text-white whitespace-nowrap">BSRV Medical & Dental</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-6 lg:space-x-8" role="menubar">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-xs sm:text-sm md:text-base font-medium transition-colors duration-300 ${
                    isActive(link.href)
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  role="menuitem"
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden xl:flex items-center space-x-3 lg:space-x-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-slate-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
              </motion.button>

              <Link
                to="tel:4166496388"
                className="flex items-center space-x-1 sm:space-x-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                aria-label="Call us at 416-649-6388"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">416-649-6388</span>
              </Link>
              <Link
                to="/appointment"
                className="relative overflow-hidden px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-white text-xs sm:text-sm transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)',
                  boxShadow: '0 4px 20px rgba(5, 150, 105, 0.3)',
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-1 sm:space-x-2">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Request Appointment</span>
                  <span className="sm:hidden">Book</span>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              <motion.button
                className="text-gray-700 dark:text-gray-300 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 lg:hidden"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="absolute right-0 top-0 bottom-0 w-full sm:w-80 bg-white dark:bg-slate-900 p-4 sm:p-6 shadow-2xl">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <Link to="/" className="flex items-center space-x-2 sm:space-x-3" aria-label="BSRV Medical & Dental Office Home">
                    <img src="/logo.png" alt="BSRV Medical & Dental Office" className="h-8 w-8 sm:h-10 object-contain" />
                    <span className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white whitespace-nowrap">BSRV Medical & Dental</span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 dark:text-gray-300 p-2"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <nav className="flex-1 space-y-2 sm:space-y-4" role="navigation" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`block text-base sm:text-lg font-medium py-3 border-b border-gray-100 dark:border-slate-800 ${
                        isActive(link.href)
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="pt-4 sm:pt-6 border-t border-gray-100 dark:border-slate-800 space-y-3 sm:space-y-4">
                  <Link
                    to="/appointment"
                    className="block w-full py-3 sm:py-4 rounded-full font-semibold text-white text-center text-sm sm:text-base mb-3"
                    style={{ background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request Appointment
                  </Link>
                  <a href="tel:4166496388" className="block text-gray-600 dark:text-gray-400 text-center text-sm sm:text-base" aria-label="Call us">
                    416-649-6388
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
