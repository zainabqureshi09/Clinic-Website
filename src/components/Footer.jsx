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
    { name: 'Services', href: '/services' },
    { name: 'Specialties', href: '/specialties' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'General Medicine',
    'Dental Care',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Ophthalmology',
    'Diagnostics',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter (X)' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const features = [
    { icon: Shield, text: 'HIPAA Compliant' },
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
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Medi</span>
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Lux</span>
              </div>
            </Link>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              World-class healthcare with a personal touch. Your health is our 
              priority, and we are committed to providing exceptional care.
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
            <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
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
            <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Stay Connected</h4>
            
            <div className="space-y-3 mb-6">
              <a href="tel:+15551234567" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a href="mailto:info@medilux.com" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@medilux.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Healthcare Blvd<br />Medical District, MD 20001</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 8AM - 8PM</span>
              </div>
            </div>

            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Subscribe to our newsletter</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-l-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                />
                <motion.button
                  type="submit"
                  className="px-4 py-3 rounded-r-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
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
            &copy; {new Date().getFullYear()} MediLux Healthcare. All rights reserved.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
              <a 
                key={item}
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

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
