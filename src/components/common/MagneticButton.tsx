'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

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
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current || disabled) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const pullStrength = 0.3;
    const x = (e.clientX - centerX) * pullStrength;
    const y = (e.clientY - centerY) * pullStrength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-semibold shadow-[0_0_25px_-5px_rgba(0,245,212,0.5)] hover:shadow-[0_0_35px_0px_rgba(0,245,212,0.7)]',
    secondary:
      'bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium shadow-[0_0_25px_-5px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_0px_rgba(139,92,246,0.6)]',
    outline:
      'border border-cyan-400/40 text-cyan-300 hover:border-cyan-300 hover:bg-cyan-950/30 hover:text-cyan-200 backdrop-blur-sm',
    glass:
      'bg-white/[0.06] text-white border border-white/10 hover:border-white/25 hover:bg-white/[0.12] backdrop-blur-md'
  };

  const baseContent = (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 200, mass: 0.2 }}
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm md:text-base tracking-wide transition-colors duration-200 select-none overflow-hidden group ${
        variantStyles[variant]
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      {/* Light sheen sweeping across */}
      <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[100%]" />
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
