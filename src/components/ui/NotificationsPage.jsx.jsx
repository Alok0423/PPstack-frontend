import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, CheckCircle, MessageSquare, Heart, UserPlus, Star, 
  Trash2, Filter, Settings, Search, Home, TrendingUp, Clock, Users, Play
} from 'lucide-react';

// --- Navbar Component (Included Inline for Stability) ---
const Navbar = () => {
  const [active, setActive] = useState(null);
  const transition = { type: "spring", mass: 0.5, damping: 11.5, stiffness: 100 };

  const MenuItem = ({ setActive, active, item, children }) => (
    <div onMouseEnter={() => setActive(item)} className="relative group h-full flex items-center">
      <p className={`cursor-pointer text-sm font-medium hover:text-indigo-600 transition-colors ${active === item ? "text-indigo-600" : "text-gray-600"}`}>
        {item}
      </p>
      {active !== null && active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute left-1/2 transform -translate-x-1/2 top-full pt-4"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-100 shadow-xl p-4 w-max">
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );

  const HoveredLink = ({ children, href, icon: Icon }) => (
    <a href={href} className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 transition-all group">
      {Icon && <Icon size={18} className="text-indigo-400 group-hover:text-indigo-600" />}
      <span className="text-sm font-medium">{children}</span>
    </a>
  );

  return (
    <div className="fixed top-6 inset-x-0 max-w-5xl mx-auto z-50 px-4">
      <div className="relative rounded-full border border-white/20 bg-white/80 backdrop-blur-md shadow-lg shadow-gray-200/50 flex items-center justify-between px-6 py-3" onMouseLeave={() => setActive(null)}>
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.location.href = '/'}>
          <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-700 transition-colors shadow-sm">
             <Home className="text-white w-4 h-4" />
          </div>
          <span className="text-lg font-bold text-gray-900 tracking-tight hidden sm:block group-hover:text-indigo-700 transition-colors">PPStack</span>
        </div>

        <nav className="hidden md:flex flex-1 justify-center gap-8">
          <MenuItem setActive={setActive} active={active} item="Dashboard">
             <div className="flex flex-col gap-2 w-48">
               <HoveredLink href="/dashboard" icon={TrendingUp}>Overview</HoveredLink>
               <HoveredLink href="/my-learning" icon={Clock}>My Learning</HoveredLink>
               <HoveredLink href="/achievements" icon={Star}>Achievements</HoveredLink>
             </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="grid grid-cols-2 gap-4 w-80">
               <div className="space-y-2">
                 <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Categories</h4>
                 <HoveredLink href="/courses/web">Web Development</HoveredLink>
                 <HoveredLink href="/courses/data">Data Science</HoveredLink>
               </div>
               <div className="space-y-2">
                 <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Featured</h4>
                 <div className="bg-indigo-50 p-3 rounded-lg"><p className="text-xs font-bold text-indigo-700">New: React 19</p></div>
               </div>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Community">
            <div className="flex flex-col gap-2 w-48">
               <HoveredLink href="/forums" icon={Users}>Forums</HoveredLink>
               <HoveredLink href="/events" icon={Play}>Events</HoveredLink>
            </div>
          </MenuItem>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-indigo-600 relative transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md">AL</div>
        </div>
      </div>
    </div>
  );
};

// --- Mock Notification Data ---
const NOTIFICATIONS = [
  { id: 1, type: 'enrollment', user: 'Sarah Jen', avatar: 'https://placehold.co/100x100/4f46e5/ffffff?text=SJ', message: 'enrolled in your "React Advanced" course.', time: '2 mins ago', unread: true },
  { id: 2, type: 'badge', user: 'System', avatar: null, icon: Star, message: 'You earned the "Top Instructor" badge!', time: '1 hour ago', unread: true },
  { id: 3, type: 'comment', user: 'Mike Ross', avatar: 'https://placehold.co/100x100/ec4899/ffffff?text=MR', message: 'commented: "Great explanation on Hooks!"', time: '3 hours ago', unread: false },
  { id: 4, type: 'like', user: 'Jenny Wilson', avatar: 'https://placehold.co/100x100/10b981/ffffff?text=JW', message: 'liked your recent announcement.', time: '5 hours ago', unread: false },
  { id: 5, type: 'system', user: 'PPStack Team', avatar: null, icon: Bell, message: 'Welcome to the new dashboard layout!', time: '1 day ago', unread: false },
];

const NotificationItem = ({ notif, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group flex items-start gap-4 p-5 rounded-2xl mb-3 border transition-all hover:shadow-md cursor-pointer
        ${notif.unread ? 'bg-white border-indigo-100 shadow-sm' : 'bg-gray-50/50 border-transparent hover:bg-white'}
      `}
    >
      {/* Icon / Avatar */}
      <div className="shrink-0 relative">
        {notif.avatar ? (
          <img src={notif.avatar} alt={notif.user} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
            {notif.icon ? <notif.icon size={20} /> : <Bell size={20} />}
          </div>
        )}
        {/* Status Indicator */}
        {notif.unread && (
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full border-2 border-white" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <p className="text-sm font-bold text-gray-900 truncate">
            {notif.user}
          </p>
          <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{notif.time}</span>
        </div>
        <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">
          {notif.message}
        </p>
        
        {/* Actions (Visible on Hover) */}
        <div className="flex items-center gap-4 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
           <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
             <MessageSquare size={12} /> Reply
           </button>
           <button className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1">
             <CheckCircle size={12} /> Mark as read
           </button>
        </div>
      </div>

      {/* Delete Button */}
      <button className="text-gray-300 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100">
        <Trash2 size={16} />
      </button>
    </motion.div>
  );
};

import { useNotifications } from '../../context/NotificationsContext';

export default function NotificationsPage() {
  const [filter, setFilter] = useState('all');
  const { notifications, markAllRead } = useNotifications();

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar /> 
      
      <div className="max-w-4xl mx-auto pt-32 px-4 pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Notifications</h1>
            <p className="text-gray-500 mt-1">You have <span className="font-bold text-indigo-600">2 unread</span> messages today.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-xl transition-all">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-xl transition-all">
              <Settings size={20} />
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-indigo-200 transition-all active:scale-95">
              Mark all as read
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {['all', 'unread', 'mentions', 'system'].map((f) => (
             <button 
               key={f}
               onClick={() => setFilter(f)}
               className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                 filter === f 
                  ? 'bg-white text-indigo-600 shadow-md ring-1 ring-indigo-50' 
                  : 'text-gray-500 hover:bg-white/60 hover:text-gray-700'
               }`}
             >
               {f}
             </button>
          ))}
        </div>

        {/* Notifications List */}
          <div className="space-y-1">
           {notifications.map((notif, index) => (
             <NotificationItem key={notif.id} notif={notif} index={index} />
           ))}
          
          {/* Empty State */}
          {notifications.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                 <Bell className="text-gray-300" size={32} />
              </div>
              <h3 className="text-gray-900 font-medium">All caught up!</h3>
              <p className="text-gray-500 text-sm mt-1">Check back later for new updates.</p>
            </div>
          )}
        </div>
        
        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="text-sm font-medium text-gray-400 hover:text-indigo-600 transition-colors">
            Load earlier notifications
          </button>
        </div>

      </div>
    </div>
  );
}