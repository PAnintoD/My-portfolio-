'use client';

import React, { useState } from 'react';
import FadeIn from '../motion/FadeIn';
import { Project } from '../../types/portfolio';
import { projects } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import ProjectModal from './ProjectModal';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean((project as Project & { image?: string }).image) && !imgError;

  return (
    <div
      onClick={() => onSelect(project)}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0f141d] hover:border-white/20 transition-all flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Project Image Wrapper: aspect-[16/10] overflow-hidden bg-[#141a24] */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#141a24] border-b border-white/5 flex items-center justify-center">
          {hasImage && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={(project as Project & { image?: string }).image}
              alt={project.title}
              onError={() => setImgError(true)}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          )}
          {!hasImage && (
            <div className="relative size-full p-6 flex flex-col justify-between select-none bg-gradient-to-br from-[#161e2e] via-[#101622] to-[#090c12]">
              <div className="absolute inset-0 bg-hero-grid opacity-15 pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#7f9ab8] px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                  {t(project.category)}
                </span>
                <span className="font-mono text-[10px] text-[#78a68e] bg-[#78a68e]/10 border border-[#78a68e]/20 px-2 py-0.5 rounded">
                  {project.year}
                </span>
              </div>

              <div className="relative z-10 my-auto py-2">
                <h4 className="font-display font-bold text-xl sm:text-2xl text-[#f2f4f7] mb-1.5 group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#a5afbc] line-clamp-2">
                  {t(project.tagline)}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#697586]">
                <span>{project.metrics}</span>
                <span className="text-[#7f9ab8] flex items-center gap-1 group-hover:text-white transition-colors">
                  <span>INSPECT</span>
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Card Content: p-5 sm:p-6 */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-display font-bold text-xl text-[#f2f4f7] group-hover:text-[#7f9ab8] transition-colors">
              {project.title}
            </h3>
            <span className="font-mono text-[11px] text-[#697586] shrink-0 mt-1">
              {project.year}
            </span>
          </div>

          <p className="font-sans text-sm text-[#a5afbc] leading-relaxed mb-5">
            {t(project.description)}
          </p>

          {/* Technology List */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-[#141a24] border border-white/5 text-[11px] font-mono text-[#a5afbc]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links & Footer: p-5 sm:p-6 pt-0 */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 flex items-center justify-between border-t border-white/5 pt-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="text-xs font-mono font-medium text-[#7f9ab8] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>CASE STUDY</span>
          <ArrowUpRight className="size-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="size-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#a5afbc] hover:text-white hover:bg-white/10 transition-colors"
              aria-label={`GitHub Repository for ${project.title}`}
            >
              <GithubIcon className="size-4" />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== project.githubUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#f2f4f7] hover:bg-white/10 transition-colors"
              aria-label={`Live Demo for ${project.title}`}
            >
              <span>DEMO</span>
              <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#090c12] text-[#f2f4f7] scroll-mt-20 border-t border-white/5"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12">
            <span className="font-mono text-xs text-[#7f9ab8] tracking-widest uppercase mb-3 block">
              {'// 03 · FEATURED WORK'}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#f2f4f7] tracking-tight leading-tight">
              Selected Projects
            </h2>
            <p className="mt-3 font-sans text-base text-[#a5afbc] max-w-2xl">
              Production systems bridging machine vision, IoT hardware telemetry, desktop operator applications, and scalable web architectures.
            </p>
          </div>
        </FadeIn>

        {/* Normal Responsive Grid: grid grid-cols-1 gap-6 lg:grid-cols-2 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <ProjectCard
                project={project}
                onSelect={setSelectedProject}
              />
            </FadeIn>
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
