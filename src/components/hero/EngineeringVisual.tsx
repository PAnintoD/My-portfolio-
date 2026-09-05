'use client';

import React from 'react';

export default function EngineeringVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[520px] pointer-events-none select-none flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-hero-grid opacity-30 rounded-3xl" />

      {/* Radial soft glow */}
      <div className="absolute inset-10 rounded-full bg-[#7f9ab8]/5 blur-2xl" />

      {/* Rotating Ring Container */}
      <div className="relative size-full flex items-center justify-center animate-spin-slow">
        {/* Ring 3 (Outer) */}
        <div className="absolute size-[86%] rounded-full border border-white/[0.08] border-dashed" />

        {/* Ring 2 (Middle) */}
        <div className="absolute size-[64%] rounded-full border border-white/[0.12]" />

        {/* Ring 1 (Inner) */}
        <div className="absolute size-[42%] rounded-full border border-[#7f9ab8]/30" />

        {/* 4 Labeled Nodes positioned at 0, 90, 180, 270 degrees on the middle ring */}
        {/* Node 1: Top - SOFTWARE */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
          <div className="size-3 rounded-full bg-[#7f9ab8] shadow-[0_0_10px_rgba(127,154,184,0.6)]" />
          <span className="font-mono text-[9px] tracking-wider text-[#a5afbc] bg-[#090c12]/90 px-1.5 py-0.5 rounded border border-white/10 uppercase">
            SOFTWARE
          </span>
        </div>

        {/* Node 2: Right - HARDWARE */}
        <div className="absolute right-[18%] top-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
          <div className="size-3 rounded-full bg-[#78a68e] shadow-[0_0_10px_rgba(120,166,142,0.6)]" />
          <span className="font-mono text-[9px] tracking-wider text-[#a5afbc] bg-[#090c12]/90 px-1.5 py-0.5 rounded border border-white/10 uppercase">
            HARDWARE
          </span>
        </div>

        {/* Node 3: Bottom - AI VISION */}
        <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-1.5">
          <div className="size-3 rounded-full bg-[#7f9ab8] shadow-[0_0_10px_rgba(127,154,184,0.6)]" />
          <span className="font-mono text-[9px] tracking-wider text-[#a5afbc] bg-[#090c12]/90 px-1.5 py-0.5 rounded border border-white/10 uppercase">
            AI VISION
          </span>
        </div>

        {/* Node 4: Left - AUTOMATION */}
        <div className="absolute left-[18%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
          <div className="size-3 rounded-full bg-[#78a68e] shadow-[0_0_10px_rgba(120,166,142,0.6)]" />
          <span className="font-mono text-[9px] tracking-wider text-[#a5afbc] bg-[#090c12]/90 px-1.5 py-0.5 rounded border border-white/10 uppercase">
            AUTOMATION
          </span>
        </div>
      </div>

      {/* Central Circular Core (Static, centered) */}
      <div className="absolute size-28 rounded-full border border-[#7f9ab8]/40 bg-[#0d1119]/90 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(127,154,184,0.15)]">
        <div className="size-3 rounded-full bg-[#78a68e] animate-pulse mb-1" />
        <span className="font-mono text-[10px] font-bold text-[#f2f4f7] tracking-wider">
          CORE
        </span>
        <span className="font-mono text-[8px] text-[#697586] tracking-widest">
          ONLINE
        </span>
      </div>

      {/* Crosshair accents */}
      <div className="absolute w-[92%] h-px bg-white/[0.04]" />
      <div className="absolute h-[92%] w-px bg-white/[0.04]" />
    </div>
  );
}
