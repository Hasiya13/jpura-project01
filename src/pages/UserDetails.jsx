import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Mail, Lock, LogIn, UserCircle, 
  Phone, GraduationCap, PackageSearch, X, 
  Info, MapPin, ExternalLink 
} from 'lucide-react';


const LostItemCard = ({ item, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={isLoggedIn ? { scale: 1.02 } : {}}
        onClick={() => isLoggedIn && setIsOpen(true)}
        className={`relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-[2rem] shadow-lg ${isLoggedIn ? 'cursor-pointer group' : 'cursor-default'}`}
      >
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-white font-black uppercase tracking-tight text-sm italic group-hover:text-red-500 transition-colors">
            {item.title}
          </h4>
          <span className="bg-red-600/20 text-red-500 text-[8px] font-black px-2 py-1 rounded-lg uppercase">
            {item.status}
          </span>
        </div>

        <div className="relative">
          <p className={`text-gray-400 text-xs leading-relaxed line-clamp-2 ${!isLoggedIn ? 'blur-sm select-none' : ''}`}>
            {item.desc}
          </p>
          {!isLoggedIn && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Lock size={14} className="text-red-500/40" />
            </div>
          )}
        </div>
      </motion.div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="relative w-full max-w-lg bg-[#0f0f0f] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
              <div className="h-56 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60" />
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-red-600 transition-colors"><X size={20} /></button>
              </div>
              <div className="p-8">
                <h2 className="text-white text-3xl font-black uppercase italic mb-4">{item.title}</h2>
                <div className="space-y-4 mb-8 text-gray-400 text-sm">
                  <div className="flex gap-3"><Info size={18} className="text-red-500" /> <p>{item.desc}</p></div>
                  <div className="flex gap-3"><MapPin size={18} className="text-red-500" /> <p>Last seen near Faculty Premises</p></div>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-red-600/20">Contact Owner</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};


const UserDetails = () => {
  const { id } = useParams();
  
 
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  const userData = {
    name: "Kasun Perera",
    email: "kasun@sjp.ac.lk",
    mobile: "+94 71 234 5678",
    faculty: "Faculty of Applied Sciences",
    joined: "2023",
    lostItems: [
      { id: 1, title: "Casio Calculator", desc: "Model FX-991ES Plus, has a small sticker on the back.", status: "Still Missing", image: "https://images.unsplash.com/photo-1574607383476-f517f220d356?q=80&w=500" },
      { id: 2, title: "Black Wallet", desc: "Leather wallet with USJ ID card and some cash.", status: "Missing", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=500" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 md:px-6 flex flex-col items-center">
      
     
      <div className="fixed bottom-5 right-5 z-[110]">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] px-4 py-2 rounded-full font-black uppercase tracking-widest">
          Switch to {isLoggedIn ? 'Guest View' : 'User View'}
        </button>
      </div>

      <div className="max-w-md w-full space-y-8">
        
        {/* Profile Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-600/10 to-transparent -z-10"></div>
          
          <div className="relative w-24 h-24 mx-auto mb-5">
            <div className="w-full h-full bg-gradient-to-tr from-red-600 to-red-800 rounded-[2.2rem] flex items-center justify-center border-4 border-white/5 shadow-2xl">
              <UserCircle size={50} className="text-white/90" />
            </div>
            {isLoggedIn && <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1.5 rounded-xl border-4 border-[#0a0a0a]"><ShieldCheck size={14} /></div>}
          </div>

          <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-1">
            {isLoggedIn ? userData.name : "USJ Hub User"}
          </h2>
          <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 flex items-center justify-center gap-2">
            <Mail size={12} /> {userData.email}
          </p>

          {isLoggedIn && (
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-left">
                <p className="text-[8px] text-gray-500 font-black uppercase tracking-widest mb-1 flex items-center gap-1"><Phone size={10}/> Mobile</p>
                <p className="text-white text-xs font-bold">{userData.mobile}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-left">
                <p className="text-[8px] text-gray-500 font-black uppercase tracking-widest mb-1 flex items-center gap-1"><GraduationCap size={10}/> Faculty</p>
                <p className="text-white text-xs font-bold truncate">Applied Science</p>
              </div>
            </div>
          )}
        </motion.div>

        <div className="space-y-4">
          <div className="flex justify-between items-center px-4">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
              <PackageSearch size={16} className="text-red-600" /> Reported Missing
            </h3>
            <span className="text-white/20 text-[9px] font-bold uppercase tracking-widest">
              {userData.lostItems.length} Items
            </span>
          </div>

          <div className="space-y-4">
            {userData.lostItems.map((item) => (
              <LostItemCard key={item.id} item={item} isLoggedIn={isLoggedIn} />
            ))}
          </div>
        </div>

        {!isLoggedIn && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-600/5 border border-red-600/10 p-6 rounded-[2rem] text-center">
             <Lock size={24} className="text-red-600 mx-auto mb-3" />
             <p className="text-gray-400 text-[10px] font-bold uppercase leading-relaxed mb-4 tracking-wider">
               Login to view full profile, detailed descriptions, and images of lost items.
             </p>
             <Link to="/signin">
               <button className="w-full bg-white text-black text-xs font-black py-3 rounded-xl uppercase tracking-widest flex items-center justify-center gap-2">
                 <LogIn size={16} /> Sign In to USJ Hub
               </button>
             </Link>
          </motion.div>
        )}

        <p className="text-center text-white/10 text-[8px] font-bold uppercase tracking-[0.5em] pt-4">
          Verified Student Profile • {userData.joined}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;