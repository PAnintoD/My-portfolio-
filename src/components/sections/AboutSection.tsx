'use client';

import React from 'react';
import FadeIn from '../motion/FadeIn';
import { personalInfo } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-label="About Me"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#090c12] text-[#f2f4f7] scroll-mt-20"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
          
          {/* Column 1: Heading & Key Details */}
          <FadeIn>
            <div className="flex flex-col items-start">
              <span className="font-mono text-xs text-[#7f9ab8] tracking-widest uppercase mb-3 block">
                {'// 01 · ABOUT ME'}
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#f2f4f7] tracking-tight leading-tight mb-6">
                Hands-on builder bridging software, hardware &amp; AI.
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#a5afbc] border-t border-white/10 pt-4 w-full">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-[#7f9ab8]" />
                  {t(personalInfo.location)}
                </span>
                <span className="flex items-center gap-1.5 text-[#78a68e]">
                  <CheckCircle2 className="size-3.5" />
                  {t(personalInfo.status)}
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-8 w-full">
                {personalInfo.stats.slice(0, 4).map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0d1119] border border-white/10 flex flex-col justify-between"
                  >
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#f2f4f7] mb-1">
                      {stat.value}
                    </span>
                    <span className="font-mono text-xs text-[#a5afbc] font-medium">
                      {t(stat.label)}
                    </span>
                    {stat.sublabel && (
                      <span className="font-mono text-[10px] text-[#697586] mt-0.5">
                        {t(stat.sublabel)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Column 2: Bio Text */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-6 text-base sm:text-lg leading-relaxed text-[#a5afbc]">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index} className="font-sans">
                  {t(paragraph)}
                </p>
              ))}

              <div className="p-6 rounded-2xl bg-[#0d1119] border border-white/10 mt-2">
                <h3 className="font-mono text-xs font-semibold text-[#7f9ab8] tracking-wider uppercase mb-2">
                  Engineering Philosophy
                </h3>
                <p className="font-sans text-sm text-[#a5afbc] leading-relaxed">
                  Focusing on modern, clean, and high-performance solutions. Emphasizing continuous reliability, manageable complexity, and practical integration between edge hardware and cloud software.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
