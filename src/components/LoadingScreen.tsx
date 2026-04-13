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
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, hsl(5, 50%, 12%) 0%, hsl(8, 65%, 22%) 40%, hsl(35, 60%, 25%) 100%)",
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.h1
        className="font-display text-5xl sm:text-6xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[hsl(35,70%,65%)]">Yo</span>
        <span className="text-[hsl(0,0%,95%)]"> Tibet</span>
      </motion.h1>

      <motion.div
        className="w-56 sm:w-64 h-1.5 rounded-full overflow-hidden"
        style={{ background: "hsla(0,0%,100%,0.15)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(35,70%,55%), hsl(8,65%,50%))",
          }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      <motion.p
        className="mt-4 text-sm tracking-widest uppercase"
        style={{ color: "hsla(0,0%,100%,0.4)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Authentic Tibetan Kitchen
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
