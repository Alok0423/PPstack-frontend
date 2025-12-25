import React from 'react';
import { Linkedin } from 'lucide-react';

const FacultyCard = ({ name, role, company, image }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition text-center group">
    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-gray-50 group-hover:border-blue-100 transition-colors">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg font-bold text-gray-900">{name}</h3>
    <p className="text-xs text-gray-500 mb-3">{role}</p>
    <div className="flex items-center justify-center gap-2 pt-3 border-t border-gray-50">
      <span className="font-bold text-gray-700 text-sm">{company}</span>
      <Linkedin size={14} className="text-blue-600" />
    </div>
  </div>
);

const Faculty = () => {
  const instructors = [
    { name: "Vishal Sharma", role: "Software Engineer-2", company: "Zepto", img: "https://i.pravatar.cc/150?img=11" },
    { name: "Gladden Rumao", role: "Technical Instructor", company: "Barclays", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Bhavesh Bansal", role: "Senior Engineer", company: "Appbrew", img: "https://i.pravatar.cc/150?img=13" },
    { name: "Rahul Jaiswal", role: "MERN Trainer", company: "Ducat", img: "https://i.pravatar.cc/150?img=14" },
  ];

  return (
    <section className="py-20 bg-[#FFF8E5]"> {/* Specific Beige Background */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">INTRODUCING THE FACULTY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Learn From The Best</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50">←</button>
            <button className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50">→</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((inst, idx) => (
            <FacultyCard key={idx} name={inst.name} role={inst.role} company={inst.company} image={inst.img} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-sm font-bold shadow-sm hover:bg-gray-50">
                Connect with Alumni
             </button>
        </div>
      </div>
    </section>
  );
};

export default Faculty;