import React, { createContext, useContext, useState, useMemo } from 'react';

const NotificationsContext = createContext();

export const useNotifications = () => useContext(NotificationsContext);

let idCounter = 100;

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'enrollment', user: 'Sarah Jen', avatar: 'https://placehold.co/100x100/4f46e5/ffffff?text=SJ', message: 'enrolled in your "React Advanced" course.', time: '2 mins ago', unread: true },
    { id: 2, type: 'badge', user: 'System', avatar: null, icon: null, message: 'You earned the "Top Instructor" badge!', time: '1 hour ago', unread: true },
    { id: 3, type: 'comment', user: 'Mike Ross', avatar: 'https://placehold.co/100x100/ec4899/ffffff?text=MR', message: 'commented: "Great explanation on Hooks!"', time: '3 hours ago', unread: false },
  ]);

  const addNotification = (notif) => {
    const n = { id: ++idCounter, unread: true, time: 'just now', ...notif };
    setNotifications((prev) => [n, ...prev]);
    return n;
  };

  const markAsRead = (id) => {
    setNotifications((prev) => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map(n => ({ ...n, unread: false })));
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter(n => n.id !== id));
  };

  const unreadCount = useMemo(() => notifications.filter(n => n.unread).length, [notifications]);

  return (
    <NotificationsContext.Provider value={{ notifications, addNotification, markAsRead, markAllRead, removeNotification, unreadCount }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsContext;
