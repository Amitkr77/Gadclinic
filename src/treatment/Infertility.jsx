import React from 'react';
import { ShieldCheck, Activity, Search, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

const Infertility = () => {
  const steps = [
    { title: "Initial Consultation", desc: "Detailed medical history and lifestyle assessment." },
    { title: "Advanced Diagnostics", desc: "Hormonal profiling and ultrasound mapping." },
    { title: "Personalized Plan", desc: "Tailored treatment based on specific diagnosis." }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 md:pt-50 pb-20">
      {/* Hero Header */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-blue-400 font-bold uppercase tracking-widest mb-2">Gynaecology Excellence</h4>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Infertility Treatment</h1>
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
            Compassionate care meets advanced medical science to help you on your journey to parenthood. 
            We specialize in treating a wide spectrum of infertility causes with personalized care plans.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-3xl font-black text-blue-900 mb-4">Understanding Infertility</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Infertility can be a challenging journey, but modern medical advancements offer numerous 
              solutions. At GAD Advanced Clinics, we address issues like PCOS, ovarian dysfunction, 
              endometriosis, and male factor infertility with a holistic and scientific approach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600 font-bold">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-blue-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-slate-50 p-8 rounded-2xl h-fit border border-slate-200">
          <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
             <Activity className="text-blue-600" /> Key Concerns
          </h3>
          <ul className="space-y-4 text-gray-700 font-medium text-sm">
            <li className="flex items-center gap-2">✔ Recurrent IVF Failure</li>
            <li className="flex items-center gap-2">✔ Polycystic Ovary Syndrome (PCOS)</li>
            <li className="flex items-center gap-2">✔ Male Factor Infertility</li>
            <li className="flex items-center gap-2">✔ High-Risk Pregnancy</li>
          </ul>
          <Link to="/book-appointment">
            <button className="w-full mt-8 bg-blue-600 text-white py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition cursor-pointer">
              Book Consultation 📅
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Infertility;