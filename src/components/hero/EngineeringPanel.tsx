'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Code2, Cpu, Eye, Workflow } from 'lucide-react';

export default function EngineeringPanel() {
  const shouldReduceMotion = useReducedMotion();

  const systemRows = [
    {
      icon: Code2,
      title: 'WEB SYSTEMS',
      description: 'TypeScript / React / APIs',
      metric: 'v16.3',
      progress: '98%'
    },
    {
      icon: Cpu,
      title: 'EMBEDDED & IoT',
      description: 'Arduino / Sensors / Serial Control',
      metric: 'UART/COM',
      progress: '94%'
    },
    {
      icon: Eye,
      title: 'AI VISION',
      description: 'Computer Vision / Detection Pipelines',
      metric: 'YOLOv8',
      progress: '92%'
    },
    {
      icon: Workflow,
      title: 'AUTOMATION',
      description: 'Workflows / Integration / Monitoring',
      metric: 'n8n/CI',
      progress: '96%'
    }
  ];

  return (
    <div className="relative mx-auto w-full max-w-[470px]">
      {/* Floating Tag 1 - Desktop Only */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute -top-4 -left-6 z-30 items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#090c12]/90 px-3 py-1 font-mono text-[9px] font-medium tracking-[0.15em] text-[#707a89] shadow-lg backdrop-blur-md pointer-events-none"
      >
        <span className="size-1.5 rounded-full bg-[#7890aa]/60" />
        <span>CLEAN SYSTEMS</span>
      </motion.div>

      {/* Floating Tag 2 - Desktop Only */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [2, -2, 2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:flex absolute -bottom-4 -right-4 z-30 items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#090c12]/90 px-3 py-1 font-mono text-[9px] font-medium tracking-[0.15em] text-[#707a89] shadow-lg backdrop-blur-md pointer-events-none"
      >
        <span className="size-1.5 rounded-full bg-[#75a58e]/60" />
        <span>REAL-WORLD ENGINEERING</span>
      </motion.div>

      {/* Main Dashboard Card */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full rounded-[28px] border border-white/[0.08] bg-[#0b1018]/85 p-4 sm:p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-3.5 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-sm bg-[#7890aa]/40" />
            <span className="font-mono text-[10px] md:text-[11px] font-medium tracking-[0.14em] text-[#a9b1bd]">
              SYSTEM_OVERVIEW
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[9px] md:text-[10px] font-medium tracking-[0.1em] text-[#75a58e]">
            <span className="size-1.5 rounded-full bg-[#75a58e]" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* System Capability Rows */}
        <div className="space-y-2.5">
          {systemRows.map((row, index) => {
            const Icon = row.icon;
            return (
              <div
                key={index}
                className="group rounded-xl border border-white/[0.05] bg-white/[0.02] p-2.5 sm:p-3 transition-colors duration-200 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#7890aa]">
                      <Icon className="size-3.5" />
                    </div>
                    <div>
                      <div className="font-mono text-[11px] font-semibold tracking-[0.05em] text-[#f2f4f7]">
                        {row.title}
                      </div>
                      <div className="text-[11px] text-[#a9b1bd]">
                        {row.description}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 font-mono text-[9px] text-[#707a89]">
                    {row.metric}
                  </div>
                </div>

                {/* Subtle progress indicator line */}
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.05]">
                  <div
                    className="h-full rounded-full bg-[#7890aa]/60 transition-all duration-500"
                    style={{ width: row.progress }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Animated Waveform Graphic at bottom */}
        <div className="mt-4 pt-3.5 border-t border-white/[0.07]">
          <div className="flex items-center justify-between font-mono text-[9px] text-[#707a89] mb-1.5">
            <span>SIGNAL_BUS // 01</span>
            <span>STABLE (0.4ms)</span>
          </div>

          <div className="h-12 w-full overflow-hidden rounded-lg bg-black/20 px-2 py-1 flex items-center">
            <svg
              viewBox="0 0 400 40"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M0,20 L40,20 L55,8 L70,32 L85,15 L100,20 L160,20 L175,10 L190,28 L205,12 L220,20 L280,20 L295,6 L310,34 L325,18 L340,20 L400,20"
                fill="none"
                stroke="#7890aa"
                strokeWidth="1.5"
                opacity="0.65"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
