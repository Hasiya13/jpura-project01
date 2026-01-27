import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Upload, Info, Tag, AlignLeft, CheckCircle } from 'lucide-react';

const AddItem = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // තත්පර 3කින් මැසේජ් එක අයින් වේ
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6 flex justify-center items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-4xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5"
      >
        {/* Left Side - Info */}
        <div className="lg:col-span-2 bg-gradient-to-br from-red-600 to-red-800 p-10 text-white flex flex-col justify-between">
          <div>
            <Package size={48} className="mb-6 opacity-80" />
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-tight mb-4">
              Register <br /> Your Item
            </h1>
            <p className="text-red-100 text-sm leading-relaxed opacity-80">
              ඔබේ බඩුබාහිරාදිය පද්ධතියට ඇතුළත් කිරීමෙන් ඒවායේ ආරක්ෂාව සහ කළමනාකරණය තහවුරු කරගන්න. සියලුම විස්තර නිවැරදිව ඇතුළත් කරන්න.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest bg-black/20 p-3 rounded-xl">
              <CheckCircle size={16} /> QR Generation
            </div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest bg-black/20 p-3 rounded-xl">
              <CheckCircle size={16} /> Secure Storage
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:col-span-3 p-8 md:p-12">
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-2xl font-bold text-white">Item Registered!</h2>
              <p className="text-gray-400">Your item has been successfully added to the J'PURA Inventory.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Item Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Item Name</label>
                  <div className="relative">
                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <input required type="text" placeholder="Laptop, Calculator..." className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-2 focus:ring-red-500 transition-all shadow-inner" />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Category</label>
                  <div className="relative">
                    <Info className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <select className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none cursor-pointer">
                      <option className="bg-gray-900">Electronics</option>
                      <option className="bg-gray-900">Books/Stationery</option>
                      <option className="bg-gray-900">Medical Gear</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Description & Condition</label>
                <div className="relative">
                  <AlignLeft className="absolute left-4 top-4 text-gray-500 w-4 h-4" />
                  <textarea rows="3" placeholder="Condition, Serial Numbers, Owner details..." className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-2 focus:ring-red-500 transition-all"></textarea>
                </div>
              </div>

              {/* Image Upload Placeholder */}
              <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center group hover:border-red-500/50 transition-colors cursor-pointer">
                <Upload className="mx-auto text-gray-500 group-hover:text-red-500 mb-2 transition-colors" />
                <p className="text-xs text-gray-500 font-medium">Click or drag an image of the item</p>
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl active:scale-95">
                Confirm Registration
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AddItem;