// Healthcare Knowledge Base for RAG Chatbot
// This contains structured information that the chatbot can retrieve and use to answer questions

export const knowledgeBase = [
  {
    id: 1,
    category: 'general',
    question: 'What are your operating hours?',
    answer: 'Our clinic is open 7 days a week from 8:00 AM to 8:00 PM. We welcome walk-ins for urgent care needs, no appointment necessary.',
    keywords: ['hours', 'open', 'time', 'schedule', 'when'],
  },
  {
    id: 2,
    category: 'general',
    question: 'Where is BSRV Medical & Dental Office located?',
    answer: 'We are located at 3430 Finch Ave E, Suite 6A, Scarborough, ON M1W 2R5 (Warden & Finch Area). We are accessible by public transit and have parking available nearby.',
    keywords: ['location', 'address', 'where', 'directions', 'parking'],
  },
  {
    id: 3,
    category: 'general',
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment in several ways: (1) Use our online booking form on the Appointment page, (2) Call us at 416-649-6388, or (3) Email us at bsrvmedical@gmail.com. Walk-ins are also welcome!',
    keywords: ['book', 'appointment', 'schedule', 'reservation'],
  },
  {
    id: 4,
    category: 'services',
    question: 'What medical services do you offer?',
    answer: 'We offer comprehensive healthcare services including: Walk-In Clinic, Minor Injuries Treatment, Acute Illnesses, Medical Consultations, Dental Care, and Multilingual Services (English, Tamil, Hindi, Urdu, and more).',
    keywords: ['services', 'treatments', 'offer', 'specialties', 'medical'],
  },
  {
    id: 5,
    category: 'services',
    question: 'Do you provide dental services?',
    answer: 'Yes, we offer complete dental care services including routine checkups, emergency dental care, and comprehensive dental treatments. Our experienced dental team is ready to serve you.',
    keywords: ['dental', 'dentist', 'teeth', 'cleaning', 'orthodontics'],
  },
  {
    id: 6,
    category: 'services',
    question: 'Do you have family medicine services?',
    answer: 'Yes, our Family Medicine department is led by Dr. Ruhin Karim (MD, FRCGP, CCFP) and Dr. Mohammed Aamir Saiyed (MD). We offer patient-centred and preventive care for individuals and families.',
    keywords: ['family', 'medicine', 'doctor', 'physician', 'primary care'],
  },
  {
    id: 7,
    category: 'insurance',
    question: 'What insurance do you accept?',
    answer: 'We accept OHIP (Ontario Health Insurance Plan) and most major insurance providers. Please contact our office at 416-649-6388 to verify your specific plan.',
    keywords: ['insurance', 'coverage', 'payment', 'billing', 'accept'],
  },
  {
    id: 8,
    category: 'insurance',
    question: 'What are your payment options?',
    answer: 'We accept cash, credit cards (Visa, MasterCard), debit cards, and direct billing to insurance companies. For uninsured services, payment is due at the time of visit.',
    keywords: ['payment', 'pay', 'cost', 'price', 'money', 'card'],
  },
  {
    id: 9,
    category: 'doctors',
    question: 'How many doctors work at BSRV?',
    answer: 'We have experienced multilingual doctors including Dr. Ruhin Karim (UK-Trained Family Physician) and Dr. Mohammed Aamir Saiyed (MD, Central Michigan University), along with our dental team.',
    keywords: ['doctors', 'physicians', 'staff', 'team', 'specialists'],
  },
  {
    id: 10,
    category: 'doctors',
    question: 'Can I choose my doctor?',
    answer: 'Yes, you can request your preferred doctor when booking an appointment. You can view all our doctors and their specialties on the Doctors page. Walk-ins are also welcome.',
    keywords: ['choose', 'select', 'pick', 'doctor', 'physician'],
  },
  {
    id: 11,
    category: 'emergency',
    question: 'Do you offer emergency services?',
    answer: 'We offer walk-in care for urgent medical concerns during our operating hours (8 AM - 8 PM, 7 days a week). For life-threatening emergencies, please call 911 or go to the nearest emergency room.',
    keywords: ['emergency', 'urgent', 'immediate', 'critical', '911'],
  },
  {
    id: 12,
    category: 'specialties',
    question: 'What specialty services do you have?',
    answer: 'We specialize in Family Medicine, Dental Care, Minor Injuries, Acute Illnesses, and Medical Consultations. Our multilingual staff can serve patients in English, Tamil, Hindi, Urdu, Sylheti, Bengali, and Gujarati.',
    keywords: ['specialty', 'center', 'excellence', 'family medicine', 'dental'],
  },
  {
    id: 13,
    category: 'diagnostics',
    question: 'What diagnostic services are available?',
    answer: 'We offer basic diagnostic services including health assessments, blood pressure monitoring, and can provide referrals for specialized tests like X-Ray, MRI, CT scans, and laboratory testing.',
    keywords: ['diagnostic', 'test', 'x-ray', 'mri', 'scan', 'lab', 'blood'],
  },
  {
    id: 14,
    category: 'general',
    question: 'How do I contact BSRV?',
    answer: 'You can reach us by phone at 416-649-6388, by email at bsrvmedical@gmail.com, or visit us at 3430 Finch Ave E, Suite 6A, Scarborough, ON M1W 2R5.',
    keywords: ['contact', 'phone', 'email', 'reach', 'call'],
  },
  {
    id: 15,
    category: 'general',
    question: 'Is BSRV a licensed medical facility?',
    answer: 'Yes, BSRV Medical & Dental Office is a fully licensed medical facility. Our doctors are licensed with the College of Physicians and Surgeons of Ontario (CPSO) and maintain strict confidentiality of all patient records.',
    keywords: ['license', 'privacy', 'confidential', 'secure', 'protected'],
  },
  {
    id: 16,
    category: 'services',
    question: 'Do you offer walk-in services?',
    answer: 'Yes! We are a walk-in clinic open 7 days a week from 8 AM to 8 PM. No appointment necessary for urgent medical concerns. You can also call 416-649-6388 to check current wait times.',
    keywords: ['walk-in', 'urgent', 'immediate', 'no appointment'],
  },
  {
    id: 17,
    category: 'services',
    question: 'What languages do your staff speak?',
    answer: 'Our multilingual staff speaks English, Tamil, Hindi, Urdu, Sylheti, Bengali, and Gujarati. We are committed to serving our diverse community in their preferred language.',
    keywords: ['language', 'multilingual', 'speak', 'communication'],
  },
  {
    id: 18,
    category: 'services',
    question: 'Do you treat minor injuries?',
    answer: 'Yes, we treat minor injuries including sprains, cuts, burns, and other acute injuries. Our experienced medical team provides quick and professional care.',
    keywords: ['injury', 'minor', 'sprain', 'cut', 'burn', 'treatment'],
  },
  {
    id: 19,
    category: 'general',
    question: 'Do you offer telemedicine services?',
    answer: 'We primarily provide in-person care. For follow-up consultations, please call us at 416-649-6388 to inquire about available options.',
    keywords: ['telemedicine', 'telehealth', 'video', 'online', 'virtual', 'remote'],
  },
  {
    id: 20,
    category: 'general',
    question: 'How experienced are your doctors?',
    answer: 'Our doctors have extensive experience. Dr. Ruhin Karim is a UK-Trained Family Physician with FRCGP and CCFP certifications. Dr. Mohammed Aamir Saiyed completed his residency at Central Michigan University (2021-2024).',
    keywords: ['experience', 'qualified', 'trained', 'expert', 'years'],
  },
];

