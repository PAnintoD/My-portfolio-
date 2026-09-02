'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { uiContent, personalInfo } from '../../data/portfolioData';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Fast futuristic counter increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onLoadingComplete) onLoadingComplete();
          }, 300);
          return 100;
        }
        // Accelerate smoothly
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            filter: 'blur(10px)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05070e] select-none"
        >
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

          {/* Central Holographic Glow Orb */}
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none animate-pulse-subtle" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
            {/* Monogram Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-600 p-[1.5px] shadow-[0_0_30px_rgba(0,245,212,0.3)]">
                <div className="w-full h-full bg-[#080c16] rounded-2xl flex items-center justify-center">
                  <span className="font-mono text-2xl font-black bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                    KW
                  </span>
                </div>
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </motion.div>

            {/* Name / Title */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-6"
            >
              <h1 className="text-lg font-bold tracking-widest text-slate-100 uppercase">
                {t(personalInfo.name)}
              </h1>
              <p className="text-xs font-mono tracking-wider text-cyan-400/80 mt-1">
                {t(personalInfo.role)}
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-800/80 rounded-full h-1.5 p-0.5 overflow-hidden border border-white/10 mb-4 shadow-inner">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-500 shadow-[0_0_12px_#00f5d4]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Status & Counter */}
            <div className="w-full flex items-center justify-between font-mono text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {progress === 100 ? t(uiContent.loading.ready) : t(uiContent.loading.systemInit)}
              </span>
              <span className="font-semibold text-cyan-300 text-sm tracking-widest">
                {progress.toString().padStart(3, '0')}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
