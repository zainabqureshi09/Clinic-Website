import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Mitchell',
      specialty: 'Chief Medical Officer',
      department: 'Internal Medicine',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      rating: 5.0,
      reviews: 248,
      experience: '20+ years',
      education: 'Harvard Medical School',
    },
    {
      name: 'Dr. James Chen',
      specialty: 'Head of Cardiology',
      department: 'Cardiovascular Medicine',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 312,
      experience: '18+ years',
      education: 'Johns Hopkins University',
    },
    {
      name: 'Dr. Emily Roberts',
      specialty: 'Senior Dentist',
      department: 'Dental Surgery',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 189,
      experience: '15+ years',
      education: 'University of Pennsylvania',
    },
    {
      name: 'Dr. Michael Patel',
      specialty: 'Neurology Specialist',
      department: 'Neuroscience',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
      rating: 5.0,
      reviews: 276,
      experience: '22+ years',
      education: 'Stanford University',
    },
    {
      name: 'Dr. Lisa Thompson',
      specialty: 'Pediatric Director',
      department: 'Pediatrics',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 203,
      experience: '14+ years',
      education: 'Yale School of Medicine',
    },
    {
      name: 'Dr. Robert Kim',
      specialty: 'Orthopedic Surgeon',
      department: 'Orthopedics',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 167,
      experience: '16+ years',
      education: 'Columbia University',
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
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Our Medical Team</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our <span className="gradient-text">Experts</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our team of board-certified physicians and specialists bring decades 
              of experience and a commitment to exceptional patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[Linkedin, Twitter, Mail].map((Icon, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-emerald-500 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>

                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm flex items-center space-x-1 shadow-sm">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-gray-900 dark:text-white text-sm font-medium">{doctor.rating}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">{doctor.department}</span>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">
                      {doctor.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{doctor.specialty}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Clinic A</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100 dark:border-slate-800">
                      <p className="text-gray-400 text-xs">{doctor.education}</p>
                    </div>

                    <Link
                      to="/appointment"
                      className="mt-4 block w-full py-3 rounded-xl text-center font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 transition-opacity"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
