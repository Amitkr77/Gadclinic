import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle WhatsApp Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    
    const text = `*New Website Message*%0a` +
                 `--------------------------%0a` +
                 `*Name:* ${formData.name}%0a` +
                 `*Email:* ${formData.email}%0a` +
                 `*Subject:* ${formData.subject}%0a` +
                 `*Message:* ${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    window.open(whatsappURL, '_blank');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    
    alert("Opening WhatsApp... Thank you for reaching out!");
  };

  return (
    <div className="min-h-screen bg-white pt-32 md:pt-55 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-blue-900 uppercase tracking-tighter"
          >
            Get In <span className="text-red-600">Touch</span>
          </motion.h1>
          <p className="text-gray-500 mt-4 text-lg">We are here to help you on your journey to recovery.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Information & Map */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <Phone className="text-blue-600 mb-4" size={28} />
                <h3 className="font-bold text-gray-900">Phone</h3>
                <p className="text-sm text-gray-600">+91 98711 89004</p>
                <p className="text-sm text-gray-600">+91 98112 36004</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <Clock className="text-blue-600 mb-4" size={28} />
                <h3 className="font-bold text-gray-900">Clinic Hours</h3>
                <p className="text-sm text-gray-600">Mon - Sat: 10AM - 8PM</p>
                <p className="text-sm text-gray-600">Sunday: Closed</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-80 rounded-3xl overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-500 border border-slate-200">
              <iframe
                src={import.meta.env.VITE_MAP_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Clinic Map"
              ></iframe>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-blue-900 text-white rounded-3xl">
              <MapPin size={32} className="shrink-0 text-blue-300" />
              <p className="text-sm font-medium italic">
                C4A 321A, Janak Puri, Near Janak Puri East Metro, New Delhi-110058
              </p>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Send us a Message</h2>
            
            {/* onSubmit and Linked state to inputs */}
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" 
                    placeholder="example@email.com" 
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" 
                  placeholder="Knee Surgery Inquiry" 
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <Send size={18} />
                SEND TO WHATSAPP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;