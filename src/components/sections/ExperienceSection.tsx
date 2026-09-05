'use client';

import React from 'react';
import FadeIn from '../motion/FadeIn';
import { experiences } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { Briefcase, GraduationCap, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      aria-label="Experience & Journey"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#090c12] text-[#f2f4f7] scroll-mt-20 border-t border-white/5"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Heading */}
        <FadeIn>
          <div className="mb-14">
            <span className="font-mono text-xs text-[#7f9ab8] tracking-widest uppercase mb-3 block">
              {'// 04 · TIMELINE & MILESTONES'}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#f2f4f7] tracking-tight leading-tight">
              Experience Odyssey
            </h2>
            <p className="mt-3 font-sans text-base text-[#a5afbc] max-w-2xl">
              Chronological milestones demonstrating hands-on technical execution across web systems, IoT microcontrollers, and AI vision pipelines.
            </p>
          </div>
        </FadeIn>

        {/* Normal Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10 max-w-4xl">
          {experiences.map((item, index) => {
            const isWork = item.type === 'work';

            return (
              <FadeIn key={item.id} delay={index * 0.1}>
                <div className="relative group">
                  {/* Timeline Dot on the Line */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 size-7 rounded-full bg-[#0d1119] border border-[#7f9ab8]/40 flex items-center justify-center text-[#7f9ab8]">
                    {isWork ? (
                      <Briefcase className="size-3" />
                    ) : (
                      <GraduationCap className="size-3" />
                    )}
                  </div>

                  {/* Timeline Card */}
                  <div className="rounded-2xl border border-white/10 bg-[#0d1119] p-6 sm:p-7 hover:border-white/20 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="font-mono text-xs text-[#7f9ab8] font-semibold px-3 py-1 rounded-full bg-[#121824] border border-white/5">
                          {item.period}
                        </span>
                        <span className="text-xs font-mono text-[#697586] flex items-center gap-1">
                          <MapPin className="size-3 text-[#7f9ab8]" />
                          {t(item.location)}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono text-[#697586] uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#f2f4f7] mb-1">
                      {t(item.role)}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#7f9ab8] mb-4 font-mono">
                      {item.company}
                    </p>

                    <p className="text-[#a5afbc] text-sm leading-relaxed mb-5">
                      {t(item.description)}
                    </p>

                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2 mb-5">
                        {item.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#a5afbc]">
                            <CheckCircle className="size-3.5 text-[#78a68e] shrink-0 mt-0.5" />
                            <span>{t(ach)}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full bg-[#121824] border border-white/5 text-[10px] font-mono text-[#697586]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
