'use client';

import React from 'react';
import { motion } from 'motion/react';
import HeroScene from '../3d/HeroScene';
import MagneticButton from '../common/MagneticButton';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo, uiContent } from '../../data/portfolioData';
import { FolderGit2, Mail } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export default function HeroSection() {
  const { t } = useLanguage();

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0E14]"
    >
      {/* 3D WebGL Background Scene */}
      <HeroScene />

      {/* Subtle Precision Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none z-0" />

      {/* Very Faint Ambient Lighting Bloom */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#6E8FC7]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      {/* Center Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Status Pill - Quiet & Professional */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121722] border border-white/08 text-[#A8B0BD] text-xs font-mono mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#62A888]"></span>
          </span>
          <span>{t(uiContent.hero.badge)}</span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#737D8C] uppercase mb-3"
        >
          {t(uiContent.hero.greeting)}
        </motion.p>

        {/* Primary Name Headline - High Contrast Off-white */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F1F3F5] mb-5 leading-[1.1]"
        >
          <motion.span variants={itemVariants} className="inline-block">
            {t(personalInfo.name)}
          </motion.span>
        </motion.h1>

        {/* Role Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight mb-6"
        >
          <span className="text-[#F1F3F5] font-semibold">
            {t(personalInfo.role)}
          </span>
          <span className="text-[#737D8C] mx-2 hidden sm:inline">•</span>
          <span className="text-[#A8B0BD] block sm:inline text-sm sm:text-lg font-normal mt-1 sm:mt-0">
            {t(personalInfo.secondaryRole)}
          </span>
        </motion.div>

        {/* Concise Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="max-w-2xl text-[#A8B0BD] text-sm sm:text-base md:text-lg leading-relaxed mb-10 text-balance"
        >
          {t(personalInfo.heroTagline)}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
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

      {/* Floating Scroll Indicator - Restrained */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#737D8C] uppercase">
          {t(uiContent.hero.scrollDown)}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-4 h-7 rounded-full border border-white/15 flex items-start justify-center p-1"
        >
          <div className="w-1 h-1 rounded-full bg-[#6E8FC7]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
