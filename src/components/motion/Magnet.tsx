'use client';

import React, { useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import { usePointerType } from '../../hooks/usePointerType';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface MagnetProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export default function Magnet({
  children,
  strength = 20,
  className = ''
}: MagnetProps) {
  const shouldReduceMotion = useReducedMotion();
  const { isFine } = usePointerType();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 20, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const isActive = !shouldReduceMotion && isFine && isDesktop;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isActive) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / strength;
    const deltaY = (e.clientY - centerY) / strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isActive ? { x: smoothX, y: smoothY } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
