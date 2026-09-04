'use client';

import React, { useSyncExternalStore } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

const emptySubscribe = () => () => {};

export default function ScrollProgress() {
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
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

  if (!isMounted || shouldReduceMotion) return null;

  return (
    <>
      {/* Mobile Top Horizontal Progress Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-white/[0.04]">
        <motion.div
          style={{ scaleX }}
          className="h-full bg-[#7F9AB8] origin-left"
        />
      </div>

      {/* Desktop Right Edge Vertical Progress Bar */}
      <div className="hidden md:block fixed top-0 right-0 bottom-0 w-[2px] z-50 pointer-events-none bg-white/[0.04]">
        <motion.div
          style={{ scaleY }}
          className="w-full bg-[#7F9AB8] origin-top opacity-75"
        />
      </div>
    </>
  );
}
