'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface AboutDecorationsProps {
  pointerOffset?: { x: number; y: number };
}

export default function AboutDecorations({ pointerOffset = { x: 0, y: 0 } }: AboutDecorationsProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none -z-0">
      {/* 1. Top-Left: Metallic Sphere with Technical Grooves */}
      <motion.div
        initial={{ opacity: 0, x: -80, rotate: -12 }}
        whileInView={{ opacity: 0.85, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transform: `translate3d(${pointerOffset.x * 6}px, ${pointerOffset.y * 6}px, 0)`
        }}
        className="hidden sm:block absolute -top-8 -left-8 md:top-12 md:left-12 size-36 md:size-48"
      >
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-xl">
          <defs>
            <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#C4D1DF" />
              <stop offset="70%" stopColor="#7F9AB8" />
              <stop offset="100%" stopColor="#2E3C4D" />
            </radialGradient>
          </defs>
          <circle cx="80" cy="80" r="72" fill="url(#sphereGrad)" />
          {/* Grooves / Technical Latitudinal Lines */}
          <ellipse cx="80" cy="80" rx="72" ry="24" fill="none" stroke="#2E3C4D" strokeWidth="1.2" opacity="0.4" />
          <ellipse cx="80" cy="80" rx="72" ry="48" fill="none" stroke="#2E3C4D" strokeWidth="1.2" opacity="0.3" />
          <line x1="80" y1="8" x2="80" y2="152" stroke="#2E3C4D" strokeWidth="1.2" opacity="0.3" />
        </svg>
      </motion.div>

      {/* 2. Top-Right: Chrome Torus */}
      <motion.div
        initial={{ opacity: 0, x: 80, rotate: 12 }}
        whileInView={{ opacity: 0.85, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transform: `translate3d(${pointerOffset.x * -7}px, ${pointerOffset.y * -7}px, 0)`
        }}
        className="hidden sm:block absolute top-8 -right-8 md:top-16 md:right-12 size-40 md:size-52"
      >
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="torusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F0F4F8" />
              <stop offset="40%" stopColor="#8FA5BD" />
              <stop offset="70%" stopColor="#4A586A" />
              <stop offset="100%" stopColor="#9AB0C7" />
            </linearGradient>
          </defs>
          <ellipse cx="80" cy="80" rx="68" ry="42" fill="none" stroke="url(#torusGrad)" strokeWidth="22" opacity="0.9" />
          <ellipse cx="80" cy="80" rx="68" ry="42" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
        </svg>
      </motion.div>

      {/* 3. Bottom-Left: Translucent Wireframe Cube */}
      <motion.div
        initial={{ opacity: 0, x: -80, rotate: 12 }}
        whileInView={{ opacity: 0.85, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transform: `translate3d(${pointerOffset.x * 5}px, ${pointerOffset.y * 5}px, 0)`
        }}
        className="hidden sm:block absolute bottom-12 left-6 md:bottom-20 md:left-14 size-32 md:size-44"
      >
        <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
          {/* Isometric Cube Faces */}
          <polygon points="60,15 105,40 60,65 15,40" fill="#7F9AB8" fillOpacity="0.15" stroke="#4A586A" strokeWidth="1.5" />
          <polygon points="15,40 60,65 60,110 15,85" fill="#4A586A" fillOpacity="0.12" stroke="#4A586A" strokeWidth="1.5" />
          <polygon points="60,65 105,40 105,85 60,110" fill="#2E3C4D" fillOpacity="0.18" stroke="#4A586A" strokeWidth="1.5" />
          {/* Internal Wireframe Lines */}
          <line x1="60" y1="15" x2="60" y2="65" stroke="#7F9AB8" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
        </svg>
      </motion.div>

      {/* 4. Bottom-Right: Abstract Node Cluster */}
      <motion.div
        initial={{ opacity: 0, x: 80, rotate: -12 }}
        whileInView={{ opacity: 0.85, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transform: `translate3d(${pointerOffset.x * -6}px, ${pointerOffset.y * -6}px, 0)`
        }}
        className="hidden sm:block absolute bottom-12 right-6 md:bottom-20 md:right-14 size-36 md:size-48"
      >
        <svg viewBox="0 0 140 140" className="w-full h-full drop-shadow-lg">
          <circle cx="70" cy="70" r="48" fill="none" stroke="#7F9AB8" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
          <circle cx="70" cy="70" r="16" fill="#0A1019" opacity="0.8" />
          <circle cx="70" cy="70" r="6" fill="#7F9AB8" />
          {/* Connected Satellite Nodes */}
          <line x1="70" y1="70" x2="30" y2="40" stroke="#4A586A" strokeWidth="1.2" opacity="0.6" />
          <circle cx="30" cy="40" r="5" fill="#7F9AB8" />
          <line x1="70" y1="70" x2="110" y2="50" stroke="#4A586A" strokeWidth="1.2" opacity="0.6" />
          <circle cx="110" cy="50" r="6" fill="#4A586A" />
          <line x1="70" y1="70" x2="85" y2="115" stroke="#4A586A" strokeWidth="1.2" opacity="0.6" />
          <circle cx="85" cy="115" r="4" fill="#78A68E" />
        </svg>
      </motion.div>
    </div>
  );
}
