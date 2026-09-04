'use client';

import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001
  });

  if (shouldReduceMotion) return null;

  return (
    <>
      {/* Mobile Top Horizontal Progress Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-white/[0.04]">
        <motion.div
          style={{ scaleX }}
          className="h-full bg-[#7890AA] origin-left"
        />
      </div>

      {/* Desktop Right Edge Vertical Progress Bar */}
      <div className="hidden md:block fixed top-0 right-0 bottom-0 w-[2px] z-50 pointer-events-none bg-white/[0.04]">
        <motion.div
          style={{ scaleY }}
          className="w-full bg-[#7890AA] origin-top opacity-70"
        />
      </div>
    </>
  );
}
