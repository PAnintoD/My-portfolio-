'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'motion/react';

interface ScrollTextProps {
  text: string;
  className?: string;
}

function Word({
  word,
  range,
  progress
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <span className="relative inline-block mr-[0.28em] last:mr-0">
      <motion.span style={{ opacity, y }} className="inline-block">
        {word}
      </motion.span>
    </span>
  );
}

export default function ScrollText({ text, className = '' }: ScrollTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'end 65%']
  });

  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p ref={containerRef} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
            />
          );
        })}
      </span>
    </p>
  );
}
