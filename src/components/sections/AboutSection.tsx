'use client';

import React, { useState, MouseEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { personalInfo } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import ContactButton from '../common/ContactButton';
import AboutDecorations from '../about/AboutDecorations';
import ScrollText from '../about/ScrollText';
import { usePointerType } from '../../hooks/usePointerType';

export default function AboutSection() {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const { isFine } = usePointerType();

  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !isFine) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setPointerOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setPointerOffset({ x: 0, y: 0 });
  };

  const aboutText =
    language === 'th'
      ? "ผมคือ ธนภูมิ สีแดง นักพัฒนาที่มุ่งเน้นการลงมือสร้างจริงและแก้ปัญหาที่เกิดขึ้นจริง เชื่อมต่อซอฟต์แวร์เข้ากับไมโครคอนโทรลเลอร์ IoT, ระบบตรวจจับภาพด้วย AI และการพัฒนาระบบอัตโนมัติที่เสถียรและตอบโจทย์งานจริง"
      : "I’m a multidisciplinary developer who enjoys transforming real-world challenges into reliable digital systems. My work connects software, embedded hardware, automation, and AI vision to create practical products that are clear, maintainable, and built to last.";

  return (
    <section
      id="about"
      aria-label="About Me"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden rounded-t-[40px] sm:rounded-t-[52px] md:rounded-t-[64px] bg-[#E8EDF2] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 text-[#0A1019] scroll-mt-28 flex flex-col justify-between"
    >
      {/* 4 Procedural 3D/SVG Decorative Objects */}
      <AboutDecorations pointerOffset={pointerOffset} />

      <div className="max-w-5xl mx-auto w-full relative z-10 my-auto flex flex-col items-center">
        {/* Large ABOUT ME Heading with Horizontal Clip-Path Reveal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { clipPath: 'inset(0% 100% 0% 0%)', opacity: 0 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-12 text-center"
        >
          <h2
            className="font-display font-extrabold uppercase leading-none tracking-[-0.06em] text-center text-[clamp(3.5rem,12vw,170px)] select-none"
            style={{
              background: 'linear-gradient(180deg, #0A1019 0%, #526273 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            ABOUT ME
          </h2>
        </motion.div>

        {/* Word-by-Word Scroll-Driven Opacity Animation */}
        <ScrollText
          text={aboutText}
          className="max-w-[780px] text-center font-sans font-medium leading-[1.35] text-[clamp(1.25rem,3vw,2.35rem)] mx-auto text-[#0A1019] mb-14 md:mb-16"
        />

        {/* Three Verified Engineering Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-3xl mb-14">
          {personalInfo.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/70 border border-black/[0.06] shadow-sm backdrop-blur-sm"
            >
              <span className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1019] mb-2">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-wider text-[#2E3C4D] uppercase">
                {index === 0
                  ? 'SOFTWARE SYSTEMS'
                  : index === 1
                  ? 'AI VISION & AUTOMATION'
                  : 'EMBEDDED & IoT'}
              </span>
              <span className="font-mono text-[10px] text-[#697586] mt-1">
                {t(stat.label)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactButton
            label="START A CONVERSATION"
            className="border-black/10 bg-[#0A1019] text-[#F0F3F6] hover:text-[#080A0F]"
          />
        </motion.div>
      </div>
    </section>
  );
}
