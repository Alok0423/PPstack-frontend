import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Backend Response Generator
const getBotResponse = (input) => {
  const lower = input.toLowerCase();
  if (lower.includes("price") || lower.includes("fee")) return "Our courses start at ₹6,167/month with EMI options.";
  if (lower.includes("placement")) return "We have a 98% placement rate with 800+ hiring partners.";
  if (lower.includes("hello")) return "Hello! How can I help you accelerate your career today?";
  return "I'll have a human counselor reach out to you for that specific query.";
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! 👋 I'm the PPStack AI. Ask me about courses!", sender: "bot" }
  ]);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages(prev => [...prev, { id: Date.now(), text: userText, sender: "user" }]);
    setInput("");
    setIsTyping(true);

    // Simulate Network Delay
    setTimeout(() => {
      const response = getBotResponse(userText);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: response, sender: "bot" }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            className="mb-4 w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          >
            <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Bot size={20} /> <span className="font-bold text-sm">PPStack AI</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={18} /></button>
            </div>

            <div className="h-[300px] overflow-y-auto p-4 bg-gray-50 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-white border text-gray-800 rounded-tl-none shadow-sm"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && <div className="text-xs text-gray-400 ml-4 animate-pulse">AI is typing...</div>}
              <div ref={endRef} />
            </div>

            <form onSubmit={handleSend} className="p-3 bg-white border-t flex gap-2">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." className="flex-1 bg-gray-100 rounded-full px-4 text-sm outline-none" />
              <button type="submit" className="p-2 bg-blue-600 text-white rounded-full"><Send size={18} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition flex items-center gap-2">
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;