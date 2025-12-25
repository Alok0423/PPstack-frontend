// src/pages/Courses.jsx
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Search, Filter, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- Ensure Link is imported

// Mock Data
const ALL_COURSES = [
  { id: 1, title: "Full Stack Web Development", category: "Web Dev", price: "₹6,167", duration: "8 Months", level: "Beginner", color: "green" },
  { id: 2, title: "Data Science & AI", category: "Data Science", price: "₹7,200", duration: "14 Months", level: "Intermediate", color: "blue" },
  { id: 3, title: "System Design for Professionals", category: "Backend", price: "₹8,500", duration: "4 Months", level: "Advanced", color: "purple" },
  { id: 4, title: "React & Next.js Masterclass", category: "Web Dev", price: "₹4,000", duration: "3 Months", level: "Intermediate", color: "indigo" },
  { id: 5, title: "Machine Learning A-Z", category: "Data Science", price: "₹5,500", duration: "6 Months", level: "Beginner", color: "orange" },
  { id: 6, title: "DevOps & Cloud Computing", category: "Backend", price: "₹9,000", duration: "6 Months", level: "Advanced", color: "red" },
];

const CATEGORIES = ["All", "Web Dev", "Data Science", "Backend"];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filtering Logic
  const filteredCourses = ALL_COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Header Space for Fixed Navbar */}
      <div className="h-20 bg-black"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Courses</h1>
            <p className="text-gray-500 max-w-2xl">Master the latest technologies with our industry-vetted curriculum. Filter by category or search for your specific interest.</p>
        </div>

        {/* Controls: Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Search courses..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                {CATEGORIES.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                            activeCategory === cat 
                            ? "bg-black text-white shadow-lg" 
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map(course => (
                    <div key={course.id} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all group cursor-pointer">
                        
                        {/* THIS LINK MAKES THE CARD CLICKABLE */}
                        <Link to={`/course/${course.id}`} className="block">
                            <div className={`w-12 h-12 rounded-lg bg-${course.color}-50 text-${course.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <BookOpen size={24} />
                            </div>
                            
                            <div className="flex justify-between items-start mb-2">
                                <span className={`text-xs font-bold px-2 py-1 rounded bg-${course.color}-50 text-${course.color}-700 uppercase`}>
                                    {course.category}
                                </span>
                                <span className="text-xs font-bold text-gray-400">{course.level}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {course.title}
                            </h3>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
                                <span>{course.duration}</span>
                                <span>•</span>
                                <span className="font-bold text-gray-900">EMI: {course.price}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        ) : (
            // Empty State
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                <Filter size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-900">No courses found</h3>
                <p className="text-gray-500">Try adjusting your search or filters.</p>
                <button 
                    onClick={() => {setSearchTerm(""); setActiveCategory("All")}}
                    className="mt-4 text-blue-600 font-bold hover:underline"
                >
                    Clear all filters
                </button>
            </div>
        )}

      </div>
      <Footer />
    </div>
  );
};

export default Courses; 