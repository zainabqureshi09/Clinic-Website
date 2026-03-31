import { motion } from 'framer-motion';
import {
  Stethoscope,
  Smile,
  Heart,
  Activity,
  Phone,
  ArrowRight,
  Clock,
  Languages,
  UserCheck
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Walk-In Clinic',
      description: 'Open 7 days a week (8:00 AM – 8:00 PM). No appointment necessary for urgent medical concerns. Immediate care when you need it.',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      icon: Activity,
      title: 'Minor Injuries',
      description: 'Treatment for sprains, cuts, burns, and other minor injuries. Quick and professional care to get you back on your feet.',
      color: 'from-teal-400 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Acute Illnesses',
      description: 'Diagnosis and treatment for sudden illnesses including flu, fever, infections, and other acute medical conditions.',
      color: 'from-rose-400 to-pink-500',
    },
    {
      icon: UserCheck,
      title: 'Medical Consultations',
      description: 'General medical consultations with experienced healthcare professionals. Comprehensive health assessments and advice.',
      color: 'from-violet-400 to-purple-500',
    },
    {
      icon: Smile,
      title: 'Dental Care',
      description: 'Complete dental services from routine checkups to emergency dental care. Your smile is our priority.',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: Languages,
      title: 'Multilingual Staff',
      description: 'We speak your language! Staff available in English, Tamil, Hindi, Urdu, and more to serve our diverse community.',
      color: 'from-pink-400 to-rose-500',
    },
    {
      icon: Phone,
      title: 'Call for Wait Times',
      description: 'Avoid long waits! Call us at (416) 649-6388 to check current wait times before your visit to our clinic.',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Clock,
      title: 'Extended Hours',
      description: 'Open 12 hours daily from 8AM to 8PM, 7 days a week. Healthcare that fits your schedule, including weekends.',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-slate-900">
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
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Our Services</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive <span className="gradient-text">Walk-In Clinic</span> Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From routine checkups to urgent care, we offer accessible healthcare with multilingual staff. No appointment needed.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-500">
                {/* Gradient Background on Hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.a
                    href="#appointment"
                    className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium group/link"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Corner Accent */}
                <div 
                  className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="tel:4166496388"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-500"
            style={{ background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)' }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>Call (416) 649-6388</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
