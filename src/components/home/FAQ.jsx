import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

// Data Source
const faqs = [
  {
    question: "Do I need a tech background to join?",
    answer: "No! Our courses are designed for beginners. We start from the absolute basics of programming and gradually move to advanced concepts. 60% of our successful students come from non-tech backgrounds."
  },
  {
    question: "How does the Placement Assistance work?",
    answer: "We offer lifetime placement support. This includes resume building, AI-powered mock interviews, and direct referrals to our network of 800+ hiring partners. We don't stop until you get hired."
  },
  {
    question: "Can I pay the fee in EMIs?",
    answer: "Yes, we have flexible EMI options starting as low as Rs. 5,000/month. We also offer scholarships based on the entrance test performance to make education accessible."
  },
  {
    question: "What happens if I miss a live class?",
    answer: "All live classes are recorded and uploaded to your dashboard within 2 hours. You can watch them anytime, anywhere, and ask doubts in the next session or via our 24/7 mentor support."
  },
  {
    question: "Is the certificate recognized by the industry?",
    answer: "Absolutely. PPStack certifications are recognized by top tech companies globally. Our curriculum is co-developed with industry experts from Google and Microsoft to ensure relevance."
  }
];

const FAQItem = ({ i, expanded, setExpanded, question, answer }) => {
  const isOpen = i === expanded;

  return (
    <div className="border-b border-gray-100 last:border-0">
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="flex items-center justify-between cursor-pointer py-6"
      >
        <h3 className={`text-lg font-bold transition-colors ${isOpen ? "text-blue-600" : "text-gray-900"}`}>
          {question}
        </h3>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-500"}`}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginBottom: 24 },
              collapsed: { opacity: 0, height: 0, marginBottom: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [expanded, setExpanded] = useState(0); // Default first one open

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
           <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">GOT QUESTIONS?</p>
           <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2 px-8">
            {faqs.map((item, i) => (
            <FAQItem
                key={i}
                i={i}
                expanded={expanded}
                setExpanded={setExpanded}
                question={item.question}
                answer={item.answer}
            />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;