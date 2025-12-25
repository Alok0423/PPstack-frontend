import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Star, Clock, Globe, CheckCircle, PlayCircle, Lock, ChevronDown, ChevronUp } from 'lucide-react';

// --- MOCK DATABASE (In real app, this comes from API) ---
const COURSE_DB = {
  1: {
    title: "Full Stack Web Development",
    instructor: "Rahul Jaiswal",
    rating: 4.8,
    reviews: "2.1k",
    duration: "8 Months",
    price: "₹6,167/mo",
    enrolled: "12,400",
    description: "Master the MERN stack (MongoDB, Express, React, Node.js) and build production-ready applications. This course is designed for absolute beginners to become industry-ready developers.",
    syllabus: [
      { module: "Module 1: Frontend Fundamentals", topics: ["HTML5 & Semantic Web", "CSS Grid & Flexbox", "JavaScript ES6+"] },
      { module: "Module 2: React Ecosystem", topics: ["Hooks & State Management", "Redux Toolkit", "React Router v6"] },
      { module: "Module 3: Backend Architecture", topics: ["Node.js Runtime", "Express Middleware", "REST API Design"] }
    ]
  },
  // Fallback data for demo purposes if ID doesn't match
  default: {
    title: "Advanced Data Science & AI",
    instructor: "Vishal Sharma",
    rating: 4.9,
    reviews: "3.5k",
    duration: "14 Months",
    price: "₹7,200/mo",
    enrolled: "8,200",
    description: "Deep dive into Artificial Intelligence, Machine Learning, and Neural Networks. Learn how to build predictive models and deploy them using Python and TensorFlow.",
    syllabus: [
      { module: "Module 1: Python for Data Science", topics: ["NumPy & Pandas", "Data Visualization", "Statistical Analysis"] },
      { module: "Module 2: Machine Learning", topics: ["Supervised Learning", "Unsupervised Learning", "Scikit-Learn"] }
    ]
  }
};

const CourseDetail = () => {
  const { id } = useParams(); // <--- THIS IS THE MAGIC (Gets ID from URL)
  const [activeTab, setActiveTab] = useState('overview');
  const [course, setCourse] = useState(COURSE_DB.default);

  // Simulate API Fetch
  useEffect(() => {
    if (COURSE_DB[id]) {
      setCourse(COURSE_DB[id]);
    }
    window.scrollTo(0, 0); // Scroll to top on load
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <div className="h-20 bg-black"></div> {/* Spacer */}

      {/* HEADER SECTION */}
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">
             <span>Development</span> • <span>{course.duration}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl">{course.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
             <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="font-bold text-white">{course.rating}</span>
                <span className="underline decoration-gray-500">({course.reviews} reviews)</span>
             </div>
             <div className="flex items-center gap-2">
                <Globe size={16} />
                <span>English</span>
             </div>
             <div className="flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">R</div>
                 <span>Instructor: <span className="text-white font-bold">{course.instructor}</span></span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN (Content) */}
          <div className="lg:col-span-2">
              
              {/* TABS */}
              <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto">
                  {['overview', 'syllabus', 'reviews'].map(tab => (
                      <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-sm font-bold capitalize transition-colors border-b-2 ${
                            activeTab === tab 
                            ? "border-blue-600 text-blue-600" 
                            : "border-transparent text-gray-500 hover:text-gray-800"
                        }`}
                      >
                          {tab}
                      </button>
                  ))}
              </div>

              {/* CONTENT AREA */}
              <div className="min-h-[400px]">
                  {activeTab === 'overview' && (
                      <div className="space-y-8 animate-in fade-in duration-500">
                          <div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-4">About this Course</h3>
                              <p className="text-gray-600 leading-relaxed text-lg">{course.description}</p>
                          </div>
                          
                          <div className="bg-white p-6 rounded-xl border border-gray-200">
                              <h4 className="font-bold mb-4">What you'll learn</h4>
                              <ul className="grid sm:grid-cols-2 gap-3">
                                  {['Build Full Stack Apps', 'Deploy to Cloud', 'System Design', 'API Integration'].map((item, i) => (
                                      <li key={i} className="flex gap-2 text-gray-600 text-sm">
                                          <CheckCircle size={18} className="text-green-500 shrink-0" />
                                          {item}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  )}

                  {activeTab === 'syllabus' && (
                      <div className="space-y-4 animate-in fade-in duration-500">
                          {course.syllabus.map((mod, idx) => (
                              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                                  <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                                      <h4 className="font-bold text-gray-900">{mod.module}</h4>
                                      <span className="text-xs font-bold text-gray-400 uppercase">3 Lessons</span>
                                  </div>
                                  <div className="p-4 space-y-3">
                                      {mod.topics.map((topic, tIdx) => (
                                          <div key={tIdx} className="flex items-center gap-3 text-sm text-gray-600">
                                              {tIdx === 0 ? <PlayCircle size={16} className="text-blue-600" /> : <Lock size={16} className="text-gray-400" />}
                                              <span>{topic}</span>
                                              {tIdx === 0 && <span className="ml-auto text-xs text-blue-600 font-bold">PREVIEW</span>}
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          ))}
                      </div>
                  )}
              </div>
          </div>

          {/* RIGHT COLUMN (Sticky Card) */}
          <div className="relative">
              <div className="sticky top-24 bg-white p-6 rounded-2xl border border-gray-200 shadow-xl">
                  <div className="aspect-video bg-gray-900 rounded-lg mb-6 relative overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 flex items-center justify-center">
                          <PlayCircle size={48} className="text-white opacity-80 group-hover:scale-110 transition-transform" fill="currentColor" />
                      </div>
                      <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800" className="opacity-50 object-cover w-full h-full" alt="Preview" />
                  </div>

                  <div className="text-3xl font-bold text-gray-900 mb-2">{course.price}</div>
                  <p className="text-gray-500 text-sm mb-6"> EMI options available</p>

                  <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 mb-4">
                      Enroll Now
                  </button>
                  <p className="text-center text-xs text-gray-500 mb-6">30-Day Money-Back Guarantee</p>
                  
                  <div className="space-y-3 pt-6 border-t border-gray-100">
                      <div className="flex justify-between text-sm">
                          <span className="text-gray-500 flex gap-2"><Clock size={18}/> Duration</span>
                          <span className="font-bold">{course.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                          <span className="text-gray-500 flex gap-2"><Globe size={18}/> Language</span>
                          <span className="font-bold">English</span>
                      </div>
                  </div>
              </div>
          </div>

      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;