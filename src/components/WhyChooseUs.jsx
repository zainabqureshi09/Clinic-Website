import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  Clock, 
  Award, 
  Users, 
  Shield, 
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';

const WhyChooseUs = () => {
  const [counts, setCounts] = useState({
    patients: 0,
    years: 0,
    doctors: 0,
    awards: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targets = {
    patients: 50000,
    years: 25,
    doctors: 150,
    awards: 50,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        patients: Math.floor(targets.patients * easeProgress),
        years: Math.floor(targets.years * easeProgress),
        doctors: Math.floor(targets.doctors * easeProgress),
        awards: Math.floor(targets.awards * easeProgress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  const stats = [
    {
      icon: Users,
      count: counts.patients,
      formatted: formatNumber(counts.patients) + '+',
      label: 'Happy Patients',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      icon: Clock,
      count: counts.years,
      formatted: counts.years + '+',
      label: 'Years Experience',
      color: 'from-teal-400 to-cyan-500',
    },
    {
      icon: Award,
      count: counts.awards,
      formatted: counts.awards + '+',
      label: 'Awards Won',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: Heart,
      count: counts.doctors,
      formatted: counts.doctors + '+',
      label: 'Expert Doctors',
      color: 'from-rose-400 to-pink-500',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Advanced Safety Protocols',
      description: 'Stringent hygiene and safety measures for your protection.',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Latest medical equipment and digital health solutions.',
    },
    {
      icon: Award,
      title: 'Internationally Certified',
      description: 'Globally recognized standards of healthcare excellence.',
    },
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Personalized treatment plans tailored to your needs.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gray-50 dark:bg-slate-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Why Choose BSRV</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by Thousands for <span className="gradient-text">Excellence</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              BSRV Medical & Dental Office is committed to providing comprehensive medical and dental care with a focus on patient satisfaction and excellent healthcare outcomes.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#appointment"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-500"
              style={{ background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)' }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <CheckCircle className="w-5 h-5" />
              <span>Schedule a Visit</span>
            </motion.a>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl overflow-hidden transition-all">
                  {/* Background Gradient */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Count */}
                    <motion.div
                      className="text-4xl sm:text-5xl font-bold gradient-text mb-2 stat-number"
                    >
                      {stat.formatted}
                    </motion.div>

                    {/* Label */}
                    <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-2"
            >
              <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Shield className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold">100% Satisfaction Guarantee</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Your health is our priority</p>
                    </div>
                  </div>
                  <motion.a
                    href="#testimonials"
                    className="text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Read Reviews →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
