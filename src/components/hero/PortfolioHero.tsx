'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import EngineeringVisual from './EngineeringVisual';
import { personalInfo } from '../../data/portfolioData';

export default function PortfolioHero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative min-h-[720px] lg:min-h-screen overflow-hidden bg-[#090c12]"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-hero-grid opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Main Content Container */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="relative z-10 grid min-h-[720px] grid-cols-1 items-center gap-10 pt-28 pb-16 lg:min-h-screen lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-32 lg:pb-20">
          
          {/* Column 1: Text & CTA buttons */}
          <div className="flex flex-col items-start max-w-2xl">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1119] px-3.5 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider text-[#a5afbc]"
            >
              <span className="size-2 rounded-full bg-[#78a68e] animate-pulse" />
              <span>AVAILABLE FOR SELECTED WORK</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-[#f2f4f7] text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-[-0.055em] text-left"
            >
              Building reliable systems
              <br />
              across software,
              <br />
              hardware &amp; AI.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-sans text-base sm:text-lg leading-relaxed text-[#a5afbc] max-w-xl"
            >
              I’m Thanapoom Sidaeng, a multidisciplinary developer creating dependable software, intelligent automation, embedded systems, and computer vision solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="#projects"
                onClick={handleScrollToProjects}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f2f4f7] px-6 py-3 text-xs font-semibold tracking-wider text-[#090c12] shadow-md transition-colors hover:bg-white w-full sm:w-auto"
              >
                <span>View Selected Work</span>
                <ArrowDownRight className="size-4" />
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0d1119] px-6 py-3 text-xs font-semibold tracking-wider text-[#f2f4f7] transition-colors hover:bg-[#121824] hover:border-white/20 w-full sm:w-auto"
              >
                <GithubIcon className="size-4" />
                <span>GitHub Profile</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Column 2: Visual (stays in its own grid column) */}
          <div className="w-full flex items-center justify-center">
            <EngineeringVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
