import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import { Slides } from './Slides';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const HeroSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const imageIndex = Math.abs(page % Slides.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // --- AUTO-PLAY LOGIC ---
  useEffect(() => {
    // Only auto-play if the user is NOT hovering
    if (!isHovered) {
      const timer = setInterval(() => {
        paginate(1);
      }, 5000); // Changes every 5 seconds

      return () => clearInterval(timer);
    }
  }, [page, isHovered]); // Re-run when page changes or hover state changes


  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 150, damping: 25, mass: 0.8 },
            opacity: { duration: 0.4 }
          }}
          className={`absolute w-full h-full ${Slides[imageIndex].bg}`}
        >
          {Slides[imageIndex].content}
        </motion.div>
      </AnimatePresence>

      {/* Chevrons: Only visible on hover */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none z-50"
      >
        <button
          className="pointer-events-auto p-4 bg-white/40 hover:bg-blue-900 hover:text-white rounded-full backdrop-blur-md transition-all shadow-xl group"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="text-blue-900 group-hover:text-white" size={36} />
        </button>

        <button
          className="pointer-events-auto p-4 bg-white/40 hover:bg-blue-900 hover:text-white rounded-full backdrop-blur-md transition-all shadow-xl group"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="text-blue-900 group-hover:text-white" size={36} />
        </button>
      </motion.div>

      {/* Progress Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {Slides.map((_, idx) => (
          <motion.div
            key={idx}
            onClick={() => setPage([idx, idx > imageIndex ? 1 : -1])}
            animate={{ 
              width: idx === imageIndex ? 40 : 10,
              backgroundColor: idx === imageIndex ? "#1e3a8a" : "rgba(30, 58, 138, 0.2)" 
            }}
            className="h-2.5 rounded-full cursor-pointer shadow-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;