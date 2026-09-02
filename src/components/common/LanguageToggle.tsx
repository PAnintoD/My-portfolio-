'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center p-1 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setLanguage('th')}
          className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${
            language === 'th' ? 'text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Switch to Thai language"
        >
          {language === 'th' && (
            <motion.div
              layoutId="langPill"
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full shadow-[0_0_12px_rgba(0,245,212,0.4)]"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">TH</span>
        </button>

        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`relative px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${
            language === 'en' ? 'text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Switch to English language"
        >
          {language === 'en' && (
            <motion.div
              layoutId="langPill"
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full shadow-[0_0_12px_rgba(0,245,212,0.4)]"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">EN</span>
        </button>
      </div>
    </div>
  );
}
