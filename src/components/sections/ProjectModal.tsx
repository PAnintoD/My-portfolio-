'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { useLanguage } from '../../context/LanguageContext';
import { uiContent } from '../../data/portfolioData';
import { X, ExternalLink, CheckCircle, AlertCircle, Calendar, UserCheck, Layers } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B0E14]/85 backdrop-blur-md transition-all"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-[#121722] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 z-10 my-auto max-h-[88vh] flex flex-col"
        >
          {/* Top Banner */}
          <div className="h-28 sm:h-36 w-full bg-gradient-to-r from-[#171D29] via-[#141A26] to-[#0E131C] relative p-6 flex items-end border-b border-white/08">
            <div className="absolute top-4 right-4">
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#0B0E14]/60 hover:bg-[#0B0E14] text-[#A8B0BD] hover:text-[#F1F3F5] border border-white/08 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#0B0E14]/80 border border-white/08 text-[#A8B0BD]">
                {t(project.category)}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F1F3F5] mt-2">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Meta Row: Role, Year, Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#171D29]/60 border border-white/06 text-xs">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#6E8FC7] shrink-0" />
                <div>
                  <span className="text-[#737D8C] block text-[10px] font-mono">ROLE</span>
                  <span className="text-[#F1F3F5] font-medium">{t(project.role)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#6E8FC7] shrink-0" />
                <div>
                  <span className="text-[#737D8C] block text-[10px] font-mono">YEAR</span>
                  <span className="text-[#F1F3F5] font-medium">{project.year}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#6E8FC7] shrink-0" />
                <div>
                  <span className="text-[#737D8C] block text-[10px] font-mono">HIGHLIGHT</span>
                  <span className="text-[#62A888] font-medium">{project.metrics}</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-sm font-semibold text-[#F1F3F5] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6E8FC7]" />
                {language === 'th' ? 'ภาพรวมโปรเจกต์' : 'Project Overview'}
              </h3>
              <p className="text-[#A8B0BD] text-xs sm:text-sm leading-relaxed">
                {t(project.fullOverview)}
              </p>
            </div>

            {/* Engineering Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Challenges */}
              <div className="p-4 rounded-xl bg-rose-950/15 border border-rose-500/15">
                <h4 className="text-xs font-semibold text-rose-300 mb-2.5 flex items-center gap-1.5 font-mono">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                  <span>{language === 'th' ? 'ความท้าทายทางเทคนิค' : 'Key Challenges'}</span>
                </h4>
                <ul className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="text-xs text-[#A8B0BD] flex items-start gap-2">
                      <span className="text-rose-400 font-mono mt-0.5">•</span>
                      <span>{t(c)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-500/15">
                <h4 className="text-xs font-semibold text-emerald-300 mb-2.5 flex items-center gap-1.5 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === 'th' ? 'แนวทางแก้ไข & สถาปัตยกรรม' : 'Solutions & Architecture'}</span>
                </h4>
                <ul className="space-y-2">
                  {project.solutions.map((s, i) => (
                    <li key={i} className="text-xs text-[#A8B0BD] flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">•</span>
                      <span>{t(s)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h3 className="text-xs font-mono text-[#737D8C] mb-2 uppercase">
                {language === 'th' ? 'เทคโนโลยีที่ใช้งาน' : 'Tech Stack Employed'}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-[#171D29] border border-white/06 text-xs font-mono text-[#A8B0BD]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/08">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6E8FC7] hover:bg-[#87A3D1] text-[#0B0E14] font-medium text-xs transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>{t(uiContent.projects.viewGithub)}</span>
                </a>
              )}

              {project.liveUrl && project.liveUrl !== project.githubUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#171D29] hover:bg-[#1C2333] border border-white/08 text-[#F1F3F5] font-medium text-xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#6E8FC7]" />
                  <span>{t(uiContent.projects.viewLive)}</span>
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="ml-auto px-4 py-2 text-xs font-mono text-[#737D8C] hover:text-[#F1F3F5] transition-colors"
              >
                {t(uiContent.projects.back)}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
