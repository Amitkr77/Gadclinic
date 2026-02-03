import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2618958220455!2d77.08745507540292!3d28.62190118456247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d043f76cccc91%3A0xfffccbb87f43e392!2sGAD%20ADVANCED%20ORTHO%20GYNAE%20%26%20INFERTILITY%20CLINICS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
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
            <form className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="example@email.com" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="Knee Surgery Inquiry" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95">
                <Send size={18} />
                SEND MESSAGE
              </button>
            </form>
            
            {/* WhatsApp Floating Hint */}
            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
              <p className="text-sm text-gray-500">Need an urgent answer?</p>
              <a href="https://wa.me/919871189004" className="flex items-center gap-2 text-green-600 font-bold hover:underline">
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;