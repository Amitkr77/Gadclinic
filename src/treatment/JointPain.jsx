import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Wind, Move } from 'lucide-react';

const JointPain = () => {
  return (
    <div className="bg-slate-50 pt-32 md:pt-40 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 uppercase">Joint Pain Management</h1>
          <p className="text-gray-600">Expert care for Arthritis, Gout, and age-related stiffness without jumping straight to surgery.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Wind />, title: "Arthritis Relief", desc: "Long-term management of OA & RA." },
            { icon: <Thermometer />, title: "Injection Therapy", desc: "Viscosupplementation for joint lubrication." },
            { icon: <Move />, title: "Physiotherapy", desc: "Guided exercises to regain flexibility." }
          ].map((card, i) => (
            <motion.div whileHover={{ y: -10 }} key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
              <p className="text-gray-500 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JointPain;