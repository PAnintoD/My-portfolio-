'use client';

import React, { useState, MouseEvent } from 'react';
import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, MapPin, Globe2, Cpu, ChevronDown } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import HeroSceneFallback from './HeroSceneFallback';
import MagneticButton from '../common/MagneticButton';
import { personalInfo } from '../../data/portfolioData';
import { usePointerType } from '../../hooks/usePointerType';

const EngineeringScene = dynamic(() => import('./EngineeringScene'), {
  ssr: false,
  loading: () => <HeroSceneFallback />
});

export default function PortfolioHero() {
  const shouldReduceMotion = useReducedMotion();
  const { isFine } = usePointerType();

  // Subtle 3-layer pointer parallax (max 3px, 6px, 9px)
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !isFine) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setParallax({ x, y });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  const handleScrollToProjects = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  const lines = ['I BUILD', 'SYSTEMS THAT', 'SEE, THINK', '& CONNECT.'];

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full overflow-hidden bg-[#080A0F] flex flex-col justify-between select-none"
    >
      {/* Background Depth Layer 1: Technical Grid */}
      <div
        className="absolute inset-0 bg-hero-grid opacity-20 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: !shouldReduceMotion && isFine ? `translate3d(${parallax.x * 3}px, ${parallax.y * 3}px, 0)` : 'none'
        }}
        aria-hidden="true"
      />

      {/* Background Depth Layer 2: Radial Light */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle at 74% 40%, rgba(127,154,184,0.13), transparent 36%)',
          transform: !shouldReduceMotion && isFine ? `translate3d(${parallax.x * 6}px, ${parallax.y * 6}px, 0)` : 'none'
        }}
        aria-hidden="true"
      />

      {/* Background Depth Layer 3: Sparse Technical Coordinates */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 text-[9px] font-mono text-[#697586] transition-transform duration-700 ease-out"
        style={{
          transform: !shouldReduceMotion && isFine ? `translate3d(${parallax.x * 9}px, ${parallax.y * 9}px, 0)` : 'none'
        }}
        aria-hidden="true"
      >
        <span className="absolute top-28 left-8 sm:left-14">+ LAT 13.7563° N / LON 100.5018° E</span>
        <span className="absolute bottom-24 right-8 sm:right-14">SEC // 001_HERO_SYS</span>
      </div>

      {/* Main Hero Two-Column Content */}
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 pt-28 pb-16 md:pt-32 md:pb-20 max-w-[1540px] mx-auto w-full">
        {/* Left Column: Heading & Content */}
        <div className="flex flex-col items-start max-w-2xl">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.04] px-4 py-2 font-mono text-[9px] sm:text-[10px] tracking-[0.16em] text-[#A5AFBC]">
              <span className="size-1.5 rounded-full bg-[#78A68E] animate-pulse" />
              <span>AVAILABLE FOR SELECTED PROJECTS</span>
            </div>
          </motion.div>

          {/* Staggered Heading */}
          <h1
            aria-label="I BUILD SYSTEMS THAT SEE, THINK & CONNECT."
            className="font-display font-extrabold uppercase tracking-[-0.065em] leading-[0.84] text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[7.2vw] xl:text-[104px] text-left"
          >
            {lines.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '110%', opacity: 0, rotateX: 10 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { y: '0%', opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + index * 0.09,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="hero-heading block origin-bottom"
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-[620px] font-sans text-[14px] sm:text-[16px] lg:text-[17px] leading-7 text-[#A5AFBC]"
          >
            I’m <span className="text-[#F0F3F6] font-medium">Thanapoom Sidaeng</span>, a multidisciplinary developer creating dependable software, intelligent automation, embedded systems, and computer vision solutions for real-world challenges.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col sm:flex-row items-start gap-3 w-full sm:w-auto"
          >
            <MagneticButton
              onClick={handleScrollToProjects}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F0F3F6] px-6 py-3 text-[12px] font-semibold tracking-[0.08em] text-[#080A0F] shadow-lg shadow-black/20 w-full sm:w-auto"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowDownRight className="size-4" />
            </MagneticButton>

            <MagneticButton
              href={personalInfo.github}
              external
              variant="secondary"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-[12px] font-semibold tracking-[0.08em] text-[#D7DEE5] w-full sm:w-auto"
            >
              <GithubIcon className="size-4" />
              <span>GITHUB PROFILE</span>
            </MagneticButton>
          </motion.div>

          {/* Metadata Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.08] pt-5 font-mono text-[9px] sm:text-[10px] tracking-[0.12em] text-[#697586] w-full"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3 text-[#7F9AB8]" />
              BASED IN THAILAND
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="size-3 text-[#7F9AB8]" />
              REMOTE / ON-SITE
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu className="size-3 text-[#7F9AB8]" />
              SOFTWARE · HARDWARE · AI
            </span>
          </motion.div>
        </div>

        {/* Right Column: Procedural 3D Scene */}
        <motion.div
          initial={{ scale: 0.72, opacity: 0, rotate: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full flex items-center justify-center"
        >
          <EngineeringScene />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="hidden sm:flex items-center gap-3 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 pb-8 text-[9px] font-mono tracking-[0.18em] text-[#697586] select-none"
      >
        <span className="h-6 w-[1px] bg-[#7F9AB8]/40 animate-pulse" />
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="size-3 animate-bounce text-[#7F9AB8]" />
      </motion.div>
    </section>
  );
}
