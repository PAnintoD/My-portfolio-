'use client';

import React, { useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import { usePointerType } from '../../hooks/usePointerType';
import { useMediaQuery } from '../../hooks/useMediaQuery';

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
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const buttonRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth magnetic effect without React state rerenders
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 24, mass: 0.8 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  // Inner text motion value (up to 3px)
  const innerRawX = useMotionValue(0);
  const innerRawY = useMotionValue(0);
  const innerSpringX = useSpring(innerRawX, springConfig);
  const innerSpringY = useSpring(innerRawY, springConfig);

  const isMagneticActive = !disabled && !shouldReduceMotion && isFine && isDesktop;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current || !isMagneticActive) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const diffX = (e.clientX - centerX) * 0.15;
    const diffY = (e.clientY - centerY) * 0.15;

    // Clamp outer to 5px
    const clampedOuterX = Math.max(-5, Math.min(5, diffX));
    const clampedOuterY = Math.max(-5, Math.min(5, diffY));
    rawX.set(clampedOuterX);
    rawY.set(clampedOuterY);

    // Clamp inner to 3px
    innerRawX.set(Math.max(-3, Math.min(3, diffX * 0.6)));
    innerRawY.set(Math.max(-3, Math.min(3, diffY * 0.6)));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    innerRawX.set(0);
    innerRawY.set(0);
  };

  const variantStyles = {
    primary:
      'bg-[#F0F3F6] hover:bg-white text-[#080A0F] font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.2)] focus-visible:ring-2 focus-visible:ring-[#7F9AB8]',
    secondary:
      'bg-white/[0.04] hover:bg-white/[0.08] text-[#D7DEE5] font-semibold border border-white/[0.12] hover:border-white/[0.22] focus-visible:ring-2 focus-visible:ring-[#7F9AB8]',
    outline:
      'border border-[#7F9AB8]/40 text-[#7F9AB8] hover:border-[#7F9AB8] hover:bg-[#7F9AB8]/10 hover:text-[#A6B9CC]',
    glass:
      'bg-[#0D1119] text-[#D7DEE5] border border-white/[0.10] hover:border-white/[0.18] hover:bg-[#121824]'
  };

  const baseContent = (
    <motion.div
      style={isMagneticActive ? { x: springX, y: springY } : undefined}
      whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-[12px] font-semibold tracking-[0.08em] transition-all duration-200 select-none group ${
        variantStyles[variant]
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      <motion.span
        style={isMagneticActive ? { x: innerSpringX, y: innerSpringY } : undefined}
        className="relative z-10 flex items-center gap-2 [&>svg]:transition-transform [&>svg]:duration-200 group-hover:[&>svg]:translate-x-[2px] group-hover:[&>svg]:-translate-y-[2px]"
      >
        {children}
      </motion.span>
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
