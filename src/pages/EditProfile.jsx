import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EditProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "Hasitha Rathnayake",
    email: "hasitha@sjp.ac.lk",
    studentId: "AS2021XXX",
    phone: "071 234 5678",
    faculty: "Applied Sciences",
    bio: "Undergraduate at USJ. Looking for my lost keys!",
    profilePic: "https://ui-avatars.com/api/?name=Hasitha+Rathnayake&background=0D8ABC&color=fff&size=128",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // පසුව මෙතනට Backend API එක සම්බන්ධ කළ හැක
    alert("Profile Updated Successfully!");
    navigate('/profile'); // ආපසු Profile පේජ් එකට යයි
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto pt-32 pb-20 px-6 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Sidebar - Settings Categories */}
          <div className="md:w-1/4 space-y-2">
            <h2 className="text-2xl font-black mb-6 px-4">Settings</h2>
            {[
              { n: 'General', active: true },
              { n: 'Security', active: false },
              { n: 'Notifications', active: false },
              { n: 'Privacy', active: false }
            ].map((item) => (
              <button 
                key={item.n}
                className={`w-full text-left px-5 py-3 rounded-2xl text-sm font-semibold transition-all ${item.active ? 'bg-blue-600 text-white' : 'text-blue-100/40 hover:bg-white/5'}`}
              >
                {item.n}
              </button>
            ))}
          </div>

          {/* Right Side - Edit Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-bold">Edit Public Profile</h3>
              <Link to="/profile" className="text-xs text-blue-400 hover:underline">View Public Profile</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Pic Upload Section */}
              <div className="md:col-span-2 flex items-center gap-6 mb-4">
                <img src={userData.profilePic} alt="Avatar" className="w-20 h-20 rounded-3xl border-2 border-blue-500/30" />
                <div>
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition">Change Photo</button>
                  <p className="text-[10px] text-blue-100/30 mt-2">Recommended: Square JPG or PNG, max 2MB.</p>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-2">Full Name</label>
                <input type="text" name="name" value={userData.name} onChange={handleChange} className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-3 focus:border-blue-500 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-2">Student ID</label>
                <input type="text" name="studentId" value={userData.studentId} onChange={handleChange} className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-3 focus:border-blue-500 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-2">Email</label>
                <input type="email" name="email" value={userData.email} onChange={handleChange} className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-3 focus:border-blue-500 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-2">Phone</label>
                <input type="text" name="phone" value={userData.phone} onChange={handleChange} className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-3 focus:border-blue-500 outline-none transition-all" />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-200/40 ml-2">Bio</label>
                <textarea name="bio" rows="3" value={userData.bio} onChange={handleChange} className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-3 focus:border-blue-500 outline-none transition-all"></textarea>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-12 border-t border-white/5 pt-8">
              <button 
                onClick={handleSave}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/20"
              >
                Update Profile
              </button>
              <button 
                onClick={() => navigate('/profile')}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-bold transition-all"
              >
                Discard
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditProfile;