'use client';

import React, { useState, MouseEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import {
  Mail,
  Send,
  Check,
  Copy,
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import { usePointerType } from '../../hooks/usePointerType';
import MagneticButton from '../common/MagneticButton';

export default function ContactSection() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const { isFine } = usePointerType();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Perspective grid tilt based on pointer
  const [gridTilt, setGridTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !isFine) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setGridTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setGridTilt({ x: 0, y: 0 });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = language === 'th' ? 'กรุณากรอกชื่อ' : 'Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = language === 'th' ? 'กรุณากรอกอีเมล' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = language === 'th' ? 'รูปแบบอีเมลไม่ถูกต้อง' : 'Invalid email format';
    }
    if (!formData.message.trim()) {
      errs.message = language === 'th' ? 'กรุณากรอกข้อความ' : 'Message is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      confetti({
        particleCount: 40,
        spread: 55,
        origin: { y: 0.7 },
        colors: ['#7F9AB8', '#A6B9CC', '#0A1019']
      });
    } catch {
      alert('An error occurred during submission.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {}
  };

  const headingLines = ["LET’S BUILD", "SOMETHING", "RELIABLE."];

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-30 -mt-10 min-h-screen overflow-hidden rounded-t-[40px] sm:rounded-t-[52px] md:rounded-t-[64px] bg-[#E8EDF2] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 text-[#0A1019] scroll-mt-28"
    >
      {/* Interactive 3D Wireframe Plane / Perspective Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-10 select-none"
        style={{
          perspective: '800px'
        }}
      >
        <div
          className="absolute inset-0 bg-hero-grid transition-transform duration-700 ease-out"
          style={{
            transform: !shouldReduceMotion && isFine
              ? `rotateX(${25 + gridTilt.y}deg) rotateY(${gridTilt.x}deg) scale(1.4)`
              : 'rotateX(25deg) scale(1.4)',
            transformOrigin: '50% 100%'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Line Reveal */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs text-[#2E3C4D] tracking-[0.2em] uppercase block mb-3 font-semibold">
            {'// INITIATE CONTACT'}
          </span>

          <h2 className="font-display font-extrabold uppercase leading-[0.84] tracking-[-0.065em] text-[clamp(3.5rem,12vw,170px)] text-[#0A1019]">
            {headingLines.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { y: '0%' }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h2>

          <p className="mt-6 font-sans text-sm sm:text-base text-[#4A586A] max-w-xl mx-auto leading-relaxed">
            Have an IoT, computer vision, web architecture, or automated systems project in mind? Let’s connect and engineer a dependable solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels & Large Magnetic Email Button */}
          <div className="lg:col-span-5 space-y-6">
            {/* Verified Email Card */}
            <div className="rounded-3xl border border-black/[0.08] bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-md">
              <span className="font-mono text-[10px] text-[#697586] tracking-wider uppercase block mb-2 font-semibold">
                DIRECT INBOX
              </span>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs sm:text-sm text-[#0A1019] font-medium truncate">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/[0.10] bg-black/[0.03] hover:bg-black/[0.06] text-xs font-mono text-[#0A1019] transition-colors"
                >
                  {copiedEmail ? <Check className="size-3 text-[#78A68E]" /> : <Copy className="size-3 text-[#4A586A]" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Large Email Button */}
              <div className="w-full">
                <MagneticButton
                  href={`mailto:${personalInfo.email}`}
                  className="w-full justify-center bg-[#0A1019] text-[#F0F3F6] hover:bg-[#121824] hover:text-white"
                >
                  <Mail className="size-4" />
                  <span>OPEN EMAIL CLIENT</span>
                  <ArrowUpRight className="size-4" />
                </MagneticButton>
              </div>
            </div>

            {/* Profile Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl border border-black/[0.08] bg-white/70 hover:bg-white hover:border-black/20 transition-all text-xs font-mono text-[#0A1019]"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="size-4 text-[#0A1019]" />
                  <span>GitHub</span>
                </span>
                <ArrowUpRight className="size-3.5 text-[#697586] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/PAnintoD/My-portfolio-"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl border border-black/[0.08] bg-white/70 hover:bg-white hover:border-black/20 transition-all text-xs font-mono text-[#0A1019]"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="size-4 text-[#0A1019]" />
                  <span>Repo</span>
                </span>
                <ArrowUpRight className="size-3.5 text-[#697586] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-black/[0.08] bg-white/80 p-6 sm:p-8 md:p-10 shadow-sm backdrop-blur-md">
              <h3 className="text-xl font-bold text-[#0A1019] mb-2">
                Send Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#4A586A] mb-6">
                Fill in the details below and I will respond within 24 business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-semibold text-[#2E3C4D] mb-1.5 uppercase">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Thanapoom or Company Name"
                    className="w-full px-4 py-3 rounded-2xl border border-black/[0.10] bg-white text-sm text-[#0A1019] placeholder:text-[#8FA5BD]/60 focus:border-[#7F9AB8] focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-xs text-red-600 mt-1 font-mono">
                      <AlertCircle className="size-3" /> {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-semibold text-[#2E3C4D] mb-1.5 uppercase">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@company.com"
                    className="w-full px-4 py-3 rounded-2xl border border-black/[0.10] bg-white text-sm text-[#0A1019] placeholder:text-[#8FA5BD]/60 focus:border-[#7F9AB8] focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-xs text-red-600 mt-1 font-mono">
                      <AlertCircle className="size-3" /> {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-semibold text-[#2E3C4D] mb-1.5 uppercase">
                    Project Details or Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements or inquiry..."
                    className="w-full px-4 py-3 rounded-2xl border border-black/[0.10] bg-white text-sm text-[#0A1019] placeholder:text-[#8FA5BD]/60 focus:border-[#7F9AB8] focus:outline-none transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-xs text-red-600 mt-1 font-mono">
                      <AlertCircle className="size-3" /> {errors.message}
                    </span>
                  )}
                </div>

                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 rounded-2xl bg-[#78A68E]/15 border border-[#78A68E]/30 text-xs text-[#2E3C4D] flex items-center gap-2 font-mono"
                    >
                      <Check className="size-4 text-[#78A68E]" />
                      <span>Thank you! Your message has been prepared successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0A1019] text-[#F0F3F6] font-semibold text-xs tracking-wider uppercase hover:bg-[#161e2e] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>DISPATCHING...</span>
                  ) : (
                    <>
                      <Send className="size-3.5" />
                      <span>DISPATCH MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
