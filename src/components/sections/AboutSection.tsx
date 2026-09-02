'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo, uiContent } from '../../data/portfolioData';
import TiltCard from '../common/TiltCard';
import { MapPin, Terminal, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase block mb-2">
            {t(uiContent.about.sectionTag)}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t(uiContent.about.heading)}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
        </motion.div>

        {/* Grid: Profile & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Profile Visual Card with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <TiltCard maxTilt={10} className="w-full aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-cyan-400/40 via-violet-500/20 to-transparent">
              <div className="relative w-full h-full bg-[#090d18] rounded-[22px] overflow-hidden p-6 flex flex-col justify-between border border-white/10">
                {/* Tech Pattern Grid */}
                <div className="absolute inset-0 bg-cyber-dots opacity-30" />

                {/* Top status bar in card */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3" />
                    <span>DEV_AVATAR // 01</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-emerald-400">ONLINE</span>
                  </div>
                </div>

                {/* Stylized Futuristic Avatar Placeholder */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-500 p-1 shadow-[0_0_40px_rgba(0,245,212,0.3)]">
                    <div className="w-full h-full rounded-full bg-[#05070e] flex flex-col items-center justify-center overflow-hidden relative">
                      {/* Geometric Avatar Graphic */}
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
                      <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <span className="font-mono text-3xl font-black text-slate-950">
                          TS
                        </span>
                      </div>
                      <div className="mt-2 font-mono text-[10px] tracking-widest text-cyan-300">
                        SOFTWARE_AI_DEV
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-6 text-center">
                    {t(personalInfo.name)}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 text-center mt-1">
                    {t(personalInfo.role)}
                  </p>
                </div>

                {/* Bottom Metadata in card */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Bangkok, TH</span>
                  </span>
                  <span className="text-slate-500">EXP // 6+ YRS</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Bio Text & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>{t(uiContent.about.curiousMind)}</span>
            </div>

            {personalInfo.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {t(paragraph)}
              </p>
            ))}

            {/* Location & Status Pill Bar */}
            <div className="pt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t(personalInfo.location)}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-xs sm:text-sm text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>{t(personalInfo.status)}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md group hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 font-mono tracking-tight bg-gradient-to-r from-cyan-300 to-teal-100 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-violet-300 transition-all">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1">
                {t(stat.label)}
              </div>
              {stat.sublabel && (
                <div className="text-xs font-mono text-slate-400">
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
