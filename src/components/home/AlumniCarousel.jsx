import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowUpRight, Linkedin } from 'lucide-react';

const ALUMNI_DATA = [
  { name: "Priya Sharma", role: "SDE-II", company: "Microsoft", hike: "250%", old: "Service Based", img: "https://i.pravatar.cc/150?u=1" },
  { name: "Rahul Verma", role: "Frontend Eng", company: "Cred", hike: "180%", old: "Unemployed", img: "https://i.pravatar.cc/150?u=2" },
  { name: "Sneha Gupta", role: "Data Scientist", company: "Uber", hike: "300%", old: "Analyst", img: "https://i.pravatar.cc/150?u=3" },
  { name: "Amit Kumar", role: "Backend Dev", company: "Zomato", hike: "200%", old: "TCS", img: "https://i.pravatar.cc/150?u=4" },
  { name: "Arjun Singh", role: "Full Stack", company: "Atlassian", hike: "400%", old: "Freelancer", img: "https://i.pravatar.cc/150?u=5" },
];

const AlumniCard = ({ data }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="min-w-[300px] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
  >
    {/* Background Decoration */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
    
    <div className="flex items-start justify-between mb-6 relative z-10">
      <div className="flex gap-4">
        <img src={data.img} alt={data.name} className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
        <div>
          <h4 className="font-bold text-gray-900">{data.name}</h4>
          <p className="text-xs text-gray-500">{data.role}</p>
        </div>
      </div>
      <Linkedin size={18} className="text-blue-600 cursor-pointer" />
    </div>

    <div className="space-y-3 relative z-10">
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Company</span>
        <span className="font-bold text-gray-900">{data.company}</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Prev. Role</span>
        <span className="text-gray-400 line-through">{data.old}</span>
      </div>
      
      <div className="pt-4 mt-4 border-t border-gray-50 flex items-center justify-between">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Salary Hike</span>
        <span className="text-xl font-bold text-green-600 flex items-center gap-1">
          <ArrowUpRight size={20} /> {data.hike}
        </span>
      </div>
    </div>
  </motion.div>
);

const AlumniCarousel = () => {
  const scrollRef = useRef(null);

  return (
    <section className="py-20 bg-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
        <div>
           <p className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-2">WALL OF FAME</p>
           <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
        </div>
        <div className="text-sm text-gray-500">Swipe to see more &rarr;</div>
      </div>

      {/* Draggable Carousel Container */}
      <div className="pl-6 overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div 
          ref={scrollRef}
          className="flex gap-6 pb-8"
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }} // Adjust based on content width
        >
          {ALUMNI_DATA.map((student, idx) => (
            <AlumniCard key={idx} data={student} />
          ))}
          {ALUMNI_DATA.map((student, idx) => (
            <AlumniCard key={`dup-${idx}`} data={student} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AlumniCarousel;