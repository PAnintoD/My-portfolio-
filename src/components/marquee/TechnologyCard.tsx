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
      className="group relative flex h-20 w-48 shrink-0 items-center gap-3 overflow-hidden rounded-full border border-white/[0.10] bg-[#0D1119] px-4 shadow-[0_12px_40px_rgba(0,0,0,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7F9AB8]/35 hover:bg-[#121824] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7F9AB8] cursor-default select-none"
    >
      {/* Abbreviation: Circular shape with mono steel-blue text */}
      <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-[#121824] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:border-[#7F9AB8]/40">
        <span className="font-mono text-xs font-semibold text-[#7F9AB8] tracking-wider">
          {technology.short}
        </span>
      </div>

      {/* Info: Name & Technical Domain */}
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-semibold tracking-tight text-[#F0F3F6] truncate group-hover:text-white transition-colors">
          {technology.name}
        </span>
        <span className="font-mono text-[10px] tracking-wider text-[#697586] uppercase truncate">
          {technology.category}
        </span>
      </div>
    </div>
  );
}
