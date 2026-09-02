'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { navItems, personalInfo } from '../../data/portfolioData';
import LanguageToggle from './LanguageToggle';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 glass-nav shadow-lg shadow-black/30'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-3 focus-visible:outline-none"
            aria-label="Go to top"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,245,212,0.4)]">
              <div className="w-full h-full bg-[#080c16] rounded-xl flex items-center justify-center">
                <span className="font-mono text-base font-black bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  KW
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm tracking-wider text-slate-100 uppercase group-hover:text-cyan-300 transition-colors">
                {t(personalInfo.name)}
              </span>
              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>{language === 'th' ? 'พร้อมรับงาน' : 'AVAILABLE FOR WORK'}</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-4 py-2 text-xs lg:text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive ? 'text-cyan-300 font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavHighlight"
                      className="absolute inset-0 bg-white/[0.08] border border-cyan-400/30 rounded-full shadow-[0_0_15px_rgba(0,245,212,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t(item.label)}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Language Toggle & Connect CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:shadow-[0_0_30px_rgba(0,245,212,0.5)] active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'th' ? 'ติดต่อเรา' : 'Let’s Talk'}</span>
            </a>
          </div>

          {/* Mobile Actions: Language + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200 hover:text-white focus-visible:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 md:hidden bg-[#05070e]/95 backdrop-blur-2xl flex flex-col pt-24 pb-8 px-6"
          >
            <div className="flex flex-col space-y-3 flex-1 justify-center">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl border text-lg font-bold transition-all ${
                      isActive
                        ? 'bg-cyan-500/10 border-cyan-400/40 text-cyan-300'
                        : 'border-white/5 text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{t(item.label)}</span>
                    <ArrowUpRight className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  </motion.a>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full text-center py-3.5 rounded-xl text-base font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_20px_rgba(0,245,212,0.4)]"
              >
                {language === 'th' ? 'เริ่มต้นพูดคุยโปรเจกต์' : 'Initiate Project Discussion'}
              </a>
              <p className="text-center text-xs font-mono text-slate-500">
                {personalInfo.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
