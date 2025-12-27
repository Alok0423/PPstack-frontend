import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Search, Bell, TrendingUp, Clock, Star, Users, Play, MessageSquare, CheckCircle 
} from 'lucide-react';
import { useNotifications } from '../../context/NotificationsContext';

// --- Animation Settings ---
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// --- Helper Components ---

const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative group h-full flex items-center">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer text-sm font-medium hover:text-indigo-600 transition-colors ${
          active === item ? "text-indigo-600" : "text-gray-600"
        }`}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute left-1/2 transform -translate-x-1/2 top-full pt-4"
        >
          {active === item && (
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-100 shadow-xl p-4 w-max">
              <motion.div layout className="w-max h-full p-2">
                {children}
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const HoveredLink = ({ children, href, icon: Icon }) => {
  return (
    <a 
      href={href} 
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 transition-all group"
    >
      {Icon && <Icon size={18} className="text-indigo-400 group-hover:text-indigo-600" />}
      <span className="text-sm font-medium">{children}</span>
    </a>
  );
};

const NotificationDropdown = () => {
  const { notifications, markAllRead, unreadCount } = useNotifications();
  return (
    <div className="w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-semibold text-gray-900">Notifications</h3>
        <button onClick={markAllRead} className="text-xs font-medium text-indigo-600 cursor-pointer hover:text-indigo-800">Mark all read</button>
      </div>
      <div className="max-h-[320px] overflow-y-auto custom-scrollbar">
        {notifications.map((notif, i) => (
          <div key={notif.id} className={`flex gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0 ${notif.unread ? 'bg-indigo-50/30' : ''}`}>
            <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${notif.avatar ? '' : 'bg-gray-100'}`}>
              {notif.avatar ? <img src={notif.avatar} className="w-8 h-8 rounded-full object-cover" alt="a" /> : <Bell size={14} />}
            </div>
            <div>
              <p className="text-sm text-gray-700 leading-snug font-medium">{notif.user ? `${notif.user} — ` : ''}{notif.message}</p>
              <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
            </div>
            {notif.unread && <div className="h-2 w-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />}
          </div>
        ))}
      </div>
      <div className="p-3 bg-gray-50 text-center border-t border-gray-100">
        <a href="/notifications" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 block w-full">
          View All Notifications ({unreadCount})
        </a>
      </div>
    </div>
  );
};

// --- Main Navbar Component ---

export default function Navbar() {
  const [active, setActive] = useState(null);
  const { user } = useAuth();

  return (
    <div className="fixed top-6 inset-x-0 max-w-5xl mx-auto z-50 px-4">
      <div 
        className="relative rounded-full border border-white/20 bg-white/80 backdrop-blur-md shadow-lg shadow-gray-200/50 flex items-center justify-between px-6 py-3"
        onMouseLeave={() => setActive(null)}
      >
        {/* Logo / Home Button */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => window.location.href = '/'}
        >
          <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-700 transition-colors shadow-sm">
             <Home className="text-white w-4 h-4" />
          </div>
          <span className="text-lg font-bold text-gray-900 tracking-tight hidden sm:block group-hover:text-indigo-700 transition-colors">
            PPStack
          </span>
        </div>

        {/* Center Menu (Desktop) */}
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
                 <HoveredLink href="/courses/mobile">Mobile Apps</HoveredLink>
               </div>
               <div className="space-y-2">
                 <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Featured</h4>
                 <div className="bg-indigo-50 p-3 rounded-lg cursor-pointer hover:bg-indigo-100 transition-colors">
                    <p className="text-xs font-bold text-indigo-700 mb-1">New: React 19</p>
                    <p className="text-[10px] text-indigo-500 leading-tight">Master the latest hooks and compiler features.</p>
                 </div>
               </div>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Community">
            <div className="flex flex-col gap-2 w-48">
               <HoveredLink href="/forums" icon={Users}>Discussion Forums</HoveredLink>
               <HoveredLink href="/events" icon={Play}>Live Events</HoveredLink>
            </div>
          </MenuItem>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden sm:block group">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-indigo-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-gray-100/50 border-0 rounded-full pl-9 pr-4 py-1.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all w-32 focus:w-48 placeholder-gray-400 text-gray-700"
            />
          </div>
          
          {/* Notification Bell (With Hover) */}
          <div 
            className="relative" 
            onMouseEnter={() => setActive('notifications')}
          >
            <button 
              className="p-2 text-gray-500 hover:text-indigo-600 relative transition-colors"
              // keep hover panel; navigation below uses Link
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white animate-pulse" />
            </button>
            
            {/* Floating Notification Panel */}
            <AnimatePresence>
              {active === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 10, x: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={transition}
                  className="absolute right-0 top-full pt-4 z-50"
                  style={{ minWidth: '320px' }}
                >
                   <NotificationDropdown />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Auth / Profile Actions */}
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login" className="text-sm text-gray-700 hover:text-indigo-600">Log in</Link>
              <Link to="/signup" className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700">Sign up</Link>
            </div>
          ) : (
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md cursor-pointer hover:shadow-indigo-200 transition-all hover:scale-105">
              {user.name ? user.name.split(' ').map(n=>n[0]).slice(0,2).join('') : 'AL'}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}