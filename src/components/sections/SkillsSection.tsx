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

  const marqueeTech = [
    'Python',
    'YOLOv8',
    'EasyOCR',
    'C# (.NET WinForms)',
    'Arduino IoT',
    'OpenCV',
    'React',
    'Firebase Firestore',
    'n8n Automation',
    'Linux (Ubuntu)',
    'Serial UART',
    'PyTorch & NumPy'
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0E14]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="font-mono text-xs text-[#737D8C] tracking-[0.2em] uppercase block mb-2">
            {t(uiContent.skills.sectionTag)}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F1F3F5] mb-3">
            {t(uiContent.skills.heading)}
          </h2>
          <p className="text-[#A8B0BD] text-sm sm:text-base max-w-2xl">
            {t(uiContent.skills.subheading)}
          </p>
          <div className="w-12 h-[2px] bg-[#6E8FC7]/40 rounded-full mt-4" />
        </motion.div>

        {/* Animated Marquee Ticker - Subdued */}
        <div className="relative w-full overflow-hidden py-2.5 mb-12 border-y border-white/08 bg-[#121722]/50">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0B0E14] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0B0E14] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 32 }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span key={i} className="inline-flex items-center gap-2 font-mono text-xs text-[#737D8C] tracking-wide">
                <span className="w-1 h-1 rounded-full bg-[#6E8FC7]/50" />
                <span>{tech}</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryIndex(idx)}
                className={`relative px-4 py-2 rounded-lg text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? 'text-[#0B0E14] font-semibold'
                    : 'text-[#A8B0BD] hover:text-[#F1F3F5] bg-[#121722] border border-white/08 hover:border-white/15'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-[#6E8FC7] rounded-lg shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
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
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-[#737D8C] text-xs sm:text-sm mb-6 font-mono"
        >
          {'// '}{t(skillCategories[activeCategoryIndex].description)}
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          key={`grid-${activeCategoryIndex}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {skillCategories[activeCategoryIndex].skills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Zap;

            return (
              <div
                key={index}
                className="group relative p-5 rounded-xl bg-[#121722] border border-white/08 hover:border-white/15 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#171D29] border border-white/08 flex items-center justify-center text-[#6E8FC7]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-[#F1F3F5]">
                        {skill.name}
                      </h3>
                      <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#171D29] text-[#737D8C] mt-1">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#A8B0BD] leading-relaxed">
                  {t(skill.description)}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
