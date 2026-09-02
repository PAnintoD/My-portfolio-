'use client';

import React from 'react';
import { Technology } from '../../data/technologies';

interface TechnologyCardProps {
  technology: Technology;
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div
      tabIndex={0}
      className="group relative h-20 w-44 shrink-0 overflow-hidden rounded-full border border-white/[0.08] bg-[#0f141d] shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7890aa]/30 hover:bg-[#141a24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fa5bd]"
    >
      {/* Low-Opacity Radial Glow on Hover */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(120,144,170,0.10), transparent 55%)'
        }}
        aria-hidden="true"
      />

      {/* Card Content Row */}
      <div className="relative z-10 flex h-full items-center gap-3 px-3.5">
        {/* Monochromatic Technology Mark */}
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] font-mono text-[10px] font-semibold text-[#8fa5bd]">
          {technology.short}
        </div>

        {/* Textual Info */}
        <div className="flex flex-col truncate">
          <span className="font-sans text-[12px] font-semibold text-[#dce1e7] truncate">
            {technology.name}
          </span>
          <span className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[#707a89] truncate">
            {technology.category}
          </span>
        </div>
      </div>
    </div>
  );
}
