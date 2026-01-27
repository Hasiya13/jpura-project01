import React from 'react';
import { color, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 relative"
      style={{ 
        backgroundImage: `url('/src/images/campus.jpg')`,
      }}
    >
    
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Main Login Card - Glassmorphism Effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col p-8 border border-white/20 relative z-10"
      >
        {/* University Logo Space / Icon */}
        <motion.div 
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center border border-white/30 shadow-inner"
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        </motion.div>

       <h2 className="text-3xl font-black text-center text-white mb-2 tracking-tight uppercase">Sign <span className="text-red-500">In</span></h2>
        <p className="text-center text-blue-100 mb-8 font-light">Enter Your Account</p>
        
        <form className="space-y-5">
          {/* Email Field */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-semibold text-blue-50 ml-1 mb-1">Email</label>
            <input 
              type="email" 
              className="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:bg-white/20 outline-none transition-all duration-200"
        
              required
            />
          </motion.div>

          {/* Password Field */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-between items-center ml-1 mb-1">
              <label className="text-sm font-semibold text-blue-50">Password</label>
              
             
            </div>
            <input 
              type="password" 
              className="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:bg-white/20 outline-none transition-all duration-200"
              placeholder="••••••••"
              required

              
            />
             <Link to="/forgot-password" className="text-xs text-blue-300 hover:text-white transition">Forgot Password?</Link>
          </motion.div>

          {/* Login Button */}
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 238, 238, 0.95)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-blue-900 font-bold py-3.5 rounded-xl transition duration-300 shadow-xl mt-4 cursor-pointer"
          >
            Log In
          </motion.button>

          
        </form>

        

        {/* Footer Link */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center text-sm text-blue-100"
        >
          New User? 
          <Link to="/signup" className="text-white font-bold hover:underline ml-1">Register Now </Link><Link to="/home" className="text-white font-bold hover:underline ml-1" style={{color:"red"}}>Back To Home</Link>
        </motion.p>

        
      </motion.div>
    </div>
  );
};

export default SignIn;