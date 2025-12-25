import React from 'react';
import { Download, CheckSquare } from 'lucide-react';

const OfferingCard = ({ title, type, duration, batchDate, price, eligibility, color }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow flex flex-col h-full">
    <h3 className={`text-2xl font-bold text-${color}-600 mb-4`}>{title}</h3>
    <div className="flex gap-2 mb-6">
      <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded uppercase">{type}</span>
      <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded uppercase">{duration}</span>
    </div>

    <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
      <div>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">New Batch Start</p>
        <p className="text-gray-900 font-bold">{batchDate}</p>
      </div>
      <div>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Scholarship</p>
        <p className="text-gray-900 font-bold">Yes</p>
      </div>
      <div>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">EMI Starts</p>
        <p className="text-gray-900 font-bold">{price}</p>
      </div>
      <div>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Eligibility</p>
        <p className="text-gray-900 font-bold">{eligibility}</p>
      </div>
    </div>

    <ul className="space-y-3 mb-8 flex-1">
      {['Professional Certificate', 'Unlimited Mock Interviews', '100% Placement Assistance', 'No coding experience required'].map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-gray-600">
          <CheckSquare size={16} className={`text-${color}-500 shrink-0`} />
          {item}
        </li>
      ))}
    </ul>

    <div className="grid grid-cols-2 gap-4">
      <button className={`py-3 bg-${color}-600 hover:bg-${color}-700 text-white font-bold rounded-lg transition`}>
        Explore Course
      </button>
      <button className="py-3 border border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
        <Download size={16} /> Brochure
      </button>
    </div>
  </div>
);

const Offerings = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Offerings</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <OfferingCard 
            title="Data Science & Artificial Intelligence"
            color="blue"
            type="Online"
            duration="14 Months"
            batchDate="Nov 28, 2025"
            price="Rs. 7,200"
            eligibility="Open for All"
          />
          <OfferingCard 
            title="Advanced Full Stack Development"
            color="green"
            type="Online"
            duration="6-8 Months"
            batchDate="Dec 10, 2025"
            price="Rs. 6,167"
            eligibility="Open for All"
          />
        </div>
      </div>
    </section>
  );
};

export default Offerings;