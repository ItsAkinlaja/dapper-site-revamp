import React from 'react';
import Hero from '../components/Hero';
import Artists from '../components/Artists';
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const news = [
    { title: "Dapper Music Signs 3 New Artistes", date: "Oct 24, 2025", category: "Press Release" },
    { title: "The Rise of Street Pop in Global Charts", date: "Oct 20, 2025", category: "Industry News" },
    { title: "Balloranking Announces UK Tour", date: "Oct 15, 2025", category: "Events" }
  ];

  const videos = [
    { title: "Lasmid - Puul (Official Video)", image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop" },
    { title: "TML Vibez - Go (Visualizer)", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" },
    { title: "Dapper All Stars - Anthem", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop" }
  ];

  return (
    <div className="bg-black">
      <Hero />
      
      {/* Infinite Marquee */}
      <div className="py-4 bg-dapper-gold overflow-hidden whitespace-nowrap border-y border-black relative z-20">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block"
        >
          <span className="text-black font-black uppercase tracking-widest text-lg mx-4">AFROBEATS • STREET POP • AMAPIANO • GLOBAL SOUND • DAPPER MUSIC • AFROBEATS • STREET POP • AMAPIANO • GLOBAL SOUND • DAPPER MUSIC •</span>
          <span className="text-black font-black uppercase tracking-widest text-lg mx-4">AFROBEATS • STREET POP • AMAPIANO • GLOBAL SOUND • DAPPER MUSIC • AFROBEATS • STREET POP • AMAPIANO • GLOBAL SOUND • DAPPER MUSIC •</span>
        </motion.div>
      </div>
      
      {/* Featured Release Section - Revamped */}
      <section className="py-32 bg-dapper-dark text-white relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-dapper-gold/5 to-transparent pointer-events-none"></div>
         <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-dapper-gold/10 rounded-full blur-[100px]"></div>

         <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-16 md:gap-24"
            >
              {/* Spinning Vinyl Effect */}
              <div className="w-full md:w-1/2 flex justify-center">
                 <div className="relative group w-full max-w-md aspect-square">
                    {/* Vinyl Record */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                      className="absolute inset-0 rounded-full bg-black border-4 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[repeating-radial-gradient(#111_0,#111_2px,#000_3px,#000_4px)]"></div>
                      {/* Album Art Center */}
                      <div className="w-1/2 h-1/2 rounded-full overflow-hidden border-4 border-black relative z-10">
                         <img 
                           src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop" 
                           alt="Album Art"
                           className="w-full h-full object-cover"
                         />
                      </div>
                    </motion.div>
                    
                    {/* Album Cover Card (Static/Floating) */}
                    <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square shadow-2xl transform rotate-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105 z-20">
                      <img 
                        src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop" 
                        alt="Latest Release Cover" 
                        className="w-full h-full object-cover border border-white/10"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                 </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-8">
                <div className="flex items-center gap-3 text-dapper-gold uppercase tracking-[0.3em] font-bold text-xs">
                  <span className="w-12 h-[1px] bg-dapper-gold"></span>
                  Now Streaming
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
                  ECHOES OF <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">THE STREETS</span>
                </h2>
                
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg border-l-2 border-dapper-gold/30 pl-6">
                  The definitive collection of street pop anthems. Featuring the rawest voices and the hardest beats from the underground to the mainstream.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-dapper-gold transition-all hover:scale-105 flex items-center gap-2">
                    <Play size={18} fill="currentColor" /> Listen Now
                  </button>
                  <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Tracklist
                  </button>
                </div>
                
                {/* Audio Viz Simulation */}
                <div className="flex gap-1 items-end h-8">
                  {[...Array(20)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: ["20%", "100%", "50%", "80%", "30%"] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1, ease: "easeInOut" }}
                      className="w-1 bg-dapper-gold/50 rounded-t-sm"
                    ></motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
         </div>
      </section>

      {/* Event Banner Section */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-5/12 order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-1 border border-dapper-gold text-dapper-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">
                Upcoming Event
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                Trench <br />
                <span className="text-dapper-gold">Symphony</span>
              </h2>
              <p className="text-gray-400 text-xl mb-10 max-w-lg leading-relaxed">
                Experience the raw energy of the streets meeting the elegance of a symphony. A historic night of music, culture, and pure vibration.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-dapper-gold">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wider">December 2025</p>
                    <p className="text-gray-500 text-sm">Main Arena, Lagos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-dapper-gold">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wider">Tickets Available Now</p>
                    <p className="text-gray-500 text-sm">Starting from ₦5,000</p>
                  </div>
                </div>
              </div>
              
              <a href="https://www.onburd.com/ng/app/events/details/1f63b6bb32384389" target="_blank" rel="noopener noreferrer" className="group relative px-10 py-5 bg-white text-black font-black uppercase tracking-widest overflow-hidden transition-all duration-300 hover:pr-14 inline-block">
                <span className="relative z-10">Get Your Tickets</span>
                <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" size={20} />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-7/12 order-1 lg:order-2"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-dapper-gold/30 pointer-events-none hidden md:block"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-dapper-gold/30 pointer-events-none hidden md:block"></div>
                
                <div className="relative z-10 overflow-hidden shadow-[0_0_50px_rgba(196,160,82,0.15)] group">
                  <img 
                    src="https://dappermusicent.com/wp-content/uploads/2025/08/trench-symphony-new-1920x2400.jpg" 
                    alt="Trench Symphony Concert" 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <Artists />

      {/* Featured Videos */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 text-dapper-gold uppercase tracking-[0.3em] font-bold text-xs mb-4">
                  <span className="w-12 h-[1px] bg-dapper-gold"></span>
                  Watch Now
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Featured <span className="text-dapper-gold">Visuals</span>
              </h2>
            </div>
            <Link to="/artists" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-dapper-gold transition-colors group">
              View All Channel <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden mb-6 border border-white/10 group-hover:border-dapper-gold/50 transition-colors">
                  <img src={video.image} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center group-hover:scale-110 group-hover:bg-dapper-gold group-hover:border-dapper-gold transition-all duration-300">
                      <Play className="text-white fill-white group-hover:text-black group-hover:fill-black" size={24} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide group-hover:text-dapper-gold transition-colors leading-tight">{video.title}</h3>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <Link to="/artists" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-dapper-gold transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-dapper-dark text-white border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Latest News</h2>
              <p className="text-gray-400 mb-8">
                Stay updated with the latest happenings at Dapper Music. From new signings to global tour announcements.
              </p>
              <button className="px-8 py-3 border border-dapper-gold text-dapper-gold font-bold uppercase tracking-widest hover:bg-dapper-gold hover:text-black transition-colors">
                Read Blog
              </button>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 gap-6">
              {news.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-6 p-6 bg-white/5 hover:bg-white/10 transition-colors border-l-2 border-transparent hover:border-dapper-gold group cursor-pointer"
                >
                  <div className="flex flex-col justify-center min-w-[100px]">
                    <span className="text-dapper-gold font-bold text-sm uppercase tracking-wider">{item.category}</span>
                    <span className="text-gray-500 text-xs mt-1 flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold group-hover:text-dapper-gold transition-colors">{item.title}</h3>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-dapper-gold group-hover:text-black transition-colors">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
