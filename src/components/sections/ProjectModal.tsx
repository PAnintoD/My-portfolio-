'use client';

import React, { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types/portfolio';
import { useLanguage } from '../../context/LanguageContext';
import { uiContent } from '../../data/portfolioData';
import { X, ExternalLink, CheckCircle, AlertCircle, Calendar, UserCheck, Layers } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const emptySubscribe = () => () => {};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, language } = useLanguage();
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!isClient || typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#090c12]/85 backdrop-blur-md transition-all cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-[#0f141d] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 z-10 my-auto max-h-[88vh] flex flex-col"
          >
            {/* Top Banner */}
            <div className="h-28 sm:h-36 w-full bg-gradient-to-r from-[#141a24] via-[#10151f] to-[#0a0d14] relative p-6 flex items-end border-b border-white/[0.08]">
              <div className="absolute top-4 right-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-[#090c12]/60 hover:bg-[#090c12] text-[#a9b1bd] hover:text-[#f2f4f7] border border-white/[0.08] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="relative z-10">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#090c12]/80 border border-white/[0.08] text-[#a9b1bd]">
                  {t(project.category)}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f2f4f7] mt-2">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Meta Row: Role, Year, Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#141a24]/60 border border-white/[0.06] text-xs">
                <div className="flex items-center gap-2">
                  <UserCheck className="size-4 text-[#7890aa] shrink-0" />
                  <div>
                    <span className="text-[#707a89] block text-[10px] font-mono">ROLE</span>
                    <span className="text-[#f2f4f7] font-medium">{t(project.role)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-[#7890aa] shrink-0" />
                  <div>
                    <span className="text-[#707a89] block text-[10px] font-mono">YEAR</span>
                    <span className="text-[#f2f4f7] font-medium">{project.year}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Layers className="size-4 text-[#7890aa] shrink-0" />
                  <div>
                    <span className="text-[#707a89] block text-[10px] font-mono">HIGHLIGHT</span>
                    <span className="text-[#75a58e] font-medium">{project.metrics}</span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-sm font-semibold text-[#f2f4f7] mb-2 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#7890aa]" />
                  {language === 'th' ? 'ภาพรวมโปรเจกต์' : 'Project Overview'}
                </h3>
                <p className="text-[#a9b1bd] text-xs sm:text-sm leading-relaxed">
                  {t(project.fullOverview)}
                </p>
              </div>

              {/* Engineering Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Challenges */}
                <div className="p-4 rounded-xl bg-rose-950/15 border border-rose-500/15">
                  <h4 className="text-xs font-semibold text-rose-300 mb-2.5 flex items-center gap-1.5 font-mono">
                    <AlertCircle className="size-3.5 text-rose-400" />
                    <span>{language === 'th' ? 'ความท้าทายทางเทคนิค' : 'Key Challenges'}</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="text-xs text-[#a9b1bd] flex items-start gap-2">
                        <span className="text-rose-400 font-mono mt-0.5">•</span>
                        <span>{t(c)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-500/15">
                  <h4 className="text-xs font-semibold text-emerald-300 mb-2.5 flex items-center gap-1.5 font-mono">
                    <CheckCircle className="size-3.5 text-emerald-400" />
                    <span>{language === 'th' ? 'แนวทางแก้ไข & สถาปัตยกรรม' : 'Solutions & Architecture'}</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.solutions.map((s, i) => (
                      <li key={i} className="text-xs text-[#a9b1bd] flex items-start gap-2">
                        <span className="text-emerald-400 font-mono mt-0.5">•</span>
                        <span>{t(s)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <h3 className="text-xs font-mono text-[#707a89] mb-2 uppercase">
                  {language === 'th' ? 'เทคโนโลยีที่ใช้งาน' : 'Tech Stack Employed'}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#141a24] border border-white/[0.06] text-xs font-mono text-[#a9b1bd]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/[0.08]">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f2f4f7] hover:bg-white text-[#0a0e15] font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <GithubIcon className="size-3.5" />
                    <span>{t(uiContent.projects.viewGithub)}</span>
                  </a>
                )}

                {project.liveUrl && project.liveUrl !== project.githubUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141a24] hover:bg-[#19212d] border border-white/[0.08] text-[#f2f4f7] font-medium text-xs transition-colors cursor-pointer"
                  >
                    <ExternalLink className="size-3.5 text-[#7890aa]" />
                    <span>{t(uiContent.projects.viewLive)}</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="ml-auto px-4 py-2 text-xs font-mono text-[#707a89] hover:text-[#f2f4f7] transition-colors cursor-pointer"
                >
                  {t(uiContent.projects.back)}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
