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
      className="group relative h-20 w-44 shrink-0 overflow-hidden rounded-full border border-white/[0.08] bg-[#0F141D] shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7890AA]/40 hover:bg-[#141A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8FA5BD]"
    >
      {/* Low-Opacity Radial Glow on Hover */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(120,144,170,0.12), transparent 55%)'
        }}
        aria-hidden="true"
      />

      {/* Card Content Row */}
      <div className="relative z-10 flex h-full items-center gap-3 px-3.5">
        {/* Monochromatic Technology Mark with subtle rotation on hover */}
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] font-mono text-[10px] font-semibold text-[#8FA5BD] transition-transform duration-300 group-hover:rotate-[4deg]">
          {technology.short}
        </div>

        {/* Textual Info with subtle translation */}
        <div className="flex flex-col truncate transition-transform duration-300 group-hover:translate-x-[2px]">
          <span className="font-sans text-[12px] font-semibold text-[#DCE1E7] truncate">
            {technology.name}
          </span>
          <span className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[#707A89] truncate">
            {technology.category}
          </span>
        </div>
      </div>
    </div>
  );
}
