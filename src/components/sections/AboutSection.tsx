'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo, uiContent } from '../../data/portfolioData';
import TiltCard from '../common/TiltCard';
import { MapPin, Terminal } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0E14]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-[#737D8C] tracking-[0.2em] uppercase block mb-2">
            {t(uiContent.about.sectionTag)}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F1F3F5] mb-3">
            {t(uiContent.about.heading)}
          </h2>
          <div className="w-12 h-[2px] bg-[#6E8FC7]/40 rounded-full" />
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
            <TiltCard maxTilt={4} className="w-full aspect-[4/5] rounded-2xl bg-[#121722] border border-white/08 p-6 flex flex-col justify-between shadow-xl shadow-black/30">
              {/* Top status bar in card */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#737D8C] bg-[#171D29] px-2.5 py-1 rounded-md border border-white/08 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-[#737D8C]" />
                  <span>DEV_ID // TS</span>
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#62A888]" />
                  <span className="text-[11px] font-mono text-[#62A888]">ONLINE</span>
                </div>
              </div>

              {/* Center Monogram Disc */}
              <div className="flex flex-col items-center justify-center my-auto py-6">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#0B0E14] border border-white/10 flex flex-col items-center justify-center shadow-lg shadow-black/40">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#F1F3F5]">
                    TS
                  </span>
                  <span className="mt-1 font-mono text-[10px] tracking-widest text-[#737D8C]">
                    ENGINEER
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#F1F3F5] mt-5 text-center">
                  {t(personalInfo.name)}
                </h3>
                <p className="text-xs font-mono text-[#737D8C] text-center mt-1">
                  {t(personalInfo.role)}
                </p>
              </div>

              {/* Bottom Metadata in card */}
              <div className="pt-4 border-t border-white/08 flex items-center justify-between text-xs font-mono text-[#737D8C]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#737D8C]" />
                  <span>Thailand</span>
                </span>
                <span className="text-[#737D8C]">PAnintoD</span>
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
            <div className="text-[#A8B0BD] text-xs font-mono tracking-wider uppercase">
              {t(uiContent.about.curiousMind)}
            </div>

            {personalInfo.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-[#A8B0BD] text-sm sm:text-base leading-relaxed">
                {t(paragraph)}
              </p>
            ))}

            {/* Location & Status Pill Bar */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121722] border border-white/08 text-xs text-[#A8B0BD]">
                <MapPin className="w-3.5 h-3.5 text-[#737D8C] shrink-0" />
                <span>{t(personalInfo.location)}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121722] border border-white/08 text-xs text-[#A8B0BD]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#62A888] shrink-0" />
                <span>{t(personalInfo.status)}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Statistics - Clean & Non-glossy */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-xl bg-[#121722] border border-white/08 hover:border-white/15 transition-colors duration-200"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#F1F3F5] mb-1 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-[#A8B0BD] mb-1">
                {t(stat.label)}
              </div>
              {stat.sublabel && (
                <div className="text-[11px] font-mono text-[#737D8C]">
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
