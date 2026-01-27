import React from 'react';
import { motion } from 'framer-motion';

const StatsCounter = () => {
  const stats = [
    {
      id: 1,
      label: "Registered Students",
      value: "5,000+",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13.732 4c-.76-1.01-1.93-2-3.482-2-1.552 0-2.722.99-3.482 2m12.964 0c.76-1.01 1.93-2 3.482-2 1.552 0 2.722.99 3.482 2M9.882 18H5.118M17 11h-1m1-4h-1m1 8h-1" />
        </svg>
      ),
      color: "blue"
    },
    {
      id: 2,
      label: "Lost Items Reported",
      value: "1,200+",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: "red"
    },
    {
      id: 3,
      label: "Items Found & Returned",
      value: "850+",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "emerald"
    }
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:bg-white/10 transition-all duration-500"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl bg-${stat.color}-500/20 flex items-center justify-center mb-6 text-${stat.color}-400 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-${stat.color}-500/10`}>
                {stat.icon}
              </div>
              
              {/* Text Content */}
              <h4 className="text-4xl font-black text-white mb-2 tracking-tight">
                {stat.value}
              </h4>
              <p className="text-blue-100/50 font-medium uppercase text-xs tracking-widest">
                {stat.label}
              </p>

              {/* Decorative Gradient Line */}
              <div className={`absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-${stat.color}-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;