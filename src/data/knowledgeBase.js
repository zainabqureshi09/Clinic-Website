// Healthcare Knowledge Base for RAG Chatbot
// This contains structured information that the chatbot can retrieve and use to answer questions

export const knowledgeBase = [
  {
    id: 1,
    category: 'general',
    question: 'What are your operating hours?',
    answer: 'Our clinic is open Monday through Friday from 8:00 AM to 8:00 PM, and Saturday through Sunday from 9:00 AM to 5:00 PM. We also offer same-day appointments for urgent care needs.',
    keywords: ['hours', 'open', 'time', 'schedule', 'when'],
  },
  {
    id: 2,
    category: 'general',
    question: 'Where is MediLux Healthcare located?',
    answer: 'We are located at 123 Healthcare Boulevard, Medical District, MD 20001, United States. Free parking is available, and we are accessible via bus routes 10, 25, and 42. The metro station is 2 blocks away.',
    keywords: ['location', 'address', 'where', 'directions', 'parking'],
  },
  {
    id: 3,
    category: 'general',
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment in several ways: (1) Use our online booking form on the Appointment page, (2) Call us at +1 (555) 123-4567, or (3) Email us at appointments@medilux.com. We typically respond within 24 hours to confirm your appointment.',
    keywords: ['book', 'appointment', 'schedule', 'reservation'],
  },
  {
    id: 4,
    category: 'services',
    question: 'What medical services do you offer?',
    answer: 'We offer comprehensive healthcare services including: General Medicine, Dental Care, Cardiology, Neurology, Orthopedics, Pediatrics, Ophthalmology, and Diagnostic Services (X-Ray, MRI, CT scans, and laboratory testing).',
    keywords: ['services', 'treatments', 'offer', 'specialties', 'medical'],
  },
  {
    id: 5,
    category: 'services',
    question: 'Do you provide dental services?',
    answer: 'Yes, we offer complete dental care services including routine cleanings and exams, fillings and crowns, teeth whitening, and orthodontics. Our dental team is led by Dr. Emily Roberts who has 15+ years of experience.',
    keywords: ['dental', 'dentist', 'teeth', 'cleaning', 'orthodontics'],
  },
  {
    id: 6,
    category: 'services',
    question: 'Do you have pediatric services?',
    answer: 'Yes, our Pediatrics department is led by Dr. Lisa Thompson (Yale School of Medicine, 14+ years experience). We offer well-child visits, immunizations, developmental screening, and sick visits in a child-friendly environment.',
    keywords: ['pediatric', 'children', 'kids', 'baby', 'vaccination'],
  },
  {
    id: 7,
    category: 'insurance',
    question: 'What insurance do you accept?',
    answer: 'We accept most major insurance providers including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, and Medicare. Please contact our billing department at +1 (555) 987-6543 to verify your specific plan.',
    keywords: ['insurance', 'coverage', 'payment', 'billing', 'accept'],
  },
  {
    id: 8,
    category: 'insurance',
    question: 'What are your payment options?',
    answer: 'We accept cash, credit cards (Visa, MasterCard, American Express), debit cards, HSA/FSA cards, and payment plans for larger procedures. We also offer a 10% discount for self-pay patients who pay at the time of service.',
    keywords: ['payment', 'pay', 'cost', 'price', 'money', 'card'],
  },
  {
    id: 9,
    category: 'doctors',
    question: 'How many doctors work at MediLux?',
    answer: 'We have over 150 expert doctors and specialists across all departments. Our team includes board-certified physicians with experience from top institutions like Harvard Medical School, Johns Hopkins, Stanford, and Yale.',
    keywords: ['doctors', 'physicians', 'staff', 'team', 'specialists'],
  },
  {
    id: 10,
    category: 'doctors',
    question: 'Can I choose my doctor?',
    answer: 'Yes, you can choose your preferred doctor when booking an appointment. You can view all our doctors and their specialties on the Doctors page. If your preferred doctor is unavailable, we can schedule you with another qualified physician in the same department.',
    keywords: ['choose', 'select', 'pick', 'doctor', 'physician'],
  },
  {
    id: 11,
    category: 'emergency',
    question: 'Do you offer emergency services?',
    answer: 'We offer same-day appointments for urgent care needs during our operating hours. For life-threatening emergencies, please call 911 or go to the nearest emergency room. We can provide follow-up care after emergency treatment.',
    keywords: ['emergency', 'urgent', 'immediate', 'critical', '911'],
  },
  {
    id: 12,
    category: 'specialties',
    question: 'What specialty centers do you have?',
    answer: 'Our Centers of Excellence include Endocrinology (diabetes, thyroid, hormone therapy) and Nephrology (kidney disease, dialysis, transplant care). We also have specialized programs in cardiology, neurology, and orthopedics.',
    keywords: ['specialty', 'center', 'excellence', 'endocrinology', 'nephrology'],
  },
  {
    id: 13,
    category: 'diagnostics',
    question: 'What diagnostic services are available?',
    answer: 'We offer comprehensive diagnostic services including X-Ray, MRI, CT scans, ultrasound, echocardiogram, stress testing, and full laboratory testing. Most test results are available within 24-48 hours.',
    keywords: ['diagnostic', 'test', 'x-ray', 'mri', 'scan', 'lab', 'blood'],
  },
  {
    id: 14,
    category: 'general',
    question: 'How do I contact MediLux?',
    answer: 'You can reach us by phone at +1 (555) 123-4567, by email at info@medilux.com, or through our Contact page. For appointments, use appointments@medilux.com. Follow us on social media for updates and health tips.',
    keywords: ['contact', 'phone', 'email', 'reach', 'call'],
  },
  {
    id: 15,
    category: 'general',
    question: 'Is MediLux HIPAA compliant?',
    answer: 'Yes, MediLux Healthcare is fully HIPAA compliant. We maintain strict confidentiality of all patient records and communications. Your health information is protected and only shared with authorized healthcare providers.',
    keywords: ['hipaa', 'privacy', 'confidential', 'secure', 'protected'],
  },
  {
    id: 16,
    category: 'services',
    question: 'Do you offer cardiology services?',
    answer: 'Yes, our Cardiology department is led by Dr. James Chen (Johns Hopkins University, 18+ years experience). We offer ECG, echocardiogram, stress testing, cardiac rehabilitation, and preventive cardiology services.',
    keywords: ['cardiology', 'heart', 'cardiac', 'ecg', 'cardiovascular'],
  },
  {
    id: 17,
    category: 'services',
    question: 'Do you provide neurology services?',
    answer: 'Yes, our Neurology department is led by Dr. Michael Patel (Stanford University, 22+ years experience). We treat headaches, stroke, epilepsy, movement disorders, and other neurological conditions.',
    keywords: ['neurology', 'brain', 'nerve', 'headache', 'stroke', 'epilepsy'],
  },
  {
    id: 18,
    category: 'services',
    question: 'What orthopedic services do you offer?',
    answer: 'Our Orthopedics department offers joint replacement, sports medicine, fracture care, and physical therapy. Dr. Robert Kim (Columbia University, 16+ years experience) leads our orthopedic surgery team.',
    keywords: ['orthopedic', 'bone', 'joint', 'sports', 'fracture', 'physical therapy'],
  },
  {
    id: 19,
    category: 'general',
    question: 'Do you offer telemedicine services?',
    answer: 'Yes, we offer telemedicine consultations for follow-up visits, medication management, and certain non-emergency conditions. Ask our staff when booking if telemedicine is appropriate for your needs.',
    keywords: ['telemedicine', 'telehealth', 'video', 'online', 'virtual', 'remote'],
  },
  {
    id: 20,
    category: 'general',
    question: 'How experienced are your doctors?',
    answer: 'Our doctors have an average of 18+ years of experience. Our team includes specialists trained at top institutions like Harvard, Johns Hopkins, Stanford, Yale, and Columbia. We have 25+ years of combined healthcare excellence.',
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
