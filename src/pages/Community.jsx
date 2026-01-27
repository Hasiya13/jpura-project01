import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Heart, Share2, Send, MoreHorizontal, User, ShieldCheck, Camera, X } from 'lucide-react';

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Kasun Perera",
      role: "Student",
      time: "2h ago",
      content: "මම අද Management Faculty එකේ Canteen එකේ තිබිලා විද්‍යාත්මක ගණක යන්ත්‍රයක් (Casio Calculator) හොයාගත්තා. අයිතිකරු ඉන්නවා නම් මෙතනින් මැසේජ් එකක් දාන්න.",
      image: null,
      likes: 12,
      comments: 5,
      isVerified: true
    }
  ]);

  const [newPost, setNewPost] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Image එකක් select කළ විට ක්‍රියාත්මක වේ
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if(!newPost.trim() && !selectedImage) return;
    const post = {
      id: Date.now(),
      user: "Current User",
      role: "Student",
      time: "Just now",
      content: newPost,
      image: selectedImage, // Image එක මෙතනට එකතු වේ
      likes: 0,
      comments: 0,
      isVerified: false
    };
    setPosts([post, ...posts]);
    setNewPost("");
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-white text-4xl font-black uppercase tracking-tighter">Community <span className="text-red-600">Feed</span></h2>
          <p className="text-gray-500 text-sm mt-2 font-medium uppercase tracking-widest">Connect with fellow students & find lost items</p>
        </div>

        {/* Create Post Input */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] mb-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center font-black text-white shrink-0 shadow-lg shadow-red-600/20">U</div>
            <div className="w-full space-y-4">
              <textarea 
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="හමුවූ දෙයක් හෝ නැතිවූ දෙයක් ගැන මෙතන ලියන්න..."
                className="w-full bg-black/40 border border-white/5 rounded-2xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-red-600/50 transition-all resize-none min-h-[100px]"
              />

              {/* Image Preview Area */}
              <AnimatePresence>
                {selectedImage && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/10"
                  >
                    <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-2 right-2 p-1.5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between items-center">
                {/* Hidden File Input */}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageChange} 
                  accept="image/*" 
                  className="hidden" 
                />
                
                {/* Camera Button */}
                <button 
                  onClick={() => fileInputRef.current.click()}
                  className="p-3 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-xl transition-all flex items-center gap-2 text-xs font-bold"
                >
                  <Camera size={20} />
                  <span>ADD PHOTO</span>
                </button>

                <button 
                  onClick={handlePost}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition-all flex items-center gap-2 group shadow-lg shadow-red-600/20"
                >
                  Post Now
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feed Posts */}
        <div className="space-y-6">
          <AnimatePresence>
            {posts.map((post) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-[2rem] hover:border-white/10 transition-all group shadow-xl"
              >
                {/* User Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gradient-to-tr from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white font-bold">
                      {post.user.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="text-white font-bold text-sm">{post.user}</h4>
                        {post.isVerified && <ShieldCheck size={14} className="text-red-500" />}
                      </div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{post.role} • {post.time}</p>
                    </div>
                  </div>
                  <button className="text-gray-600 hover:text-white transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed text-sm mb-4">
                  {post.content}
                </p>

                {/* Post Image */}
                {post.image && (
                  <div className="mb-6 rounded-2xl overflow-hidden border border-white/5">
                    <img src={post.image} alt="Post content" className="w-full h-auto max-h-[400px] object-cover" />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors group">
                    <Heart size={18} className="group-hover:fill-red-500" />
                    <span className="text-xs font-bold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <MessageCircle size={18} />
                    <span className="text-xs font-bold">{post.comments}</span>
                  </button>
                  <button className="ml-auto text-gray-500 hover:text-white transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Community;