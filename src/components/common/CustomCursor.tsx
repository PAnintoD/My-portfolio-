'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { motion, useReducedMotion } from 'motion/react';

function subscribePointer(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getPointerSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches;
}

export default function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const hasFinePointer = useSyncExternalStore(subscribePointer, getPointerSnapshot, () => false);

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (!hasFinePointer || shouldReduceMotion) return;

    // Only hide native cursor once custom cursor successfully mounts
    document.documentElement.classList.add('custom-cursor-enabled');

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = (e: MouseEvent) => {
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

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor'));
        setIsHovered(true);
        return;
      }

      setCursorText(null);
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
  }, [hasFinePointer, shouldReduceMotion]);

  if (!hasFinePointer || shouldReduceMotion || !isVisible || typeof document === 'undefined') {
    return null;
  }

  const ringSize = cursorText ? 64 : isHovered ? 38 : 24;

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden select-none">
      {/* Precision Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full border border-[#7890AA]/45 flex items-center justify-center overflow-hidden"
        animate={{
          x: mousePosition.x - ringSize / 2,
          y: mousePosition.y - ringSize / 2,
          width: ringSize,
          height: ringSize,
          backgroundColor: cursorText
            ? 'rgba(15, 20, 29, 0.85)'
            : isHovered
            ? 'rgba(120, 144, 170, 0.08)'
            : 'transparent',
          borderColor: cursorText
            ? 'rgba(120, 144, 170, 0.65)'
            : isHovered
            ? 'rgba(120, 144, 170, 0.75)'
            : 'rgba(120, 144, 170, 0.35)',
          scale: isClicking ? 0.9 : 1
        }}
        transition={{
          type: 'spring',
          damping: 26,
          stiffness: 380,
          mass: 0.3
        }}
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-semibold tracking-wider text-[#F2F4F7] uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Micro Dot */}
      {!cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none rounded-full bg-[#F2F4F7] shadow-sm shadow-black/60"
          animate={{
            x: mousePosition.x - 2.5,
            y: mousePosition.y - 2.5,
            scale: isClicking ? 0.6 : isHovered ? 1.3 : 1
          }}
          transition={{
            type: 'spring',
            damping: 35,
            stiffness: 700,
            mass: 0.08
          }}
          style={{ width: 5, height: 5 }}
        />
      )}
    </div>,
    document.body
  );
}
