import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Send, MessageCircle } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = [
    'General Medicine',
    'Dental Care',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Ophthalmology',
    'Endocrinology',
    'Nephrology',
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = (data) => {
    // Clinic's WhatsApp number (replace with actual number)
    const clinicPhone = '14166496388'; // BSRV clinic phone in international format
    
    // Format the message
    const message = `*New Appointment Request* 🏥

*Patient Details:*
• Name: ${data.name}
• Phone: ${data.phone}
• Email: ${data.email}

*Appointment Details:*
• Department: ${data.department}
• Doctor: ${data.doctor || 'Any Available Doctor'}
• Date: ${data.date}
• Time: ${data.time}

*Additional Message:*
${data.message || 'No additional message'}

---
Sent from BSRV Medical & Dental Office Website`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${clinicPhone}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Send to WhatsApp
    sendToWhatsApp(formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        doctor: '',
        date: '',
        time: '',
        message: '',
      });
    }, 5000);
  };

  const inputClasses = `
    w-full px-5 py-4 rounded-xl 
    bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700
    text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-slate-500
    transition-all duration-300
    focus:outline-none focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-700
    focus:ring-4 focus:ring-emerald-500/10
  `;

  const labelClasses = 'block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2';

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
              <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Book Appointment</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Schedule Your <span className="gradient-text">Visit</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to take the first step towards better health? Book an appointment 
              with our expert team. We will get back to you within 24 hours to confirm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose BSRV?
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Clock, title: 'Walk-Ins Welcome', desc: 'No appointment necessary' },
                  { icon: CheckCircle, title: 'OHIP Accepted', desc: 'Plus major insurance providers' },
                  { icon: User, title: 'Personalized Care', desc: 'Patient-centred approach' },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800">
                <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Or Contact Us Directly</h4>
                <div className="space-y-3">
                  <a href="tel:4166496388" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>416-649-6388</span>
                  </a>
                  <a href="mailto:bsrvmedical@gmail.com" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>bsrvmedical@gmail.com</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5" />
                    <span>Open 7 Days: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-2xl">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Redirecting to WhatsApp...
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Your appointment details are being sent. Please complete the process in WhatsApp.
                    </p>
                    <motion.button
                      onClick={() => setIsSubmitted(false)}
                      className="text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      Book Another Appointment
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>
                          <User className="w-4 h-4 inline mr-1" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={inputClasses}
                          required
                        />
                      </div>

                      <div>
                        <label className={labelClasses}>
                          <Mail className="w-4 h-4 inline mr-1" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={inputClasses}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>
                          <Phone className="w-4 h-4 inline mr-1" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className={inputClasses}
                          required
                        />
                      </div>

                      <div>
                        <label className={labelClasses}>
                          <MessageSquare className="w-4 h-4 inline mr-1" />
                          Department
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className={inputClasses}
                          required
                        >
                          <option value="" className="bg-white dark:bg-slate-800">Select Department</option>
                          {departments.map((dept) => (
                            <option key={dept} value={dept} className="bg-white dark:bg-slate-800">
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={inputClasses}
                          required
                        />
                      </div>

                      <div>
                        <label className={labelClasses}>
                          <Clock className="w-4 h-4 inline mr-1" />
                          Preferred Time
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={inputClasses}
                          required
                        >
                          <option value="" className="bg-white dark:bg-slate-800">Select Time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot} className="bg-white dark:bg-slate-800">
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        <MessageSquare className="w-4 h-4 inline mr-1" />
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your symptoms or concerns..."
                        rows={4}
                        className={inputClasses}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-500 flex items-center justify-center space-x-2"
                      style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -3 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-5 h-5" />
                          <span>Send via WhatsApp</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-gray-400 dark:text-gray-500 text-xs">
                      Your information will be sent to our clinic via WhatsApp for quick response.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
