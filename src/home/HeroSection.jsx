import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import { Slides } from './Slides';

const HeroSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const slideIndex = Math.abs(page % Slides.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [page]);

  // ANIMATION VARIANTS
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1,
    }),
  };

  return (
    <div className="group relative h-162.5 md:h-187.5 w-full overflow-hidden bg-slate-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            // Slow motion spring: low stiffness = smoother glide
            x: { type: "spring", stiffness: 40, damping: 22 },
            opacity: { duration: 0.5 }
          }}
          className={`absolute inset-0 flex items-center justify-center ${Slides[slideIndex].bg}`}
        >
          <div className="max-w-7xl mx-auto px-6 w-full text-center md:text-left">
            {Slides[slideIndex].content}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Hidden until hover, turn Red on hover */}
      <div className="absolute inset-0 flex items-center justify-between px-6 z-20 pointer-events-none">
        <button
          className="pointer-events-auto p-3 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 text-white/30 hover:text-red-600"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
        <button
          className="pointer-events-auto p-3 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 text-white/30 hover:text-red-600"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;