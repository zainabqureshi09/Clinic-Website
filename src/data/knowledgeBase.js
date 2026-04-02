// Healthcare Knowledge Base for RAG Chatbot
// This contains structured information that the chatbot can retrieve and use to answer questions

export const knowledgeBase = [
  {
    id: 1,
    category: 'general',
    question: 'What are your operating hours?',
    answer: 'Our clinic is open 7 days a week. For urgent care needs, we welcome walk-ins. Please call us at 416-649-6388 for specific department hours.',
    keywords: ['hours', 'open', 'time', 'schedule', 'when'],
  },
  {
    id: 2,
    category: 'general',
    question: 'Where is BSRV Medical & Dental located?',
    answer: 'We are located at 3430 Finch Ave E, Suite 6A, Scarborough, ON M1W 2R5 (Warden & Finch Area). We are accessible by public transit and have parking available nearby.',
    keywords: ['location', 'address', 'where', 'directions', 'parking'],
  },
  {
    id: 3,
    category: 'general',
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment in several ways: (1) Use our online booking form on the Appointment page, (2) Call us at 416-649-6388, or (3) Email us at bsrvmedical@gmail.com. Walk-ins are also welcome for urgent care!',
    keywords: ['book', 'appointment', 'schedule', 'reservation'],
  },
  {
    id: 4,
    category: 'services',
    question: 'What medical services do you offer?',
    answer: 'We offer comprehensive healthcare services including: General Medicine (Family Medicine & Primary Care, Chronic Disease Management, Children & Adult Care, Acute Care for Illnesses, Preventive Health & Annual Physicals, Vaccinations & Immunizations, Women\'s Health, Minor Procedures) and Endocrinology & Metabolism (Diabetes Management, Thyroid Disorders, Bone & Calcium Metabolism, Pituitary & Adrenal Disorders, Metabolic Syndrome & Lipid Disorders). Our multilingual staff serves patients in English, Tamil, Hindi, Urdu, Sylheti, Bengali, and Gujarati.',
    keywords: ['services', 'treatments', 'offer', 'specialties', 'medical'],
  },
  {
    id: 5,
    category: 'services',
    question: 'Do you provide endocrinology services?',
    answer: 'Yes, we offer comprehensive endocrinology services including: Diabetes Management (Type 1, Type 2, Gestational), Thyroid Disorders, Bone & Calcium Metabolism, Pituitary & Adrenal Disorders, and Metabolic Syndrome & Lipid Disorders.',
    keywords: ['endocrinology', 'diabetes', 'thyroid', 'hormone', 'metabolism'],
  },
  {
    id: 6,
    category: 'doctors',
    question: 'Who are the doctors at BSRV?',
    answer: 'Our medical team includes: Dr. Ruhin Karim (MD, FRCGP, CCFP - Professor of Family Medicine, UK-Trained), Dr. Mohammed Aamir Saiyed (MD - Family Medicine, Central Michigan University), and Dr. Pooja Kharbanda (Nephrologist and Internist).',
    keywords: ['doctors', 'physicians', 'staff', 'team', 'specialists'],
  },
  {
    id: 7,
    category: 'doctors',
    question: 'Tell me about Dr. Ruhin Karim',
    answer: 'Dr. Ruhin Karim is a UK-Trained Family Physician with MD, FRCGP, and CCFP certifications. He is a Professor of Family Medicine specializing in patient-centred and preventive care for individuals and families. He speaks English, Sylheti, Bengali, Urdu, and Hindi.',
    keywords: ['ruhin', 'karim', 'professor', 'uk-trained'],
  },
  {
    id: 8,
    category: 'doctors',
    question: 'Tell me about Dr. Mohammed Aamir Saiyed',
    answer: 'Dr. Mohammed Aamir Saiyed (MD) completed his Family Medicine residency at Central Michigan University (2021-2024) and internship at Central Michigan University (2021-2022). He graduated from American University of the Caribbean School of Medicine (Class of 2021). He speaks English, Hindi, Urdu, and Gujarati.',
    keywords: ['saiyed', 'aamir', 'mohammed', 'central michigan'],
  },
  {
    id: 9,
    category: 'doctors',
    question: 'Tell me about Dr. Pooja Kharbanda',
    answer: 'Dr. Pooja Kharbanda is an Endocrinologist and Internist specializing in complex hormonal and metabolic conditions. She completed her Medical Degree at Aureus University School of Medicine, Internal Medicine Residency in Pennsylvania, and Endocrinology Fellowship at Jefferson Einstein Hospital, Philadelphia. She is licensed with the College of Physicians and Surgeons of Ontario (CPSO).',
    keywords: ['pooja', 'kharbanda', 'endocrinologist', 'diabetes', 'internist'],
  },
  {
    id: 10,
    category: 'services',
    question: 'What does Dr. Pooja Kharbanda specialize in?',
    answer: 'Dr. Pooja Kharbanda specializes in: Diabetes Management (Type 1, Type 2, Gestational), Thyroid Disorders, Bone & Calcium Metabolism, and Pituitary & Adrenal Disorders. She provides patient-centered, evidence-based care with clear communication and individualized treatment.',
    keywords: ['endocrinology', 'diabetes', 'thyroid', 'hormone', 'metabolism'],
  },
  {
    id: 11,
    category: 'insurance',
    question: 'What insurance do you accept?',
    answer: 'We accept OHIP (Ontario Health Insurance Plan) and most major insurance providers. Please contact our office at 416-649-6388 to verify your specific plan.',
    keywords: ['insurance', 'coverage', 'payment', 'billing', 'accept'],
  },
  {
    id: 12,
    category: 'insurance',
    question: 'What are your payment options?',
    answer: 'We accept cash, credit cards (Visa, MasterCard), debit cards, and direct billing to insurance companies. For uninsured services, payment is due at the time of visit.',
    keywords: ['payment', 'pay', 'cost', 'price', 'money', 'card'],
  },
  {
    id: 13,
    category: 'doctors',
    question: 'Can I choose my doctor?',
    answer: 'Yes, you can request your preferred doctor when booking an appointment. You can view all our doctors and their specialties on the Our Doctors page. Walk-ins are also welcome.',
    keywords: ['choose', 'select', 'pick', 'doctor', 'physician'],
  },
  {
    id: 14,
    category: 'emergency',
    question: 'Do you offer emergency services?',
    answer: 'We offer walk-in care for urgent medical concerns during our operating hours. For life-threatening emergencies, please call 911 or go to the nearest emergency room.',
    keywords: ['emergency', 'urgent', 'immediate', 'critical', '911'],
  },
  {
    id: 15,
    category: 'services',
    question: 'Do you offer walk-in services?',
    answer: 'Yes! We are a walk-in clinic open 7 days a week. No appointment necessary for urgent medical concerns. You can also call 416-649-6388 to check current wait times.',
    keywords: ['walk-in', 'urgent', 'immediate', 'no appointment'],
  },
  {
    id: 16,
    category: 'services',
    question: 'What languages do your staff speak?',
    answer: 'Our multilingual staff speaks English, Tamil, Hindi, Urdu, Sylheti, Bengali, and Gujarati. Dr. Ruhin Karim speaks English, Sylheti, Bengali, Urdu, and Hindi. Dr. Mohammed Aamir Saiyed speaks English, Hindi, Urdu, and Gujarati.',
    keywords: ['language', 'multilingual', 'speak', 'communication'],
  },
  {
    id: 17,
    category: 'services',
    question: 'Do you treat minor injuries?',
    answer: 'Yes, we treat minor injuries including sprains, cuts, burns, and other acute injuries. Our experienced medical team provides quick and professional care.',
    keywords: ['injury', 'minor', 'sprain', 'cut', 'burn', 'treatment'],
  },
  {
    id: 18,
    category: 'general',
    question: 'How do I contact BSRV?',
    answer: 'You can reach us by phone at 416-649-6388, by email at bsrvmedical@gmail.com, or visit us at 3430 Finch Ave E, Suite 6A, Scarborough, ON M1W 2R5.',
    keywords: ['contact', 'phone', 'email', 'reach', 'call'],
  },
  {
    id: 19,
    category: 'general',
    question: 'Is BSRV a licensed medical facility?',
    answer: 'Yes, BSRV Medical & Dental is a fully licensed medical facility. Our doctors are licensed with the College of Physicians and Surgeons of Ontario (CPSO) and maintain strict confidentiality of all patient records.',
    keywords: ['license', 'privacy', 'confidential', 'secure', 'protected'],
  },
  {
    id: 20,
    category: 'general',
    question: 'Do you offer telemedicine services?',
    answer: 'We primarily provide in-person care. For follow-up consultations, please call us at 416-649-6388 to inquire about available options.',
    keywords: ['telemedicine', 'telehealth', 'video', 'online', 'virtual', 'remote'],
  },
  {
    id: 21,
    category: 'services',
    question: 'Do you offer family medicine?',
    answer: 'Yes, our General Medicine department includes Family Medicine led by Dr. Ruhin Karim (MD, FRCGP, CCFP) and Dr. Mohammed Aamir Saiyed (MD). We offer patient-centred and preventive care for individuals and families.',
    keywords: ['family', 'medicine', 'doctor', 'physician', 'primary care'],
  },
  {
    id: 22,
    category: 'services',
    question: 'Do you have endocrinology services?',
    answer: 'Yes, Dr. Pooja Kharbanda is our Endocrinologist and Internist specializing in Diabetes Management (Type 1, Type 2, Gestational), Thyroid Disorders, Bone & Calcium Metabolism, and Pituitary & Adrenal Disorders.',
    keywords: ['endocrinology', 'diabetes', 'thyroid', 'hormone', 'metabolism'],
  },
  {
    id: 23,
    category: 'general',
    question: 'What is your phone number?',
    answer: 'You can reach us at 416-649-6388. Call us to book appointments, check wait times, or speak with our staff.',
    keywords: ['phone', 'call', 'number', 'telephone'],
  },
  {
    id: 24,
    category: 'general',
    question: 'What is your email address?',
    answer: 'You can reach us by email at bsrvmedical@gmail.com.',
    keywords: ['email', 'mail', 'contact'],
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
];

// Suggested questions for quick access
export const suggestedQuestions = [
  'How do I book an appointment?',
  'What services do you offer?',
  'Who are your doctors?',
  'What insurance do you accept?',
  'Where are you located?',
  'What are your hours?',
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
      text: "I'm not sure about that specific question. For the best assistance, please contact us directly at 416-649-6388 or email bsrvmedical@gmail.com. You can also visit us at 3430 Finch Ave E, Suite 6A, Scarborough, ON M1W 2R5.",
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
