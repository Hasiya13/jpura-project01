import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X, Info, MapPin, Calendar } from 'lucide-react';

const LostItemCard = ({ item, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- Small Item Card --- */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsLoggedIn && setIsOpen(true)}
        className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-[2rem] shadow-lg cursor-pointer group"
      >
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-white font-black uppercase tracking-tight text-sm italic group-hover:text-red-500 transition-colors">
            {item.title}
          </h4>
          <span className="bg-red-600/20 text-red-500 text-[8px] font-black px-2 py-1 rounded-lg uppercase">
            {item.status}
          </span>
        </div>

        <p className={`text-gray-400 text-xs leading-relaxed line-clamp-2 ${!isLoggedIn ? 'blur-sm select-none' : ''}`}>
          {item.desc}
        </p>

        {!isLoggedIn && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
            <Lock size={16} className="text-red-500/50" />
          </div>
        )}
      </motion.div>

      {/* --- Full Detail Modal (Popup) --- */}
      <AnimatePresence>
        {isOpen && isLoggedIn && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#121212] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              {/* Item Image */}
              <div className="h-64 bg-gray-800 relative">
                <img 
                  src={item.image || 'https://via.placeholder.com/500x300?text=No+Image+Available'} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full backdrop-blur-md hover:bg-red-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {item.status}
                  </span>
                </div>
                
                <h2 className="text-white text-3xl font-black uppercase tracking-tighter mb-4 italic">
                  {item.title}
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-gray-400">
                    <Info size={18} className="text-red-500 shrink-0" />
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={18} className="text-red-500 shrink-0" />
                    <p className="text-sm font-bold uppercase tracking-widest">Library Area, USJ</p>
                  </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-red-600/20">
                  Contact Owner
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LostItemCard;