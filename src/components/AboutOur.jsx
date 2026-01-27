import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="text-red-500" size={24} />,
      title: "Secure & Trusted",
      desc: "විශ්වවිද්‍යාලයේ සිසුන්ට පමණක් සීමා වූ ආරක්ෂිත පද්ධතියක්."
    },
    {
      icon: <Zap className="text-red-500" size={24} />,
      title: "Instant Updates",
      desc: "නැතිවූ හෝ හමුවූ භාණ්ඩ පිළිබඳ තොරතුරු එසැණින් දැනගන්න."
    },
    {
      icon: <Users className="text-red-500" size={24} />,
      title: "Community Driven",
      desc: "සිසුන් අතර සහයෝගිතාවය වර්ධනය කරන එකම ජාලය."
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-red-500 font-black uppercase tracking-[0.3em] text-xs mb-4">
              Our Mission
            </h4>
            <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
              Empowering <span className="text-red-600 italic">USJ</span> Community <br />
              <span className="text-white/40">Through Innovation</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              ශ්‍රී ජයවර්ධනපුර විශ්වවිද්‍යාලයේ සිසුන් වන ඔබගේ බඩුබාහිරාදිය ආරක්ෂා කර ගැනීමටත්, 
              යම් දෙයක් නැති වූ විට එය පහසුවෙන් සොයා ගැනීමටත් නිර්මාණය කළ නවීනතම ස්මාර්ට් වේදිකාව මෙයයි.
            </p>

            <div className="space-y-4">
              {["Smart Inventory Tracking", "Lost & Found Community Feed", "Verified Student Profiles"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80 font-bold text-sm uppercase tracking-wider">
                  <CheckCircle2 size={18} className="text-red-600" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Feature Cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] flex gap-6 group hover:border-red-500/30 transition-all shadow-2xl"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-500/10 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-white font-black uppercase tracking-tight mb-2 italic">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;