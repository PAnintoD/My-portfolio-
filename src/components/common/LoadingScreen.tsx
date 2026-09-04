'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const emptySubscribe = () => () => {};

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const shouldReduceMotion = useReducedMotion();
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

    const startTime = Date.now();
    const duration = 1600; // 1.6s duration

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        try {
          sessionStorage.setItem('ts_intro_seen', 'true');
        } catch {}
        setTimeout(() => {
          setIsDone(true);
          if (onLoadingComplete) onLoadingComplete();
        }, 300);
      }
    }, 25);

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
            y: '-100%',
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#080A0F] text-[#F0F3F6] select-none"
        >
          {/* Technical Grid Background */}
          <div className="absolute inset-0 bg-hero-grid opacity-15 pointer-events-none" />

          {/* Skip Button */}
          <button
            type="button"
            onClick={handleSkip}
            className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.04] text-[11px] font-mono text-[#A5AFBC] hover:text-[#F0F3F6] hover:border-white/[0.20] transition-colors cursor-pointer"
          >
            SKIP [ESC]
          </button>

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
            {/* Monogram Badge */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-6"
            >
              <div className="size-16 rounded-2xl bg-[#0D1119] border border-white/10 flex items-center justify-center shadow-2xl shadow-black/80">
                <span className="font-display text-2xl font-bold text-[#F0F3F6] tracking-wider">
                  TS
                </span>
              </div>
              <span className="absolute -top-1 -right-1 flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#78A68E] opacity-60" />
                <span className="relative inline-flex rounded-full size-2.5 bg-[#78A68E]" />
              </span>
            </motion.div>

            {/* Title & 4 System Domains */}
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="text-center mb-6"
            >
              <h1 className="text-sm font-semibold tracking-wider text-[#F0F3F6] uppercase font-mono">
                INITIALIZING SYSTEM
              </h1>
              <div className="flex items-center justify-center gap-2 mt-2 font-mono text-[9px] tracking-[0.16em] text-[#7F9AB8]">
                <span>SOFTWARE</span>
                <span>·</span>
                <span>HARDWARE</span>
                <span>·</span>
                <span>AUTOMATION</span>
                <span>·</span>
                <span>AI VISION</span>
              </div>
            </motion.div>

            {/* Precision Progress Bar */}
            <div className="w-full bg-[#121824] rounded-full h-1 overflow-hidden border border-white/[0.08] mb-3">
              <motion.div
                className="h-full rounded-full bg-[#7F9AB8]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.05 }}
              />
            </div>

            {/* Status Indicator */}
            <div className="w-full flex items-center justify-between font-mono text-[10px] text-[#697586]">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#78A68E]" />
                {progress === 100 ? 'SYSTEM READY' : 'CALIBRATING CORE'}
              </span>
              <span className="font-medium text-[#A5AFBC]">
                {progress.toString().padStart(3, '0')}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
