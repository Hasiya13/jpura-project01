import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, User, Phone, Hash, Lock } from 'lucide-react';

const EditProfileModal = ({ isOpen, onClose, userData, onSave }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
        {/* Background Overlay */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={onClose} 
          className="absolute inset-0 bg-black/85 backdrop-blur-sm" 
        />
        
        {/* Modal Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          exit={{ opacity: 0, scale: 0.95, y: 10 }} 
          className="relative w-full max-w-md bg-[#111111] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-black uppercase tracking-tight">
                EDIT <span className="text-red-600">PROFILE</span>
              </h2>
              <button 
                onClick={onClose} 
                className="text-gray-500 hover:text-white p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={onSave} className="space-y-4">
              {/* Full Name Field */}
              <div>
                <label className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1.5 block ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    defaultValue={userData.name}
                    className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:ring-1 focus:ring-red-600 transition-all pl-11"
                    required
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                </div>
              </div>

              {/* Mobile and Student ID Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1.5 block ml-1">
                    Mobile
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="078701580"
                      className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:ring-1 focus:ring-red-600 transition-all pl-11"
                    />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                  </div>
                </div>
                <div>
                  <label className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1.5 block ml-1">
                    Student ID
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      defaultValue={userData.studentId}
                      className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:ring-1 focus:ring-red-600 transition-all pl-11"
                      required
                    />
                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                  </div>
                </div>
              </div>

              {/* Password Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1.5 block ml-1">
                    Current Password
                  </label>
                  <div className="relative">
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:ring-1 focus:ring-red-600 transition-all pl-11"
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                  </div>
                </div>
                <div>
                  <label className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1.5 block ml-1">
                    New Password
                  </label>
                  <div className="relative">
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:ring-1 focus:ring-red-600 transition-all pl-11"
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button 
                  type="button"
                  onClick={onClose}
                  className="w-full sm:flex-1 bg-white/5 text-white py-3.5 rounded-xl font-bold text-xs hover:bg-white/10 transition-all border border-white/5 uppercase tracking-widest order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="w-full sm:flex-1 bg-red-600 text-white py-3.5 rounded-xl font-bold text-xs hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 uppercase tracking-widest order-1 sm:order-2"
                >
                  <Save size={16} /> Save
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EditProfileModal;