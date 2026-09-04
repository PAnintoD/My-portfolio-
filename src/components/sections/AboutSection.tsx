'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo, uiContent } from '../../data/portfolioData';
import IdentityCard from '../about/IdentityCard';
import AnimatedCounter from '../about/AnimatedCounter';
import { MapPin } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090C12] scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Number Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#7890AA] tracking-[0.2em] uppercase">
            <span>{t(uiContent.about.sectionTag)}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F2F4F7] mb-3">
            {t(uiContent.about.heading)}
          </h2>
          <div className="w-12 h-[2px] bg-[#7890AA]/40 rounded-full" />
        </motion.div>

        {/* Grid: Profile Identity & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Profile Identity Card with 3D perspective */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <IdentityCard />
          </motion.div>

          {/* Bio Text & Mindset */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-5"
          >
            <div className="text-[#A9B1BD] text-xs font-mono tracking-wider uppercase flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#7890AA]" />
              <span>{t(uiContent.about.curiousMind)}</span>
            </div>

            {personalInfo.aboutBio.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-[#A9B1BD] text-sm sm:text-base leading-relaxed"
              >
                {t(paragraph)}
              </motion.p>
            ))}

            {/* Location & Status Chips */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F141D] border border-white/[0.08] text-xs text-[#A9B1BD]">
                <MapPin className="size-3.5 text-[#707A89] shrink-0" />
                <span>{t(personalInfo.location)}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F141D] border border-white/[0.08] text-xs text-[#A9B1BD]">
                <span className="size-1.5 rounded-full bg-[#75A58E] shrink-0" />
                <span>{t(personalInfo.status)}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Statistics with Animated Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-[#0F141D] border border-white/[0.08] hover:border-white/[0.16] transition-colors duration-200 shadow-lg shadow-black/20"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#F2F4F7] mb-1 font-mono tracking-tight">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-xs font-medium text-[#A9B1BD] mb-1">
                {t(stat.label)}
              </div>
              {stat.sublabel && (
                <div className="text-[11px] font-mono text-[#707A89]">
                  {t(stat.sublabel)}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
