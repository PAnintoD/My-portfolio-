'use client';

import React from 'react';

export default function AvailabilityBadge() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Availability Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 font-mono text-[10px] md:text-[11px] font-medium tracking-[0.16em] text-[#a9b1bd]">
        <span className="relative flex size-2 rounded-full bg-[#75a58e]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#75a58e] opacity-40" />
        </span>
        <span>AVAILABLE FOR SELECTED PROJECTS</span>
      </div>

      {/* Location / Work Mode Indicator */}
      <div className="font-mono text-[10px] md:text-[11px] tracking-[0.14em] text-[#707a89]">
        THAILAND · REMOTE / ON-SITE
      </div>
    </div>
  );
}
