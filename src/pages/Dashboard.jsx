import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, BookOpen, Clock, Users, 
  DollarSign, TrendingUp, ChevronRight, Star,
  Home, Search, Bell
} from 'lucide-react';

// --- Mock Auth Hook (Replaces external context for demo) ---
// In a real app, this would come from ../context/AuthContext
const useAuth = () => {
  // CHANGE THIS to true to test the Tutor Dashboard
  const [user] = useState({ 
    name: "Alex", 
    isAdmin: false, // Set to true to see Tutor View
    role: "learner" 
  });
  return { user };
};

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// --- Mock Data ---
const ENROLLED_COURSES = [
  { id: 1, title: "Advanced React Patterns", progress: 75, totalLessons: 24, completedLessons: 18, color: "from-purple-500 to-indigo-600" },
  { id: 2, title: "UI/UX Fundamentals", progress: 30, totalLessons: 12, completedLessons: 4, color: "from-pink-500 to-rose-500" },
  { id: 3, title: "Node.js Backend Architecture", progress: 10, totalLessons: 40, completedLessons: 4, color: "from-blue-500 to-cyan-500" },
];

const RECOMMENDED_COURSES = [
  { id: 101, title: "Mastering Python", author: "Dr. Angela Yu", rating: 4.8, students: "12k", image: "https://placehold.co/600x400/2a2a2a/FFF?text=Python" },
  { id: 102, title: "Digital Marketing 101", author: "Seth Godin", rating: 4.9, students: "8.5k", image: "https://placehold.co/600x400/1e3a8a/FFF?text=Marketing" },
  { id: 103, title: "Flutter for Mobile", author: "Google Team", rating: 4.7, students: "5k", image: "https://placehold.co/600x400/047857/FFF?text=Flutter" },
  { id: 104, title: "Data Science Bootcamp", author: "Andrew Ng", rating: 4.9, students: "20k", image: "https://placehold.co/600x400/7c3aed/FFF?text=Data" },
];

const TUTOR_STATS = [
  { title: "Total Earnings", value: "$12,450", icon: DollarSign, color: "bg-green-100 text-green-600" },
  { title: "Active Students", value: "1,204", icon: Users, color: "bg-blue-100 text-blue-600" },
  { title: "Course Sales", value: "845", icon: TrendingUp, color: "bg-purple-100 text-purple-600" },
  { title: "Hours Taught", value: "320h", icon: Clock, color: "bg-orange-100 text-orange-600" },
];

// --- Reusable Carousel Component ---
const SectionCarousel = ({ title, children }) => {
  return (
    <motion.div variants={itemVariants} className="mb-10">
      <div className="flex justify-between items-end mb-4 px-1">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <button className="text-indigo-600 text-sm font-semibold hover:text-indigo-800 flex items-center gap-1 transition-colors">
          View All <ChevronRight size={16} />
        </button>
      </div>
      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto pb-6 -mx-4 px-4 gap-6 snap-x scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
        {children}
      </div>
    </motion.div>
  );
};

// --- Navbar Component ---
const DashboardNavbar = () => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Home Button */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.location.href = '/'}>
            <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-700 transition-colors">
               <Home className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-indigo-900 tracking-tight">PPStack</span>
          </div>

          {/* Search Bar - Attached Feature */}
          <div className="flex-1 flex items-center justify-center px-8">
             <div className="relative w-full max-w-md hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search courses, tutors, or topics..."
                />
             </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-500 relative transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md cursor-pointer hover:shadow-lg transition-shadow">
              AL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- LEARNER DASHBOARD ---
const LearnerDashboard = ({ user }) => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6 max-w-7xl mx-auto"
    >
      {/* Welcome Header */}
      <motion.header variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, <span className="text-indigo-600">{user?.name || 'Learner'}</span>! 👋
        </h1>
        <p className="text-gray-500 mt-2">You've learned for <span className="font-semibold text-gray-700">32 minutes</span> today. Keep it up!</p>
      </motion.header>

      {/* Continue Learning Carousel */}
      <SectionCarousel title="Continue Learning">
        {ENROLLED_COURSES.map((course) => (
          <motion.div 
            whileHover={{ scale: 1.02 }}
            key={course.id}
            className={`min-w-[300px] md:min-w-[350px] snap-start bg-gradient-to-r ${course.color} rounded-2xl p-6 text-white shadow-lg relative overflow-hidden cursor-pointer`}
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                  <BookOpen size={24} />
                </div>
                <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded backdrop-blur-sm">
                  {course.progress}% Complete
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-white/80 mb-4">
                {course.completedLessons} / {course.totalLessons} Lessons
              </p>
              
              {/* Progress Bar */}
              <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-white/90 rounded-full"
                />
              </div>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          </motion.div>
        ))}
      </SectionCarousel>

      {/* Recommended Carousel */}
      <SectionCarousel title="Recommended for You">
        {RECOMMENDED_COURSES.map((course) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={course.id}
            className="min-w-[260px] md:min-w-[280px] snap-start bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer"
          >
            <div className="h-32 bg-gray-200 relative overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-2 right-2 bg-white px-1.5 py-0.5 rounded text-xs font-bold flex items-center gap-1 shadow-sm">
                <Star size={12} className="text-yellow-400 fill-yellow-400" /> {course.rating}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-1 truncate">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{course.author}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1"><Users size={12} /> {course.students}</span>
                <span className="flex items-center gap-1"><Play size={12} /> 12 Modules</span>
              </div>
            </div>
          </motion.div>
        ))}
      </SectionCarousel>

    </motion.div>
  );
};

// --- TUTOR DASHBOARD ---
const TutorDashboard = ({ user }) => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6 max-w-7xl mx-auto"
    >
      <motion.header variants={itemVariants} className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Instructor Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage your courses and track performance.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-md shadow-indigo-200 transition-all active:scale-95">
          + Create New Course
        </button>
      </motion.header>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {TUTOR_STATS.map((stat, index) => (
          <motion.div 
            whileHover={{ y: -2 }}
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
          >
            <div className={`p-3 rounded-xl ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
              <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Activity / Course Performance */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Chart Area (Placeholder) */}
        <motion.div variants={itemVariants} className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Revenue Analytics</h3>
            <select className="bg-gray-50 border border-gray-200 rounded-lg text-sm px-3 py-1 outline-none">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center border border-dashed border-gray-300">
             <p className="text-gray-400 font-medium flex items-center gap-2"><TrendingUp /> Chart Visualization Area</p>
          </div>
        </motion.div>

        {/* Recent Enrollments List */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Recent Enrollments</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  <img src={`https://placehold.co/100x100/e2e8f0/64748b?text=U${item}`} alt="User" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Student Name {item}</p>
                  <p className="text-xs text-gray-500">Enrolled in React Mastery</p>
                </div>
                <span className="ml-auto text-xs text-gray-400">2m ago</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg transition-colors">
            View All Activity
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- MAIN DASHBOARD WRAPPER ---
export default function Dashboard() {
  const { user } = useAuth();

  // Guard clause if user data isn't loaded yet
  if (!user) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      {/* If user is instructor/tutor (isAdmin true), show tutor dashboard */}
      {user?.isAdmin || user?.role === 'tutor' ? (
        <TutorDashboard user={user} />
      ) : (
        <LearnerDashboard user={user} />
      )}
    </div>
  );
}