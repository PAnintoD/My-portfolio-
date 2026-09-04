'use client';

import React, { useState, MouseEvent } from 'react';
import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, MapPin, Globe2, CalendarDays, ChevronDown } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import AvailabilityBadge from './AvailabilityBadge';
import HeroSceneFallback from './HeroSceneFallback';
import MagneticButton from '../common/MagneticButton';
import { usePointerType } from '../../hooks/usePointerType';

// Dynamically import 3D React Three Fiber scene with SSR disabled
const EngineeringScene = dynamic(() => import('./EngineeringScene'), {
  ssr: false,
  loading: () => <HeroSceneFallback />
});

export default function PortfolioHero() {
  const shouldReduceMotion = useReducedMotion();
  const { isFine } = usePointerType();

  // Subtle 3-layer pointer parallax
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

  const handleScrollDown = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[1440px] mx-auto min-h-[680px] md:min-h-[760px] rounded-[32px] md:rounded-[44px] bg-[#0F141D] border border-white/[0.08] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col"
    >
      {/* Layer 1: Far Background (Grid & Noise) - Parallax max 3px */}
      <motion.div
        animate={
          shouldReduceMotion || !isFine
            ? {}
            : { x: parallax.x * 3, y: parallax.y * 3 }
        }
        transition={{ type: 'spring', damping: 40, stiffness: 200 }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-hero-grid opacity-20" />
        <div className="absolute inset-0 bg-noise-texture opacity-30" />
      </motion.div>

      {/* Layer 2: Middle Technical Markers Layer - Parallax max 6px */}
      <motion.div
        animate={
          shouldReduceMotion || !isFine
            ? {}
            : { x: parallax.x * 6, y: parallax.y * 6 }
        }
        transition={{ type: 'spring', damping: 40, stiffness: 200 }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Technical Coordinate Crosshairs */}
        <div className="absolute top-16 left-12 font-mono text-[9px] text-[#707A89]/30 tracking-widest hidden lg:block">
          + LAT 13.7563° N / LON 100.5018° E
        </div>
        <div className="absolute bottom-16 right-16 font-mono text-[9px] text-[#707A89]/30 tracking-widest hidden lg:block">
          SEC // 001_HERO_SYS
        </div>
      </motion.div>

      {/* Layer 3: Foreground Ambient Light - Parallax max 10px */}
      <motion.div
        animate={
          shouldReduceMotion || !isFine
            ? {}
            : { x: parallax.x * 10, y: parallax.y * 10 }
        }
        transition={{ type: 'spring', damping: 40, stiffness: 200 }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Soft Radial Ambient Lighting at Upper-Right */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            background:
              'radial-gradient(circle at 78% 28%, rgba(120,144,170,0.16), transparent 42%)'
          }}
        />
      </motion.div>

      {/* Hero Content Two-Column Grid */}
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-10 lg:gap-12 px-7 sm:px-10 md:px-16 lg:px-20 pt-28 pb-20 md:pt-32 md:pb-24">
        {/* Left Column: Core Introduction & CTAs */}
        <div className="flex flex-col items-start text-left">
          {/* 1. Eyebrow & Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <AvailabilityBadge />
          </motion.div>

          {/* 2. Primary Headline (Line-by-line reveal with overflow mask) */}
          <h1 className="font-display text-[42px] leading-[0.98] sm:text-[54px] md:text-[66px] lg:text-[74px] font-semibold tracking-[-0.045em] text-[#F2F4F7]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Building reliable systems
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                across software,
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[#8FA5BD]"
              >
                hardware & AI.
              </motion.span>
            </span>
          </h1>

          {/* 3. Subheadline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-[660px] font-sans text-[15px] sm:text-[16px] md:text-[17px] leading-7 md:leading-8 text-[#A9B1BD]"
          >
            I’m <span className="text-[#F2F4F7] font-medium">Thanapoom Sidaeng</span>, a hands-on developer creating dependable web applications, intelligent automation, embedded systems, and computer vision solutions for real-world problems.
          </motion.p>

          {/* 4. CTA Buttons Row with Magnetic Hover Physics */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto"
          >
            {/* Primary Action Button */}
            <MagneticButton
              variant="primary"
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto"
              ariaLabel="View Selected Work"
            >
              <span>View Selected Work</span>
              <ArrowUpRight className="size-4" />
            </MagneticButton>

            {/* Secondary Action Button - GitHub */}
            <MagneticButton
              variant="secondary"
              href="https://github.com/PAnintoD"
              external
              className="w-full sm:w-auto"
              ariaLabel="GitHub Profile"
            >
              <GithubIcon className="size-4" />
              <span>GitHub Profile</span>
            </MagneticButton>
          </motion.div>

          {/* 5. Metadata Row */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.07] pt-5 w-full"
          >
            <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.13em] text-[#707A89]">
              <MapPin className="size-3 text-[#7890AA]/70" />
              <span>BASED IN THAILAND</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.13em] text-[#707A89]">
              <Globe2 className="size-3 text-[#7890AA]/70" />
              <span>REMOTE FRIENDLY</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.13em] text-[#707A89]">
              <CalendarDays className="size-3 text-[#7890AA]/70" />
              <span>AVAILABLE 2026</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Engineering Object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center lg:justify-end"
        >
          <EngineeringScene />
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator at Bottom */}
      <motion.button
        type="button"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        whileHover={{ opacity: 1, y: 2 }}
        className="mx-auto mb-5 hidden sm:flex flex-col items-center gap-1 font-mono text-[9px] tracking-widest text-[#707A89] cursor-pointer focus-visible:outline-none"
        aria-label="Scroll to about section"
      >
        <span>EXPLORE</span>
        <ChevronDown className="size-3.5 animate-bounce" />
      </motion.button>
    </section>
  );
}
