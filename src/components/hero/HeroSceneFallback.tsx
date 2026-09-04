'use client';

import React from 'react';

export default function HeroSceneFallback() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[420px] w-full max-w-[620px] sm:h-[500px] lg:h-[620px] flex items-center justify-center select-none overflow-hidden"
    >
      {/* Concentric Technical Rings with Central Radial Gradient */}
      <div className="relative size-72 sm:size-88 rounded-full border border-white/[0.08] flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
        {/* Middle Ring */}
        <div className="absolute inset-8 rounded-full border border-dashed border-[#7F9AB8]/25" />
        {/* Inner Ring */}
        <div className="absolute inset-16 rounded-full border border-white/[0.08]" />

        {/* Central Radial Gradient Core */}
        <div
          className="size-28 rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center relative"
          style={{
            background: 'radial-gradient(circle at center, #1E293B 0%, #0D1119 70%, #080A0F 100%)'
          }}
        >
          <div className="size-4 rounded-full bg-[#7F9AB8] shadow-[0_0_16px_rgba(127,154,184,0.4)]" />
        </div>

        {/* 4 Labeled Technical Nodes */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#0D1119] border border-white/[0.10] text-[9px] font-mono text-[#A5AFBC] tracking-wider">
          AI VISION // 03
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#0D1119] border border-white/[0.10] text-[9px] font-mono text-[#A5AFBC] tracking-wider">
          AUTOMATION // 04
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-[#0D1119] border border-white/[0.10] text-[9px] font-mono text-[#A5AFBC] tracking-wider">
          WEB SYSTEMS // 01
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-[#0D1119] border border-white/[0.10] text-[9px] font-mono text-[#A5AFBC] tracking-wider">
          EMBEDDED // 02
        </div>
      </div>
    </div>
  );
}
