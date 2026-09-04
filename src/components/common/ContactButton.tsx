'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/cn';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function ContactButton({
  label = 'START A CONVERSATION',
  onClick,
  className = '',
  href = '#contact'
}: ContactButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.getElementById(href.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
      }
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/[0.12] bg-[#F0F3F6] px-7 py-3.5 text-[#080A0F] font-sans font-semibold uppercase tracking-[0.10em] text-[11px] sm:text-[12px] shadow-lg shadow-black/10 transition-all select-none',
        className
      )}
    >
      {/* Sliding steel-blue background fill from left to right */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-[#7F9AB8] transition-transform duration-300 ease-out origin-left -z-0',
          isHovered ? 'scale-x-100' : 'scale-x-0'
        )}
      />

      <span className="relative z-10 text-[#080A0F]">{label}</span>
      <ArrowUpRight
        className={cn(
          'relative z-10 size-4 text-[#080A0F] transition-transform duration-300',
          isHovered ? 'translate-x-[3px] -translate-y-[3px]' : ''
        )}
      />
    </motion.a>
  );
}
