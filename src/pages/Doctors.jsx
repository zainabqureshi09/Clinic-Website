import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Mail,
  Heart,
  Award,
  BookOpen,
  Stethoscope,
  CheckCircle,
  Phone,
  Languages,
  UserPlus,
  ArrowRight,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  // Dr. Pooja Kharbanda's detailed profile
  const featuredDoctor = {
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
    image: '/drpooja.png',
  };

  const doctors = [
    {
      name: 'Dr. Ruhin Karim',
      title: 'MD, FRCGP, CCFP',
      position: 'Professor of Family Medicine',
      image: '/dr.ruhinkarim.jpg',
      status: 'Accepting New Patients',
      specialties: [
        'UK-Trained Family Physician',
        'Patient-Centred & Preventive Care',
        'Care for Individuals & Families',
      ],
      education: [
        {
          degree: 'UK-Trained Family Physician',
          institution: 'Royal College of General Practitioners',
          icon: Award,
        },
        {
          degree: 'CCFP Certification',
          institution: 'College of Family Physicians of Canada',
          icon: BookOpen,
        },
      ],
      languages: ['English', 'Sylheti', 'Bengali', 'Urdu', 'Hindi'],
    },
    {
      name: 'Dr. Mohammed Aamir Saiyed',
      title: 'MD',
      position: 'Family Medicine',
      image: '/doctormohammadamirsaiyed.jpg',
      status: 'Accepting New Patients',
      specialties: [
        'Family Medicine',
        'Preventive Care',
        'Chronic Disease Management',
      ],
      education: [
        {
          degree: 'Residency in Family Medicine (2021–2024)',
          institution: 'Central Michigan University',
          icon: Stethoscope,
        },
        {
          degree: 'Internship in Family Medicine (2021–2022)',
          institution: 'Central Michigan University',
          icon: BookOpen,
        },
        {
          degree: 'Medical Degree (Class of 2021)',
          institution: 'American University of the Caribbean School of Medicine',
          icon: Award,
        },
      ],
      languages: ['English', 'Hindi', 'Urdu', 'Gujarati'],
    },
    {
      name: 'Dr. Pooja Kharbanda',
      title: 'Nephrologist and Internist',
      position: 'Kidney & Internal Medicine Specialist',
      image: '/drpooja.png',
      status: 'Accepting New Patients',
      specialties: [
        'Nephrology',
        'Internal Medicine',
        'Kidney Disease Management',
      ],
      education: [
        {
          degree: 'Nephrology Fellowship',
          institution: 'Jefferson Einstein Hospital, Philadelphia',
          icon: Award,
        },
        {
          degree: 'Internal Medicine Residency',
          institution: 'Pennsylvania',
          icon: Stethoscope,
        },
        {
          degree: 'Medical Degree',
          institution: 'Aureus University School of Medicine',
          icon: BookOpen,
        },
      ],
      languages: ['English'],
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
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Our Medical Team</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Expert care from highly qualified,{' '}
              <span className="gradient-text">multilingual practitioners</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Our experienced healthcare team is dedicated to serving patients and families with the highest standard of professional care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Doctor Profile - Dr. Pooja Kharbanda */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Card */}
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
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              </div>

              {/* Profile Content */}
              <div className="relative px-8 pb-8">
                {/* Name & Specialty */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 mb-6">
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                    >
                      {featuredDoctor.name}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-lg text-emerald-600 dark:text-emerald-400 font-medium"
                    >
                      {featuredDoctor.specialty}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-500 dark:text-gray-400 mt-1"
                    >
                      {featuredDoctor.tagline}
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
                        {featuredDoctor.availability.day} — {featuredDoctor.availability.time}
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
                  className="mb-8"
                >
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {featuredDoctor.description}
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
                    {featuredDoctor.expertise.map((item, index) => (
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
            >
              <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {featuredDoctor.education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="relative flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                    >
                      {index !== featuredDoctor.education.length - 1 && (
                        <div className="absolute left-8 top-12 w-0.5 h-full bg-gradient-to-b from-emerald-300 to-transparent dark:from-emerald-700" />
                      )}
                      <div className="relative w-10 h-10 rounded-lg bg-white dark:bg-slate-700 border-2 border-emerald-200 dark:border-emerald-700 flex items-center justify-center flex-shrink-0">
                        <edu.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
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
            >
              <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">License & Certifications</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Professional Credentials</p>
                  </div>
                </div>

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
                        {featuredDoctor.license.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {featuredDoctor.license.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Link
              to="/appointment"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg hover:shadow-xl transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment with Dr. Kharbanda</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="px-4 py-2 rounded-full bg-emerald-500/90 dark:bg-emerald-600/90 backdrop-blur-sm flex items-center space-x-2 shadow-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">{doctor.status}</span>
                    </motion.div>
                  </div>

                  {/* Image Section */}
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-white/20 dark:via-slate-900/20 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Name & Title */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {doctor.name}
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-base mt-1">
                        {doctor.title}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        {doctor.position}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                        <Heart className="w-4 h-4 mr-2 text-emerald-500" />
                        Specialties & Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialties.map((specialty, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all cursor-default"
                          >
                            {specialty}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-emerald-500" />
                        Education
                      </h4>
                      <div className="space-y-3">
                        {doctor.education.map((edu, idx) => (
                          <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 border border-emerald-200 dark:border-emerald-700 flex items-center justify-center flex-shrink-0">
                              <edu.icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{edu.degree}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{edu.institution}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                        <Languages className="w-4 h-4 mr-2 text-emerald-500" />
                        Languages Spoken
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.languages.map((language, idx) => (
                          <motion.span
                            key={language}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + idx * 0.05 }}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800"
                          >
                            {language}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="tel:4166496388"
                      className="group relative overflow-hidden w-full py-4 rounded-full font-semibold text-white transition-all duration-500 flex items-center justify-center space-x-2"
                      style={{ background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)' }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-5 h-5" />
                      <span>Contact Doctor</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Register as New Patient Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-xl"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl" />

            <div className="relative p-8 md:p-12">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-6 shadow-lg"
                >
                  <UserPlus className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  Register as a <span className="gradient-text">New Patient</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                >
                  Dr. Ruhin Karim and our team are currently accepting new patient registrations. Register today to receive comprehensive family medical care from our experienced physicians.
                </motion.p>
              </div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid sm:grid-cols-3 gap-6 mb-8"
              >
                {[
                  { icon: Heart, title: 'Patient-Centred Care', desc: 'Personalized attention' },
                  { icon: Languages, title: 'Multilingual Staff', desc: 'Communication in your language' },
                  { icon: CheckCircle, title: 'Comprehensive Care', desc: 'Full range of services' },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800"
                  >
                    <feature.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/appointment"
                  className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-500 flex items-center justify-center space-x-2"
                  style={{ background: 'linear-gradient(135deg, #059669 0%, #14b8a6 100%)' }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Register Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:4166496388"
                  className="px-8 py-4 rounded-full font-semibold border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (416) 649-6388</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
