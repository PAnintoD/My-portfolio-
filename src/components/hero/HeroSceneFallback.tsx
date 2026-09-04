'use client';

import React from 'react';

export default function HeroSceneFallback() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[470px] aspect-square flex items-center justify-center select-none"
    >
      {/* Precision Technical Geometric Fallback */}
      <div className="relative size-64 rounded-full border border-white/[0.08] flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-2 rounded-full border border-[#7890AA]/20 animate-[spin_40s_linear_infinite]" />
        {/* Tilted Ring */}
        <div className="absolute inset-8 rounded-full border border-dashed border-[#7890AA]/30 animate-[spin_25s_linear_infinite_reverse]" />
        {/* Core Node */}
        <div className="size-20 rounded-2xl bg-gradient-to-br from-[#141A24] via-[#0F141D] to-[#090C12] border border-white/10 shadow-2xl flex items-center justify-center">
          <div className="size-3 rounded-full bg-[#7890AA]/80 shadow-[0_0_12px_rgba(120,144,170,0.5)]" />
        </div>
      </div>
    </div>
  );
}
