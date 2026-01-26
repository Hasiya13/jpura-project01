import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  // පියවර පාලනය: step 1 කියන්නේ Email එක, step 2 කියන්නේ OTP එක
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  // Send Link click කළාම ක්‍රියාත්මක වන function එක
  const handleSendLink = (e) => {
    e.preventDefault(); 
    // මෙතනදී Backend එකට email එක යවන logic එක ලියන්න පුළුවන්
    setStep(2); // පියවර 2 (OTP) ට මාරු වෙනවා
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
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 relative"
      style={{ backgroundImage: `url('/src/images/campus.jpg')` }}>
      
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <motion.div 
        layout 
        className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 relative z-10"
      >
        <AnimatePresence mode="wait">
          {step === 1 ? (
            // --- STEP 1: Email Form ---
            <motion.div
              key="email-step"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-white mb-2">Forgot Password</h2>
                <p className="text-blue-100 font-light">Enter your email to receive an OTP code.</p>
              </div>

              <form onSubmit={handleSendLink} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-50 ml-1 mb-1">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all"
                    placeholder="name@uni.ac.lk"
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-white text-blue-900 font-bold py-3.5 rounded-xl transition shadow-xl cursor-pointer"
                >
                  Send Link
                </motion.button>
              </form>
            </motion.div>
          ) : (
            // --- STEP 2: OTP Verification Form ---
            <motion.div
              key="otp-step"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-white mb-2">Verify OTP</h2>
                <p className="text-blue-100 font-light text-sm">Enter the 6-digit code we sent to your email.</p>
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
                    className="w-12 h-14 bg-white/10 border border-white/20 rounded-xl text-center text-2xl font-bold text-white outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all"
                  />
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-blue-900 font-bold py-3.5 rounded-xl transition shadow-xl cursor-pointer"
              >
                Verify Code
              </motion.button>

              <button 
                onClick={() => setStep(1)} 
                className="w-full mt-6 text-sm text-blue-200 hover:text-white transition underline"
              >
                Change Email?
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 text-center">
          <Link to="/signin" className="text-white text-sm font-bold hover:underline">
            Back to Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;