// Categories for filtering
export const categories = [
  { id: 'all', name: 'All Topics', icon: '📋' },
  { id: 'general', name: 'General Info', icon: 'ℹ️' },
  { id: 'services', name: 'Services', icon: '🏥' },
  { id: 'doctors', name: 'Doctors', icon: '👨‍⚕️' },
  { id: 'insurance', name: 'Insurance', icon: '💳' },
  { id: 'emergency', name: 'Emergency', icon: '🚨' },
  { id: 'specialties', name: 'Specialties', icon: '🔬' },
  { id: 'diagnostics', name: 'Diagnostics', icon: '📊' },
];

// Suggested questions for quick access
export const suggestedQuestions = [
  'How do I book an appointment?',
  'What services do you offer?',
  'What insurance do you accept?',
  'Where are you located?',
  'Do you have pediatric services?',
  'What are your operating hours?',
];

// Helper function to find relevant knowledge
export const findRelevantKnowledge = (query) => {
  const normalizedQuery = query.toLowerCase();
  
  // Score each knowledge item based on keyword matches
  const scored = knowledgeBase.map((item) => {
    let score = 0;
    
    // Check keyword matches
    item.keywords.forEach((keyword) => {
      if (normalizedQuery.includes(keyword)) {
        score += 3;
      }
    });
    
    // Check question word matches
    item.question.toLowerCase().split(' ').forEach((word) => {
      if (word.length > 3 && normalizedQuery.includes(word)) {
        score += 1;
      }
    });
    
    // Check category matches
    if (normalizedQuery.includes(item.category)) {
      score += 2;
    }
    
    return { ...item, score };
  });
  
  // Return top matches with score > 0
  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
};

// Generate response based on retrieved knowledge
export const generateResponse = (query, relevantKnowledge) => {
  if (relevantKnowledge.length === 0) {
    return {
      text: "I'm not sure about that specific question. For the best assistance, please contact us directly at +1 (555) 123-4567 or visit our Contact page. You can also browse our Services page to learn more about what we offer.",
      sources: [],
    };
  }
  
  const topMatch = relevantKnowledge[0];
  const sources = relevantKnowledge.map((k) => ({
    question: k.question,
    category: k.category,
  }));
  
  return {
    text: topMatch.answer,
    sources,
  };
};
