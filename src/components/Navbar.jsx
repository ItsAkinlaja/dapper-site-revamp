import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Artists', path: '/artists' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Instagram size={24} />, href: 'https://instagram.com' },
    { icon: <Twitter size={24} />, href: 'https://twitter.com' },
    { icon: <Youtube size={24} />, href: 'https://youtube.com' },
  ];

  return (
    <motion.nav 
      initial={location.pathname !== '/' ? { y: -100 } : { y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-[100] transition-colors duration-300 ${isOpen ? 'bg-black' : (scrolled || location.pathname !== '/' ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent')} ${scrolled || location.pathname !== '/' ? 'py-4' : 'py-6'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white z-50 relative">
          DAPPER
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`text-sm font-medium hover:text-dapper-gold transition-colors uppercase tracking-widest ${location.pathname === item.path ? 'text-dapper-gold' : 'text-white'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden text-white z-50 relative hover:text-dapper-gold transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black md:hidden flex flex-col justify-center items-center"
          >
            {/* Decorative Elements - Simplified for Performance */}
            <div className="absolute top-0 right-0 w-full h-full bg-dapper-black opacity-95" />
            
            <div className="flex flex-col space-y-8 text-center z-10 w-full px-8">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    className={`block text-4xl font-black uppercase tracking-tighter transition-all duration-300 ${
                      location.pathname === item.path 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-dapper-gold to-yellow-200 scale-105' 
                        : 'text-white/50 hover:text-white hover:scale-105'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Socials */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex space-x-8"
            >
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-dapper-gold transition-colors transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
