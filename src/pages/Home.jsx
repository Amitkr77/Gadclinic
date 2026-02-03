import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../home/HeroSection';
import GoogleReviews from '../home/GoogelReviews';

const Home = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Specialization Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 uppercase tracking-wide">Our Specialized Clinics</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Joint Replacement Wing */}
            <div className="group p-8 border-2 border-slate-100 rounded-2xl hover:border-blue-600 transition-all shadow-sm hover:shadow-xl">
              <div className="text-4xl mb-4 text-blue-600">🦴</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Joint Replacement Clinic</h3>
              <p className="text-gray-600 mb-6">
                Expert care in Hip and Knee replacements, complex trauma, and bone health led by 
                fellowship-trained surgeons formerly at Sir Ganga Ram and Sant Parmanand Hospitals[cite: 7, 15, 52].
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Total Knee Arthroplasty (TKR) [cite: 18]</li>
                <li>• Hip Fracture Management [cite: 29]</li>
                <li>• Complex Trauma Surgery [cite: 27]</li>
              </ul>
              <Link to="/doctors" className="text-blue-600 font-bold hover:underline">Meet our Ortho Specialist →</Link>
            </div>

            {/* Infertility Wing */}
            <div className="group p-8 border-2 border-slate-100 rounded-2xl hover:border-green-600 transition-all shadow-sm hover:shadow-xl">
              <div className="text-4xl mb-4 text-green-600">👶</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Little Steps IVF</h3>
              <p className="text-gray-600 mb-6">
                Advanced infertility and Gynae solutions focusing on reproductive medicine, 
                IVF, and complete maternal care.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Infertility & IVF Specialist Care [cite: 58]</li>
                <li>• Obstetrics and Gynecology [cite: 58]</li>
                <li>• Maternal & Infertility Counseling [cite: 58]</li>
              </ul>
              <Link to="/doctors" className="text-green-600 font-bold hover:underline">Meet our Gynae Specialist →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quick Info Bar */}
      {/* <section className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-blue-300 uppercase text-xs font-bold tracking-widest mb-2">Location</h4>
            <p className="text-lg">C5A 321 A, Janak Puri, New Delhi-58 [cite: 58]</p>
          </div>
          <div>
            <h4 className="text-blue-300 uppercase text-xs font-bold tracking-widest mb-2">Contact Us</h4>
            <p className="text-lg">+91 98711 89004, 011-41446918 [cite: 58]</p>
          </div>
          <div>
            <h4 className="text-blue-300 uppercase text-xs font-bold tracking-widest mb-2">Clinic Hours</h4>
            <p className="text-lg">9AM - 1PM & 4PM - 8PM [cite: 58]</p>
          </div>
        </div>
      </section> */}

      <GoogleReviews />
    </div>
  );
};

export default Home;