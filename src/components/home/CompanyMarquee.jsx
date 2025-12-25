import React from 'react';
import { motion } from 'framer-motion';

const CompanyMarquee = () => {
  const companies = [
    "Google", "Microsoft", "Amazon", "Meta", "Netflix", "Uber", 
    "Flipkart", "Zomato", "Swiggy", "Paytm", "Adobe", "Intel"
  ];

  return (
    <div className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-lg text-gray-600">
          Get offers from <span className="font-bold text-blue-600">800+ top companies</span>
        </p>
      </div>
      
      <div className="flex w-full overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div 
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...companies, ...companies, ...companies].map((company, index) => (
            <span key={index} className="text-2xl font-bold text-gray-400 uppercase tracking-widest hover:text-gray-800 transition-colors cursor-default">
              {company}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyMarquee;