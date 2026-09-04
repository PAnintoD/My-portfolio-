'use client';

import React from 'react';
import { row1Technologies, row2Technologies } from '../../data/technologies';
import TechnologyCard from './TechnologyCard';

export default function TechnologyMarquee() {
  // Render each row 3 times for seamless 33.333% CSS looping
  const row1Triple = [...row1Technologies, ...row1Technologies, ...row1Technologies];
  const row2Triple = [...row2Technologies, ...row2Technologies, ...row2Technologies];

  return (
    <section
      aria-label="Selected Tools and Technologies"
      className="relative w-full overflow-hidden bg-[#080A0F] pt-16 sm:pt-24 md:pt-32 pb-20 md:pb-28 select-none"
    >
      {/* Small Centered Technical Label */}
      <div className="mb-8 text-center font-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-[#697586] uppercase">
        SELECTED TOOLS & TECHNOLOGIES
      </div>

      {/* Dual Row Marquee Container with Gradient Edge Masks */}
      <div className="relative w-full space-y-4 sm:space-y-6 marquee-mask overflow-hidden py-2">
        {/* Row 1: Moves Right to Left */}
        <div className="animate-marquee-left flex items-center gap-4">
          {row1Triple.map((tech, index) => (
            <TechnologyCard
              key={`row1-${tech.short}-${index}`}
              technology={tech}
            />
          ))}
        </div>

        {/* Row 2: Moves Left to Right */}
        <div className="animate-marquee-right flex items-center gap-4">
          {row2Triple.map((tech, index) => (
            <TechnologyCard
              key={`row2-${tech.short}-${index}`}
              technology={tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
