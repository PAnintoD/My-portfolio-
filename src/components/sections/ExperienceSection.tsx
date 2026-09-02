'use client';

import React from 'react';
import { motion } from 'motion/react';
import { experiences, uiContent } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { Briefcase, GraduationCap, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090c12]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-[#707a89] tracking-[0.2em] uppercase block mb-2">
            {t(uiContent.experience.sectionTag)}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f2f4f7] mb-3">
            {t(uiContent.experience.heading)}
          </h2>
          <p className="text-[#a9b1bd] text-sm sm:text-base max-w-2xl">
            {t(uiContent.experience.subheading)}
          </p>
          <div className="w-12 h-[2px] bg-[#7890aa]/40 rounded-full mt-4" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-white/[0.08] space-y-10">
          {experiences.map((item, index) => {
            const isWork = item.type === 'work';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Node on Timeline Track */}
                <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 flex items-center justify-center">
                  <div className="size-7 rounded-full bg-[#0f141d] border border-[#7890aa]/40 flex items-center justify-center transition-colors group-hover:border-[#7890aa]">
                    {isWork ? (
                      <Briefcase className="size-3.5 text-[#7890aa]" />
                    ) : (
                      <GraduationCap className="size-3.5 text-[#7890aa]" />
                    )}
                  </div>
                </div>

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl bg-[#0f141d] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-200 shadow-md shadow-black/20">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#7890aa] font-medium px-2.5 py-0.5 rounded bg-[#141a24] border border-white/[0.06]">
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-[#707a89] flex items-center gap-1">
                        <MapPin className="size-3 text-[#707a89]" />
                        {t(item.location)}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-[#707a89] uppercase">
                      {item.type}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-lg sm:text-xl font-semibold text-[#f2f4f7] mb-1">
                    {t(item.role)}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#707a89] mb-4 font-mono">
                    {item.company}
                  </p>

                  {/* Description */}
                  <p className="text-[#a9b1bd] text-xs sm:text-sm leading-relaxed mb-5">
                    {t(item.description)}
                  </p>

                  {/* Achievements List */}
                  {item.achievements.length > 0 && (
                    <div className="space-y-2 mb-5">
                      {item.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#a9b1bd]">
                          <CheckCircle className="size-3.5 text-[#75a58e] shrink-0 mt-0.5" />
                          <span>{t(ach)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/[0.08]">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#141a24] border border-white/[0.06] text-[10px] font-mono text-[#707a89]"
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
