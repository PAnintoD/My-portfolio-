'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { projects, uiContent } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import TiltCard from '../common/TiltCard';
import ProjectModal from './ProjectModal';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

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
            {t(uiContent.projects.sectionTag)}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t(uiContent.projects.heading)}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            {t(uiContent.projects.subheading)}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid: Responsive Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const isLarge = index === 0 || index === 3;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
              >
                <TiltCard
                  maxTilt={6}
                  onClick={() => setSelectedProject(project)}
                  className="group h-full bg-[#0a0e1a]/85 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,245,212,0.15)]"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                        {t(project.category)}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-400">{project.year}</span>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Stylized Visual Preview Block */}
                    <div
                      className={`relative w-full rounded-2xl overflow-hidden mb-6 border border-white/10 p-6 flex flex-col justify-between bg-gradient-to-br ${project.gradient} ${
                        isLarge ? 'aspect-[16/8]' : 'aspect-[16/10]'
                      }`}
                    >
                      {/* Geometric Mockup Accent */}
                      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="font-mono text-[10px] text-white/70 tracking-widest uppercase">
                          PREVIEW // {project.id}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-emerald-300 border border-emerald-500/30">
                          {project.metrics}
                        </span>
                      </div>

                      {/* Center Graphical Representation */}
                      <div className="relative z-10 my-auto py-4">
                        <h4 className="text-xl sm:text-2xl font-black text-white drop-shadow-md">
                          {project.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-200/90 line-clamp-2 mt-1">
                          {t(project.tagline)}
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center justify-between pt-2 text-[11px] font-mono text-slate-300">
                        <span>{t(project.role)}</span>
                        <span className="text-cyan-300 font-semibold group-hover:underline flex items-center gap-1">
                          <span>{t(uiContent.projects.caseStudy)}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    {/* Project Title & Short Description */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {t(project.description)}
                    </p>
                  </div>

                  {/* Bottom Tech Stack & Action Links */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{project.metrics}</span>
                      </span>

                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-slate-400 hover:text-white transition-colors p-1"
                            aria-label={`GitHub repo for ${project.title}`}
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-cyan-400 hover:text-cyan-200 transition-colors p-1"
                            aria-label={`Live site for ${project.title}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
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
