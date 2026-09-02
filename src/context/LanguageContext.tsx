'use client';

import React, { createContext, useContext, useState } from 'react';
import { Language, LocalizedString } from '../types/portfolio';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (content: LocalizedString | undefined) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('portfolio_lang') as Language;
        if (saved === 'th' || saved === 'en') {
          return saved;
        }
        if (navigator.language.toLowerCase().startsWith('th')) {
          return 'th';
        }
      } catch {
        // ignore
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'th' ? 'en' : 'th';
    setLanguage(nextLang);
  };

  const t = (content: LocalizedString | undefined): string => {
    if (!content) return '';
    return content[language] || content.en || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
