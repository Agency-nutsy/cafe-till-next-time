import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload all hero images
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Fast to 65% in ~800ms, then to 100% by 2s
    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(85), 1000);
    const t3 = setTimeout(() => setProgress(100), 1700);
    const t4 = setTimeout(() => onComplete(), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07050a] overflow-hidden"
        // Cinematic, dream-like upward fade exit
        exit={{ opacity: 0, y: -30, filter: "blur(15px)" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Soft Violet/Midnight Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(0,0,0,0) 65%)",
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-lg">
          
          {/* Top text - Small and elegant */}
          <motion.span
            className="text-zinc-400 text-[10px] sm:text-xs tracking-[0.5em] uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Cafe
          </motion.span>

          {/* Main Title - Stacked and Leading */}
          <motion.h1
            className="font-display text-5xl sm:text-7xl md:text-8xl font-black mb-10 text-center tracking-tight leading-[1.1]"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-zinc-100 block">Till Next</span>
            <span
              className="text-transparent bg-clip-text block"
              style={{
                backgroundImage: "linear-gradient(to right, #a78bfa, #d8b4fe)",
                filter: "drop-shadow(0px 0px 20px rgba(167, 139, 250, 0.3))"
              }}
            >
              Time
            </span>
          </motion.h1>

          {/* Minimalist Progress Timeline */}
          <div className="w-64 sm:w-80 flex flex-col items-center">
            {/* The "Timeline" Bar */}
            <motion.div
              className="w-full h-[1px] bg-zinc-800 relative overflow-hidden mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="absolute top-0 left-0 bottom-0"
                style={{
                  background: "linear-gradient(90deg, transparent, #a78bfa, #d8b4fe)",
                  boxShadow: "0 0 12px rgba(167, 139, 250, 0.8)"
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
            
            {/* Subtle Centered Counter */}
            <motion.div
              className="text-[#a78bfa] text-xs font-mono tracking-[0.2em] font-light"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {progress}%
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            className="mt-12 text-[10px] sm:text-xs tracking-[0.3em] text-zinc-500 font-medium uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Memories • Satya Niketan
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;