import logo from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';

export const Slides = [
  {
    id: 1,
    bg: "bg-blue-50",
    content: (
      <div className="flex flex-col md:flex-row items-center justify-around w-full gap-8 px-6">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-blue-900 leading-tight uppercase">
            Mobility & <br/><span className="text-blue-600 text-4xl md:text-6xl">Motherhood</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 font-medium italic">
            Advanced Ortho & Infertility Care in Janak Puri.
          </p>
          <Link to="/book-appointment" className="mt-8 inline-block bg-red-600 text-white px-10 py-4 rounded-md font-bold hover:bg-red-700 transition-shadow shadow-lg">
            BOOK NOW
          </Link>
        </div>
        <img src={logo} alt="GAD Clinic" className="w-64 md:w-96 object-contain drop-shadow-2xl" />
      </div>
    )
  },
  {
    id: 2,
    bg: "bg-white",
    content: (
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12 text-center md:text-left px-6">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-100 rounded-full border-8 border-blue-600 flex items-center justify-center text-blue-900 font-black text-2xl shadow-2xl">
          DR. PHOTO
        </div>
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Dr. Parvinder Singh Arora</h2>
          <p className="text-blue-600 font-bold text-lg mt-1 uppercase">D.N.B Orthopaedics, MNAMS, M.B.B.S [cite: 3]</p>
          <p className="mt-4 text-gray-700 leading-relaxed font-medium">
            Former Clinical Fellow at Sant Parmanand Hospital[cite: 75]. Specialist in Knee & Hip Replacement with over 15 years of surgical excellence[cite: 21, 65, 74].
          </p>
          <Link to="/doctor_profiles" className="mt-6 inline-block text-blue-700 font-black border-b-4 border-blue-700 pb-1">
            VIEW FULL RESUME
          </Link>
        </div>
      </div>
    )
  },
  {
    id: 3,
    bg: "bg-blue-900",
    content: (
      <div className="text-center text-white w-full max-w-4xl px-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10">GAD ADVANCED ORTHO GYNAE & INFERTILITY CLINICS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-blue-800 rounded-2xl border-b-8 border-blue-600 transform hover:scale-105 transition-transform">
            <p className="text-blue-300 font-bold uppercase text-xs mb-2 tracking-widest">Location</p>
            <p className="text-xl font-bold italic">C4A 321A, Janak Puri, New Delhi-58</p>
          </div>
          <div className="p-8 bg-blue-800 rounded-2xl border-b-8 border-blue-600 transform hover:scale-105 transition-transform">
            <p className="text-blue-300 font-bold uppercase text-xs mb-2 tracking-widest">Contact</p>
            <p className="text-xl font-bold tracking-widest">9871189004</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    bg: "bg-slate-100",
    content: (
      <div className="w-full max-w-6xl text-center px-4">
        <h2 className="text-4xl font-black text-blue-900 mb-12 uppercase tracking-widest underline decoration-blue-600 decoration-8 underline-offset-8">Why Choose Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { t: "200+", d: "Replacement Surgeries [cite: 11]" },
            { t: "Elite", d: "Sir Ganga Ram Trained [cite: 7]" },
            { t: "Trauma", d: "Expert Care [cite: 15]" },
            { t: "IVF", d: "Little Steps Clinic" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-blue-600">
              <p className="text-3xl font-black text-blue-700 mb-2">{item.t}</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
];