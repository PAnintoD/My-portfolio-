'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';

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

    const onMouseLeave = (e: MouseEvent) => {
      // Only hide if the cursor truly exits the browser viewport bounds
      if (
        !e.relatedTarget &&
        (e.clientY <= 0 ||
          e.clientX <= 0 ||
          e.clientX >= window.innerWidth ||
          e.clientY >= window.innerHeight)
      ) {
        setIsVisible(false);
      }
    };

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

  if (!hasFinePointer || !isVisible || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* Precision Follower Ring - Minimalist & Non-intrusive */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full border border-[#7890aa]/50"
        animate={{
          x: mousePosition.x - (isHovered ? 18 : 12),
          y: mousePosition.y - (isHovered ? 18 : 12),
          width: isHovered ? 36 : 24,
          height: isHovered ? 36 : 24,
          backgroundColor: isHovered ? 'rgba(120, 144, 170, 0.1)' : 'transparent',
          borderColor: isHovered ? 'rgba(120, 144, 170, 0.8)' : 'rgba(120, 144, 170, 0.35)',
          scale: isClicking ? 0.85 : 1
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 350,
          mass: 0.35
        }}
      />

      {/* Center Micro Dot - Off-white for high visibility */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-[#f2f4f7] shadow-sm shadow-black/50"
        animate={{
          x: mousePosition.x - 2.5,
          y: mousePosition.y - 2.5,
          scale: isClicking ? 0.6 : isHovered ? 1.25 : 1
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 650,
          mass: 0.1
        }}
        style={{ width: 5, height: 5 }}
      />
    </div>,
    document.body
  );
}
