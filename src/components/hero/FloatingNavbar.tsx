'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import LanguageToggle from '../common/LanguageToggle';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' }
];

export default function FloatingNavbar() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Section Observer for Active Navigation Highlight
  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard accessibility: ESC key to close mobile menu & focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-5 md:top-7 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-32px)] max-w-[920px]"
    >
      <nav
        aria-label="Primary Navigation"
        className="flex h-14 items-center justify-between rounded-full border border-white/[0.08] bg-[#0b1018]/80 px-2.5 pl-3 shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
      >
        {/* Left: Logo & Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fa5bd] rounded-full"
          aria-label="Thanapoom Sidaeng Home"
        >
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] font-display text-[12px] font-semibold text-[#dce1e7] transition-colors hover:border-white/[0.2]">
            TS
          </div>
          <span className="hidden sm:block ml-2.5 font-mono text-[10px] tracking-[0.12em] text-[#a9b1bd] uppercase font-medium">
            THANAPOOM
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
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
                aria-current={isActive ? 'true' : undefined}
                className={`rounded-full px-4 py-2 text-[12px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fa5bd] ${
                  isActive
                    ? 'bg-white/[0.06] text-[#f2f4f7]'
                    : 'text-[#8b95a3] hover:bg-white/[0.04] hover:text-[#f2f4f7]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Actions: Language Switcher, CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Subtle Language Switcher */}
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-white/[0.1] bg-[#f2f4f7] px-4 text-[12px] font-semibold text-[#0a0e15] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fa5bd]"
          >
            <span>Let’s Talk</span>
            <ArrowUpRight className="size-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="flex md:hidden size-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-[#a9b1bd] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fa5bd]"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Accessible Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            ref={mobileMenuRef}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mt-2.5 w-full rounded-2xl border border-white/[0.08] bg-[#0b1018]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col space-y-1">
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
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-[13px] font-medium transition-colors ${
                      isActive
                        ? 'bg-white/[0.06] text-[#f2f4f7]'
                        : 'text-[#8b95a3] hover:bg-white/[0.04] hover:text-[#f2f4f7]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="size-3.5 opacity-60" />
                  </a>
                );
              })}

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between px-2">
                <span className="font-mono text-[10px] text-[#707a89] uppercase tracking-wider">
                  Language
                </span>
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
