'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { uiContent } from '../../data/portfolioData';
import {
  Globe,
  Server,
  Cpu,
  Workflow,
  Eye,
  Layers,
  Terminal,
  Code2,
  Database,
  Radio,
  Sparkles,
  GitBranch
} from 'lucide-react';

interface SkillDomain {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  skills: { name: string; desc: string; icon: React.ComponentType<{ className?: string }> }[];
}

const skillDomains: SkillDomain[] = [
  {
    id: 'web',
    title: 'Web Systems',
    icon: Globe,
    tag: 'DOM_01',
    skills: [
      { name: 'TypeScript & JavaScript', desc: 'Type-safe scalable architectures', icon: Code2 },
      { name: 'React & Next.js (App Router)', desc: 'Modern reactive component design', icon: Globe },
      { name: 'Tailwind CSS v4 & Motion', desc: 'Precise UI systems & micro-interactions', icon: Sparkles }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: Server,
    tag: 'DOM_02',
    skills: [
      { name: 'Node.js & Python Services', desc: 'Event-driven server runtimes', icon: Server },
      { name: 'REST & WebSockets', desc: 'Low-latency bidirectional data sync', icon: Radio },
      { name: 'Firebase & SQL Databases', desc: 'Real-time telemetry & persistent stores', icon: Database }
    ]
  },
  {
    id: 'embedded',
    title: 'Embedded & IoT',
    icon: Cpu,
    tag: 'DOM_03',
    skills: [
      { name: 'Arduino & ESP32 Microcontrollers', desc: 'C/C++ firmware & hardware timers', icon: Cpu },
      { name: 'Serial UART & COM Protocols', desc: 'Reliable bi-directional machine link', icon: Terminal },
      { name: 'Sensor Telemetry & Relays', desc: 'Physical actuator integration', icon: Layers }
    ]
  },
  {
    id: 'automation',
    title: 'Automation Systems',
    icon: Workflow,
    tag: 'DOM_04',
    skills: [
      { name: 'n8n Workflow Automation', desc: 'Orchestrating complex multi-app tasks', icon: Workflow },
      { name: 'Background Workers & Daemons', desc: '24/7 self-healing automated processes', icon: Terminal },
      { name: 'Event Triggers & Webhooks', desc: 'Instant event-driven automation chains', icon: Radio }
    ]
  },
  {
    id: 'ai-vision',
    title: 'AI Vision & Detection',
    icon: Eye,
    tag: 'DOM_05',
    skills: [
      { name: 'YOLOv8 Deep Learning', desc: 'Real-time multi-target object detection', icon: Eye },
      { name: 'OpenCV Preprocessing', desc: 'Morphological filters & perspective unwarp', icon: Layers },
      { name: 'EasyOCR & Text Extraction', desc: 'Automated Thai/English plate recognition', icon: Code2 }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Tools',
    icon: Layers,
    tag: 'DOM_06',
    skills: [
      { name: 'Docker Containerization', desc: 'Isolated reproducible runtime environments', icon: Layers },
      { name: 'Linux (Ubuntu Server)', desc: 'Shell scripting, daemon management & cron', icon: Terminal },
      { name: 'Git & Version Control', desc: 'Collaborative code pipelines & CI/CD', icon: GitBranch }
    ]
  }
];

export default function SkillsSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090C12]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#707A89] tracking-[0.2em] uppercase">
            <span className="text-[#7890AA]">{'// 02'}</span>
            <span>{t(uiContent.skills.sectionTag)}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F2F4F7] mb-3">
            {t(uiContent.skills.heading)}
          </h2>
          <p className="text-[#A9B1BD] text-sm sm:text-base max-w-2xl">
            {t(uiContent.skills.subheading)}
          </p>
          <div className="w-12 h-[2px] bg-[#7890AA]/40 rounded-full mt-4" />
        </motion.div>

        {/* Interactive Technical System Map Container */}
        <div className="relative rounded-3xl border border-white/[0.08] bg-[#0F141D]/90 p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/50 overflow-hidden">
          {/* Subtle Radar Sweep Animation (Runs Once upon entering view) */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{
              opacity: [0, 0.25, 0],
              rotate: 360
            }}
            viewport={{ once: true }}
            transition={{ duration: 3.5, ease: 'linear' }}
            className="absolute -top-32 -left-32 size-[650px] pointer-events-none motion-reduce:hidden"
            style={{
              background:
                'conic-gradient(from 0deg at 50% 50%, rgba(120, 144, 170, 0.25) 0deg, transparent 60deg, transparent 360deg)'
            }}
            aria-hidden="true"
          />

          {/* System Status Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-5 mb-8">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-sm bg-[#7890AA]" />
              <span className="font-mono text-xs text-[#F2F4F7] tracking-wider uppercase font-semibold">
                {'SYSTEM ARCHITECTURE MAP // 6 DOMAINS'}
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#707A89]">
              <span>STATUS:</span>
              <span className="text-[#75A58E] font-medium flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#75A58E] animate-pulse" />
                ACTIVE_SYNC
              </span>
            </div>
          </div>

          {/* 6-Domain System Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {skillDomains.map((domain, domainIdx) => {
              const DomainIcon = domain.icon;
              const isSelected = activeDomain === domain.id;
              const isDimmed = activeDomain !== null && !isSelected;

              return (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: domainIdx * 0.08 }}
                  onMouseEnter={() => setActiveDomain(domain.id)}
                  onMouseLeave={() => setActiveDomain(null)}
                  className={`rounded-2xl border transition-all duration-300 p-5 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#141A24] border-[#7890AA]/50 shadow-xl shadow-black/40 scale-[1.01]'
                      : isDimmed
                      ? 'bg-[#0F141D]/60 border-white/[0.04] opacity-50'
                      : 'bg-[#0B1018]/80 border-white/[0.07] hover:border-white/[0.16]'
                  }`}
                >
                  <div>
                    {/* Domain Header */}
                    <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2.5">
                        <motion.div
                          whileHover={shouldReduceMotion ? {} : { y: -3, x: 1 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          className="size-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#7890AA]"
                        >
                          <DomainIcon className="size-4" />
                        </motion.div>
                        <h3 className="font-sans text-sm font-semibold text-[#F2F4F7]">
                          {domain.title}
                        </h3>
                      </div>
                      <span className="font-mono text-[9px] text-[#707A89] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
                        {domain.tag}
                      </span>
                    </div>

                    {/* Skill Nodes List */}
                    <div className="space-y-3">
                      {domain.skills.map((skill, skillIdx) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={skillIdx}
                            className="group flex items-start gap-2.5 rounded-xl p-2 transition-colors hover:bg-white/[0.03]"
                          >
                            <SkillIcon className="size-3.5 text-[#707A89] group-hover:text-[#7890AA] shrink-0 mt-0.5 transition-colors" />
                            <div>
                              <div className="text-xs font-medium text-[#DCE1E7] group-hover:text-white transition-colors">
                                {skill.name}
                              </div>
                              <div className="text-[11px] text-[#707A89] leading-snug mt-0.5">
                                {skill.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Connecting indicator node at bottom */}
                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-[#707A89]">
                    <span className="flex items-center gap-1.5">
                      <span className="size-1 rounded-full bg-[#7890AA]/60" />
                      READY
                    </span>
                    <span>3 / 3 CONNECTED</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
