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

  // Close on Escape key
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
          className="fixed inset-0 bg-[#04060b]/80 backdrop-blur-xl transition-all"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#090d18] border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-950/40 z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Banner Gradient */}
          <div className={`h-32 sm:h-40 w-full bg-gradient-to-r ${project.gradient} relative p-6 flex items-end border-b border-white/10`}>
            <div className="absolute top-4 right-4">
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white border border-white/10 backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative z-10">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/60 border border-white/20 text-cyan-300 backdrop-blur-md">
                {t(project.category)}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Meta Row: Role, Year, Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono">ROLE</span>
                  <span className="text-slate-200 font-semibold">{t(project.role)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono">YEAR</span>
                  <span className="text-slate-200 font-semibold">{project.year}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono">HIGHLIGHT</span>
                  <span className="text-cyan-300 font-semibold">{project.metrics}</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {language === 'th' ? 'ภาพรวมโปรเจกต์' : 'Project Overview'}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t(project.fullOverview)}
              </p>
            </div>

            {/* Engineering Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenges */}
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20">
                <h4 className="text-sm font-bold text-rose-300 mb-3 flex items-center gap-2 font-mono">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  <span>{language === 'th' ? 'ความท้าทายทางเทคนิค' : 'Key Challenges'}</span>
                </h4>
                <ul className="space-y-2.5">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-rose-400 font-mono mt-0.5">•</span>
                      <span>{t(c)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
                <h4 className="text-sm font-bold text-emerald-300 mb-3 flex items-center gap-2 font-mono">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'th' ? 'วิธีแก้ปัญหา & สถาปัตยกรรม' : 'Solutions & Architecture'}</span>
                </h4>
                <ul className="space-y-2.5">
                  {project.solutions.map((s, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">•</span>
                      <span>{t(s)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3 font-mono">
                {language === 'th' ? 'เทคโนโลยีที่ใช้งาน' : 'Tech Stack Employed'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-white/10 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(0,245,212,0.4)] hover:shadow-[0_0_30px_rgba(0,245,212,0.6)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t(uiContent.projects.viewLive)}</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/15 hover:border-white/30 text-white font-medium text-sm transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{t(uiContent.projects.viewGithub)}</span>
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="ml-auto px-5 py-3 rounded-xl text-slate-400 hover:text-white text-sm font-mono"
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
