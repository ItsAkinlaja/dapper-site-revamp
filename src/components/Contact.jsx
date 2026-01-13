import React, { useState } from 'react';
import { Mail, Instagram, Twitter, Facebook, ArrowRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  return (
    <section id="contact" className="relative bg-dapper-dark text-white pt-24 pb-24 border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-dapper-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-dapper-gold uppercase tracking-widest mb-2 font-bold text-sm md:text-base">Connect With Us</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
            LET'S MAKE <br className="hidden md:block" /> HISTORY TOGETHER
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                  Whether you're an artist looking for distribution, a brand seeking partnership, or a fan with a question, we're here to listen.
                </p>
              </div>

              <div className="space-y-8">
                <div className="group">
                  <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-2 group-hover:text-dapper-gold transition-colors">General Enquiries</h4>
                  <a href="mailto:info@dappermusicent.com" className="text-2xl md:text-3xl font-bold hover:text-dapper-gold transition-colors flex items-center gap-3">
                    info@dappermusicent.com <ArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" size={24} />
                  </a>
                </div>

                <div className="group">
                  <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-2 group-hover:text-dapper-gold transition-colors">Music Distribution</h4>
                  <a href="mailto:distro@dappermusicent.com" className="text-2xl md:text-3xl font-bold hover:text-dapper-gold transition-colors flex items-center gap-3">
                    distro@dappermusicent.com <ArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-6">Follow Our Socials</h4>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Facebook, label: 'Facebook' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    aria-label={social.label}
                    className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-dapper-gold hover:border-dapper-gold hover:text-black transition-all duration-300 group"
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-10 border border-white/5 backdrop-blur-sm"
          >
            <h4 className="text-2xl font-bold mb-8">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-dapper-gold transition-colors peer"
                  />
                  <label className="absolute left-0 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-dapper-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs">
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-dapper-gold transition-colors peer"
                  />
                  <label className="absolute left-0 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-dapper-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-dapper-gold transition-colors peer"
                />
                <label className="absolute left-0 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-dapper-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs">
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder=" "
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-dapper-gold transition-colors peer resize-none"
                ></textarea>
                <label className="absolute left-0 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-dapper-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs">
                  Message
                </label>
              </div>

              <button 
                type="submit"
                className="group w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-dapper-gold transition-all duration-300 flex items-center justify-center gap-2 mt-4"
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
