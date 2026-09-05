'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const navLinks = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Active section observer
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard accessibility: Escape key to close and restore focus
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
    menuButtonRef.current?.focus();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="mx-auto mt-4 flex h-14 w-[calc(100%-32px)] max-w-[1080px] items-center justify-between rounded-full border border-white/10 bg-[#0b1018]/90 px-3 backdrop-blur-xl pointer-events-auto shadow-lg shadow-black/20">
        
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2.5 pl-2 select-none group focus-visible:outline-none"
          aria-label="Thanapoom Sidaeng Home"
        >
          <div className="size-8 rounded-full bg-[#121824] border border-white/10 flex items-center justify-center font-display text-xs font-bold text-[#f2f4f7] group-hover:border-white/20 transition-colors">
            TS
          </div>
          <span className="font-mono text-xs font-semibold tracking-wider text-[#f2f4f7] uppercase hidden sm:inline">
            THANAPOOM
          </span>
        </a>

        {/* Desktop Links */}
        <nav aria-label="Desktop Navigation" className="hidden md:flex items-center gap-0.5">
          {navLinks.map((item) => {
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
                className={`relative px-2.5 lg:px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#f2f4f7] bg-white/10 font-semibold'
                    : 'text-[#a5afbc] hover:text-[#f2f4f7] hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Language toggle & CTA / Mobile menu button */}
        <div className="flex items-center gap-2">
          <LanguageToggle />

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden lg:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#f2f4f7] text-[#090c12] text-xs font-semibold tracking-wider hover:bg-white transition-colors"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="size-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="md:hidden size-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#a5afbc] hover:text-[#f2f4f7] transition-colors"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Simple Mobile Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.2 }}
            className="mx-auto mt-2 w-[calc(100%-32px)] max-w-[1080px] rounded-2xl border border-white/10 bg-[#0b1018]/95 p-3 backdrop-blur-xl shadow-xl pointer-events-auto md:hidden"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {navLinks.map((item) => {
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
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-white/10 text-[#f2f4f7] font-semibold'
                        : 'text-[#a5afbc] hover:bg-white/5 hover:text-[#f2f4f7]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="size-3.5 text-[#697586]" />
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
