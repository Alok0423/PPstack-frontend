import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Logo & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">P</div>
              <span className="text-2xl font-bold text-white tracking-tight">PPStack</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-sm">
              PPStack is an outcome-driven education platform that bridges the gap between industry requirements and academic education. We are building the future of tech education.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Youtube} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Facebook} />
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>In Media</FooterLink>
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>Success Stories</FooterLink>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="text-white font-bold mb-6">Courses</h4>
            <ul className="space-y-4 text-sm">
              <FooterLink>Full Stack Development</FooterLink>
              <FooterLink>Data Science & AI</FooterLink>
              <FooterLink>Master's in CS</FooterLink>
              <FooterLink>Professional Certification</FooterLink>
              <FooterLink>Entrance Exam</FooterLink>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <FooterLink>Blog</FooterLink>
              <FooterLink>Hire from us</FooterLink>
              <FooterLink>Become a Mentor</FooterLink>
              <FooterLink>Events & Webinars</FooterLink>
              <FooterLink>Community</FooterLink>
            </ul>
          </div>
        </div>

        {/* Middle Section: Contact Info Strip */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" />
              <span className="text-sm">support@ppstack.com</span>
           </div>
           <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500" />
              <span className="text-sm">+91 98765 43210</span>
           </div>
           <div className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-500" />
              <span className="text-sm">Bangalore, India</span>
           </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2025 All rights reserved by <span className="text-white font-semibold">PPStack</span>.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Services</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components for cleaner code
const FooterLink = ({ children }) => (
  <li>
    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
      {children}
    </a>
  </li>
);

const SocialIcon = ({ icon: Icon }) => (
  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
    <Icon size={16} />
  </a>
);

export default Footer;