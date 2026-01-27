import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
    
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter">
            About <span className="text-red-600">Us</span>
          </h1>
          <div className="w-24 h-2 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-white text-3xl font-bold">J'PURA Inventory Management System</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              This system, specially designed for students of the University of Sri Jayewardenepura, allows you to securely manage your equipment and belongings.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 w-full text-center">
                <h4 className="text-red-500 font-bold text-2xl">100%</h4>
                <p className="text-gray-500 text-xs uppercase">Security</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 w-full text-center">
                <h4 className="text-red-500 font-bold text-2xl">24/7</h4>
                <p className="text-gray-500 text-xs uppercase">Access</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-red-600/20 blur-3xl rounded-full"></div>
            <img 
              src="https://www.fusionconnect.com/hubfs/images/blog/teams-backgrounds/28-AI-Generated-Background-For-Microsoft-Teams-meeting.png" 
              alt="Campus" 
              className="relative rounded-[2rem] shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;