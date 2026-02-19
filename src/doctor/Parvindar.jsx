import React from 'react';
import { Mail, Phone, MapPin, Award, BookOpen, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Parvindar_photo from '../assets/Parvindar_photo.png';

const Parvindar = () => {
  const doctorData = {
    name: "Dr. Parvinder Singh Arora",
    designation: "Consultant Orthopaedic & Joint Replacement Surgeon",
    degrees: "MBBS, DNB (Ortho), MNAMS, FJR",
    email: "dr.parvinder_4@yahoo.co.in",
    phone: "+91 98711 89004",
    location: "Janak Puri, New Delhi",
    specialties: ["Knee Replacement", "Hip Replacement", "Complex Trauma", "Joint Pain Management"],
    experience: "20+ Years",
    summary: "Dr. Parvinder Singh Arora is a highly accomplished Orthopaedic Surgeon with over 15 years of experience. He has a specialized interest in Arthroplasty (Joint Replacement) and Arthroscopy, having performed over 200 successful joint replacements and hundreds of trauma cases.",
    background: [
      "Former Clinical Fellow in Joint Replacement at Sant Parmanand Hospital.",
      "Trained at the prestigious Sir Ganga Ram Hospital, New Delhi.",
      "Extensive experience as a Senior Resident at Safdarjung and GTB Hospitals."
    ],
    education: [
      { degree: "Clinical Fellow (Joint Replacement)", institution: "Sant Parmanand Hospital, Delhi" },
      { degree: "DNB (Orthopaedics)", institution: "Sir Ganga Ram Hospital, New Delhi" },
      { degree: "M.B.B.S", institution: "Acharya Shri Chander College of Medical Sciences" }
    ],
    awards: [
      "Presented Research at IOACON 2015 & ISKSAA 2016",
      "Organized Advanced Knee Symposia at Sir Ganga Ram Hospital",
      "Recognized for excellence in post-op patient care and feedback"
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 md:pt-45">
      {/* Top Profile Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-center">
          <img src={Parvindar_photo} alt="Dr. Parvinder Singh Arora" className="w-64 h-80 rounded-lg shadow-inner object-cover border" />

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


            <Link to ="/book-appointment">
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
            <h3 className="text-xl font-bold text-blue-900 mb-6">Achievements</h3>
            <ul className="space-y-4">
              {doctorData.awards.map((award, i) => (
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

export default Parvindar;