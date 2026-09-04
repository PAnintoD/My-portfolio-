'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface TextRevealProps {
  text: string;
  mode?: 'line' | 'word' | 'character';
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export default function TextReveal({
  text,
  mode = 'word',
  className = '',
  delay = 0,
  duration = 0.8,
  stagger = 0.05,
  as: Component = 'div'
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  let units: string[] = [];
  if (mode === 'line') {
    units = text.split('\n');
  } else if (mode === 'word') {
    units = text.split(' ');
  } else {
    units = text.split('');
  }

  return (
    <Component className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-block">
        {units.map((unit, index) => {
          return (
            <span
              key={index}
              className={`inline-block overflow-hidden align-top ${
                mode === 'line' ? 'block' : ''
              }`}
            >
              <motion.span
                initial={{ y: '110%', opacity: 0, rotateX: mode === 'line' ? 10 : 0 }}
                whileInView={{ y: '0%', opacity: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration,
                  delay: delay + index * stagger,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block"
              >
                {unit}
              </motion.span>
              {mode === 'word' && index < units.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </span>
          );
        })}
      </span>
    </Component>
  );
}
