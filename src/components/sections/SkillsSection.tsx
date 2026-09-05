'use client';

import React from 'react';
import FadeIn from '../motion/FadeIn';
import { skillCategories } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#090c12] text-[#f2f4f7] scroll-mt-20 border-t border-white/5"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Heading */}
        <FadeIn>
          <div className="mb-12">
            <span className="font-mono text-xs text-[#7f9ab8] tracking-widest uppercase mb-3 block">
              {'// 02 · TECHNICAL ARSENAL'}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#f2f4f7] tracking-tight leading-tight">
              Skills &amp; Capabilities
            </h2>
            <p className="mt-3 font-sans text-base text-[#a5afbc] max-w-2xl">
              Proven technologies applied across software engineering, machine vision, embedded microcontrollers, and background automation.
            </p>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, index) => (
            <FadeIn key={cat.id} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#0d1119] p-6 flex flex-col justify-between hover:border-white/20 transition-colors">
                <div>
                  {/* Category Title */}
                  <h3 className="font-display font-bold text-lg text-[#f2f4f7] mb-2">
                    {t(cat.title)}
                  </h3>

                  {/* Short Description */}
                  <p className="font-sans text-xs text-[#a5afbc] leading-relaxed mb-6">
                    {t(cat.description)}
                  </p>

                  {/* Technology List */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex flex-col gap-0.5 rounded-xl bg-[#121824]/60 p-2.5 border border-white/5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-xs font-semibold text-[#f2f4f7]">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[9px] uppercase tracking-wider text-[#78a68e] bg-[#78a68e]/10 px-2 py-0.5 rounded">
                            {skill.level}
                          </span>
                        </div>
                        <span className="font-sans text-[11px] text-[#697586]">
                          {t(skill.description)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#697586]">
                  <span>DOMAIN // {String(index + 1).padStart(2, '0')}</span>
                  <span>{cat.skills.length} TECHNOLOGIES</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
