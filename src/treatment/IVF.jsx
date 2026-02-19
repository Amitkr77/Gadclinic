import { Link } from 'react-router-dom';
import { ShieldCheck, ClipboardList } from 'lucide-react';
const IVF = () => {
  return (
    <div className="bg-white min-h-screen pt-32 md:pt-49 pb-20">
      <section className="bg-slate-950 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Advanced IVF Solutions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Utilizing state-of-the-art Clinical ART and gold-standard protocols to maximize 
            success rates for our patients.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-black text-blue-900 mb-6">Expertise in Reproductive Medicine</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Under the guidance of <strong>Dr. Simrandeep Kaur</strong>, a gold medalist in Reproductive Medicine, 
            our IVF center provides cutting-edge treatment including Laparoscopy and Hysteroscopy to enhance fertility.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
              <ShieldCheck className="text-blue-600 shrink-0" />
              <p className="text-sm font-semibold text-blue-900">Gold Standard Clinical ART (Assisted Reproductive Technology)</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Why GAD IVF?</h3>
            <ul className="space-y-4 text-blue-100">
              <li>• Expert handling of Recurrent IVF Failure</li>
              <li>• Advanced Endoscopic Surgery support</li>
              <li>• Comprehensive genetic screening options</li>
              <li>• High success rates in complex cases</li>
            </ul>
          </div>
          <div className="absolute bottom-5 right-5 opacity-10">
             <ClipboardList size={200} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IVF;