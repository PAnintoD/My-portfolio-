'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo } from '../../data/portfolioData';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const emptySubscribe = () => () => {};

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const isAlreadySeen = useSyncExternalStore(
    emptySubscribe,
    () => {
      try {
        return sessionStorage.getItem('ts_intro_seen') === 'true';
      } catch {
        return false;
      }
    },
    () => false
  );

  const shouldSkip = shouldReduceMotion || isAlreadySeen;

  useEffect(() => {
    if (!isMounted) return;
    if (shouldSkip) {
      if (onLoadingComplete) onLoadingComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          try {
            sessionStorage.setItem('ts_intro_seen', 'true');
          } catch {}
          setTimeout(() => {
            setIsDone(true);
            if (onLoadingComplete) onLoadingComplete();
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 9) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [isMounted, shouldSkip, onLoadingComplete]);

  const handleSkip = () => {
    try {
      sessionStorage.setItem('ts_intro_seen', 'true');
    } catch {}
    setIsDone(true);
    if (onLoadingComplete) onLoadingComplete();
  };

  if (!isMounted || shouldSkip || isDone) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#090C12] select-none"
        >
          {/* Subtle Technical Grid Background */}
          <div className="absolute inset-0 bg-hero-grid opacity-15 pointer-events-none" />

          {/* Skip Button for Accessibility */}
          <button
            type="button"
            onClick={handleSkip}
            className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] font-mono text-[#707A89] hover:text-[#F2F4F7] hover:border-white/[0.18] transition-colors cursor-pointer"
          >
            SKIP INTRO [ESC]
          </button>

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
            {/* Minimal Monogram Badge */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-6"
            >
              <div className="size-16 rounded-2xl bg-[#0F141D] border border-white/10 flex items-center justify-center shadow-2xl shadow-black/80">
                <span className="font-display text-2xl font-bold text-[#F2F4F7] tracking-wider">
                  TS
                </span>
              </div>
              <span className="absolute -top-1 -right-1 flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#75A58E] opacity-60" />
                <span className="relative inline-flex rounded-full size-2.5 bg-[#75A58E]" />
              </span>
            </motion.div>

            {/* Sub-headline: Software · Hardware · AI */}
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="text-center mb-6"
            >
              <h1 className="text-sm sm:text-base font-medium tracking-wide text-[#F2F4F7]">
                {t(personalInfo.name)}
              </h1>
              <p className="text-[11px] font-mono tracking-[0.2em] text-[#7890AA] mt-1.5 uppercase font-medium">
                SOFTWARE · HARDWARE · AI
              </p>
            </motion.div>

            {/* Precision Progress Bar */}
            <div className="w-full bg-[#141A24] rounded-full h-1 overflow-hidden border border-white/[0.08] mb-3">
              <motion.div
                className="h-full rounded-full bg-[#7890AA]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.08 }}
              />
            </div>

            {/* Calibration Status & Counter */}
            <div className="w-full flex items-center justify-between font-mono text-[10px] text-[#707A89]">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#75A58E]" />
                {progress === 100 ? 'SYSTEM READY' : 'CALIBRATING CORE // 01'}
              </span>
              <span className="font-medium text-[#A9B1BD]">
                {progress.toString().padStart(3, '0')}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
