'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, MapPin, Globe2, CalendarDays } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import FloatingNavbar from './FloatingNavbar';
import AvailabilityBadge from './AvailabilityBadge';
import EngineeringPanel from './EngineeringPanel';

export default function PortfolioHero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative w-full max-w-[1440px] mx-auto min-h-[680px] md:min-h-[760px] rounded-[32px] md:rounded-[44px] bg-[#0f141d] border border-white/[0.08] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col"
    >
      {/* Subtle Engineered Background Layer */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 bg-hero-grid opacity-15" />

        {/* Soft Radial Ambient Lighting at Upper-Right */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            background: 'radial-gradient(circle at 78% 28%, rgba(120,144,170,0.14), transparent 38%)'
          }}
        />

        {/* Gentle Low-Opacity Moving Gradient Shape */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 30, -20, 0],
                  y: [0, -25, 20, 0]
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 -right-16 size-[450px] rounded-full bg-[#7890aa]/[0.06] blur-[110px]"
        />

        {/* Fine Noise Texture */}
        <div className="absolute inset-0 bg-noise-texture opacity-30" />
      </div>

      {/* Floating Navigation at top center of Hero */}
      <FloatingNavbar />

      {/* Hero Content Two-Column Grid */}
      <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-12 px-7 sm:px-10 md:px-16 lg:px-20 pt-28 pb-32 md:pt-32 md:pb-36">
        {/* Left Column: Core Introduction & CTAs */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start text-left"
        >
          {/* Eyebrow & Availability Badge */}
          <div className="mb-6">
            <AvailabilityBadge />
          </div>

          {/* Primary Main Headline */}
          <h1 className="font-display text-[44px] leading-[0.98] sm:text-[56px] md:text-[68px] lg:text-[76px] font-semibold tracking-[-0.045em] text-[#f2f4f7]">
            Building reliable systems<br />
            across software,<br />
            <span className="text-[#8fa5bd]">hardware & AI.</span>
          </h1>

          {/* Subheadline Paragraph */}
          <p className="mt-7 max-w-[660px] font-sans text-[15px] sm:text-[16px] md:text-[17px] leading-7 md:leading-8 text-[#a9b1bd]">
            I’m <span className="text-[#f2f4f7] font-medium">Thanapoom Sidaeng</span>, a hands-on developer creating dependable web applications, intelligent automation, embedded systems, and computer vision solutions for real-world problems.
          </p>

          {/* CTA Buttons Row */}
          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
            {/* Primary Action Button */}
            <motion.a
              href="#projects"
              onClick={handleScrollToProjects}
              whileHover={shouldReduceMotion ? {} : { scale: 1.025, y: -1 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#f2f4f7] px-6 py-3 font-sans text-[13px] font-semibold text-[#0a0e15] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fa5bd] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f141d]"
            >
              <span>View Selected Work</span>
              <ArrowUpRight className="size-4" />
            </motion.a>

            {/* Secondary Action Button - GitHub */}
            <motion.a
              href="https://github.com/PAnintoD"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.025, y: -1 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.035] px-6 py-3 font-sans text-[13px] font-semibold text-[#d4d9e0] transition-all hover:border-white/[0.18] hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fa5bd]"
            >
              <GithubIcon className="size-4" />
              <span>GitHub Profile</span>
            </motion.a>
          </div>

          {/* Metadata Row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.07] pt-5 w-full">
            <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.13em] text-[#707a89]">
              <MapPin className="size-3 text-[#7890aa]/60" />
              <span>BASED IN THAILAND</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.13em] text-[#707a89]">
              <Globe2 className="size-3 text-[#7890aa]/60" />
              <span>REMOTE FRIENDLY</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.13em] text-[#707a89]">
              <CalendarDays className="size-3 text-[#7890aa]/60" />
              <span>AVAILABLE 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Engineering Visual Panel */}
        <div className="w-full flex justify-center lg:justify-end">
          <EngineeringPanel />
        </div>
      </div>
    </section>
  );
}
