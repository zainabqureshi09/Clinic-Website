import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  RotateCcw,
  Minimize2,
  Maximize2,
  Sparkles,
} from 'lucide-react';
import { useChatbot } from '../hooks/useChatbot';
import { categories } from '../data/knowledgeBase';

const Chatbot = () => {
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const {
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
  } = useChatbot();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        
        {/* Notification Badge */}
        {!isOpen && (
          <motion.span
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className={`fixed bottom-24 right-6 z-50 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 flex flex-col ${
              isExpanded ? 'w-[90vw] max-w-4xl h-[80vh]' : 'w-96'
            }`}
            style={{ maxHeight: isExpanded ? '80vh' : '600px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-t-2xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">BSRV Medical & Dental Assistant</h3>
                  <p className="text-white/80 text-xs">Always Online • Here to Help</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-white/80 hover:text-white transition-colors p-2"
                  title={isExpanded ? 'Minimize' : 'Expand'}
                >
                  {isExpanded ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={clearChat}
                  className="text-white/80 hover:text-white transition-colors p-2"
                  title="Clear Chat"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button
                  onClick={toggleChat}
                  className="text-white/80 hover:text-white transition-colors p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category Filter */}
            {isExpanded && (
              <div className="flex gap-2 p-3 border-b border-gray-200 dark:border-slate-700 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-950">
              {/* Suggested Questions */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4"
                >
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span>Suggested questions:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.slice(0, 4).map((question, index) => (
                      <motion.button
                        key={question}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => sendSuggestedQuestion(question)}
                        className="px-3 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Chat Messages */}
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                        : 'bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200'
                    } rounded-2xl px-4 py-3 shadow-sm`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === 'bot' && (
                        <Bot className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        
                        {/* Sources */}
                        {message.sources && message.sources.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-700">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                              Related topics:
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {message.sources.map((source, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs rounded-md"
                                >
                                  {source.question}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {message.type === 'user' && (
                        <User className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      )}
                    </div>
                    <p
                      className={`text-xs mt-2 ${
                        message.type === 'user'
                          ? 'text-white/70'
                          : 'text-gray-400 dark:text-gray-500'
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-5 h-5 text-emerald-500" />
                      <div className="flex space-x-1">
                        <motion.span
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.span
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.span
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 border-0 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <motion.button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
                This is an AI assistant. For emergencies, call 911.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
