import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import campusImg from '../images/campus.jpg'; // path එක නිවැරදිද බලන්න
import {
    User, Mail, Hash, Package, Edit2, Camera,
    Trash2, Search, Tag, Calendar, AlertTriangle, CheckCircle, X, Save, QrCode
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StudentQR from '../components/StudentQR';
import EditProfileModal from '../components/EditProfileModal';

const Profile = () => {
    // --- Profile State ---
    const [userData, setUserData] = useState({
        name: "KASUN PERERA",
        email: "kasun.p@sjup.ac.lk",
        studentId: "AS2021550",
        department: "FACULTY OF APPLIED SCIENCES",
        profilePic: null,
    });

    // --- Modal States ---
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isQrModalOpen, setIsQrModalOpen] = useState(false);
    const [tempData, setTempData] = useState({ ...userData });

    // --- Inventory State ---
    const [items, setItems] = useState([
        { id: 1, name: "Scientific Calculator", category: "ELECTRONICS", date: "2024-01-20", status: "Stored" },
        { id: 2, name: "Engineering Drawing Kit", category: "STATIONERY", date: "2024-01-18", status: "Lost" },
        { id: 3, name: "Lab Coat", category: "LAB EQUIPMENT", date: "2024-01-15", status: "Stored" },
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    // --- Handlers ---
    const handleSaveProfile = (e) => {
        e.preventDefault();
        setUserData({ ...tempData });
        setIsEditModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    const toggleLostStatus = (id) => {
        setItems(items.map(item => {
            if (item.id === id) {
                const newStatus = item.status === "Lost" ? "Stored" : "Lost";
                return { ...item, status: newStatus };
            }
            return item;
        }));
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-500/30 relative overflow-hidden">
            
            {/* --- BACKGROUND ELEMENTS --- */}
            {/* --- BACKGROUND ELEMENTS --- */}
<div className="fixed inset-0 z-0">
    {/* Animated Blobs */}
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[150px]"></div>
    
    {/* Campus Image Background */}
    <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat transition-opacity duration-1000" 
        style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.9)), url(${campusImg})` 
        }}
    ></div>

    {/* Subtle Grid Overlay */}
    <div className="absolute inset-0 opacity-[0.1]" 
         style={{ backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}>
    </div>
</div>

            <div className="relative z-10">
                <Navbar />

                <main className="max-w-6xl mx-auto pt-32 pb-20 px-6">

                    {/* --- 1. PROFILE HEADER CARD --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl overflow-hidden"
                    >
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Action Buttons */}
                        <div className="absolute top-6 right-6 flex gap-3 z-10">
                            <button
                                onClick={() => setIsQrModalOpen(true)}
                                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-2xl transition-all text-xs font-black uppercase tracking-widest border border-white/10"
                            >
                                <QrCode size={16} /> My QR
                            </button>
                            <button
                                onClick={() => { setTempData({ ...userData }); setIsEditModalOpen(true); }}
                                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-2xl transition-all text-xs font-black uppercase tracking-widest shadow-lg shadow-red-600/20"
                            >
                                <Edit2 size={16} /> Edit
                            </button>
                        </div>

                        {/* Profile Image */}
                        <div className="relative group mt-8 md:mt-0">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-orange-600 to-red-600 p-1">
                                <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden border-4 border-black/20 font-black text-4xl italic">
                                    {userData.profilePic ? <img src={userData.profilePic} alt="P" className="w-full h-full object-cover" /> : userData.name.charAt(0)}
                                </div>
                            </div>
                            <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full text-black shadow-lg hover:scale-110 transition-transform">
                                <Camera size={16} />
                            </button>
                        </div>

                        {/* User Info */}
                        <div className="flex-1 text-center md:text-left pt-4 md:pt-0">
                            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-1 uppercase italic">{userData.name}</h1>
                            <p className="text-red-500 font-bold text-xs tracking-[0.2em] mb-6 uppercase">{userData.department}</p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <div className="bg-white/5 border border-white/5 px-4 py-2 rounded-full flex items-center gap-2">
                                    <Mail size={14} className="text-red-500" />
                                    <span className="text-white/40 text-[11px] font-medium">{userData.email}</span>
                                </div>
                                <div className="bg-white/5 border border-white/5 px-4 py-2 rounded-full flex items-center gap-2">
                                    <Hash size={14} className="text-red-500" />
                                    <span className="text-white/40 text-[11px] font-medium">{userData.studentId}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- 2. INVENTORY LIST --- */}
                    <div className="mt-16">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-8 bg-red-600 rounded-full"></div>
                                <h2 className="text-2xl font-black tracking-tight uppercase">MY LISTED <span className="text-red-600">ITEMS</span></h2>
                            </div>

                            <div className="relative w-full md:w-80">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                <input
                                    type="text"
                                    placeholder="Search my items..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-xs font-medium focus:outline-none focus:ring-2 ring-red-500/50 transition-all text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <AnimatePresence>
                                {filteredItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className={`group relative bg-white/[0.02] border border-white/5 rounded-[1.8rem] p-5 flex flex-col md:flex-row items-center gap-6 transition-all hover:bg-white/[0.05] ${item.status === 'Lost' ? 'bg-red-500/5 border-red-500/10' : ''}`}
                                    >
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all ${item.status === 'Lost' ? 'bg-red-500 text-white animate-pulse' : 'bg-white/5 border-white/5 text-white/20'}`}>
                                            {item.status === 'Lost' ? <AlertTriangle size={24} /> : <Package size={24} />}
                                        </div>

                                        <div className="flex-1 text-center md:text-left">
                                            <div className="flex flex-col md:flex-row items-center gap-3 mb-1">
                                                <h4 className="font-bold text-lg tracking-tight">{item.name}</h4>
                                                {item.status === 'Lost' && (
                                                    <span className="bg-red-600 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest animate-pulse">REPORTED LOST</span>
                                                )}
                                            </div>
                                            <div className="flex justify-center md:justify-start gap-4 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                                                <span className="flex items-center gap-1.5"><Tag size={12} className="text-red-500/50" /> {item.category}</span>
                                                <span className="flex items-center gap-1.5"><Calendar size={12} className="text-red-500/50" /> {item.date}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => toggleLostStatus(item.id)}
                                                className={`flex items-center gap-2 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${item.status === 'Lost' ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-600/20' : 'bg-white/5 text-orange-500 border-white/5 hover:bg-orange-600/10'}`}
                                            >
                                                {item.status === 'Lost' ? <><CheckCircle size={14} /> Found</> : <><AlertTriangle size={14} /> Lost?</>}
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="p-3 bg-white/5 hover:bg-red-500/20 text-white/20 hover:text-red-500 border border-white/5 rounded-xl transition-all"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>

            {/* Modals */}
            <StudentQR
                isOpen={isQrModalOpen}
                onClose={() => setIsQrModalOpen(false)}
                studentData={userData}
            />
            <EditProfileModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                userData={userData}
                onSave={handleSaveProfile}
            />
        </div>
    );
};

export default Profile;