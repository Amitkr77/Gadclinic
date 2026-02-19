import React from 'react';
import { Mail, Phone, MapPin, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Maam_photo from '../assets/Maam_photo.jpeg';

const Simrandeep = () => {
  const doctorData = {
    name: "Dr. Simrandeep Kaur",
    designation: "Consultant Infertility, IVF & Endoscopic Surgeon",
    degrees: "MBBS, MD (Obstetrics & Gynaecology)",
    email: "info@gadclinic.com", 
    phone: "+91 98711 89004",
    location: "Janak Puri, New Delhi",
    specialties: [
      "Infertility & IVF Specialist",
      "Reproductive Medicine",
      "Laparoscopy & Hysteroscopy",
      "High-Risk Pregnancy Management",
      "PCOS & Ovarian Dysfunction"
    ],
    experience: "12+ Years",
    summary: "Dr. Simrandeep Kaur is a distinguished Gynaecologist, Infertility, and IVF specialist with over 12 years of clinical excellence. She excels in fertility-enhancing surgeries and has successfully treated a wide spectrum of infertility cases, including recurrent IVF failure and unexplained causes.",
    background: [
      "Gold Medalist in the Reproductive Medicine exit examination.",
      "Consultant Infertility and IVF at Apollo Cradle Fertility, Moti Nagar.",
      "Visiting Consultant at BLK Superspeciality Hospital.",
      "Extensive research publications in national and international journals."
    ],
    education: [
      { degree: "Fellowship in Reproductive Medicine & Clinical ART", institution: "IFS & Nova IVI" },
      { degree: "Senior Residency (Registrarship)", institution: "AIIMS, New Delhi" },
      { degree: "MD (Obstetrics & Gynaecology)", institution: "Govt. Medical College and Hospital, Chandigarh" },
      { degree: "M.B.B.S", institution: "Govt. Medical College and Hospital, Chandigarh" }
    ],
    achievements: [
      "Current member of FOGSI, AOGD, IFS, ISAR, GESICON, and IMA",
      "Awarded Gold Medal in Reproductive Medicine fellowship exam",
      "Presented papers at various national and international conferences",
      "Expert in Endoscopic Surgeries (Laparoscopy and Hysteroscopy)"
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 md:pt-45">
      {/* Top Profile Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-center">
          <img src={Maam_photo} alt={doctorData.name} className="w-64 h-80 rounded-lg shadow-inner object-cover border" />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-blue-900">{doctorData.name}</h1>
            <p className="text-xl font-semibold text-blue-600 mt-2">{doctorData.degrees}</p>
            <p className="text-lg text-gray-600 mt-1 font-medium italic">{doctorData.designation}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 text-gray-700 justify-center md:justify-start">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span>{doctorData.experience} Experience</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>{doctorData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>{doctorData.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-sm">{doctorData.email}</span>
              </div>
            </div>

            <Link to="/book-appointment">
              <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition shadow-lg cursor-pointer active:scale-95">
                BOOK AN APPOINTMENT
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Left Column: About & Experience */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">About the Doctor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{doctorData.summary}</p>
            <ul className="space-y-2">
              {doctorData.background.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-600 italic">
                  <span>•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-4">Education & Training</h2>
            <div className="space-y-6">
              {doctorData.education.map((edu, i) => (
                <div key={i} className="flex gap-4">
                  <BookOpen className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Specialization & Achievements */}
        <div className="space-y-8">
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-400" /> Specializations
            </h3>
            <ul className="space-y-3">
              {doctorData.specialties.map((spec, i) => (
                <li key={i} className="flex items-center gap-3 bg-blue-800 p-3 rounded text-sm font-semibold">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Professional Memberships</h3>
            <ul className="space-y-4">
              {doctorData.achievements.map((award, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 border-b pb-3 last:border-0">
                  <span className="text-blue-600 font-bold">✔</span>
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Simrandeep;