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

  // Scroll detection for compression and elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section Observer for Active Navigation Highlight
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

  // Keyboard accessibility: ESC key to close mobile menu & focus trapping + scroll lock
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
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-28px)] max-w-[920px] transition-all duration-300 ${
        isScrolled ? 'top-3 md:top-4' : 'top-4 md:top-6'
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className={`flex items-center justify-between rounded-full border border-white/[0.08] transition-all duration-300 ${
          isScrolled
            ? 'h-12 md:h-13 bg-[#0B1018]/95 px-2.5 pl-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl'
            : 'h-14 bg-[#0B1018]/80 px-2.5 pl-3 shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-2xl'
        }`}
      >
        {/* Left: Interactive Logo & Monogram */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8FA5BD] rounded-full group"
          aria-label="Thanapoom Sidaeng Home"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { rotate: 8 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] font-display text-[12px] font-semibold text-[#DCE1E7] transition-colors group-hover:border-white/[0.22] group-hover:bg-white/[0.08]"
          >
            TS
          </motion.div>
          <span className="hidden sm:block ml-2.5 font-mono text-[10px] tracking-[0.14em] text-[#A9B1BD] uppercase font-medium">
            THANAPOOM
          </span>
        </a>

        {/* Desktop Navigation Links with layoutId active indicator */}
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
                className="relative rounded-full px-4 py-2 text-[12px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8FA5BD]"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/[0.08]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-[#F2F4F7] font-semibold' : 'text-[#8B95A3] hover:text-[#F2F4F7]'
                  }`}
                >
                  {item.label}
                </span>
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
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-white/[0.1] bg-[#F2F4F7] px-4 text-[12px] font-semibold text-[#0A0E15] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8FA5BD]"
          >
            <span>Let’s Talk</span>
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
            className="flex md:hidden size-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-[#A9B1BD] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8FA5BD]"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Accessible Mobile Navigation Drawer with Clipped Mask */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            ref={mobileMenuRef}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
                  }
            }
            animate={{
              opacity: 1,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
                  }
            }
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 w-full rounded-3xl border border-white/[0.08] bg-[#0B1018]/95 p-4 shadow-2xl backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[13px] font-medium transition-colors ${
                      isActive
                        ? 'bg-white/[0.08] text-[#F2F4F7]'
                        : 'text-[#8B95A3] hover:bg-white/[0.04] hover:text-[#F2F4F7]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="size-3.5 opacity-60" />
                  </motion.a>
                );
              })}

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between px-2">
                <span className="font-mono text-[10px] text-[#707A89] uppercase tracking-wider">
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
