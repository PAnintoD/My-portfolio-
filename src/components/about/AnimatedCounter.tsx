'use client';

import React, { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (shouldReduceMotion || !isInView || !ref.current) return;

    // Extract numeric portion and suffix (e.g., "5+" -> number 5, suffix "+")
    const numericMatch = value.match(/\d+/);
    if (!numericMatch) {
      return;
    }

    const targetNumber = parseInt(numericMatch[0], 10);
    const suffix = value.replace(/\d+/, '');
    const prefix = value.substring(0, value.indexOf(numericMatch[0]));

    const duration = 1200; // 1.2s
    const startTime = performance.now();

    ref.current.textContent = `${prefix}0${suffix}`;

    let rafId: number;
    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentNumber = Math.floor(easeOut * targetNumber);

      if (ref.current) {
        ref.current.textContent = `${prefix}${currentNumber}${suffix}`;
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(animateCount);
      } else if (ref.current) {
        ref.current.textContent = value;
      }
    };

    rafId = requestAnimationFrame(animateCount);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, value, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
