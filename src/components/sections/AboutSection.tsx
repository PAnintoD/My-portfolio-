'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo, uiContent } from '../../data/portfolioData';
import TiltCard from '../common/TiltCard';
import { MapPin, Terminal } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090c12]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-[#707a89] tracking-[0.2em] uppercase block mb-2">
            {t(uiContent.about.sectionTag)}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f2f4f7] mb-3">
            {t(uiContent.about.heading)}
          </h2>
          <div className="w-12 h-[2px] bg-[#7890aa]/40 rounded-full" />
        </motion.div>

        {/* Grid: Profile & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Profile Visual Card with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <TiltCard maxTilt={4} className="w-full aspect-[4/5] rounded-2xl bg-[#0f141d] border border-white/[0.08] p-6 flex flex-col justify-between shadow-xl shadow-black/30">
              {/* Top status bar in card */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#707a89] bg-[#141a24] px-2.5 py-1 rounded-md border border-white/[0.08] flex items-center gap-1.5">
                  <Terminal className="size-3 text-[#707a89]" />
                  <span>DEV_ID // TS</span>
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#75a58e]" />
                  <span className="text-[11px] font-mono text-[#75a58e]">ONLINE</span>
                </div>
              </div>

              {/* Center Monogram Disc */}
              <div className="flex flex-col items-center justify-center my-auto py-6">
                <div className="size-32 sm:size-36 rounded-2xl bg-[#090c12] border border-white/[0.08] flex flex-col items-center justify-center shadow-lg shadow-black/40">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#f2f4f7]">
                    TS
                  </span>
                  <span className="mt-1 font-mono text-[10px] tracking-widest text-[#707a89]">
                    ENGINEER
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#f2f4f7] mt-5 text-center">
                  {t(personalInfo.name)}
                </h3>
                <p className="text-xs font-mono text-[#707a89] text-center mt-1">
                  {t(personalInfo.role)}
                </p>
              </div>

              {/* Bottom Metadata in card */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#707a89]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-[#707a89]" />
                  <span>Thailand</span>
                </span>
                <span className="text-[#707a89]">PAnintoD</span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Bio Text & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-5"
          >
            <div className="text-[#a9b1bd] text-xs font-mono tracking-wider uppercase">
              {t(uiContent.about.curiousMind)}
            </div>

            {personalInfo.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-[#a9b1bd] text-sm sm:text-base leading-relaxed">
                {t(paragraph)}
              </p>
            ))}

            {/* Location & Status Pill Bar */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0f141d] border border-white/[0.08] text-xs text-[#a9b1bd]">
                <MapPin className="size-3.5 text-[#707a89] shrink-0" />
                <span>{t(personalInfo.location)}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0f141d] border border-white/[0.08] text-xs text-[#a9b1bd]">
                <span className="size-1.5 rounded-full bg-[#75a58e] shrink-0" />
                <span>{t(personalInfo.status)}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-xl bg-[#0f141d] border border-white/[0.08] hover:border-white/[0.15] transition-colors duration-200"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#f2f4f7] mb-1 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-[#a9b1bd] mb-1">
                {t(stat.label)}
              </div>
              {stat.sublabel && (
                <div className="text-[11px] font-mono text-[#707a89]">
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
