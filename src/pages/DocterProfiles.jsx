import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Award, Stethoscope, Baby, ArrowRight } from 'lucide-react';
import Parvindar_photo from '../assets/Parvindar_photo.png';
import Maam_photo from '../assets/Maam_photo.jpeg';

const DoctorProfile = () => {
  const doctors = [
    {
      id: "parvinder-singh-arora",
      name: "Dr. Parvinder Singh Arora",
      title: "Orthopaedic & Joint Replacement Surgeon",
      degrees: "MBBS, DNB (Ortho), MNAMS, FJR",
      experience: "20+ Years",
      icon: <Stethoscope className="text-blue-600" size={24} />,
      photo: Parvindar_photo,
      specialty: "Arthroplasty & Arthroscopy Specialist",
      path: "/doctor-profile/parvinder"
    },
    {
      id: "simrandeep-kaur",
      name: "Dr. Simrandeep Kaur",
      title: "Infertility, IVF & Endoscopic Surgeon",
      degrees: "MBBS, MD (Obstetrics & Gynaecology)",
      experience: "12+ Years",
      icon: <Baby className="text-pink-500" size={24} />,
      photo: Maam_photo,
      specialty: "Expert in Women's Health & ART",
      path: "/doctor-profile/simrandeep"
    }
  ];

//  pt-32 md:pt-40

  return (
    <div className="bg-slate-50 min-h-screen pt-32 md:pt-60 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tight">
            Our Specialist Doctors
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto font-medium">
            Meet our team of world-class experts dedicated to providing advanced 
            Orthopaedic and Gynaecological care.
          </p>
        </div>

        {/* Doctor Cards List - Changed to grid-cols-1 */}
        <div className="grid grid-cols-1 gap-12"> 
          {doctors.map((doc) => (
            <div 
              key={doc.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              {/* Image Section */}
              <div className="md:w-1/3 relative overflow-hidden h-72 md:h-auto">
                <img 
                  src={doc.photo} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                  <Award size={16} className="text-blue-600" />
                  <span className="text-[10px] font-black uppercase text-blue-900">{doc.experience} Exp</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">{doc.icon}</div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{doc.specialty}</span>
                  </div>
                  
                  <h2 className="text-3xl font-black text-blue-900 mb-1 leading-tight group-hover:text-blue-700 transition-colors">
                    {doc.name}
                  </h2>
                  <p className="text-blue-600 font-bold text-base mb-4 uppercase tracking-tighter">{doc.degrees}</p>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">
                    {doc.title}
                  </p>
                </div>

                <NavLink 
                  to={doc.path} 
                  className="flex items-center justify-between group/link w-full border-t pt-6"
                >
                  <span className="text-blue-900 font-black text-sm uppercase tracking-widest group-hover/link:text-blue-600 transition-colors">
                    View Full Profile
                  </span>

                  <div className="bg-blue-900 text-white p-2 rounded-full transition-transform group-hover/link:translate-x-2">
                    <ArrowRight size={20} />
                  </div>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;