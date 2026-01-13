import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Artists', path: '/artists' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-dapper-black/95 backdrop-blur-sm py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white z-50">DAPPER</Link>
        
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

        <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full h-screen bg-dapper-black border-t border-white/10 flex flex-col pt-10"
        >
          <div className="flex flex-col py-4 px-4 space-y-6 items-center">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-2xl font-bold hover:text-dapper-gold ${location.pathname === item.path ? 'text-dapper-gold' : 'text-white'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
