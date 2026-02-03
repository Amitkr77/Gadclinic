import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Microscope, ShieldCheck } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Successful Surgeries", value: "5000+" },
    { label: "Years of Experience", value: "20+" },
    { label: "Patient Satisfaction", value: "99%" },
    { label: "International Patients", value: "200+" },
  ];

  return (
    <div className="min-h-screen bg-white pt-40 md:pt-40 pb-20 overflow-hidden">
      {/* 1. Vision & Mission Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 font-black uppercase tracking-widest text-sm mb-4">Our Legacy</h2>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 leading-tight mb-8">
              Pioneering Advanced <br/>Medical Care in Delhi
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded with a vision to provide world-class orthopaedic and gynaecological treatments, **GAD Clinic** has grown into a center of excellence in Janak Puri. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We combine the precision of modern technology with the warmth of personalized care. Under the leadership of Dr. Parvinder Singh Arora, we focus on minimally invasive procedures that ensure faster recovery and long-term health.
            </p>
          </motion.div>

          <div className="relative">
            <div className="aspect-square bg-blue-100 rounded-[4rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
               {/* Replace with a real clinic/team photo */}
               <div className="w-full h-full flex items-center justify-center text-blue-200 font-bold">Clinic Environment Photo</div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
              <p className="text-4xl font-black text-blue-900">20+</p>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Years in Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-blue-900 py-16 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-blue-900 uppercase">Why We Are Different</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              icon: <Microscope size={40} />, 
              title: "Latest Technology", 
              desc: "From advanced arthroscopy to modern infertility labs, we use global standards of equipment." 
            },
            { 
              icon: <Heart size={40} />, 
              title: "Compassionate Care", 
              desc: "Every patient is family. We guide you through surgery and the entire recovery journey." 
            },
            { 
              icon: <ShieldCheck size={40} />, 
              title: "Transparent Ethics", 
              desc: "We believe in honest diagnoses. Surgery is only recommended when absolutely necessary." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="text-blue-600 mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-red-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to regain your health?</h2>
            <p className="text-red-100 mb-10 max-w-xl mx-auto font-medium">
              Join thousands of satisfied patients who have found relief at GAD Clinic.
            </p>
            <button className="bg-white text-red-600 px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl">
              Meet Our Doctors
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        </div>
      </section>
    </div>
  );
};

export default About;