import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OTPVerification = () => {
  // කොටු 6ක් සඳහා state එක
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  // අංකයක් ඇතුළත් කරන විට ක්‍රියාත්මක වන function එක
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // අංකය ගැහුවට පස්සේ ඊළඟ කොටුවට focus එක යවනවා
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Backspace එබූ විට කලින් කොටුවට focus එක යවනවා
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 relative"
      style={{ backgroundImage: `url('/src/images/campus.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-600/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-blue-500/30">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-2">OTP Verification</h2>
          <p className="text-blue-100 text-sm font-light">Enter the 6-digit code sent to your email.</p>
        </div>

        <div className="flex justify-between gap-2 mb-8">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-14 bg-white/10 border border-white/20 rounded-xl text-center text-2xl font-bold text-white outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all"
            />
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-white text-blue-900 font-bold py-3.5 rounded-xl transition duration-300 shadow-xl cursor-pointer"
        >
          Verify OTP
        </motion.button>

        <div className="mt-8 text-center text-sm text-blue-100">
          Didn't receive the code? 
          <button className="text-white font-bold hover:underline ml-1">Resend</button>
        </div>
      </motion.div>
    </div>
  );
};

export default OTPVerification;