import React from 'react';
import { Share2, FileCode, Code, Award } from 'lucide-react';

const RoadmapCard = ({ icon: Icon, title, desc, subtitle, color, bg }) => (
  <div className={`relative p-8 rounded-2xl ${bg} border border-${color}-100 overflow-hidden group hover:shadow-lg transition-all`}>
    <div className={`absolute top-0 right-0 p-3 bg-${color}-100 rounded-bl-2xl text-${color}-600 font-bold text-xs uppercase`}>
      {subtitle}
    </div>
    <div className={`w-12 h-12 rounded-xl bg-white shadow-sm text-${color}-600 flex items-center justify-center mb-6`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const CareerRoadmap = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">WELCOME TO THE OUTCOME POWERHOUSE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Your Recipe for a Rockstar career</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <RoadmapCard 
            icon={Share2}
            title="Get Referrals"
            desc="Boost your job prospects with referrals from our vast network of companies."
            subtitle="Access 3000+ Companies"
            bg="bg-orange-50"
            color="orange"
          />
          <RoadmapCard 
            icon={FileCode}
            title="Company-Specific Prep"
            desc="Get ready for interviews with customized preparation for your target companies."
            subtitle="Tailored Interview Prep"
            bg="bg-blue-50"
            color="blue"
          />
          <RoadmapCard 
            icon={Code}
            title="Live Coding Practice"
            desc="Improve your skills with live coding exercises and real time feedback."
            subtitle="Interactive Sessions"
            bg="bg-purple-50"
            color="purple"
          />
          <RoadmapCard 
            icon={Award}
            title="Career Support"
            desc="Continue to receive job opportunities and support as a valued alumnus."
            subtitle="Lifetime Assistance"
            bg="bg-green-50"
            color="green"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmap;