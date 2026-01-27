import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded-lg rotate-45 flex items-center justify-center font-black text-white text-xs">U</div>
            <span className="text-white font-black tracking-widest uppercase">USJ DigitalID</span>
          </div>
          <p className="text-gray-500 text-sm">
            Official management system for University of Sri Jayewardenepura.
          </p>
          <div className="flex gap-4 text-gray-400">
            <Facebook size={20} className="hover:text-red-600 cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-red-600 cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-red-600 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-500 text-sm list-none p-0">
            <li><Link to="/" className="hover:text-white no-underline transition-colors">Home</Link></li>
            <li><Link to="/inventory" className="hover:text-white no-underline transition-colors">Inventory</Link></li>
            <li><Link to="/community" className="hover:text-white no-underline transition-colors">Community</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-left">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Support</h4>
          <ul className="space-y-4 text-gray-500 text-sm list-none p-0">
            <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
            <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
            <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="text-left">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-500 text-sm list-none p-0 text-left">
            <li className="flex items-center gap-3"><Mail size={16} className="text-red-600" /> info@sjp.ac.lk</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-red-600" /> +94 11 280 2022</li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-red-600" /> Gangodawila, Nugegoda</li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="text-center border-t border-white/5 pt-10 px-6">
        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} USJ DigitalID. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;