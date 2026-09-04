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
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      { rootMargin: '-20% 0px -55% 0px', threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
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
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1080px] transition-all duration-300"
    >
      <nav
        aria-label="Primary Navigation"
        className={`flex items-center justify-between rounded-full transition-all duration-300 ${
          isScrolled
            ? 'h-13 md:h-14 border border-white/[0.16] bg-[#0A0E16]/90 px-2.5 pl-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl'
            : 'h-14 md:h-16 border border-white/[0.10] bg-[#0A0E16]/75 px-2.5 pl-4 shadow-[0_16px_50px_rgba(0,0,0,0.30)] backdrop-blur-2xl'
        }`}
      >
        {/* Left identity: Circular mark "TS", "THANAPOOM", small status dot, "AVAILABLE" */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7F9AB8] rounded-full group select-none"
          aria-label="Thanapoom Sidaeng Home"
        >
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] font-display text-[12px] font-semibold text-[#F0F3F6] transition-colors group-hover:border-white/[0.22] group-hover:bg-white/[0.08]">
            TS
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] tracking-[0.14em] text-[#F0F3F6] uppercase font-semibold">
              THANAPOOM
            </span>
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <span className="size-1.5 rounded-full bg-[#78A68E] animate-pulse" />
              <span className="font-mono text-[9px] tracking-[0.12em] text-[#78A68E] font-medium">
                AVAILABLE
              </span>
            </div>
          </div>
        </a>

        {/* Center navigation links: About, Skills, Projects, Experience */}
        <div className="hidden md:flex items-center gap-1 relative">
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
                className="relative rounded-full px-4 py-2 text-[12px] font-medium tracking-[0.04em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7F9AB8]"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.10]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-[#F0F3F6] font-semibold' : 'text-[#A5AFBC] hover:text-[#F0F3F6]'
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Right CTA: Language switcher & "LET'S TALK" */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-white/[0.12] bg-[#F0F3F6] px-4 text-[12px] font-semibold tracking-[0.06em] text-[#080A0F] transition-all hover:bg-white hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7F9AB8]"
          >
            <span>LET’S TALK</span>
            <ArrowUpRight className="size-3.5" />
          </a>

          {/* Accessible Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="flex md:hidden size-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.04] text-[#A5AFBC] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7F9AB8]"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mt-2 w-full rounded-3xl border border-white/[0.10] bg-[#0A0E16]/95 p-4 shadow-2xl backdrop-blur-3xl"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-[14px] font-medium transition-colors ${
                      isActive
                        ? 'bg-white/[0.08] text-[#F0F3F6] font-semibold'
                        : 'text-[#A5AFBC] hover:bg-white/[0.04] hover:text-[#F0F3F6]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] text-[#697586]">
                      0{index + 1}
                    </span>
                  </motion.a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/[0.08] flex items-center justify-between px-2">
                <LanguageToggle />
                <span className="font-mono text-[10px] text-[#697586]">
                  THAILAND [GMT+7]
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
