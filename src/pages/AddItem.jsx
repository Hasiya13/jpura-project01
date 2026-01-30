import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Upload, Info, Tag, AlignLeft, CheckCircle } from 'lucide-react';

const AddItem = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 md:pt-32 pb-6 px-4 md:px-6 flex justify-center items-center">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-red-600/10 blur-[100px] rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-4xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 max-h-[90vh] lg:max-h-none overflow-y-auto lg:overflow-visible"
      >
     
        <div className="lg:col-span-2 bg-gradient-to-br from-red-600 to-red-800 p-6 md:p-10 text-white flex flex-col justify-between">
          <div>
            <Package size={32} className="mb-3 md:mb-6 opacity-80" />
            <h1 className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-2 md:mb-4">
              Register <br className="hidden md:block" /> Your Item
            </h1>
            <p className="text-red-100 text-[10px] md:text-sm leading-relaxed opacity-80 line-clamp-2 md:line-clamp-none">
              ඔබේ බඩුබාහිරාදිය පද්ධතියට ඇතුළත් කර ආරක්ෂාව තහවුරු කරගන්න.
            </p>
          </div>
          <div className="hidden md:block mt-10 space-y-4">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest bg-black/20 p-3 rounded-xl">
              <CheckCircle size={14} /> QR Generation
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest bg-black/20 p-3 rounded-xl">
              <CheckCircle size={14} /> Secure Storage
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 p-5 md:p-12">
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                <CheckCircle size={32} />
              </div>
              <h2 className="text-xl font-bold text-white">Item Registered!</h2>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Item Name</label>
                  <div className="relative">
                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-3 h-3 md:w-4 md:h-4" />
                    <input required type="text" placeholder="Laptop..." className="w-full bg-white/5 border border-white/10 p-3 md:p-4 pl-10 md:pl-12 rounded-xl md:rounded-2xl text-white text-xs md:text-sm outline-none focus:ring-1 focus:ring-red-500 transition-all shadow-inner" />
                  </div>
                </div>

                
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Category</label>
                  <div className="relative">
                    <Info className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-3 h-3 md:w-4 md:h-4" />
                    <select className="w-full bg-white/5 border border-white/10 p-3 md:p-4 pl-10 md:pl-12 rounded-xl md:rounded-2xl text-white text-xs md:text-sm outline-none focus:ring-1 focus:ring-red-500 appearance-none cursor-pointer">
                      <option className="bg-gray-900">Electronics</option>
                      <option className="bg-gray-900">Books</option>
                      <option className="bg-gray-900">Medical</option>
                    </select>
                  </div>
                </div>
              </div>

              
              <div className="space-y-1 md:space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Description</label>
                <div className="relative">
                  <AlignLeft className="absolute left-4 top-3 text-gray-500 w-3 h-3 md:w-4 md:h-4" />
                  <textarea rows="2" placeholder="Condition, Details..." className="w-full bg-white/5 border border-white/10 p-3 md:p-4 pl-10 md:pl-12 rounded-xl md:rounded-2xl text-white text-xs md:text-sm outline-none focus:ring-1 focus:ring-red-500 transition-all"></textarea>
                </div>
              </div>

              
              <div className="border-2 border-dashed border-white/10 rounded-xl p-4 md:p-8 text-center group hover:border-red-500/50 transition-colors cursor-pointer">
                <Upload className="mx-auto text-gray-500 group-hover:text-red-500 mb-1 w-5 h-5 md:w-6 md:h-6 transition-colors" />
                <p className="text-[9px] md:text-xs text-gray-500 font-medium">Click to upload image</p>
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest transition-all text-xs md:text-sm shadow-xl active:scale-95">
                Confirm
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AddItem;