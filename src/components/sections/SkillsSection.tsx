'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
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

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090c12]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="font-mono text-xs text-[#707a89] tracking-[0.2em] uppercase block mb-2">
            {t(uiContent.skills.sectionTag)}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f2f4f7] mb-3">
            {t(uiContent.skills.heading)}
          </h2>
          <p className="text-[#a9b1bd] text-sm sm:text-base max-w-2xl">
            {t(uiContent.skills.subheading)}
          </p>
          <div className="w-12 h-[2px] bg-[#7890aa]/40 rounded-full mt-4" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryIndex(idx)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? 'text-[#0a0e15] font-semibold'
                    : 'text-[#a9b1bd] hover:text-[#f2f4f7] bg-[#0f141d] border border-white/[0.08] hover:border-white/[0.15]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-[#f2f4f7] rounded-full shadow-sm"
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
          className="text-[#707a89] text-xs sm:text-sm mb-6 font-mono"
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
                className="group relative p-5 rounded-2xl bg-[#0f141d] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-[#141a24] border border-white/[0.08] flex items-center justify-center text-[#7890aa]">
                      <IconComponent className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-[#f2f4f7]">
                        {skill.name}
                      </h3>
                      <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#141a24] text-[#707a89] mt-1">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#a9b1bd] leading-relaxed">
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
