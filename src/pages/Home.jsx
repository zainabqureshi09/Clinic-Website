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
                  className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)',
                    boxShadow: '0 4px 30px rgba(5, 150, 105, 0.3)',
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Request Appointment</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a
                  href="tel:4166496388"
                  className="px-8 py-4 rounded-full font-semibold border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call to Book
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

            {/* Right Content - Image Cluster */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
                {/* Main Large Image - Clinic Exam Room */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-3/4 rounded-3xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src="/clinic-exam-room.jpg"
                    alt="BSRV Clinic Exam Room"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* Floating Card 1 - Walk-in Clinic */}
                <motion.div
                  className="absolute -bottom-4 left-4 sm:left-6 px-4 py-3 sm:px-5 sm:py-3 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-gray-100 dark:border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                      <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Walk-in Clinic</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">No Appointment Needed</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 2 - Multilingual Staff */}
                <motion.div
                  className="absolute -bottom-4 right-4 sm:right-6 px-4 py-3 sm:px-5 sm:py-3 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-gray-100 dark:border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Multilingual Staff</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">English, Tamil, Hindi, Urdu</div>
                    </div>
                  </div>
                </motion.div>

                {/* Small Floating Images */}
                <motion.div
                  className="absolute top-4 -right-4 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl floating"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <img
                    src="/clinic-office-interior.jpg"
                    alt="BSRV Medical Office Interior"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="absolute bottom-24 -left-4 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl floating-delayed"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <img
                    src="/clinic-waiting-room.jpg"
                    alt="BSRV Clinic Waiting Room"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Walk-In Clinic Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
