'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : '0');

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;

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

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentNumber = Math.floor(easeOut * targetNumber);

      setDisplayValue(`${prefix}${currentNumber}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {shouldReduceMotion ? value : displayValue}
    </span>
  );
}
