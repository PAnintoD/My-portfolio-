'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { usePointerType } from '../../hooks/usePointerType';

interface ExpertiseItemData {
  number: string;
  title: string;
  description: string;
  previewTag: string;
}

const expertiseList: ExpertiseItemData[] = [
  {
    number: '01',
    title: 'Web Systems',
    description: 'Responsive interfaces, scalable frontend architecture, APIs, dashboards, and maintainable application systems.',
    previewTag: 'REACT · NEXT.JS · TS'
  },
  {
    number: '02',
    title: 'Backend & Integration',
    description: 'Reliable services, structured APIs, database workflows, authentication, and third-party system integration.',
    previewTag: 'NODE · PYTHON · SQL'
  },
  {
    number: '03',
    title: 'Embedded & IoT',
    description: 'Microcontrollers, sensors, serial communication, connected devices, and hardware-to-software interfaces.',
    previewTag: 'ARDUINO · ESP32 · UART'
  },
  {
    number: '04',
    title: 'Automation',
    description: 'Practical workflows, monitoring systems, repetitive process automation, and operational tools.',
    previewTag: 'N8N · DAEMONS · SCRIPTS'
  },
  {
    number: '05',
    title: 'AI Vision',
    description: 'Computer vision pipelines, image processing, object detection, and real-world visual analysis.',
    previewTag: 'YOLOV8 · OPENCV · OCR'
  },
  {
    number: '06',
    title: 'Technical Prototyping',
    description: 'Rapid prototypes connecting interface design, software logic, hardware, and intelligent systems.',
    previewTag: 'HARDWARE + SOFTWARE'
  }
];

export default function ExpertiseSection() {
  const shouldReduceMotion = useReducedMotion();
  const { isFine } = usePointerType();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="skills"
      aria-label="Technical Expertise"
      className="relative -mt-10 z-10 rounded-t-[40px] sm:rounded-t-[52px] md:rounded-t-[64px] bg-[#080A0F] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 scroll-mt-28 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Large Heading */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-mono text-xs text-[#7F9AB8] tracking-[0.2em] uppercase block mb-3">
            {'// CAPABILITIES & DOMAINS'}
          </span>
          <h2 className="hero-heading font-display font-extrabold uppercase leading-none tracking-[-0.06em] text-center text-[clamp(3.5rem,12vw,170px)]">
            EXPERTISE
          </h2>
        </motion.div>

        {/* 6 Expertise Horizontal Row Items */}
        <div className="border-t border-white/[0.10]">
          {expertiseList.map((item, index) => {
            const isHovered = hoveredIndex === index && isFine;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex flex-col lg:flex-row lg:items-center justify-between py-10 sm:py-12 border-b border-white/[0.10] px-4 sm:px-6 transition-colors duration-300 ${
                  isHovered ? 'bg-white/[0.025]' : 'bg-transparent'
                }`}
              >
                {/* Left: Large Number */}
                <div className="flex items-center gap-6 shrink-0 lg:w-48 mb-4 lg:mb-0">
                  <motion.span
                    animate={isHovered ? { x: 6 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-display font-extrabold text-[clamp(3rem,9vw,130px)] leading-none text-[#7F9AB8] select-none"
                  >
                    {item.number}
                  </motion.span>
                </div>

                {/* Center: Service Title */}
                <div className="flex-1 lg:px-8 mb-4 lg:mb-0">
                  <div className="overflow-hidden">
                    <motion.div
                      animate={isHovered ? { x: 4 } : { x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <h3 className="font-display font-semibold uppercase text-[clamp(1.2rem,2.5vw,2.4rem)] text-[#F0F3F6] group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <ArrowUpRight
                        className={`size-6 text-[#7F9AB8] transition-all duration-300 ${
                          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                        }`}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Right: Description & Muted 3D Preview Tag */}
                <div className="lg:w-[420px] shrink-0 flex flex-col justify-center">
                  <p className="font-sans font-normal leading-relaxed text-[clamp(0.9rem,1.4vw,1.15rem)] text-[#A5AFBC]">
                    {item.description}
                  </p>
                  {/* Subtle 3D Tag Preview on Desktop Hover */}
                  <div className="hidden lg:block mt-2 h-5 overflow-hidden">
                    <span
                      className={`inline-block font-mono text-[10px] tracking-[0.16em] text-[#7F9AB8] uppercase transition-all duration-300 ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      TECH // {item.previewTag}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
