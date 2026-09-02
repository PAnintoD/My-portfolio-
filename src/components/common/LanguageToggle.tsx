'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center p-0.5 rounded-full bg-[#0f141d] border border-white/[0.08]">
      <div className="flex items-center gap-0.5">
        <button
          type="button"
          onClick={() => setLanguage('th')}
          className={`relative px-2.5 py-1 text-[11px] font-mono font-medium rounded-full transition-colors duration-150 ${
            language === 'th' ? 'text-[#f2f4f7]' : 'text-[#707a89] hover:text-[#a9b1bd]'
          }`}
          aria-label="Switch to Thai language"
        >
          {language === 'th' && (
            <motion.div
              layoutId="langPill"
              className="absolute inset-0 bg-[#141a24] border border-white/[0.1] rounded-full shadow-sm"
              transition={{ type: 'spring', stiffness: 450, damping: 35 }}
            />
          )}
          <span className="relative z-10">TH</span>
        </button>

        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`relative px-2.5 py-1 text-[11px] font-mono font-medium rounded-full transition-colors duration-150 ${
            language === 'en' ? 'text-[#f2f4f7]' : 'text-[#707a89] hover:text-[#a9b1bd]'
          }`}
          aria-label="Switch to English language"
        >
          {language === 'en' && (
            <motion.div
              layoutId="langPill"
              className="absolute inset-0 bg-[#141a24] border border-white/[0.1] rounded-full shadow-sm"
              transition={{ type: 'spring', stiffness: 450, damping: 35 }}
            />
          )}
          <span className="relative z-10">EN</span>
        </button>
      </div>
    </div>
  );
}
