import React from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import StatsCounter from '../components/StatsCounter';
import Footer from '../components/Footer';
import AboutOur from '../components/AboutOur';



const Home = () => {
  return (
    
    <div className="flex flex-col min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        <HeroCarousel />
        <StatsCounter />
        <AboutOur/>
        <Footer />
        
       
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default Home;