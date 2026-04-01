import { motion } from 'framer-motion';
import { Droplets, Microscope, Shield } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: Droplets,
      title: 'Nephrology (Kidney Health)',
      description: 'Comprehensive kidney care with advanced diagnostic and treatment services for all stages of kidney disease.',
      features: [
        'Chronic Kidney Disease – Stages 1–5',
        'Hypertension Management',
        'Kidney Stones Prevention',
        'Electrolyte Disorders',
        'Dialysis Support',
      ],
      gradient: 'from-teal-500 to-cyan-600',
    },
  ];

  return (
    <section id="specialties" className="relative py-24 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-100/50 dark:bg-teal-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

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
            <Microscope className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Centers of Excellence</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Specialized <span className="gradient-text">Care</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our centers of excellence bring together world-renowned specialists 
            using cutting-edge technology for complex conditions.
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-3xl overflow-hidden">
                {/* Glass Card */}
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start space-x-5 mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${specialty.gradient} flex items-center justify-center shadow-xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
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

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mt-auto">
                      {specialty.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-colors"
                        >
                          <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.a
                      href="#appointment"
                      className={`mt-6 inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r ${specialty.gradient} opacity-90 hover:opacity-100 transition-opacity`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Learn More</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-emerald-100/30 dark:bg-emerald-900/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-teal-100/30 dark:bg-teal-900/20 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-8">
            {[
              { value: '2', label: 'Core Specialties' },
              { value: '50K+', label: 'Patients Served' },
              { value: '25+', label: 'Expert Doctors' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specialties;
