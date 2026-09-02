'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { skillCategories, uiContent } from '../../data/portfolioData';
import {
  Globe,
  Code2,
  Palette,
  Cpu,
  Layers,
  Sparkles,
  Activity,
  Volume2,
  Box,
  Eye,
  Users,
  Server,
  Database,
  CloudLightning,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { FigmaIcon } from '../common/BrandIcons';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Code2,
  Palette,
  Cpu,
  Layers,
  Sparkles,
  Activity,
  Volume2,
  Box,
  Eye,
  Users,
  Server,
  Database,
  CloudLightning,
  CheckCircle2,
  Figma: FigmaIcon
};

export default function SkillsSection() {
  const { t } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // Marquee items for top visual ticker
  const marqueeTech = [
    'Next.js 16',
    'React 19',
    'Three.js WebGL',
    'TypeScript',
    'Tailwind CSS v4',
    'Framer Motion',
    'GSAP ScrollTrigger',
    'Custom GLSL Shaders',
    'Web Audio API',
    'Zustand',
    'PostgreSQL / Supabase',
    'Figma Tokens',
    'WCAG AAA Accessibility'
  ];

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/40">
      {/* Background elements */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase block mb-2">
            {t(uiContent.skills.sectionTag)}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t(uiContent.skills.heading)}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            {t(uiContent.skills.subheading)}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </motion.div>

        {/* Animated Marquee Ticker */}
        <div className="relative w-full overflow-hidden py-3 mb-16 border-y border-white/10 bg-slate-900/40 backdrop-blur-md">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#05070e] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#05070e] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span key={i} className="inline-flex items-center gap-2 font-mono text-xs text-slate-300 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{tech}</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
          {skillCategories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryIndex(idx)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/60 border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-xl shadow-[0_0_20px_rgba(0,245,212,0.4)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{t(cat.title)}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description */}
        <motion.p
          key={`desc-${activeCategoryIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-400 text-sm mb-8 font-mono"
        >
          &gt; {t(skillCategories[activeCategoryIndex].description)}
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          key={`grid-${activeCategoryIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {skillCategories[activeCategoryIndex].skills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Zap;

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-[#0a0e1a]/80 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,212,0.12)] hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(0,245,212,0.4)] transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-400 mt-1">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {t(skill.description)}
                </p>

                {/* Subtile bottom glow line */}
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
