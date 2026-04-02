import { motion } from 'framer-motion';
import {
  Stethoscope,
  Activity,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive primary care services for all ages with personalized treatment plans.',
      features: ['Family Medicine & Primary Care', 'Chronic Disease Management', 'Children & Adult Care', 'Acute Care for Illnesses', 'Preventive Health & Annual Physicals', 'Vaccinations & Immunizations', "Women's Health", 'Minor Procedures'],
      color: 'from-emerald-400 to-teal-500',
    },
    {
      icon: Activity,
      title: 'Endocrinology & Metabolism (Hormonal Health)',
      description: 'Comprehensive care for hormonal and metabolic conditions with personalized treatment plans.',
      features: ['Diabetes Management (Type 1, Type 2, Gestational)', 'Thyroid Disorders', 'Bone & Calcium Metabolism', 'Pituitary & Adrenal Disorders', 'Metabolic Syndrome & Lipid Disorders'],
      color: 'from-teal-400 to-cyan-500',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Our Services</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We specialize in General Medicine and Endocrinology, providing comprehensive
              healthcare and advanced hormonal care with state-of-the-art facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Our team is ready to provide you with the best healthcare experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-500"
                style={{ background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)' }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full font-semibold border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
