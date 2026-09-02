'use client';

import React from 'react';
import { personalInfo, uiContent } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04060c] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand & Quote */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 p-[1px]">
                <div className="w-full h-full bg-[#05070e] rounded-lg flex items-center justify-center font-mono font-black text-xs text-cyan-300">
                  KW
                </div>
              </div>
              <span className="font-bold text-sm tracking-wider text-white">
                {t(personalInfo.name)}
              </span>
            </div>
            <p className="font-mono text-xs text-slate-400 italic max-w-sm">
              {t(uiContent.footer.quote)}
            </p>
          </div>

          {/* Social Mini Bar */}
          <div className="flex items-center gap-4">
            {personalInfo.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                {s.platform}
              </a>
            ))}
          </div>

          {/* Back to Top Magnetic Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
            aria-label="Back to top"
          >
            <span>{t(uiContent.footer.backToTop)}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} {t(personalInfo.name)}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>{t(uiContent.footer.builtUsing)}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
