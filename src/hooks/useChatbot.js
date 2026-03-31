import { useState, useCallback, useRef } from 'react';
import { findRelevantKnowledge, generateResponse, suggestedQuestions } from '../data/knowledgeBase';

export const useChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hello! I'm the BSRV Medical & Dental Assistant. How can I help you today? You can ask me about our doctors (Dr. Ruhin Karim, Dr. Mohammed Aamir Saiyed, Dr. Pooja Kharbanda), services, appointments, insurance, and more.",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = useCallback(async (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate processing delay for natural feel
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

    // RAG: Retrieve relevant knowledge
    const relevantKnowledge = findRelevantKnowledge(text);
    
    // Generate response based on retrieved knowledge
    const response = generateResponse(text, relevantKnowledge);

    // Add bot response
    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      text: response.text,
      sources: response.sources,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  }, []);

  const sendSuggestedQuestion = useCallback((question) => {
    sendMessage(question);
  }, [sendMessage]);

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: Date.now(),
        type: 'bot',
        text: "Hello! I'm the BSRV Medical & Dental Assistant. How can I help you today? You can ask me about our doctors (Dr. Ruhin Karim, Dr. Mohammed Aamir Saiyed, Dr. Pooja Kharbanda), services, appointments, insurance, and more.",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    messages,
    isTyping,
    isOpen,
    selectedCategory,
    setSelectedCategory,
    sendMessage,
    sendSuggestedQuestion,
    clearChat,
    toggleChat,
    messagesEndRef,
    suggestedQuestions,
  };
};
