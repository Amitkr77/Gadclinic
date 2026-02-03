import React from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle, Phone } from 'lucide-react';

const KneeReplacement = () => {
  const benefits = [
    "Walking within 24 hours of surgery",
    "Minimally invasive techniques",
    "High-quality ceramic/metal implants",
    "Personalized post-op rehab plan"
  ];

  return (
    <div className="bg-white pt-32 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6">KNEE <br/><span className="text-blue-600">REPLACEMENT</span></h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We specialize in Total and Partial Knee Replacement (Arthroplasty). Using advanced surgical techniques, Dr. Parvinder Singh Arora helps patients regain mobility and live a pain-free life.
            </p>
            <div className="space-y-4">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-semibold text-gray-800">
                  <CheckCircle className="text-green-500" size={20} /> {item}
                </div>
              ))}
            </div>
          </motion.div>
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-blue-50 h-[400px] flex items-center justify-center">
            {/* Replace with actual image of Knee surgery/model */}
            <Activity size={100} className="text-blue-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KneeReplacement;