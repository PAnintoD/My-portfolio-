'use client';

import React from 'react';
import { technologies } from '../../data/technologies';
import TechnologyCard from './TechnologyCard';

export default function TechnologyMarquee() {
  // Render the array twice to create a seamless infinite loop in pure CSS
  const marqueeItems = [...technologies, ...technologies];

  return (
    <div className="mt-10 md:mt-14 w-full overflow-hidden select-none">
      {/* Centered Small Technical Category Label */}
      <div className="mb-5 text-center font-mono text-[10px] tracking-[0.2em] text-[#707a89]">
        TOOLS & TECHNOLOGIES
      </div>

      {/* Marquee Viewport with Edge Masks */}
      <div className="relative w-full overflow-hidden py-3 marquee-mask">
        <div className="animate-portfolio-marquee flex items-center gap-4">
          {marqueeItems.map((tech, index) => (
            <TechnologyCard
              key={`${tech.short}-${index}`}
              technology={tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
