'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { usePointerType } from '../../hooks/usePointerType';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e?: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
  target?: string;
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
  ariaLabel,
  target
}: MagneticButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const { isFine } = usePointerType();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current || disabled || shouldReduceMotion || !isFine) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Max 5px movement for outer container
    const maxOffset = 5;
    const rawX = (e.clientX - centerX) * 0.18;
    const rawY = (e.clientY - centerY) * 0.18;

    const x = Math.max(-maxOffset, Math.min(maxOffset, rawX));
    const y = Math.max(-maxOffset, Math.min(maxOffset, rawY));

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      'bg-[#F2F4F7] hover:bg-white text-[#0A0E15] font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.2)] focus-visible:ring-2 focus-visible:ring-[#8FA5BD]',
    secondary:
      'bg-white/[0.035] hover:bg-white/[0.06] text-[#D4D9E0] font-semibold border border-white/[0.1] hover:border-white/[0.18] focus-visible:ring-2 focus-visible:ring-[#8FA5BD]',
    outline:
      'border border-[#7890AA]/40 text-[#7890AA] hover:border-[#7890AA] hover:bg-[#7890AA]/10 hover:text-[#8FA5BD]',
    glass:
      'bg-[#0F141D] text-[#D4D9E0] border border-white/[0.1] hover:border-white/[0.18] hover:bg-white/[0.06]'
  };

  const baseContent = (
    <motion.div
      animate={shouldReduceMotion || !isFine ? {} : { x: position.x, y: position.y }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.8 }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-[13px] font-semibold transition-all duration-200 select-none group ${
        variantStyles[variant]
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 [&>svg]:transition-transform [&>svg]:duration-200 group-hover:[&>svg]:translate-x-[2px] group-hover:[&>svg]:-translate-y-[2px]">
        {children}
      </span>
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
          target={target || (external ? '_blank' : undefined)}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={ariaLabel}
          onClick={onClick}
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
