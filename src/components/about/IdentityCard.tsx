'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Terminal, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo } from '../../data/portfolioData';
import { usePointerType } from '../../hooks/usePointerType';

export default function IdentityCard() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const { isFine } = usePointerType();

  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !isFine || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max 3 degrees tilt
    const maxRot = 3;
    const rotX = -((y - centerY) / centerY) * maxRot;
    const rotY = ((x - centerX) / centerX) * maxRot;

    setRotate({ x: rotX, y: rotY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={
          shouldReduceMotion || !isFine
            ? {}
            : {
                rotateX: rotate.x,
                rotateY: rotate.y
              }
        }
        transition={{ type: 'spring', damping: 25, stiffness: 260, mass: 0.8 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full aspect-[4/5] rounded-3xl bg-[#0F141D] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between shadow-2xl shadow-black/40 overflow-hidden select-none"
      >
        {/* Subtle Dynamic Glare Reflection */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`
          }}
          aria-hidden="true"
        />

        {/* Top Status Header */}
        <div className="flex items-center justify-between relative z-10">
          <span className="font-mono text-[10px] text-[#707A89] bg-[#141A24] px-3 py-1 rounded-full border border-white/[0.06] flex items-center gap-1.5">
            <Terminal className="size-3 text-[#7890AA]" />
            <span>DEV_SYS // ID_TS</span>
          </span>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#75A58E]" />
            <span className="text-[10px] font-mono text-[#75A58E] tracking-wider font-semibold">
              ONLINE
            </span>
          </div>
        </div>

        {/* Center Technical Monogram Seal */}
        <div className="flex flex-col items-center justify-center my-auto py-6 relative z-10">
          <div className="size-32 sm:size-36 rounded-2xl bg-[#090C12] border border-white/[0.08] flex flex-col items-center justify-center shadow-2xl shadow-black/60 relative group">
            {/* Subtle corner crosshairs */}
            <span className="absolute top-1.5 left-1.5 font-mono text-[7px] text-[#707A89]/40">+</span>
            <span className="absolute top-1.5 right-1.5 font-mono text-[7px] text-[#707A89]/40">+</span>
            <span className="absolute bottom-1.5 left-1.5 font-mono text-[7px] text-[#707A89]/40">+</span>
            <span className="absolute bottom-1.5 right-1.5 font-mono text-[7px] text-[#707A89]/40">+</span>

            <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F4F7]">
              TS
            </span>
            <span className="mt-1 font-mono text-[9px] tracking-[0.2em] text-[#7890AA]">
              ENGINEER
            </span>
          </div>

          <h3 className="text-lg font-semibold text-[#F2F4F7] mt-5 text-center tracking-tight">
            {t(personalInfo.name)}
          </h3>
          <p className="text-xs font-mono text-[#707A89] text-center mt-1">
            {t(personalInfo.role)}
          </p>
        </div>

        {/* Bottom Metadata in card */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#707A89] relative z-10">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-[#7890AA]" />
            <span>Thailand</span>
          </span>
          <span className="tracking-widest uppercase text-[#8FA5BD]">PAnintoD</span>
        </div>
      </motion.div>
    </div>
  );
}
