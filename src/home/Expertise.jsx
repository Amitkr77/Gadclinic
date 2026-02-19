import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  ChevronRight, 
  Activity, 
  ShieldAlert, 
  Baby, 
  Microscope, 
  Accessibility,
  Move
} from 'lucide-react';

const Expertise = () => {
    const expertiseData = [
        { 
            title: "Knee Replacement", 
            desc: "Expert care in Total and Partial Knee Arthroplasty (TKR) using minimally invasive techniques for rapid recovery.", 
            icon: <Activity size={28} />, 
            link: "/treatments/knee-replacement",
            color: "group-hover:bg-blue-600"
        },
        { 
            title: "Fracture Management", 
            desc: "24/7 emergency care for simple and complex fractures, including advanced internal fixation and trauma surgery.", 
            icon: <ShieldAlert size={28} />, 
            link: "/treatments/fracture",
            color: "group-hover:bg-red-600"
        },
        { 
            title: "Joint Pain Relief", 
            desc: "Comprehensive non-surgical and surgical management for chronic joint stiffness, arthritis, and mobility issues.", 
            icon: <Move size={28} />, 
            link: "/treatments/joint-pain",
            color: "group-hover:bg-green-600"
        },
        { 
            title: "Infertility Care", 
            desc: "Specialized maternal and infertility counseling focusing on complete reproductive health and family planning.", 
            icon: <Baby size={28} />, 
            link: "/treatments/infertility", 
            color: "group-hover:bg-purple-600"
        },
        { 
            title: "IVF Specialist", 
            desc: "Advanced IVF procedures and infertility treatments provided with compassionate care and high success rates.", 
            icon: <Microscope size={28} />, 
            link: "/treatments/ivf",
            color: "group-hover:bg-pink-600"
        },
        { 
            title: "Hip Replacement", 
            desc: "Specialized management of hip fractures and total hip replacements to restore freedom of movement.", 
            icon: <Accessibility size={28} />, 
            link: "/treatments/hip-replacement",
            color: "group-hover:bg-orange-600"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-blue-900 uppercase">Our Specialized Expertise</h2>
                    <p className="text-gray-500 mt-2 font-medium">World-class orthopedic and infertility care in New Delhi</p>
                    <div className="w-24 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {expertiseData.map((service, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                            <div className={`w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center text-white mb-6 transition-colors duration-300 ${service.color}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                            <Link to={service.link} className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:text-red-600 transition-colors">
                                Learn More <ChevronRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;