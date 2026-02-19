import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Parvindar_photo from '../assets/Parvindar_photo.png';
import Maam_photo from '../assets/Maam_photo.jpeg';
import { Phone, Mail, MapPin, Award } from 'lucide-react';



export const Slides = [
  // SLIDE 1: DR. PARVINDER SINGH ARORA
  {
    id: 1,
    bg: "bg-white",
    content: (
      <div className="relative min-h-150 md:h-screen pt-28 md:pt-28 w-full flex items-center overflow-hidden border-b border-black/50">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-900 hidden lg:block rounded-l-[150px] z-0" />
        
        <div className="max-w-7xl mx-auto px-6 w-full py-20 grid lg:grid-cols-12 gap-12 items-center z-10">
          {/* Text Content Area */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-blue-600 font-black tracking-[0.2em] text-sm uppercase mb-2">
                Orthopaedic Specialist
              </h4>
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-black text-blue-900 leading-[1.1] uppercase">
                Dr. Parvinder <br className="hidden md:block"/> Singh Arora
              </h1>
              <p className="mt-4 text-gray-500 font-bold text-lg lg:text-xl tracking-tight">
                D.N.B ORTHOPAEDICS, MNAMS, M.B.B.S
              </p>
            </motion.div>

            <div className="pt-8 space-y-4 border-t-2 border-slate-100 inline-block lg:block">
              <div className="flex items-center justify-center lg:justify-start gap-4 text-slate-700 font-bold text-lg">
                <div className="p-2 bg-blue-50 rounded-lg"><Award className="text-blue-600" size={24} /></div>
                <span>15+ Years of Surgical Excellence</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-slate-700 font-bold text-lg">
                <div className="p-2 bg-blue-50 rounded-lg"><Phone className="text-blue-600" size={24} /></div>
                <span>+91 98711 89004</span>
              </div>
            </div>
          </div>

          {/* Image Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 xl:w-112.5 xl:h-112.5 rounded-full border-8 md:border-16 border-white shadow-2xl overflow-hidden relative z-10 group">
                <img src={Parvindar_photo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Dr. Parvinder Singh Arora" />
              </div>
              {/* Outer Glow/Ring */}
              <div className="absolute -inset-4 border-2 border-blue-600/20 rounded-full animate-pulse z-0" />
            </motion.div>
          </div>
        </div>
      </div>
    )
  },

  // SLIDE 2: DR. SIMRANDEEP KAUR
  {
    id: 2,
    bg: "bg-slate-50",
    content: (
      <div className="relative min-h-150 md:h-screen pt-28 md:pt-28 w-full flex items-center overflow-hidden border-b border-black/50">
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-blue-900 hidden lg:block rounded-r-[150px] z-0" />
        
        <div className="max-w-7xl mx-auto px-6 w-full py-20 grid lg:grid-cols-12 gap-12 items-center z-10">
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-64 h-64 md:w-80 md:h-80 xl:w-112.5 xl:h-112.5 rounded-full border-8 md:border-16 border-white shadow-2xl overflow-hidden relative group">
              <img src={Maam_photo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Dr. Simrandeep Kaur" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-center lg:text-right order-1 lg:order-2">
            <h4 className="text-blue-600 font-black tracking-[0.2em] text-sm uppercase">Gynaecology & Infertility</h4>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black text-blue-900 leading-[1.1] uppercase">
              Dr. Simrandeep <br className="hidden md:block"/> Kaur
            </h1>
            <p className="text-gray-500 font-bold text-lg lg:text-xl uppercase">Expert in Women's Health & IVF</p>
            
            <div className="pt-8 space-y-4 border-t-2 border-slate-200 flex flex-col items-center lg:items-end">
              <div className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                <span>Compassionate Patient Care</span>
                <div className="p-2 bg-blue-50 rounded-lg"><Award className="text-blue-600" size={24} /></div>
              </div>
              <div className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                <span>Janak Puri, New Delhi</span>
                <div className="p-2 bg-blue-50 rounded-lg"><MapPin className="text-blue-600" size={24} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // SLIDE 3: YOUR HEALTH IS OUR PRIORITY (REFINED DESIGN)
  // {
  //   id: 3,
  //   bg: "bg-white",
  //   content: (
  //     // h-screen ensures the slide never exceeds the viewport height
  //     <div className="relative h-screen w-full flex flex-col overflow-hidden bg-white">
        
  //       {/* UPPER SECTION: Minimalist Header (Fixed height to prevent push) */}
  //       <div className="h-24 md:h-28 w-full bg-slate-50 flex items-end justify-center pb-4 shrink-0 border-b border-slate-100">
  //          <motion.span 
  //            initial={{ opacity: 0, y: -10 }}
  //            animate={{ opacity: 1, y: 0 }}
  //            className="text-blue-600 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase"
  //          >
  //            Commitment to Excellence
  //          </motion.span>
  //       </div>

  //       {/* MIDDLE SECTION: Photo with Smooth Animation */}
  //       <div className="relative flex-1 w-full overflow-hidden"> 
  //         {/* Ken Burns Effect: Slow zoom ensures the photo always "fits" the background */}
  //         <motion.img 
  //           initial={{ scale: 1 }}
  //           animate={{ scale: 1.08 }}
  //           transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
  //           src={logo} 
  //           className="absolute inset-0 w-full h-full object-cover" 
  //           alt="Clinic Interior"
  //         />
          
  //         {/* Gradient Overlay for Text Clarity */}
  //         <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/30 to-transparent" />
          
  //         <div className="absolute inset-0 flex items-center">
  //           <div className="max-w-7xl mx-auto px-6 w-auto lg:w-full grid lg:grid-cols-2 gap-8 items-center">
              
  //             {/* Left Side: Main Priority Text */}
  //             <motion.div 
  //               initial={{ opacity: 0, x: -40 }}
  //               whileInView={{ opacity: 1, x: 0 }}
  //               className="max-w-xl bg-white/5 backdrop-blur-md border-l-4 border-blue-500 p-6 md:p-8"
  //             >
  //               <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase">
  //                 Your Health Is <br/>
  //                 <span className="text-blue-400 italic">Our Priority</span>
  //               </h2>
  //               <p className="mt-4 text-blue-50 text-base md:text-lg font-medium">
  //                 Advanced Orthopaedic and Infertility Care at <br/>
  //                 <span className="text-white font-bold">GAD Advanced Clinics</span>
  //               </p>
  //             </motion.div>

  //             {/* Right Side: Medical Service Animations */}
  //             <div className="flex flex-col space-y-4">
  //               {[
  //                 { title: "Joint Replacement", desc: "Knee & Hip Excellence", icon: "🦴", delay: 0.2 },
  //                 { title: "IVF & Infertility", desc: "Advanced Fertility Solutions", icon: "👶", delay: 0.4 }
  //               ].map((item, i) => (
  //                 <motion.div
  //                   key={i}
  //                   initial={{ opacity: 0, x: 50 }}
  //                   whileInView={{ opacity: 1, x: 0 }}
  //                   transition={{ delay: item.delay, type: "spring", stiffness: 100 }}
  //                   whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)" }}
  //                   className="bg-white/90 p-4 rounded-xl shadow-xl flex items-center gap-4 border-r-4 border-blue-600 cursor-pointer"
  //                 >
  //                   <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl shadow-inner">
  //                     {item.icon}
  //                   </div>
  //                   <div>
  //                     <h3 className="text-blue-900 font-black uppercase text-xs tracking-tight">{item.title}</h3>
  //                     <p className="text-gray-500 text-[10px] font-bold">{item.desc}</p>
  //                   </div>
  //                 </motion.div>
  //               ))}
  //             </div>

  //           </div>
  //         </div>
  //       </div>

  //       {/* LOWER SECTION: Professional Action Bar (Fixed height) */}
  //       <div className="h-28 md:h-32 w-full bg-blue-900 flex items-center flex-shrink-0 z-20">
  //         <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
            
  //           <div className="hidden md:flex gap-10">
  //             <div className="space-y-1">
  //               <p className="text-blue-400 text-[9px] font-black uppercase tracking-widest">Facility</p>
  //               <p className="text-white text-xs font-bold uppercase">Modular Operation Theater</p>
  //             </div>
  //             <div className="w-px h-8 bg-white/20" />
  //             <div className="space-y-1">
  //               <p className="text-blue-400 text-[9px] font-black uppercase tracking-widest">Emergency</p>
  //               <p className="text-white text-xs font-bold uppercase">24/7 Trauma Support</p>
  //             </div>
  //           </div>

  //           <Link 
  //             to="/contact" 
  //             className="w-full md:w-auto text-center px-10 py-4 bg-blue-500 hover:bg-white hover:text-blue-900 text-white font-black rounded-full transition-all duration-300 uppercase text-xs tracking-[0.2em] shadow-lg shadow-blue-500/20"
  //           >
  //             Book Appointment
  //           </Link>
  //         </div>
  //       </div>

  //     </div>
  //   )
  // }

];