import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Award, Activity } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Patients' },
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Shield, value: '100%', label: 'Satisfaction' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 30%, #ffffff 70%, #f0fdf4 100%)',
          }}
        />
        <div className="absolute inset-0 dark:hidden" />
        
        {/* Dark mode background */}
        <div 
          className="absolute inset-0 hidden dark:block"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #0f172a 100%)',
          }}
        />
        
        {/* Animated Orbs - Light Mode */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl dark:hidden"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl dark:hidden"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Animated Orbs - Dark Mode */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl hidden dark:block"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl hidden dark:block"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30 dark:opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(5, 150, 105, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Welcome to MediLux Healthcare</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
            >
              Your Family's{' '}
              <span className="gradient-text">Health</span>{' '}
              Starts Here
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Experience world-class healthcare with cutting-edge technology, 
              expert specialists, and personalized care that puts you first.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#appointment"
                className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-500"
                style={{ 
                  background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)',
                  boxShadow: '0 4px 30px rgba(5, 150, 105, 0.3)',
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Book Appointment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                href="#services"
                className="px-8 py-4 rounded-full font-semibold border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Stats */}
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
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(5, 150, 105, 0.15)' }}
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
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Main Circular Image */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop"
                  alt="Doctor"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Image 1 */}
              <motion.div
                className="absolute top-20 right-0 w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl floating"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
                  alt="Medical Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Image 2 */}
              <motion.div
                className="absolute bottom-32 left-0 w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl floating-delayed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop"
                  alt="Healthcare"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Card 1 */}
              <motion.div
                className="absolute top-40 left-0 px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-gray-100 dark:border-slate-700 floating-delayed"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-semibold">24/7 Care</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Always Available</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                className="absolute bottom-20 right-0 px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-gray-100 dark:border-slate-700 floating"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                    <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-semibold">Expert Doctors</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Board Certified</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-emerald-100 dark:border-emerald-900/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-2 border-teal-50 dark:border-teal-900/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-slate-600 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
