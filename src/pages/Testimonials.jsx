import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Fatima Ahmed',
      role: 'Patient since 2023',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The level of care I received at BSRV was exceptional. Dr. Karim took the time to understand my concerns and provided thorough care. The multilingual staff made me feel comfortable.',
      treatment: 'Family Medicine',
    },
    {
      name: 'Rajesh Patel',
      role: 'Patient since 2023',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      rating: 5,
      text: 'Finally found a clinic where staff speaks my language! The team at BSRV is professional and caring. Dr. Saiyed is very knowledgeable and patient.',
      treatment: 'Family Medicine',
    },
    {
      name: 'Sarah Johnson',
      role: 'Patient since 2024',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      rating: 5,
      text: 'As a mother, finding a family clinic I trust was crucial. BSRV has been amazing with my children. The facility is clean and the staff is incredibly friendly.',
      treatment: 'Family Care',
    },
    {
      name: 'Michael Chen',
      role: 'Patient since 2023',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The dental care I received was outstanding. The dentist was skilled and gentle. I actually look forward to my dental visits now!',
      treatment: 'Dental Care',
    },
    {
      name: 'Priya Sharma',
      role: 'Patient since 2024',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
      rating: 5,
      text: 'Managing my health concerns was overwhelming until I came to BSRV. The team provided comprehensive care that helped me take control of my health.',
      treatment: 'Medical Consultation',
    },
    {
      name: 'David Wong',
      role: 'Patient since 2023',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The walk-in service is a lifesaver! No appointment needed and the wait time was minimal. The doctor was thorough and professional.',
      treatment: 'Walk-In Clinic',
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
              <Quote className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Patient Stories</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Our <span className="gradient-text">Patients</span> Say
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real stories from real patients who have experienced the BSRV difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
              >
                <Quote className="w-10 h-10 text-emerald-200 dark:text-emerald-800 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-gray-200 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                  />
                  <div>
                    <div className="text-gray-900 dark:text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-emerald-600 dark:text-emerald-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.9', label: 'Average Rating', suffix: '/5.0' },
              { value: '15K+', label: 'Reviews', suffix: '' },
              { value: '98%', label: 'Satisfaction', suffix: '' },
              { value: '50K+', label: 'Patients', suffix: '' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}<span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Experience the BSRV Difference?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of satisfied patients who trust us with their healthcare.
            </p>
            <Link
              to="/appointment"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-500"
              style={{ background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)' }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <span>Book Your Appointment Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
