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
      {/* Precision Follower Ring - Minimalist & Non-intrusive */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#6E8FC7]/40"
        animate={{
          x: mousePosition.x - (isHovered ? 20 : 14),
          y: mousePosition.y - (isHovered ? 20 : 14),
          width: isHovered ? 40 : 28,
          height: isHovered ? 40 : 28,
          backgroundColor: isHovered ? 'rgba(110, 143, 199, 0.08)' : 'transparent',
          borderColor: isHovered ? 'rgba(110, 143, 199, 0.65)' : 'rgba(110, 143, 199, 0.25)',
          scale: isClicking ? 0.9 : 1
        }}
        transition={{
          type: 'spring',
          damping: 26,
          stiffness: 320,
          mass: 0.4
        }}
      />

      {/* Center Micro Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-[#A8B0BD]"
        animate={{
          x: mousePosition.x - 2.5,
          y: mousePosition.y - 2.5,
          scale: isClicking ? 0.7 : isHovered ? 1.2 : 1
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 600,
          mass: 0.12
        }}
        style={{ width: 5, height: 5 }}
      />
    </>
  );
}
