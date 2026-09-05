'use client';

import React from 'react';
import { useReducedMotion } from 'motion/react';
import { personalInfo } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="relative border-t border-white/10 bg-[#090c12] py-12 text-[#f2f4f7]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Identity & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="size-7 rounded-lg bg-[#0d1119] border border-white/10 flex items-center justify-center font-display font-bold text-xs text-[#f2f4f7]">
                TS
              </div>
              <span className="font-semibold text-sm tracking-wide text-[#f2f4f7]">
                THANAPOOM SIDAENG
              </span>
            </div>
            <p className="font-mono text-[10px] tracking-wider text-[#697586] uppercase">
              SOFTWARE · AUTOMATION · AI VISION
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            {personalInfo.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a5afbc] hover:text-[#f2f4f7] transition-colors py-1"
              >
                {s.platform}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1119] border border-white/10 hover:border-white/20 text-xs font-mono text-[#a5afbc] hover:text-[#f2f4f7] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="size-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#697586] text-center sm:text-left">
          <p>© {currentYear} Thanapoom Sidaeng (PAnintoD). All rights reserved.</p>
          <p>Architected for Reliability &amp; Performance</p>
        </div>
      </div>
    </footer>
  );
}
