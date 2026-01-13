import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white mb-6 inline-block">DAPPER</Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              The heartbeat of the new generation. We are shaping the future of African music and entertainment, one hit at a time.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-dapper-gold hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Artists', path: '/artists' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-dapper-gold transition-colors text-sm uppercase tracking-wider">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Stay Updated</h4>
            <p className="text-gray-500 text-sm mb-4">Join our newsletter for exclusive releases and events.</p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 p-3 pr-10 text-white focus:outline-none focus:border-dapper-gold transition-colors placeholder:text-gray-600"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-dapper-gold hover:text-white transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Dapper Music & Entertainment.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
           <p className="text-gray-500 text-sm font-medium tracking-wide">
             Website built by <a href="https://www.instagram.com/its_akinlaja/" target="_blank" rel="noopener noreferrer" className="text-dapper-gold font-bold hover:text-white transition-all duration-300 drop-shadow-[0_0_8px_rgba(197,160,89,0.8)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">Akinlaja</a>
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
