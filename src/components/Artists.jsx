import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';

const artists = [
  { name: 'LASMID', image: '/images/lasmid-dapper-960x960.jpg', genre: 'Afro-Fusion' },
  { name: 'BALLORANKING', image: '/images/Balloranking.jpg', genre: 'Street Pop' },
  { name: 'TML VIBEZ', image: '/images/tmlvibez-dapper-960x960.jpg', genre: 'Vibes' },
  { name: 'BHADBOI OML', image: '/images/BHADBOI OML.jpg', genre: 'Afro-Adura' },
  { name: 'REEHA', image: '/images/Reeha_Dapper_2-960x960.jpg', genre: 'Alté' },
  { name: 'T.I BLAZE', image: '/images/T.I BLAZE.jpg', genre: 'Street Pop' },
  { name: 'CAZULEE', image: '/images/CAZULEE.jpg', genre: 'Afro-Pop' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Artists = () => {
  return (
    <section id="artists" className="py-24 bg-dapper-dark text-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-5xl md:text-8xl font-black mb-2 tracking-tighter leading-[0.9]">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-dapper-gold to-white">STARS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md">Shaping the future of African music, one hit at a time.</p>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
              <span className="text-xs font-mono uppercase tracking-widest text-dapper-gold">Roster 2026</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              variants={item}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-900 cursor-pointer"
            >
              {/* Image */}
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Hover Overlay - Gold Tint */}
              <div className="absolute inset-0 bg-dapper-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                  <span className="inline-block px-2 py-1 bg-dapper-gold text-black text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {artist.genre}
                  </span>
                  <h3 className="text-3xl font-black tracking-tighter uppercase leading-none mb-1 group-hover:text-dapper-gold transition-colors">
                    {artist.name}
                  </h3>
                  <div className="w-full h-px bg-white/20 group-hover:bg-dapper-gold/50 transition-colors duration-500"></div>
                </div>
                
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 absolute bottom-6 right-6 left-6">
                  <span className="text-xs font-mono text-gray-300">VIEW PROFILE</span>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-dapper-gold transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* "Join Us" Card */}
          <motion.div 
            variants={item}
            className="group relative aspect-[3/4] overflow-hidden bg-dapper-gold flex items-center justify-center p-6 text-center cursor-pointer"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="relative z-10">
               <h3 className="text-4xl font-black text-black uppercase tracking-tighter mb-4 leading-none">
                 Join The <br/> Movement
               </h3>
               <p className="text-black/80 font-medium mb-6">Are you the next big thing?</p>
               <button className="px-6 py-3 border-2 border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-dapper-gold transition-colors">
                 Submit Demo
               </button>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Artists;
