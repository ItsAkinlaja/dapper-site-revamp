import React from 'react';
import Artists from '../components/Artists';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const ArtistsPage = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Spotlight Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/BHADBOI OML.jpg" 
            alt="Spotlight Artist" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
               <span className="px-3 py-1 bg-dapper-gold text-black font-bold text-xs uppercase tracking-widest">Artist of the Month</span>
               <span className="text-white/60 font-mono text-xs uppercase tracking-widest">Global Recognition</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tighter leading-none mix-blend-overlay">
              BHADBOI <br/> OML
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Redefining the sound of the streets with soulful melodies and hard-hitting lyrics. The new face of Afro-Adura.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-dapper-gold transition-colors flex items-center gap-2">
                <Play size={20} fill="currentColor" /> Play Latest Hit
              </button>
              <button className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                View Full Profile
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent mx-auto"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] mt-4 block">Scroll</span>
        </motion.div>
      </section>

      <Artists />
    </div>
  );
};

export default ArtistsPage;
