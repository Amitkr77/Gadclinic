// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { Star, Quote } from 'lucide-react';
// import { staticReviews } from '../data/staticReviews';

// const GoogleReviews = () => {
//   const controls = useAnimation();

//   // This function handles the infinite loop movement
//   const startAnimation = async () => {
//     await controls.start({
//       x: ["0%", "-50%"],
//       transition: {
//         ease: "linear",
//         duration: 60,
//         repeat: Infinity,
//       },
//     });
//   };

//   useEffect(() => {
//     startAnimation();
//   }, []);

//   return (
//     <section className="py-20 bg-slate-50 overflow-hidden border-t border-slate-100">
//       <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
//         <h2 className="text-3xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter">
//           Real <span className="text-red-600">Patient</span> Stories
//         </h2>
//         {/* <p className="text-gray-500 mt-2 font-medium italic">Hover to pause the scroll</p> */}
//       </div>

//       <div 
//         className="relative flex cursor-pointer"
//         onMouseEnter={() => controls.stop()}
//         onMouseLeave={() => startAnimation()}
//       >
//         <motion.div
//           className="flex whitespace-nowrap"
//           animate={controls}
//         >
//           {[...staticReviews, ...staticReviews].map((review, index) => (
//             <div 
//               key={index} 
//               className="shrink-0 w-87.5 md:w-100 bg-white p-8 rounded-4xl mx-4 shadow-sm border border-slate-100 transition-all duration-300 hover:border-red-400 hover:scale-[1.02]"
//             >
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg">
//                   {review.initial}
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-blue-900 leading-tight">{review.name}</h4>
//                   <div className="flex gap-0.5">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
//                     ))}
//                   </div>
//                 </div>
//                 <Quote className="ml-auto text-blue-50 opacity-20" size={40} />
//               </div>
              
//               <p className="text-gray-600 text-sm italic whitespace-normal leading-relaxed h-24">
//                 "{review.text}"
//               </p>
              
//               <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
//                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Patient</span>
//                 <span className="text-[10px] font-bold text-blue-600 italic">GAD Clinic</span>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default GoogleReviews;




import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { staticReviews } from '../data/staticReviews';

const GoogleReviews = () => {
  const [isPaused, setIsPaused] = useState(false);

  const doubledReviews = [...staticReviews, ...staticReviews];

  return (
    <section className="py-16 bg-slate-50 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter">
          Real <span className="text-red-600">Patient</span> Stories
        </h2>
      </div>

      {/* Container */}
      <div 
        className="relative flex overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex gap-6 animate-marquee"
          style={{ 
            width: "fit-content",
            // This is the magic line that prevents reversing/resetting
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {doubledReviews.map((review, index) => (
            <div 
              key={index} 
              className="shrink-0 w-[320px] md:w-[400px] flex flex-col justify-between bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 transition-shadow duration-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 shrink-0 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.initial.toUpperCase()}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-blue-900 truncate">{review.name}</h4>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <Quote className="ml-auto text-blue-100 opacity-40 shrink-0" size={32} />
                </div>
                
                <p className="text-gray-600 text-sm italic leading-relaxed line-clamp-6 md:line-clamp-5 whitespace-normal">
                  "{review.text}"
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Patient</span>
                <span className="text-[10px] font-bold text-blue-600 italic">GAD Clinic</span>
              </div>
            </div>
          ))}
        </div>

        {/* CSS for the Marquee - Add this to your global CSS or a <style> tag */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `}} />
      </div>
    </section>
  );
};

export default GoogleReviews;