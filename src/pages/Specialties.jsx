import { motion } from 'framer-motion';
import { Dna, Droplets, Microscope, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Specialties = () => {
  const specialties = [
    {
      icon: Dna,
      title: 'Endocrinology',
      description: 'Expert care for hormonal disorders including diabetes, thyroid conditions, and metabolic diseases.',
      features: [
        'Diabetes Management',
        'Thyroid Disorders',
        'Hormone Therapy',
        'Metabolic Care',
      ],
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Droplets,
      title: 'Nephrology',
      description: 'Comprehensive kidney care with advanced dialysis services and transplant coordination.',
      features: [
        'Kidney Disease Treatment',
        'Dialysis Services',
        'Transplant Care',
        'Hypertension Management',
      ],
      gradient: 'from-teal-500 to-cyan-600',
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
            >
              <Microscope className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Centers of Excellence</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Specialized <span className="gradient-text">Care</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our centers of excellence bring together world-renowned specialists 
              using cutting-edge technology for complex conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start space-x-5 mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${specialty.gradient} flex items-center justify-center shadow-xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <specialty.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {specialty.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {specialty.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mt-auto">
                      {specialty.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800"
                        >
                          <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      to="/appointment"
                      className={`mt-6 inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r ${specialty.gradient} opacity-90 hover:opacity-100 transition-opacity w-fit`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '15+', label: 'Specialty Centers' },
              { value: '100+', label: 'Expert Specialists' },
              { value: '50K+', label: 'Procedures Annually' },
              { value: '98%', label: 'Success Rate' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-500 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Specialties;
