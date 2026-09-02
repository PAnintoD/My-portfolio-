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
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onLoadingComplete) onLoadingComplete();
          }, 250);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 5;
        return Math.min(prev + step, 100);
      });
    }, 40);

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
            transition: { duration: 0.5, ease: 'easeInOut' }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0E14] select-none"
        >
          {/* Faint Technical Grid Background */}
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
            {/* Minimal Monogram Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative mb-6"
            >
              <div className="w-14 h-14 rounded-xl bg-[#121722] border border-white/10 flex items-center justify-center shadow-lg shadow-black/40">
                <span className="font-mono text-xl font-bold text-[#F1F3F5] tracking-wider">
                  TS
                </span>
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#62A888] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#62A888]"></span>
              </span>
            </motion.div>

            {/* Name / Role */}
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-center mb-6"
            >
              <h1 className="text-base font-semibold tracking-wider text-[#F1F3F5]">
                {t(personalInfo.name)}
              </h1>
              <p className="text-xs font-mono tracking-wide text-[#737D8C] mt-1">
                {t(personalInfo.role)}
              </p>
            </motion.div>

            {/* Quiet Progress Bar */}
            <div className="w-full bg-[#171D29] rounded-full h-1 overflow-hidden border border-white/08 mb-3">
              <motion.div
                className="h-full rounded-full bg-[#6E8FC7]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Status & Counter */}
            <div className="w-full flex items-center justify-between font-mono text-[11px] text-[#737D8C]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#62A888]" />
                {progress === 100 ? t(uiContent.loading.ready) : t(uiContent.loading.systemInit)}
              </span>
              <span className="font-medium text-[#A8B0BD]">
                {progress.toString().padStart(3, '0')}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
