'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences, uiContent } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { Briefcase, GraduationCap, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/40">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase block mb-2">
            {t(uiContent.experience.sectionTag)}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t(uiContent.experience.heading)}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            {t(uiContent.experience.subheading)}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-white/10 space-y-12">
          {experiences.map((item, index) => {
            const isWork = item.type === 'work';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glowing Node on Timeline Track */}
                <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 flex items-center justify-center">
                  <div className="relative w-8 h-8 rounded-full bg-[#05070e] border border-cyan-400/50 flex items-center justify-center group-hover:border-cyan-300 group-hover:shadow-[0_0_18px_rgba(0,245,212,0.6)] transition-all duration-300">
                    {isWork ? (
                      <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
                    )}
                    <span className="absolute -inset-1 rounded-full border border-cyan-400/20 animate-pulse pointer-events-none" />
                  </div>
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#090d18]/80 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,212,0.1)]">
                  {/* Card Header: Period & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30">
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {t(item.location)}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      {item.type}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t(item.role)}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300 mb-4 font-mono">
                    {item.company}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    {t(item.description)}
                  </p>

                  {/* Achievements List */}
                  {item.achievements.length > 0 && (
                    <div className="space-y-2 mb-6">
                      {item.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{t(ach)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
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
