import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Video/Image Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/images/Concert-bg.jpg" 
          alt="African Concert Crowd" 
          className="w-full h-full object-cover"
        />
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-10 mix-blend-overlay"></div>
      </motion.div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-dapper-gold"></div>
                <span className="text-dapper-gold uppercase tracking-[0.3em] text-xs font-bold">Est. 2018</span>
                <div className="h-[1px] w-12 bg-dapper-gold"></div>
             </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
            className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8 mix-blend-screen"
          >
            DAPPER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0">EMPIRE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 max-w-xl mx-auto mb-12 text-lg md:text-xl font-light leading-relaxed"
          >
            We don't just distribute music; we amplify <span className="text-white font-bold">culture</span>. The heartbeat of the new generation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <a href="#artists" className="group px-10 py-4 bg-dapper-gold text-black font-bold uppercase tracking-widest transition-all hover:bg-white hover:scale-105 flex items-center gap-3">
              Explore Roster
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://www.youtube.com/@DapperMusicEnt" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-sm">
              <Play size={20} fill="currentColor" />
              Showreel
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-0 w-full flex justify-center z-20"
      >
        <div className="flex flex-col items-center gap-2">
           <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll to Discover</span>
           <motion.div 
             animate={{ height: [20, 40, 20] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="w-[1px] bg-gradient-to-b from-dapper-gold to-transparent"
           ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
