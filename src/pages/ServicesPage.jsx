import React from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div className="pt-20">
       <div className="bg-black py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">WHAT WE DO</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive solutions for the modern music industry.
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;
