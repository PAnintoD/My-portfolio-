'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center p-0.5 rounded-lg bg-[#121722] border border-white/08">
      <div className="flex items-center gap-0.5">
        <button
          type="button"
          onClick={() => setLanguage('th')}
          className={`relative px-2.5 py-1 text-xs font-mono font-medium rounded-md transition-colors duration-150 ${
            language === 'th' ? 'text-[#F1F3F5]' : 'text-[#737D8C] hover:text-[#A8B0BD]'
          }`}
          aria-label="Switch to Thai language"
        >
          {language === 'th' && (
            <motion.div
              layoutId="langPill"
              className="absolute inset-0 bg-[#171D29] border border-white/10 rounded-md shadow-sm"
              transition={{ type: 'spring', stiffness: 450, damping: 35 }}
            />
          )}
          <span className="relative z-10">TH</span>
        </button>

        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`relative px-2.5 py-1 text-xs font-mono font-medium rounded-md transition-colors duration-150 ${
            language === 'en' ? 'text-[#F1F3F5]' : 'text-[#737D8C] hover:text-[#A8B0BD]'
          }`}
          aria-label="Switch to English language"
        >
          {language === 'en' && (
            <motion.div
              layoutId="langPill"
              className="absolute inset-0 bg-[#171D29] border border-white/10 rounded-md shadow-sm"
              transition={{ type: 'spring', stiffness: 450, damping: 35 }}
            />
          )}
          <span className="relative z-10">EN</span>
        </button>
      </div>
    </div>
  );
}
