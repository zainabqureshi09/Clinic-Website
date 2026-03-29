import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Jennifer Anderson',
      role: 'Patient since 2019',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The level of care I received at MediLux was exceptional. From the moment I walked in, I felt valued and heard. Dr. Mitchell took the time to understand my concerns and created a treatment plan that truly worked for me.',
      treatment: 'Cardiology',
    },
    {
      name: 'Michael Thompson',
      role: 'Patient since 2020',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      rating: 5,
      text: 'After years of struggling with chronic pain, the team at MediLux finally gave me answers. Their diagnostic capabilities are world-class, and the orthopedic team expertise changed my life.',
      treatment: 'Orthopedics',
    },
    {
      name: 'Sarah Williams',
      role: 'Patient since 2018',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      rating: 5,
      text: 'As a mother of three, finding a pediatrician I trust was crucial. Dr. Thompson and her team have been amazing with my children. The facility is clean, modern, and the staff is incredibly friendly.',
      treatment: 'Pediatrics',
    },
    {
      name: 'David Chen',
      role: 'Patient since 2021',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The dental care I received was outstanding. Dr. Roberts is not only skilled but also has a gentle approach that made my procedure completely painless. I actually look forward to my dental visits now!',
      treatment: 'Dental Care',
    },
    {
      name: 'Emily Martinez',
      role: 'Patient since 2017',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
      rating: 5,
      text: 'Managing my diabetes was overwhelming until I came to MediLux. Their endocrinology team provided comprehensive care and education that empowered me to take control of my health.',
      treatment: 'Endocrinology',
    },
    {
      name: 'Robert Johnson',
      role: 'Patient since 2022',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The neurological care I received was life-changing. After experiencing persistent headaches, Dr. Patel thorough evaluation and treatment plan gave me my quality of life back.',
      treatment: 'Neurology',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-slate-900">
      {/* Animated Elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-80 h-80 bg-teal-100/50 dark:bg-teal-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -50, 0],
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
            <Quote className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Patient Stories</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="gradient-text">Patients</span> Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories from real patients who have experienced the MediLux difference.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="relative">
                  {/* Main Card */}
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-slate-700 shadow-xl">
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
                      <Quote className="w-12 h-12 text-emerald-200 dark:text-emerald-800" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-6 h-6 ${
                                i < testimonials[currentIndex].rating
                                  ? 'text-amber-400 fill-amber-400'
                                  : 'text-gray-200 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-8">
                        "{testimonials[currentIndex].text}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="relative">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                            <User className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="text-gray-900 dark:text-white font-semibold">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="text-emerald-600 dark:text-emerald-400 text-sm">
                            {testimonials[currentIndex].role}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {testimonials[currentIndex].treatment}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-emerald-400 to-teal-400'
                      : 'w-2 bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4.9', label: 'Average Rating', suffix: '/5.0' },
            { value: '15K+', label: 'Reviews', suffix: '' },
            { value: '98%', label: 'Satisfaction', suffix: '' },
            { value: '50K+', label: 'Patients', suffix: '' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}<span className="text-lg">{stat.suffix}</span>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
