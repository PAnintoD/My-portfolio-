'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { navItems, personalInfo } from '../../data/portfolioData';
import LanguageToggle from './LanguageToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            ? 'py-3 bg-[#0B0E14]/85 backdrop-blur-xl border-b border-white/08 shadow-md shadow-black/20'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
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
            <div className="w-9 h-9 rounded-lg bg-[#121722] border border-white/10 flex items-center justify-center transition-colors group-hover:border-white/20">
              <span className="font-mono text-sm font-bold text-[#F1F3F5]">
                TS
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-semibold text-sm tracking-normal text-[#F1F3F5] group-hover:text-white transition-colors">
                {t(personalInfo.name)}
              </span>
              <span className="text-[11px] font-mono text-[#737D8C] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#62A888] inline-block" />
                <span>{language === 'th' ? 'พร้อมรับงาน' : 'AVAILABLE FOR WORK'}</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121722]/80 p-1 rounded-xl border border-white/08">
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
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 ${
                    isActive ? 'text-[#F1F3F5]' : 'text-[#A8B0BD] hover:text-[#F1F3F5]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavHighlight"
                      className="absolute inset-0 bg-[#171D29] border border-white/10 rounded-lg shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
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
              className="inline-flex items-center px-4 py-1.5 rounded-lg text-xs font-medium text-[#0B0E14] bg-[#6E8FC7] hover:bg-[#87A3D1] transition-all shadow-sm active:scale-95"
            >
              <span>{language === 'th' ? 'ติดต่อพูดคุย' : "Let's Connect"}</span>
            </a>
          </div>

          {/* Mobile Actions: Language + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#121722] border border-white/10 text-[#A8B0BD] hover:text-[#F1F3F5] focus-visible:outline-none"
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
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 md:hidden bg-[#0B0E14]/98 backdrop-blur-xl flex flex-col pt-24 pb-8 px-6"
          >
            <div className="flex flex-col space-y-2 flex-1 justify-center">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#121722] border-white/15 text-[#F1F3F5]'
                        : 'border-transparent text-[#A8B0BD] hover:bg-[#121722]/50 hover:text-white'
                    }`}
                  >
                    <span>{t(item.label)}</span>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#6E8FC7]' : 'text-[#737D8C]'}`} />
                  </motion.a>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/08 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full text-center py-3 rounded-xl text-sm font-semibold text-[#0B0E14] bg-[#6E8FC7] hover:bg-[#87A3D1] transition-all"
              >
                {language === 'th' ? 'ติดต่อพูดคุยโปรเจกต์' : 'Initiate Project Discussion'}
              </a>
              <p className="text-center text-xs font-mono text-[#737D8C]">
                {personalInfo.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
