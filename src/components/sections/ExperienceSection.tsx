'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { experiences, uiContent } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { Briefcase, GraduationCap, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%']
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
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090C12]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header with Section Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#707A89] tracking-[0.2em] uppercase">
            <span className="text-[#7890AA]">{'// 04'}</span>
            <span>{t(uiContent.experience.sectionTag)}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F2F4F7] mb-3">
            {t(uiContent.experience.heading)}
          </h2>
          <p className="text-[#A9B1BD] text-sm sm:text-base max-w-2xl">
            {t(uiContent.experience.subheading)}
          </p>
          <div className="w-12 h-[2px] bg-[#7890AA]/40 rounded-full mt-4" />
        </motion.div>

        {/* Vertical Timeline Track Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 space-y-12">
          {/* Static Background Track */}
          <div className="absolute left-[11px] sm:left-[19px] md:left-[23px] top-4 bottom-4 w-[2px] bg-white/[0.08]" />

          {/* Animated Dynamic Drawing Track */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-[11px] sm:left-[19px] md:left-[23px] top-4 bottom-4 w-[2px] bg-[#7890AA] origin-top opacity-80 motion-reduce:hidden"
          />

          {experiences.map((item, index) => {
            const isWork = item.type === 'work';
            const isLatest = index === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Timeline Interactive Node */}
                <div className="absolute -left-[30px] sm:-left-[47px] md:-left-[55px] top-2 flex items-center justify-center">
                  <div className="size-8 rounded-full bg-[#0F141D] border border-[#7890AA]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#7890AA] group-hover:scale-110 shadow-lg shadow-black/40">
                    {isWork ? (
                      <Briefcase className="size-3.5 text-[#7890AA]" />
                    ) : (
                      <GraduationCap className="size-3.5 text-[#7890AA]" />
                    )}
                  </div>
                  {isLatest && (
                    <span className="absolute -top-1 -right-1 flex size-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#75A58E] opacity-75" />
                      <span className="relative inline-flex rounded-full size-2 bg-[#75A58E]" />
                    </span>
                  )}
                </div>

                {/* Timeline Content Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-[#0F141D] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 shadow-xl shadow-black/30">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs text-[#7890AA] font-semibold px-3 py-1 rounded-full bg-[#141A24] border border-white/[0.06]">
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-[#707A89] flex items-center gap-1">
                        <MapPin className="size-3 text-[#707A89]" />
                        {t(item.location)}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-[#707A89] uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>

                  {/* Role & Organization */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#F2F4F7] mb-1 tracking-tight">
                    {t(item.role)}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#707A89] mb-4 font-mono">
                    {item.company}
                  </p>

                  {/* Description */}
                  <p className="text-[#A9B1BD] text-xs sm:text-sm leading-relaxed mb-5">
                    {t(item.description)}
                  </p>

                  {/* Key Achievements */}
                  {item.achievements.length > 0 && (
                    <div className="space-y-2 mb-5">
                      {item.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#A9B1BD]">
                          <CheckCircle className="size-3.5 text-[#75A58E] shrink-0 mt-0.5" />
                          <span>{t(ach)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full bg-[#141A24] border border-white/[0.06] text-[10px] font-mono text-[#707A89]"
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
    </section>
  );
}
