import React from 'react';
import { Music, Film, Mic2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { icon: <Music size={40} />, title: 'Distribution', description: 'Global music distribution to all major streaming platforms.' },
  { icon: <Globe size={40} />, title: 'Publishing', description: 'Protecting your rights and collecting royalties worldwide.' },
  { icon: <Film size={40} />, title: 'Films', description: 'Visual storytelling and cinematic production services.' },
  { icon: <Mic2 size={40} />, title: 'Talent Management', description: 'Nurturing and guiding careers to their full potential.' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-dapper-gold uppercase tracking-widest mb-2 font-bold">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">EMPOWERING <br /> CREATIVITY</h3>
            <p className="text-gray-400 text-lg mb-8">
              We provide a 360-degree approach to music and entertainment, ensuring our artists have the tools and support they need to thrive in the modern industry.
            </p>
            <a href="#contact" className="inline-block px-8 py-3 border border-dapper-gold text-dapper-gold font-bold uppercase tracking-widest hover:bg-dapper-gold hover:text-black transition-colors">
              Work With Us
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-dapper-gray/30 hover:bg-dapper-gray/50 transition-colors border border-white/5"
              >
                <div className="text-dapper-gold mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-2 uppercase">{service.title}</h4>
                <p className="text-sm text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
