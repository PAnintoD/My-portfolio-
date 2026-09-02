'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { projects, uiContent } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import TiltCard from '../common/TiltCard';
import ProjectModal from './ProjectModal';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0E14]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-[#737D8C] tracking-[0.2em] uppercase block mb-2">
            {t(uiContent.projects.sectionTag)}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F1F3F5] mb-3">
            {t(uiContent.projects.heading)}
          </h2>
          <p className="text-[#A8B0BD] text-sm sm:text-base max-w-2xl">
            {t(uiContent.projects.subheading)}
          </p>
          <div className="w-12 h-[2px] bg-[#6E8FC7]/40 rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid: Responsive Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isLarge = index === 0 || index === 3;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className={isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
              >
                <TiltCard
                  maxTilt={3}
                  onClick={() => setSelectedProject(project)}
                  className="group h-full bg-[#121722] border border-white/08 hover:border-white/18 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-lg shadow-black/20"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#171D29] border border-white/06 text-[#A8B0BD]">
                        {t(project.category)}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#737D8C]">{project.year}</span>
                        <div className="w-7 h-7 rounded-md bg-[#171D29] flex items-center justify-center text-[#737D8C] group-hover:text-[#F1F3F5] group-hover:bg-[#1C2333] transition-colors">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Quiet Graphical Preview Block */}
                    <div
                      className={`relative w-full rounded-xl overflow-hidden mb-5 border border-white/06 p-5 flex flex-col justify-between bg-gradient-to-br from-[#171D29] via-[#141A26] to-[#0E131C] ${
                        isLarge ? 'aspect-[16/7]' : 'aspect-[16/9]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#737D8C] tracking-wider uppercase">
                          SYS // {project.id}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121722]/80 text-[#62A888] border border-white/08">
                          {project.metrics}
                        </span>
                      </div>

                      <div className="my-auto py-2">
                        <h4 className="text-lg sm:text-xl font-bold text-[#F1F3F5]">
                          {project.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#A8B0BD] line-clamp-2 mt-1">
                          {t(project.tagline)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-[#737D8C]">
                        <span>{t(project.role)}</span>
                        <span className="text-[#6E8FC7] font-medium group-hover:underline flex items-center gap-1">
                          <span>{t(uiContent.projects.caseStudy)}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    {/* Project Title & Short Description */}
                    <h3 className="text-lg sm:text-xl font-semibold text-[#F1F3F5] mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#A8B0BD] text-xs sm:text-sm leading-relaxed mb-5">
                      {t(project.description)}
                    </p>
                  </div>

                  {/* Bottom Tech Stack & Action Links */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-[#171D29] border border-white/06 text-[10px] font-mono text-[#737D8C]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3.5 border-t border-white/08 text-xs font-mono">
                      <span className="text-[#737D8C]">
                        {project.metrics}
                      </span>

                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[#737D8C] hover:text-[#F1F3F5] transition-colors p-1"
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
                            className="text-[#737D8C] hover:text-[#6E8FC7] transition-colors p-1"
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
