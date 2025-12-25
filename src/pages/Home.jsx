// src/pages/Home.jsx
import React from 'react';

// --- COMPONENT IMPORTS ---
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import CompanyMarquee from '../components/home/CompanyMarquee';
import IndustryLearning from '../components/home/IndustryLearning';
import CareerRoadmap from '../components/home/CareerRoadmap';
import Faculty from '../components/home/Faculty';
import Offerings from '../components/courses/Offerings';
import FAQ from '../components/home/FAQ';
import AlumniCarousel from '../components/home/AlumniCarousel';
import ChatWidget from '../components/ui/ChatWidget'; // <--- 1. IMPORT THE WIDGET

const Home = () => {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="bg-white rounded-t-[40px] relative z-20 mt-[-40px] pt-10 overflow-hidden">
            <Stats />
            <CompanyMarquee />
            <IndustryLearning />
            <CareerRoadmap />
            <Faculty />
            <Offerings />
            <FAQ />
            <AlumniCarousel />
        </div>
      </main>

      <Footer />

      <div className="bg-blue-600 py-4 border-t border-blue-500">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white">
              <div className="flex gap-4 mb-2 md:mb-0">
                  <span className="font-bold text-sm">Need Help?</span>
                  <button className="bg-white text-blue-600 px-3 py-0.5 rounded font-bold text-xs uppercase">Request Callback</button>
              </div>
              <p className="text-xs opacity-80">&copy; 2025 PPStack. All rights reserved.</p>
          </div>
      </div>

      {/* 2. REPLACE THE OLD BUTTON WITH THIS COMPONENT */}
      <ChatWidget />
      
    </div>
  );
};

export default Home;