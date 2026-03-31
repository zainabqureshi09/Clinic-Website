import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Car,
  Train,
  Bus
} from 'lucide-react';

const Location = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['3430 Finch Ave E, Suite 6A', 'Scarborough, ON, M1W 2R5', '(Warden & Finch Area)'],
      color: 'from-emerald-400 to-teal-500',
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['416-649-6388'],
      color: 'from-teal-400 to-cyan-500',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['bsrvmedical@gmail.com'],
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Open 7 Days a Week', '8:00 AM - 8:00 PM'],
      color: 'from-amber-400 to-orange-500',
    },
  ];

  const transportOptions = [
    { icon: Car, text: 'Free parking available' },
    { icon: Bus, text: 'Bus routes 10, 25, 42' },
    { icon: Train, text: 'Metro station 2 blocks away' },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-slate-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Navigation className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Visit Our <span className="gradient-text">Clinic</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Located in the heart of the medical district, our state-of-the-art 
            facility is easily accessible by all modes of transportation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="group"
              >
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg overflow-hidden transition-all">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  <div className="relative flex items-start space-x-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold mb-2">{item.title}</h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 dark:text-gray-400 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Transport Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm"
            >
              <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Getting Here</h4>
              <div className="flex flex-wrap gap-4">
                {transportOptions.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                    <option.icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{option.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-500 dark:text-gray-400 text-sm">Follow Us:</span>
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-2xl">
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                }}
              >
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#059669" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-emerald-500/30"
                      animate={{ scale: [1, 2, 3], opacity: [0.5, 0.2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ width: '80px', height: '80px', marginLeft: '-20px', marginTop: '-20px' }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-emerald-500/30"
                      animate={{ scale: [1, 2, 3], opacity: [0.5, 0.2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                      style={{ width: '80px', height: '80px', marginLeft: '-20px', marginTop: '-20px' }}
                    />
                    
                    <div className="relative w-10 h-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg" />
                      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-emerald-400 to-teal-500 rotate-45" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-20 px-4 py-2 rounded-full bg-white shadow-lg whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-gray-900 text-sm font-medium">BSRV Medical & Dental Office</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-emerald-300/30 blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-teal-300/30 blur-2xl"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </div>

              <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                <motion.button
                  className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-emerald-50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-xl font-bold">+</span>
                </motion.button>
                <motion.button
                  className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-emerald-50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-xl font-bold">-</span>
                </motion.button>
              </div>

              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium flex items-center space-x-2 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
