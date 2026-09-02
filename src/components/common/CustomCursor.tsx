'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';

function subscribePointer(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(pointer: fine)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getPointerSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine)').matches;
}

export default function CustomCursor() {
  const hasFinePointer = useSyncExternalStore(subscribePointer, getPointerSnapshot, () => false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (!hasFinePointer) return;

    document.documentElement.classList.add('custom-cursor-enabled');

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleHoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover')
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousemove', handleHoverCheck, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', handleHoverCheck);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [hasFinePointer]);

  if (!hasFinePointer || !isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-cyan-400/60 mix-blend-screen"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? 'rgba(0, 245, 212, 0.15)' : 'rgba(0, 245, 212, 0.03)',
          borderColor: isHovered ? 'rgba(0, 245, 212, 0.9)' : 'rgba(0, 245, 212, 0.4)',
          scale: isClicking ? 0.85 : 1
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5
        }}
      />

      {/* Center Micro Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-cyan-300 shadow-[0_0_12px_#00f5d4]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isClicking ? 0.6 : isHovered ? 1.4 : 1
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 600,
          mass: 0.15
        }}
        style={{ width: 6, height: 6 }}
      />
    </>
  );
}
