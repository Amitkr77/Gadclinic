import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Phone } from 'lucide-react';
import x_ray from '../assets/x_ray.jpeg';


const Fracture = () => {
  return (
    <div className="bg-white pt-32 md:pt-57 pb-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-red-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-black text-red-900 mb-6 uppercase">Fracture <br/>Management</h1>
            <p className="text-gray-700 text-lg mb-8">
              From simple cracks to complex multi-fragment trauma, we provide 24/7 fracture stabilization using modern plating and nailing techniques.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-red-100">
                <Zap className="text-red-600 mb-2" />
                <h4 className="font-bold">Emergency Care</h4>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-red-100">
                <ShieldAlert className="text-red-600 mb-2" />
                <h4 className="font-bold">Complex Trauma</h4>
              </div>
            </div>
            <a href="tel:+919871189004" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all">
              <Phone size={20} /> CALL EMERGENCY
            </a>
          </div>
          <div className="w-full md:w-1/3 bg-white rounded-2xl h-80 shadow-lg overflow-hidden flex items-center justify-center">
            <img src={x_ray} alt="X-Ray Image" className="w-full h-full object-cover" />
             {/* <span className="text-red-200 font-bold">X-Ray Image Placeholder</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fracture;