import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import NotificationsPage from './components/ui/NotificationsPage.jsx.jsx';
import ProtectedRoute from './components/layout/ProtectedRoute';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
      
      {/* Global Floating Elements */}
      <WhatsAppButton />
    </>
  );
}

export default App;