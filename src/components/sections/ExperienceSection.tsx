'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { experiences } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { Briefcase, GraduationCap, MapPin, CheckCircle } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function ExperienceSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 50%']
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      aria-label="Experience & Journey"
      className="relative z-20 -mt-10 rounded-t-[40px] sm:rounded-t-[52px] md:rounded-t-[64px] bg-[#080A0F] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 text-[#F0F3F6] scroll-mt-28 select-none"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Section Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="font-mono text-xs text-[#7F9AB8] tracking-[0.2em] uppercase block mb-3 font-semibold">
              {'// TIMELINE & MILESTONES'}
            </span>
            <h2 className="hero-heading font-display font-extrabold uppercase leading-none tracking-[-0.06em] text-[clamp(3.5rem,7vw,100px)] text-left mb-6">
              EXPERIENCE
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A5AFBC] leading-relaxed max-w-sm">
              Chronological milestones demonstrating hands-on technical execution across web systems, IoT hardware, and AI vision pipelines.
            </p>
          </div>

          {/* Right Column: Scrollable Timeline */}
          <div className="lg:col-span-8 relative">
            {/* Timeline Track Line (Steel-blue #7F9AB8, centered at 16px) */}
            <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-white/[0.08]" />
            <motion.div
              style={{ scaleY: lineHeight }}
              className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#7F9AB8] origin-top opacity-75 motion-reduce:hidden"
            />

            <div className="space-y-12">
              {experiences.map((item, index) => {
                const isWork = item.type === 'work';
                const isLatest = index === 0;
                // Desktop alternating x ±30px, mobile y: 20px
                const xOffset = !isDesktop ? 0 : index % 2 === 0 ? 30 : -30;

                return (
                  <motion.div
                    key={item.id}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: xOffset, y: !isDesktop ? 20 : 0 }}
                    whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex items-start gap-4 sm:gap-6 group"
                  >
                    {/* Interactive Timeline Node (w-8 = 32px, centered at 16px) */}
                    <div className="relative z-10 shrink-0 w-8 flex justify-center mt-2">
                      <div className="size-8 rounded-full bg-[#0D1119] border border-[#7F9AB8]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#7F9AB8] group-hover:scale-110 shadow-lg shadow-black/50">
                        {isWork ? (
                          <Briefcase className="size-3.5 text-[#7F9AB8]" />
                        ) : (
                          <GraduationCap className="size-3.5 text-[#7F9AB8]" />
                        )}
                      </div>
                      {isLatest && (
                        <span className="absolute -top-1 -right-1 flex size-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#78A68E] opacity-75" />
                          <span className="relative inline-flex rounded-full size-2.5 bg-[#78A68E]" />
                        </span>
                      )}
                    </div>

                    {/* Timeline Content Card */}
                    <div className="flex-1 min-w-0 p-6 sm:p-8 rounded-3xl bg-[#0D1119] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 shadow-xl shadow-black/40">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs text-[#7F9AB8] font-semibold px-3 py-1 rounded-full bg-[#121824] border border-white/[0.06]">
                            {item.period}
                          </span>
                          <span className="text-xs font-mono text-[#697586] flex items-center gap-1">
                            <MapPin className="size-3 text-[#7F9AB8]" />
                            {t(item.location)}
                          </span>
                        </div>

                        <span className="text-[10px] font-mono text-[#697586] uppercase tracking-wider">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#F0F3F6] mb-1 tracking-tight">
                        {t(item.role)}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[#7F9AB8] mb-4 font-mono">
                        {item.company}
                      </p>

                      <p className="text-[#A5AFBC] text-xs sm:text-sm leading-relaxed mb-5">
                        {t(item.description)}
                      </p>

                      {item.achievements.length > 0 && (
                        <div className="space-y-2 mb-5">
                          {item.achievements.map((ach, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-[#A5AFBC]">
                              <CheckCircle className="size-3.5 text-[#78A68E] shrink-0 mt-0.5" />
                              <span>{t(ach)}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded-full bg-[#121824] border border-white/[0.06] text-[10px] font-mono text-[#697586]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
