'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';
import { Project } from '../../types/portfolio';
import { projects } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import ProjectModal from './ProjectModal';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface StackingCardProps {
  project: Project;
  index: number;
  totalCards: number;
  onSelect: (p: Project) => void;
}

function StackingProjectCard({ project, index, totalCards, onSelect }: StackingCardProps) {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start start', 'end start']
  });

  const targetScale = Math.max(0.9, 1 - (totalCards - 1 - index) * 0.025);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const springScale = useSpring(rawScale, {
    stiffness: 120,
    damping: 28,
    mass: 0.6
  });

  const topOffset = `calc(80px + ${index * 24}px)`;

  return (
    <div
      ref={cardContainerRef}
      className="relative h-auto lg:h-[88vh] mb-8 lg:mb-0"
    >
      <motion.div
        style={{
          top: isDesktop && !shouldReduceMotion ? topOffset : undefined,
          scale: isDesktop && !shouldReduceMotion ? springScale : 1
        }}
        onClick={() => onSelect(project)}
        className="lg:sticky min-h-[580px] lg:min-h-[620px] overflow-hidden rounded-[32px] sm:rounded-[44px] md:rounded-[56px] border border-black/[0.14] bg-[#0D1119] p-5 sm:p-7 md:p-9 text-[#F0F3F6] shadow-[0_30px_100px_rgba(5,8,12,0.20)] flex flex-col justify-between cursor-pointer select-none transition-shadow duration-300 hover:shadow-black/50"
      >
        {/* Card Header Top Row */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="font-display font-extrabold leading-none text-[clamp(3.5rem,9vw,110px)] text-[#A6B9CC]">
                0{index + 1}
              </span>
              <div>
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#A5AFBC] block mb-1">
                  {t(project.category)} · {project.year}
                </span>
                <h3 className="font-display font-semibold uppercase text-[clamp(1.5rem,4vw,3.5rem)] leading-none text-[#F0F3F6]">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="size-10 rounded-full border border-white/[0.12] bg-white/[0.04] flex items-center justify-center text-[#A5AFBC] hover:text-[#F0F3F6] hover:bg-white/[0.08] transition-colors"
                  aria-label={`GitHub Repository for ${project.title}`}
                >
                  <GithubIcon className="size-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex h-10 items-center gap-1.5 px-4 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-mono text-[#F0F3F6] hover:bg-white/[0.08] transition-colors"
                  aria-label={`Live Demo for ${project.title}`}
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Project Media Layout: Desktop 40% Left / 60% Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3" data-cursor="VIEW">
            {/* Left Column: 40% (Stacked Previews) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {/* Box 1: Role, Tagline, Metrics */}
              <div className="rounded-[24px] sm:rounded-[34px] border border-white/[0.06] p-6 bg-gradient-to-br from-[#121824] to-[#0A0D14] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#697586] uppercase tracking-wider mb-2">
                    <span>ROLE: {t(project.role)}</span>
                    <span className="text-[#78A68E] px-2 py-0.5 rounded bg-[#78A68E]/10 border border-[#78A68E]/20">
                      {project.metrics}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A5AFBC] leading-relaxed">
                    {t(project.description)}
                  </p>
                </div>
              </div>

              {/* Box 2: Tech Stack Pills & Highlights */}
              <div className="rounded-[24px] sm:rounded-[34px] border border-white/[0.06] p-6 bg-gradient-to-br from-[#121824] to-[#0A0D14] flex flex-col justify-between flex-1">
                <div>
                  <span className="font-mono text-[10px] text-[#697586] uppercase tracking-wider block mb-3">
                    STACK & ARCHITECTURE
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full bg-[#161e2e] border border-white/[0.06] text-[10px] font-mono text-[#D7DEE5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#7F9AB8]">
                  <span>INSPECT DEEP OVERVIEW</span>
                  <ArrowUpRight className="size-3.5" />
                </div>
              </div>
            </div>

            {/* Right Column: 60% (Large Graphical Preview) */}
            <div className="lg:col-span-7 rounded-[24px] sm:rounded-[34px] md:rounded-[44px] border border-white/[0.08] p-6 sm:p-8 bg-gradient-to-br from-[#161e2e] via-[#101622] to-[#080a0f] flex flex-col justify-between min-h-[280px] sm:min-h-[340px] relative overflow-hidden group">
              {/* Subtle Tech Grid overlay */}
              <div className="absolute inset-0 bg-hero-grid opacity-15 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#7F9AB8] tracking-widest uppercase">
                  SYS_ID // {project.id}
                </span>
                <span className="size-2 rounded-full bg-[#78A68E] animate-pulse" />
              </div>

              <div className="relative z-10 my-auto py-4">
                <h4 className="text-xl sm:text-2xl font-bold text-[#F0F3F6] mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-[#A5AFBC] line-clamp-3 leading-relaxed">
                  {t(project.tagline)}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs font-mono text-[#A5AFBC]">
                <span>STATUS: VERIFIED DEPLOYMENT</span>
                <span className="text-[#7F9AB8] flex items-center gap-1 group-hover:underline">
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="relative z-20 -mt-10 rounded-t-[40px] sm:rounded-t-[52px] md:rounded-t-[64px] bg-[#E8EDF2] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 text-[#0A1019] scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading: Two Intentional Lines */}
        <div className="mb-14 md:mb-20">
          <span className="font-mono text-xs text-[#2E3C4D] tracking-[0.2em] uppercase block mb-3 font-semibold">
            {'// SELECTED SHOWCASE'}
          </span>
          <h2 className="font-display font-extrabold uppercase leading-[0.85] tracking-[-0.065em] text-[clamp(3.5rem,12vw,170px)] text-[#0A1019]">
            SELECTED<br />PROJECTS
          </h2>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative">
          {projects.map((project, index) => (
            <StackingProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projects.length}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
