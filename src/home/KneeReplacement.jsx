import React from 'react';
import { Phone, CheckCircle, Award, Stethoscope } from 'lucide-react';
import Knee from '../assets/Knee.jpeg';

const KneeReplacement = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
                    
                    {/* Content Section */}
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-5xl font-black text-blue-900 leading-tight">
                            Knee Replacement Specialist
                        </h1>
                        
                        <div className="space-y-1">
                            <h4 className="text-blue-800 font-bold text-lg italic uppercase tracking-tight">
                                Dr. Parvinder Singh Arora
                            </h4>
                            <p className="text-gray-500 font-semibold uppercase tracking-widest text-xs">
                                Best Orthopedic Surgeon in Delhi
                            </p>
                        </div>

                        <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                            <p>
                                Welcome to GAD Clinics, where excellence in knee care is our standard. Dr. Parvinder utilizes advanced robotic-assisted technology to ensure near zero-error alignment and rapid patient recovery. 
                            </p>
                            
                            <p>
                                The surgical team, led by Dr. Parvinder Singh Arora, brings nearly two decades of specialized experience in treating complex joint-related disorders. They have successfully treated thousands of patients suffering from crippling joint diseases using modern, evidence-based practices.
                            </p>

                            <p>
                                Our clinic is recognized for performing over 4,000 joint replacements and 5,000 arthroscopic procedures. We routinely handle complex primary replacements, corrective re-do surgeries, and failed cases referred from across the region.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                <div className="flex items-center gap-2 font-bold text-blue-900 italic text-sm">
                                    <CheckCircle size={16} className="text-blue-600"/> Robotic Precision Alignment
                                </div>
                                <div className="flex items-center gap-2 font-bold text-blue-900 italic text-sm">
                                    <CheckCircle size={16} className="text-blue-600"/> Minimally Invasive Surgery
                                </div>
                                <div className="flex items-center gap-2 font-bold text-blue-900 italic text-sm">
                                    <CheckCircle size={16} className="text-blue-600"/> Rapid "Fast-Track" Recovery
                                </div>
                                <div className="flex items-center gap-2 font-bold text-blue-900 italic text-sm">
                                    <CheckCircle size={16} className="text-blue-600"/> Comprehensive Rehab Team
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image Section - Reduced Size */}
                    <div className="relative flex justify-center md:justify-end">
                        <div className="w-full max-w-sm">
                            <div className="rounded-t-[150px] rounded-b-2xl overflow-hidden border-[10px] border-slate-50 shadow-xl relative z-10">
                                <img 
                                    src={Knee} 
                                    alt="Dr. Parvinder Singh Arora" 
                                    className="w-full h-auto object-cover" 
                                />
                            </div>
                            {/* Accent behind the photo */}
                            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-blue-500 rounded-bl-[80px] rounded-r-2xl z-0 translate-x-4 translate-y-4 opacity-10"></div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default KneeReplacement;