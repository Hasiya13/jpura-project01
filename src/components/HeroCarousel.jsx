import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Empowering Campus Life",
    description: "USJ DigitalID is the official central digital hub for USJ students. We bridge the gap between lost belongings and their owners through real-time tracking.",
    image: "/src/images/campus.jpg", 
    button: "Get Started"
  },
  {
    id: 2,
    title: "USJ DigitalID",
    description: "Official management system for University of Sri Jayewardenepura.",
    image: "https://www.ecu.edu.lk/wp-content/uploads/students-studying-working-together-in-classroom-1440x548-1.jpg", 
    button: "Explore Courses"
  },
  {
    id: 3,
    title: "Join the Community",
    description: "Connect with thousands of students and lecturers on our digital platform.",
    image: "https://img.freepik.com/premium-photo/education-university-students-lecture-studying-learning-business-management-scholarship-college-portrait-happy-man-with-laptop-books-group-friends-modern-classroom_590464-118154.jpg", 
    button: "Register Now"
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // තත්පර 5කට වරක් ස්ලයිඩර් එක මාරු වීමට (Auto play)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          {/* Overlay එක - අකුරු පැහැදිලිව පේන්න */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center px-4 max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                {slides[current].title}
              </h1>
              <p className="text-xl text-blue-100/80 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                {slides[current].description}
              </p>
              <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/30">
                {slides[current].button}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots - පල්ලෙහා තියෙන පොඩි රවුම් */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-blue-500 w-10" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;