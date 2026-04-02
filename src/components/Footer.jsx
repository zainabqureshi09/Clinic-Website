import { motion } from 'framer-motion';
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Clock,
  Shield,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Doctors', href: '/doctors' },
    { name: 'Services', href: '/services' },
    { name: 'Calendars', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    'Walk-In Clinic',
    'Minor Injuries',
    'Medical Consultations',
    'Multilingual Staff',
    'Patient Satisfaction Guarantee',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/BSRV-Medical-and-Dental-Office/61584460004700/', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter (X)' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const features = [
    { icon: Award, text: 'Board Certified' },
    { icon: Heart, text: 'Patient First' },
  ];

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute top-0 left-0 right-0 -mt-px">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="#f9fafb"
            className="dark:fill-slate-950"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <img src="/logo.png" alt="BSRV Medical" className="h-10 w-10 sm:h-12 sm:w-auto object-contain" />
              <div>
                <span className="text-base sm:text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">BSRV Medical</span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              We are committed to delivering comprehensive healthcare services, with a focus on patient satisfaction and achieving excellent clinical outcomes.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 text-xs text-gray-600 dark:text-gray-400"
                >
                  <feature.icon className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center space-x-1 sm:space-x-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Stay Connected</h4>

            <div className="space-y-2 sm:space-y-3">
              <a href="tel:4166496388" className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>416-649-6388</span>
              </a>
              <a href="mailto:bsrvmedical@gmail.com" className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>bsrvmedical@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <span>3430 Finch Ave E, Suite 6A<br className="hidden sm:block" />Scarborough, ON M1W 2R5</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Open 7 Days: Mon-Fri 9AM-7PM, Sat 9AM-5PM, Sun 10AM-4PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-slate-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} BSRV Medical & Dental. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>for patients</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
