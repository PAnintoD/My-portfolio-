'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Project } from '../../types/portfolio';
import { projects, uiContent } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import ProjectModal from './ProjectModal';
import { ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const showcaseTrackRef = useRef<HTMLDivElement>(null);

  // Tilt reflection on desktop card
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // GSAP ScrollTrigger Pinned Sequence for Large Desktops
  useEffect(() => {
    if (shouldReduceMotion || typeof window === 'undefined') return;

    // Only apply pinned sequence if screen is large enough
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px) and (min-height: 720px)', () => {
      const track = showcaseTrackRef.current;
      if (!track) return;

      const panels = gsap.utils.toArray<HTMLElement>('.project-showcase-panel');
      if (panels.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.9,
          start: 'top top+=30',
          end: () => `+=${panels.length * 750}`,
          anticipatePin: 1,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * panels.length),
              panels.length - 1
            );
            setActiveProjectIndex(index);
          }
        }
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;
        tl.fromTo(
          panel,
          { opacity: 0, yPercent: 15, scale: 0.97 },
          { opacity: 1, yPercent: 0, scale: 1, duration: 1, ease: 'power2.out' },
          i * 1
        );
      });
    });

    return () => mm.revert();
  }, [shouldReduceMotion]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#090C12] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#707A89] tracking-[0.2em] uppercase">
            <span className="text-[#7890AA]">{'// 03'}</span>
            <span>{t(uiContent.projects.sectionTag)}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F2F4F7] mb-2">
                {t(uiContent.projects.heading)}
              </h2>
              <p className="text-[#A9B1BD] text-sm sm:text-base max-w-2xl">
                {t(uiContent.projects.subheading)}
              </p>
            </div>

            {/* Desktop Sequence Progress Indicator */}
            <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-[#707A89]">
              <span className="text-[#F2F4F7] font-semibold">
                0{activeProjectIndex + 1}
              </span>
              <span>/</span>
              <span>0{projects.length}</span>
              <div className="flex gap-1 ml-2">
                {projects.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === activeProjectIndex
                        ? 'w-6 bg-[#7890AA]'
                        : 'w-2 bg-white/[0.08]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-12 h-[2px] bg-[#7890AA]/40 rounded-full mt-4" />
        </motion.div>

        {/* Desktop Pinned Showcase & Mobile Vertical Stack Container */}
        <div ref={showcaseTrackRef} className="relative w-full space-y-8 lg:space-y-0">
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                data-cursor="VIEW"
                onClick={() => setSelectedProject(project)}
                className="project-showcase-panel lg:absolute lg:inset-0 w-full rounded-3xl border border-white/[0.08] bg-[#0F141D] p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#7890AA]/40 hover:shadow-black/70 cursor-pointer select-none group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
                  {/* Left Column: Visual Engineering Preview Box */}
                  <div className="lg:col-span-7 h-full flex flex-col justify-between rounded-2xl overflow-hidden border border-white/[0.06] p-6 sm:p-8 bg-gradient-to-br from-[#141A24] via-[#10151F] to-[#0A0D14] relative min-h-[280px] sm:min-h-[340px]">
                    {/* Top Technical Metadata */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="font-mono text-[10px] text-[#707A89] tracking-widest uppercase">
                        {`SYSTEM // 0${index + 1}`}
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#0F141D]/90 text-[#75A58E] border border-white/[0.08] flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-[#75A58E]" />
                        {project.metrics}
                      </span>
                    </div>

                    {/* Center Big Project Header & Tagline */}
                    <div className="my-auto py-4 relative z-10">
                      <span className="font-mono text-xs text-[#7890AA] mb-2 block uppercase tracking-wider">
                        {t(project.category)}
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F2F4F7] tracking-tight group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A9B1BD] mt-2 line-clamp-3 leading-relaxed">
                        {t(project.tagline)}
                      </p>
                    </div>

                    {/* Bottom Action Hint */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-mono text-[#707A89] relative z-10">
                      <span className="flex items-center gap-1.5">
                        <span className="size-1 rounded-full bg-[#7890AA]" />
                        {project.year} · {t(project.role)}
                      </span>
                      <span className="text-[#8FA5BD] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>{t(uiContent.projects.caseStudy)}</span>
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Key Details & Tech Stack */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                      <h4 className="font-mono text-xs text-[#707A89] tracking-wider uppercase mb-2">
                        OVERVIEW & IMPACT
                      </h4>
                      <p className="text-xs sm:text-sm text-[#A9B1BD] leading-relaxed">
                        {t(project.description)}
                      </p>
                    </div>

                    {/* Highlighted Solution bullet */}
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                      <div className="flex items-start gap-2.5 text-xs text-[#DCE1E7]">
                        <CheckCircle2 className="size-4 text-[#75A58E] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">
                          {t(project.solutions[0])}
                        </span>
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div>
                      <div className="font-mono text-[10px] text-[#707A89] uppercase tracking-wider mb-2">
                        TECHNOLOGIES EMPLOYED
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-full bg-[#141A24] border border-white/[0.06] text-[11px] font-mono text-[#A9B1BD]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.08] text-xs font-mono text-[#F2F4F7] transition-all"
                        >
                          <GithubIcon className="size-3.5" />
                          <span>Code Repository</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#7890AA]/15 border border-[#7890AA]/30 hover:bg-[#7890AA]/25 text-xs font-mono text-[#8FA5BD] transition-all"
                        >
                          <ExternalLink className="size-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal with animated transitions */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
