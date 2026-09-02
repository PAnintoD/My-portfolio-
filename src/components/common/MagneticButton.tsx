'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
  type = 'button',
  disabled = false,
  ariaLabel
}: MagneticButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current || disabled || shouldReduceMotion) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const pullStrength = 0.15;
    const x = (e.clientX - centerX) * pullStrength;
    const y = (e.clientY - centerY) * pullStrength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      'bg-[#f2f4f7] hover:bg-white text-[#0a0e15] font-semibold shadow-md shadow-black/20 hover:shadow-lg transition-all duration-200',
    secondary:
      'bg-[#141a24] hover:bg-[#19212d] text-[#f2f4f7] font-medium border border-white/[0.08] hover:border-white/[0.15] transition-all duration-200',
    outline:
      'border border-[#7890aa]/40 text-[#7890aa] hover:border-[#7890aa] hover:bg-[#7890aa]/10 hover:text-[#8fa5bd] transition-all duration-200',
    glass:
      'bg-[#0f141d] text-[#d4d9e0] border border-white/[0.1] hover:border-white/[0.18] hover:bg-white/[0.06] transition-all duration-200'
  };

  const baseContent = (
    <motion.div
      animate={shouldReduceMotion ? {} : { x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 20, stiffness: 220, mass: 0.2 }}
      className={`relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-normal transition-all duration-200 select-none overflow-hidden group ${
        variantStyles[variant]
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={ariaLabel}
          className="inline-block focus-visible:outline-none"
        >
          {baseContent}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          aria-label={ariaLabel}
          className="inline-block focus-visible:outline-none"
        >
          {baseContent}
        </button>
      )}
    </div>
  );
}
