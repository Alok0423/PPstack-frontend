import React from 'react';
import { BookOpen, MonitorPlay, Users, MessageSquare, Play } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, color }) => (
  <div className={`p-6 rounded-2xl border border-gray-100 bg-${color}-50/30 hover:bg-${color}-50 transition-colors duration-300`}>
    <div className={`w-10 h-10 rounded-lg bg-${color}-100 text-${color}-600 flex items-center justify-center mb-4`}>
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const IndustryLearning = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">WHY NEWTON SCHOOL</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Industry-tailored learning</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <FeatureCard 
              icon={BookOpen} 
              color="purple"
              title="Industry-oriented curriculum" 
              desc="An updated curriculum engineered to teach you only what the industry demands." 
            />
            <FeatureCard 
              icon={MonitorPlay} 
              color="blue"
              title="AI-driven learning products" 
              desc="AI-based IDE with real-time support and help, AI-based mock interviews." 
            />
            <FeatureCard 
              icon={Users} 
              color="green"
              title="Experienced Instructors" 
              desc="Courses taught only by people who have already aced it! 1000+ tech professionals." 
            />
            <FeatureCard 
              icon={MessageSquare} 
              color="orange"
              title="1000+ mock interviews" 
              desc="Practice your skills with an unlimited number of mock interviews you can schedule yourself." 
            />
          </div>

          {/* Right Video Card */}
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-2 opacity-10 group-hover:rotate-3 transition-transform"></div>
            <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <div className="relative aspect-video">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600" alt="Video thumbnail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg pl-1">
                    <Play fill="currentColor" className="text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold">Mohammad Rushwan Khan</h4>
                    <p className="text-sm text-gray-500">Research Associate</p>
                  </div>
                  <div className="h-8 w-24 bg-green-100 rounded flex items-center justify-center text-green-700 font-bold text-sm">
                    Numerator
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">
                Request a Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryLearning;