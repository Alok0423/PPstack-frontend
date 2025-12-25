import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

// Helper Component for Counting Animation
const Counter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Only animate once
  const [count, setCount] = useState(0);

  // Parse number string (e.g., "15,000+" -> 15000) for logic
  const numericValue = parseInt(value.replace(/,/g, '').replace(/\+/g, '').replace(/Cr/g, '').replace(/%/g, '')) || 0;
  const isCr = value.includes('Cr'); // Check if it's currency
  const isPercent = value.includes('%');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = numericValue / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
            setCount(numericValue);
            clearInterval(timer);
        } else {
            setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  // Formatting logic to put the "+" or "Cr" back
  const displayValue = () => {
     if (isCr) return `₹${(count/10).toFixed(1)} Cr`; // Hack for the 1.5 Cr logic
     return `${count.toLocaleString()}${isPercent ? '%' : '+'}`;
  };

  return (
    <div ref={ref} className="text-center md:text-left md:pl-8 first:pl-0">
      <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
        {/* If it's the specific 1.5Cr case, hardcode logic for demo smoothness, else use counter */}
        {value.includes("1.5") && isInView ? "₹1.5 Cr" : displayValue()} 
      </div>
      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{label}</div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { label: "Hiring Partners", value: "800+" },
    { label: "Active Learners", value: "15,000+" },
    { label: "Highest CTC", value: "1.5 Cr" },
    { label: "Average Hike", value: "150%" },
  ];

  return (
    <div className="bg-white border-b border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <Counter key={idx} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;