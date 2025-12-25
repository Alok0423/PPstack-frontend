import React, { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnrollModal from '../ui/EnrollModal'; // Ensure you have this file created

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-black overflow-hidden min-h-[90vh] flex items-center">
        
        {/* 1. Background Ambient Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        </div>

        {/* 2. Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT COLUMN: Text Content */}
            <div className="text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                <Star size={12} fill="currentColor" />
                Learn what the industry demands
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Unlock your dream <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  tech job
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                AI-driven, industry-focused courses in software development and data science. 
                Join the community of top 1% tech talent.
              </p>

              {/* Buttons Row */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-transform hover:scale-105 shadow-xl shadow-white/10"
                >
                  Talk to an Expert
                </button>
                
                <Link to="/courses">
                  <button className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-xl hover:bg-white/5 transition-colors">
                    Explore Courses
                  </button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">15K+ Students Enrolled</p>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                    <span className="text-gray-500 ml-2">4.9/5 Rated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Form */}
            <div className="relative">
              {/* Form Glow */}
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-3xl -z-10 transform rotate-2"></div>
              
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Book a Live Class</h3>
                    <p className="text-sm text-gray-500 mt-1">Free for limited time!</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <span className="font-bold text-blue-600 text-xl">G</span>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="flex gap-3">
                    <div className="px-3 py-3.5 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 text-sm font-medium flex items-center justify-center min-w-[60px]">
                      +91
                    </div>
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                  </div>

                  <div className="pt-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">I am interested in</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button type="button" className="py-2.5 px-2 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
                        Data Science / AI
                      </button>
                      <button type="button" className="py-2.5 px-2 text-xs font-bold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                        Full Stack Dev
                      </button>
                    </div>
                  </div>

                  <button className="w-full py-4 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
                    Start My Journey <CheckCircle size={18} />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Modal Component (Rendered outside the main flow) */}
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;