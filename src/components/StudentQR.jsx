import React from 'react';
import { motion } from 'framer-motion';
import { X, Download, Printer } from 'lucide-react';

const StudentQR = ({ isOpen, onClose, studentData }) => {
  if (!isOpen) return null;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${studentData.studentId}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Background Overlay */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        onClick={onClose} 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
      />

      {/* QR Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        exit={{ opacity: 0, scale: 0.9, y: 20 }} 
        className="relative w-full max-w-sm bg-white rounded-[3rem] p-10 text-center z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Student Identity QR</span>
        </div>

        {/* QR Image Box */}
        <div className="bg-gray-50 p-6 rounded-[2.5rem] border-2 border-dashed border-gray-100 mb-6 flex justify-center group relative">
          <img 
            src={qrUrl} 
            alt="Student QR" 
            className="w-48 h-48 mix-blend-multiply transition-transform group-hover:scale-105 duration-300" 
          />
        </div>

        {/* User Details */}
        <div className="space-y-1 mb-8">
          <h3 className="text-black text-xl font-black uppercase italic tracking-tight">
            {studentData.name}
          </h3>
          <p className="text-red-600 font-bold text-sm tracking-widest">
            {studentData.studentId}
          </p>
          <p className="text-gray-400 text-[9px] uppercase font-bold pt-2">
            {studentData.department}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button 
            onClick={() => window.print()} 
            className="flex-1 bg-black text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-2"
          >
            <Printer size={16} /> Print
          </button>
          
          <a 
            href={qrUrl} 
            download="My_QR.png"
            target="_blank" 
            rel="noreferrer"
            className="flex-1 bg-gray-100 text-black py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
          >
            <Download size={16} /> Save
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentQR;