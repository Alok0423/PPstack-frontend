import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Uses WhatsApp Click-to-Chat API
  const phoneNumber = "919250129025"; // Replace with your support number
  const message = encodeURIComponent("Hello PPStack, I need help with a course.");
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-[#25D366] hover:bg-[#20b85a] text-white p-3 rounded-full shadow-lg shadow-green-500/30 transition-transform hover:scale-110 flex items-center justify-center"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={24} fill="white" />
    </a>
  );
};

export default WhatsAppButton;