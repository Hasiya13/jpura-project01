import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Import } from 'lucide-react';
import Profile from '../pages/Profile';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showNotifMenu, setShowNotifMenu] = useState(false); 
    const [hasNotification, setHasNotification] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true); 

    const menuRef = useRef();

   
    const navItems = [
        { name: 'Home', path: '/' },
       
        ...(isLoggedIn ? [{ name: 'Add Item', path: '/add-item' }] : []),
        { name: 'Inventory', path: '/profile' },
        { name: 'Community', path: '/community' },
        { name: 'About', path: '/about' }
    ];

    const notifications = [
        { id: 1, text: "Someone found your Dell Charger!", time: "2 mins ago", type: "success" },
        { id: 2, text: "New item reported in Applied Science faculty.", time: "1 hour ago", type: "info" }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowProfileMenu(false);
                setShowNotifMenu(false);
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50" ref={menuRef}>
            <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] px-6 md:px-8 py-3 flex items-center justify-between shadow-2xl ring-1 ring-white/5">
                
                {/* 1. Logo Section */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-black text-xl italic">U</span>
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <span className="text-white font-black text-sm tracking-tight uppercase leading-none">USJ <span className="text-red-500">Inventory</span></span>
                        <span className="text-white/30 text-[8px] font-bold tracking-[0.3em] mt-1 uppercase">Smart Hub</span>
                    </div>
                </Link>

                {/* 2. Desktop Nav Items */}
                <div className="hidden lg:flex items-center bg-white/5 px-2 py-1.5 rounded-2xl border border-white/5">
                    {navItems.map((item) => (
                        <motion.div key={item.name} whileHover={{ scale: 1.15, y: -2 }} className="rounded-xl">
                            <Link to={item.path} className="px-5 py-2 text-white/60 text-[13px] font-semibold hover:text-white transition-colors block">
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* 3. Right Side */}
                <div className="flex items-center gap-2 md:gap-4">
                    
                    {/* Notification Icon */}
                    <div className="relative">
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                setShowNotifMenu(!showNotifMenu);
                                setShowProfileMenu(false);
                            }}
                            className={`p-2 rounded-full transition-colors ${showNotifMenu ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            {hasNotification && (
                                <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0a0a0a]"></span>
                            )}
                        </motion.button>
                        {/* (Notification Dropdown remains same...) */}
                    </div>

                    <div className="hidden md:block w-[1px] h-6 bg-white/10 mx-1"></div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white/60 hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" /> : <path d="M4 6h16M4 12h16m-7 6h7" strokeWidth="2" strokeLinecap="round" />}
                        </svg>
                    </button>

                    {/* --- Authentication Button Section --- */}
                    {isLoggedIn ? (
    /* Profile Avatar - පෙන්වන්නේ Log වී ඇත්නම් පමණි */
    <motion.button 
        whileTap={{ scale: 0.95 }}
        onClick={() => {
            setShowProfileMenu(!showProfileMenu);
            setShowNotifMenu(false);
        }}
        className="w-9 h-9 bg-gradient-to-tr from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg border border-white/10"
    >
        K
    </motion.button>
) : (
    /* Sign In Button - දැන් මෙය Link එකක් ලෙස ක්‍රියා කරයි */
    <Link to="/signin"> 
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-xs font-bold transition-all"
        >
            Sign In
        </motion.button>
    </Link>
)}
                </div>
            </div>

            {/* Profile Dropdown Menu */}
            <AnimatePresence>
                {showProfileMenu && isLoggedIn && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute right-0 top-[70px] w-52 bg-[#1a1a1a]/95 backdrop-blur-3xl rounded-[1.5rem] p-2 shadow-2xl border border-white/10">
                        <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-white/80 transition-all">
                             <span className="font-bold text-xs tracking-wide">My Profile</span>
                        </Link>
                        <button 
                            onClick={() => {
                                setIsLoggedIn(false); // මෙතනදී Sign out කරවයි
                                setShowProfileMenu(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-red-500/10 rounded-xl text-red-400 font-bold text-xs transition-all"
                        >
                            Sign Out
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 10 }} exit={{ opacity: 0, y: -10 }} className="lg:hidden absolute top-full left-0 w-full mt-2 bg-black/90 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-4 shadow-2xl">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="px-6 py-4 text-white/60 font-semibold hover:text-white hover:bg-white/5 rounded-2xl transition-all">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;