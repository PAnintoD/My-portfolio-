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
    <footer className="relative border-t border-white/[0.08] bg-[#090c12] py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.08]">
          {/* Brand & Quote */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-7 rounded-lg bg-[#0f141d] border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-[#f2f4f7]">
                TS
              </div>
              <span className="font-semibold text-sm text-[#f2f4f7]">
                {t(personalInfo.name)}
              </span>
            </div>
            <p className="font-mono text-xs text-[#707a89] max-w-md">
              {t(uiContent.footer.quote)}
            </p>
          </div>

          {/* Social Mini Bar */}
          <div className="flex items-center gap-3">
            {personalInfo.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#707a89] hover:text-[#f2f4f7] transition-colors p-1.5 rounded-lg hover:bg-[#0f141d]"
              >
                {s.platform}
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0f141d] border border-white/[0.08] hover:border-white/20 text-xs font-mono text-[#a9b1bd] hover:text-[#f2f4f7] transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>{t(uiContent.footer.backToTop)}</span>
            <ArrowUp className="size-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#707a89]">
          <p>© {currentYear} {t(personalInfo.name)}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[#707a89]">
            <span>{t(uiContent.footer.builtUsing)}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
