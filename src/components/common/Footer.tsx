'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { personalInfo } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const footerRef = useRef<HTMLElement>(null);
  const currentYear = new Date().getFullYear();

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end']
  });

  const panintodX = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      aria-label="Site Footer"
      className="relative border-t border-white/[0.08] bg-[#080A0F] pt-16 pb-12 px-5 sm:px-8 md:px-12 overflow-hidden select-none"
    >
      {/* Large Moving Footer Word: PANINTOD (Scroll-based horizontal shift) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden opacity-[0.04] flex items-center justify-center -z-0 select-none"
      >
        <motion.span
          style={{ x: shouldReduceMotion ? '0%' : panintodX }}
          className="font-display font-extrabold uppercase text-[clamp(5rem,20vw,240px)] tracking-[-0.05em] whitespace-nowrap text-white"
        >
          PANINTOD
        </motion.span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.08]">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="size-7 rounded-lg bg-[#0D1119] border border-white/10 flex items-center justify-center font-display font-bold text-xs text-[#F0F3F6]">
                TS
              </div>
              <span className="font-semibold text-sm tracking-wide text-[#F0F3F6]">
                THANAPOOM SIDAENG
              </span>
            </div>
            <p className="font-mono text-[10px] tracking-[0.16em] text-[#697586] uppercase">
              SOFTWARE · AUTOMATION · AI VISION
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono">
            {personalInfo.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A5AFBC] hover:text-[#F0F3F6] transition-colors py-1"
              >
                {s.platform}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D1119] border border-white/[0.10] hover:border-white/20 text-xs font-mono text-[#A5AFBC] hover:text-[#F0F3F6] transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="size-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#697586]">
          <p>© {currentYear} Thanapoom Sidaeng (PAnintoD). All rights reserved.</p>
          <p className="text-[#697586]">
            Architected for High Performance & Precision
          </p>
        </div>
      </div>
    </footer>
  );
}
