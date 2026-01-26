import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignUp = () => {
  // Step 1: Registration Form, Step 2: OTP Verification
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  // Register button එක එබූ විට ක්‍රියාත්මක වේ
  const handleRegister = (e) => {
    e.preventDefault();
    // මෙතනදී Backend එකට data යවන logic එක දාන්න පුළුවන්
    setStep(2); 
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;
    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-8 relative"
      style={{ backgroundImage: `url('/src/images/campus.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <motion.div 
        layout // Content මාරු වෙද්දී Card එක Smooth ලෙස resize වීමට
        className={`w-full bg-white/10 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden p-8 border border-white/20 relative z-10 transition-all duration-500 ${step === 1 ? 'max-w-2xl' : 'max-w-md'}`}
      >
        <AnimatePresence mode="wait">
          {step === 1 ? (
            // --- STEP 1: Registration Form ---
            <motion.div
              key="signup-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="text-center mb-6">
                <h2 className="text-3xl font-black text-white tracking-tight">Join Us</h2>
                <p className="text-blue-200 text-sm font-light">Create your student account in seconds</p>
              </div>
              
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-blue-100 ml-1 uppercase">Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-blue-100 ml-1 uppercase">Mobile Number</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="07XXXXXXXX" />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-semibold text-blue-100 ml-1 uppercase">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="name@uni.ac.lk" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-blue-100 ml-1 uppercase">Password</label>
                    <input type="password" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-blue-100 ml-1 uppercase">Confirm Password</label>
                    <input type="password" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl shadow-lg mt-4 cursor-pointer"
                >
                  Create Account
                </motion.button>
              </form>
            </motion.div>
          ) : (
            // --- STEP 2: OTP Verification ---
            <motion.div
              key="otp-section"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.14c1.89-1.282 3.615-2.833 5.17-4.581C13.55 11.282 15.03 9.37 15.835 7.244M15.835 7.244A10.5 10.5 0 009 6.513M15.835 7.244a10.5 10.5 0 01-2.285 4.756" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Verify Your Email</h2>
                <p className="text-blue-100 text-sm font-light">We've sent a 6-digit code to your email.</p>
              </div>

              <div className="flex justify-between gap-2 mb-8">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[index] = el)}
                    value={data}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    className="w-10 h-12 md:w-12 md:h-14 bg-white/10 border border-white/20 rounded-xl text-center text-xl font-bold text-white outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-blue-900 font-bold py-3.5 rounded-2xl shadow-xl"
              >
                Verify & Register
              </motion.button>
              
              <button onClick={() => setStep(1)} className="w-full mt-6 text-xs text-blue-200 hover:text-white transition underline">
                Back to Registration
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {step === 1 && (
          <p className="mt-6 text-center text-sm text-blue-100/60">
            Already have an account? 
            <Link to="/signin" className="text-white font-bold hover:underline ml-1">Sign In</Link>
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SignUp;