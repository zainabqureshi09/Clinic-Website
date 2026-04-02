import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Award, Activity, Clock, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { icon: Clock, value: '7 Days', label: 'Open Weekly' },
    { icon: Heart, value: '100%', label: 'Patient Satisfaction' },
    { icon: Shield, value: '100%', label: 'Walk-ins Welcome' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 30%, #ffffff 70%, #f0fdf4 100%)',
            }}
          />
          <div className="absolute inset-0 dark:hidden" />

          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #0f172a 100%)',
            }}
          />

          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6"
              >
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Welcome to BSRV Medical & Dental Office</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
              >
                Your Partner in{' '}
                <span className="gradient-text">Health</span>{' '}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Professional medical and dental care in Toronto. Walk-ins welcome, open 7 days a week with multilingual staff ready to serve you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Link
                  to="/appointment"
                  className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-500 backdrop-blur-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.95) 0%, rgba(16, 185, 138, 0.9) 50%, rgba(20, 184, 166, 0.95) 100%)',
                    boxShadow: '0 8px 28px rgba(5, 150, 105, 0.5), 0 0 50px rgba(16, 185, 138, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                  whileHover={{ scale: 1.06, y: -4, boxShadow: '0 16px 48px rgba(5, 150, 105, 0.6), 0 0 70px rgba(16, 185, 138, 0.4)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="flex items-center justify-center space-x-2 relative z-10">
                    <span className="font-medium">Request Appointment</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Premium shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </Link>
                <a
                  href="tel:4166496388"
                  className="group relative inline-flex items-center justify-center space-x-3 px-10 py-5 rounded-full font-semibold text-white overflow-hidden transition-all duration-500 backdrop-blur-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.95) 0%, rgba(16, 185, 138, 0.9) 25%, rgba(14, 165, 233, 0.8) 50%, rgba(16, 185, 138, 0.9) 75%, rgba(5, 150, 105, 0.95) 100%)',
                    boxShadow: '0 8px 32px rgba(5, 150, 105, 0.5), 0 0 60px rgba(16, 185, 138, 0.4), 0 0 120px rgba(14, 165, 233, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -5, 
                    boxShadow: '0 20px 60px rgba(5, 150, 105, 0.7), 0 0 100px rgba(16, 185, 138, 0.6), 0 0 180px rgba(14, 165, 233, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated Background Gradient */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                  
                  {/* Outer Glow Ring */}
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: 'radial-gradient(circle, rgba(14, 165, 233, 0.6) 0%, transparent 70%)',
                    filter: 'blur(25px)',
                  }} />
                  
                  {/* Shiny Sweep Effect */}
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
                    }} />
                  </span>
                  
                  {/* Inner Shine Border */}
                  <span className="absolute inset-0 rounded-full" style={{
                    boxShadow: 'inset 0 2px 15px rgba(255, 255, 255, 0.3), inset 0 -2px 15px rgba(0, 0, 0, 0.15)',
                  }} />
                  
                  {/* Content */}
                  <img src="/logo.png" alt="BSRV Dental Logo" className="w-8 h-8 object-contain relative z-10 drop-shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10 tracking-wide font-bold">BSRV DENTAL</span>
                  
                  {/* Sparkle Icons on Hover */}
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-left-4 transition-all duration-500">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <span className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-right-4 transition-all duration-500 delay-100">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-wrap gap-6 justify-center lg:justify-start"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center space-x-3 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-gray-100 dark:border-slate-700"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <stat.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Single Premium Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-8 lg:mt-0"
            >
              {/* Mobile Layout */}
              <div className="lg:hidden relative">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/clinic-exam-room.jpg"
                    alt="BSRV Clinic Exam Room - Modern medical facility with state-of-the-art equipment"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  
                  {/* Bottom Info Card */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 px-5 py-4 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Walk-in Clinic</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">No appointment needed</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Desktop Layout - Single Large Image */}
              <div className="hidden lg:block relative">
                <div className="relative w-full h-[550px]">
                  {/* Main Large Image */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      src="/clinic-exam-room.jpg"
                      alt="BSRV Clinic Exam Room - Modern medical facility with state-of-the-art equipment"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </motion.div>

                  {/* Bottom Info Card - Walk-in */}
                  <motion.div
                    className="absolute bottom-6 left-6 px-6 py-4 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm shadow-xl border border-gray-100 dark:border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-base font-semibold text-gray-900 dark:text-white">Walk-in Clinic</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">No Appointment Needed</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Badge - Multilingual */}
                  <motion.div
                    className="absolute bottom-6 right-6 px-5 py-4 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm shadow-xl border border-gray-100 dark:border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Multilingual</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">4 Languages</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinic Gallery Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="gradient-text">Facility</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Modern, clean, and welcoming spaces designed for your comfort and care
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image 1 - Office Interior */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="/clinic-office-interior.jpg"
                alt="BSRV Medical Office Interior - Clean and modern consultation rooms"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg">Modern Offices</h3>
                <p className="text-gray-300 text-sm">Comfortable consultation rooms</p>
              </div>
            </motion.div>

            {/* Image 2 - Waiting Room */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="/clinic-waiting-room.jpg"
                alt="BSRV Clinic Waiting Room - Spacious and comfortable seating area"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg">Waiting Area</h3>
                <p className="text-gray-300 text-sm">Spacious & comfortable</p>
              </div>
            </motion.div>

            {/* Image 3 - Clinic Street Sign */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="/clinic-street-sign.jpg"
                alt="BSRV Medical Clinic Exterior - Easy to find location on Finch Ave"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg">Easy Access</h3>
                <p className="text-gray-300 text-sm">Convenient location</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Walk-In <span className="gradient-text">Clinic Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Open 7 days a week. Mon-Fri 9AM-7PM, Sat 9AM-5PM, Sun 10AM-4PM. No appointment necessary for urgent medical concerns.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Minor Injuries', icon: Activity },
              { title: 'Acute Illnesses', icon: Shield },
              { title: 'Medical Consultations', icon: Award },
              { title: 'Multilingual Staff', icon: Users },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700"
              >
                <service.icon className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <Link to="/services" className="text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:underline">
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:4166496388"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-500"
              style={{ background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)' }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <Phone className="w-5 h-5" />
              <span>Call to book</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
