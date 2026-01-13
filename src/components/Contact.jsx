import React, { useState } from 'react';
import { Mail, Instagram, Twitter, Facebook, ArrowRight, Send, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formState);
    alert('Thank you for contacting Dapper Music. We will get back to you soon.');
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses = (field) => `
    w-full bg-transparent border-b-2 text-lg py-4 px-2 transition-all duration-300 outline-none
    ${focusedField === field || formState[field] ? 'border-dapper-gold' : 'border-white/20'}
    ${focusedField === field ? 'placeholder-dapper-gold' : 'placeholder-white/40'}
  `;

  return (
    <section id="contact" className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dapper-gold/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-dapper-gold uppercase tracking-[0.2em] mb-4 font-bold text-sm"
              >
                Get in Touch
              </motion.h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dapper-gold to-yellow-100">
                  THE FUTURE
                </span>
              </h3>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
                Whether you're an artist ready to blow up, a brand looking for culture, or just a fan—we're all ears.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { label: 'General Enquiries', value: 'info@dappermusicent.com', icon: Mail },
                { label: 'Music Distribution', value: 'distro@dappermusicent.com', icon: Send },
                { label: 'Visit Us', value: 'Lekki Phase 1, Lagos, Nigeria', icon: MapPin },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-dapper-gold group-hover:bg-dapper-gold group-hover:text-black transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</h4>
                    <p className="text-lg font-medium group-hover:text-dapper-gold transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-6">Socials</h4>
              <div className="flex gap-4">
                {[
                  Instagram,
                  Twitter,
                  Facebook
                ].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#"
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-dapper-gold hover:border-dapper-gold hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-dapper-gold/10 rounded-full blur-[50px] pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className={`absolute left-2 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formState.name ? '-top-6 text-xs text-dapper-gold' : 'top-4 text-gray-500'}`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('name')}
                      required
                    />
                  </div>
                  <div className="relative group">
                    <label className={`absolute left-2 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formState.email ? '-top-6 text-xs text-dapper-gold' : 'top-4 text-gray-500'}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('email')}
                      required
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className={`absolute left-2 transition-all duration-300 pointer-events-none ${focusedField === 'subject' || formState.subject ? '-top-6 text-xs text-dapper-gold' : 'top-4 text-gray-500'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses('subject')}
                    required
                  />
                </div>

                <div className="relative group">
                  <label className={`absolute left-2 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formState.message ? '-top-6 text-xs text-dapper-gold' : 'top-4 text-gray-500'}`}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows="4"
                    className={`${inputClasses('message')} resize-none`}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-dapper-gold text-black font-bold text-lg py-5 px-8 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 mt-4"
                >
                  <span>SEND MESSAGE</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
