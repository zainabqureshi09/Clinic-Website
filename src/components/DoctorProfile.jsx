import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Award, 
  BookOpen, 
  Stethoscope, 
  Heart, 
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const DoctorProfile = () => {
  const doctor = {
    name: 'Dr. Pooja Kharbanda',
    specialty: 'Nephrologist and Internist',
    tagline: 'Specializing in the management of complex kidney and systemic conditions',
    description: 'Dr. Pooja Kharbanda is a Nephrologist and Internist specializing in the management of complex kidney and systemic conditions. She completed her medical degree at Aureus University School of Medicine, followed by Internal Medicine residency training in Pennsylvania and a Nephrology fellowship at Jefferson Einstein Hospital in Philadelphia.',
    availability: {
      day: 'Wednesday',
      time: '11:00 AM to 8:00 PM',
    },
    education: [
      {
        degree: 'Medical Degree',
        institution: 'Aureus University School of Medicine',
        icon: BookOpen,
      },
      {
        degree: 'Internal Medicine Residency',
        institution: 'Pennsylvania',
        icon: Stethoscope,
      },
      {
        degree: 'Nephrology Fellowship',
        institution: 'Jefferson Einstein Hospital, Philadelphia',
        icon: Award,
      },
    ],
    license: {
      title: 'College of Physicians and Surgeons of Ontario (CPSO)',
      description: 'Independently licensed with the College of Physicians and Surgeons of Ontario (CPSO). She provides patient-centered, evidence-based care with clear communication and individualized treatment.',
    },
    expertise: [
      'Chronic Kidney Disease',
      'Glomerular Disorders',
      'Hypertension Management',
      'Electrolyte Disturbances',
    ],
  };

  return (
    <section id="doctor-profile" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-100/50 dark:bg-teal-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Meet Our Specialist</span>
          </motion.div>
        </motion.div>

        {/* Main Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-2xl">
            {/* Gradient Header */}
            <div className="relative h-48 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              {/* Decorative Circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
            </div>

            {/* Profile Content */}
            <div className="relative px-8 pb-8">
              {/* Name & Specialty - Overlapping Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 mb-6">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {doctor.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    {doctor.specialty}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-500 dark:text-gray-400 mt-1"
                  >
                    {doctor.tagline}
                  </motion.p>
                </div>

                {/* Availability Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 md:mt-0 flex items-center space-x-3 px-5 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Available</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {doctor.availability.day} — {doctor.availability.time}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="prose dark:prose-invert max-w-none mb-8"
              >
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {doctor.description}
                </p>
              </motion.div>

              {/* Specialty Expertise Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                  Specialty Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.expertise.map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Education & License Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Academic Background</p>
                </div>
              </div>

              {/* Education Timeline */}
              <div className="space-y-4">
                {doctor.education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-800 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-colors"
                  >
                    {/* Timeline Line */}
                    {index !== doctor.education.length - 1 && (
                      <div className="absolute left-8 top-12 w-0.5 h-full bg-gradient-to-b from-emerald-300 to-transparent dark:from-emerald-700" />
                    )}
                    
                    {/* Icon */}
                    <div className="relative w-10 h-10 rounded-lg bg-white dark:bg-slate-700 border-2 border-emerald-200 dark:border-emerald-700 flex items-center justify-center flex-shrink-0">
                      <edu.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{edu.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* License & Certifications Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">License & Certifications</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Professional Credentials</p>
                </div>
              </div>

              {/* License Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {doctor.license.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {doctor.license.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-6 space-y-3"
              >
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm">Available for consultations</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm">Clinic appointments available</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm">In-person & virtual visits</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#appointment"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="w-5 h-5" />
            <span>Book Appointment with Dr. Kharbanda</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorProfile;
