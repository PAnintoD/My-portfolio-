'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroScene from '../3d/HeroScene';
import MagneticButton from '../common/MagneticButton';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo, uiContent } from '../../data/portfolioData';
import { Sparkles, FolderGit2, Mail } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export default function HeroSection() {
  const { t } = useLanguage();

  // Word-by-word reveal container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0, filter: 'blur(8px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 3D WebGL Background Scene */}
      <HeroScene />

      {/* Futuristic Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none z-0" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Center Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,245,212,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t(uiContent.hero.badge)}</span>
        </motion.div>

        {/* Animated Greeting & Name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs md:text-sm font-mono tracking-[0.25em] text-slate-400 uppercase mb-3"
        >
          {t(uiContent.hero.greeting)}
        </motion.p>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
        >
          <motion.span variants={itemVariants} className="inline-block">
            {t(personalInfo.name)}
          </motion.span>
        </motion.h1>

        {/* Animated Roles with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-2xl md:text-3xl font-medium tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-violet-400 bg-clip-text text-transparent font-semibold">
            {t(personalInfo.role)}
          </span>
          <span className="text-slate-500 mx-2 hidden sm:inline">•</span>
          <span className="text-slate-300 block sm:inline text-sm sm:text-xl font-normal mt-1 sm:mt-0">
            {t(personalInfo.secondaryRole)}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10 text-balance"
        >
          {t(personalInfo.heroTagline)}
        </motion.p>

        {/* Action Magnetic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <MagneticButton href="#projects" variant="primary">
            <FolderGit2 className="w-4 h-4" />
            <span>{t(uiContent.hero.viewWork)}</span>
          </MagneticButton>

          <MagneticButton href="https://github.com/PAnintoD" external={true} variant="glass">
            <GithubIcon className="w-4 h-4" />
            <span>{t(uiContent.hero.viewGithub)}</span>
          </MagneticButton>

          <MagneticButton href="#contact" variant="outline">
            <Mail className="w-4 h-4" />
            <span>{t(uiContent.hero.contactMe)}</span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">
          {t(uiContent.hero.scrollDown)}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
