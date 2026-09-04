'use client';

import React, { useState, MouseEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import confetti from 'canvas-confetti';
import { personalInfo, uiContent } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import {
  Mail,
  Send,
  Check,
  Copy,
  AlertCircle,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { usePointerType } from '../../hooks/usePointerType';

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail
};

export default function ContactSection() {
  const { t, language } = useLanguage();
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

  // Soft pointer spotlight on desktop
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !isFine) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
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
        colors: ['#7890AA', '#A9B1BD', '#F2F4F7']
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

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090C12]"
    >
      {/* Soft Pointer Spotlight Effect on Desktop */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 550px at ${spotlight.x}% ${spotlight.y}%, rgba(120, 144, 170, ${spotlight.opacity}), transparent 70%)`
        }}
        aria-hidden="true"
      />

      {/* Perspective CSS Grid Background */}
      <div
        className="absolute inset-0 bg-hero-grid opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Section Number */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-2 font-mono text-xs text-[#707A89] tracking-[0.2em] uppercase">
            <span className="text-[#7890AA]">{'// 05'}</span>
            <span>{t(uiContent.contact.sectionTag)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F2F4F7] mb-3">
            Let’s build something reliable.
          </h2>
          <p className="text-[#A9B1BD] text-sm sm:text-base">
            {t(uiContent.contact.subheading)}
          </p>
          <div className="w-12 h-[2px] bg-[#7890AA]/40 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="text-base font-semibold text-[#F2F4F7] mb-2">
                {language === 'th' ? 'ข้อมูลการติดต่อโดยตรง' : 'Direct Channels'}
              </h3>
              <p className="text-[#A9B1BD] text-xs sm:text-sm leading-relaxed mb-5">
                {language === 'th'
                  ? 'คุณสามารถส่งอีเมลหาผมโดยตรง หรือเชื่อมต่อผ่านแพลตฟอร์มด้านล่างนี้ได้ตลอดเวลาครับ'
                  : 'Prefer direct correspondence? Copy my verified email or visit my developer handles.'}
              </p>

              {/* Copyable Email Card */}
              <div className="p-4 rounded-2xl bg-[#0F141D] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-200 flex items-center justify-between gap-4 shadow-xl shadow-black/20">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="size-9 rounded-xl bg-[#141A24] border border-white/[0.08] flex items-center justify-center text-[#7890AA] shrink-0">
                    <Mail className="size-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#707A89] block">EMAIL</span>
                    <span className="text-xs sm:text-sm font-mono text-[#F2F4F7] font-medium truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-full bg-[#141A24] hover:bg-[#19212D] text-[#A9B1BD] hover:text-[#F2F4F7] border border-white/[0.08] text-xs font-mono transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="size-3.5 text-[#75A58E]" />
                      <span className="text-[#75A58E]">{t(uiContent.contact.copied)}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span>{t(uiContent.contact.copyEmail)}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links List */}
            <div>
              <span className="text-xs font-mono text-[#707A89] tracking-wide uppercase block mb-3">
                {language === 'th' ? 'เครือข่าย & แพลตฟอร์ม' : 'NETWORK & PROFILES'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {personalInfo.socials.map((s, idx) => {
                  const Icon = socialIconMap[s.iconName] || MessageSquare;
                  return (
                    <motion.a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={shouldReduceMotion ? {} : { y: -2 }}
                      className="p-3.5 rounded-2xl bg-[#0F141D] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-200 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="size-4 text-[#707A89] group-hover:text-[#7890AA] transition-colors" />
                        <span className="text-xs font-medium text-[#A9B1BD] group-hover:text-[#F2F4F7]">
                          {s.platform}
                        </span>
                      </div>
                      <ArrowUpRight className="size-3.5 text-[#707A89] group-hover:text-[#7890AA] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0F141D] border border-white/[0.08] shadow-2xl shadow-black/40 relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-3"
                  >
                    <div className="size-14 rounded-2xl bg-[#141A24] border border-[#75A58E]/30 flex items-center justify-center text-[#75A58E]">
                      <Check className="size-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#F2F4F7]">
                      {t(uiContent.contact.successTitle)}
                    </h3>
                    <p className="text-[#A9B1BD] text-xs sm:text-sm max-w-sm">
                      {t(uiContent.contact.successDesc)}
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 px-5 py-2.5 rounded-full bg-[#141A24] border border-white/[0.08] text-xs font-mono text-[#A9B1BD] hover:text-[#F2F4F7] transition-colors cursor-pointer"
                    >
                      {t(uiContent.contact.sendAnother)}
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-mono text-[#A9B1BD] mb-1.5">
                        {t(uiContent.contact.formName)} *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder={t(uiContent.contact.formNamePlaceholder)}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#090C12] border ${
                          errors.name ? 'border-rose-500' : 'border-white/[0.08] focus:border-[#7890AA]'
                        } text-[#F2F4F7] placeholder-[#707A89] text-xs sm:text-sm outline-none transition-colors duration-150`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="size-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-mono text-[#A9B1BD] mb-1.5">
                        {t(uiContent.contact.formEmail)} *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder={t(uiContent.contact.formEmailPlaceholder)}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#090C12] border ${
                          errors.email ? 'border-rose-500' : 'border-white/[0.08] focus:border-[#7890AA]'
                        } text-[#F2F4F7] placeholder-[#707A89] text-xs sm:text-sm outline-none transition-colors duration-150`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="size-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div>
                      <label className="block text-xs font-mono text-[#A9B1BD] mb-1.5">
                        {t(uiContent.contact.formMessage)} *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder={t(uiContent.contact.formMessagePlaceholder)}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#090C12] border ${
                          errors.message ? 'border-rose-500' : 'border-white/[0.08] focus:border-[#7890AA]'
                        } text-[#F2F4F7] placeholder-[#707A89] text-xs sm:text-sm outline-none transition-colors duration-150 resize-none`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="size-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-full bg-[#F2F4F7] hover:bg-white text-[#0A0E15] font-semibold text-xs sm:text-sm transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2 shadow-xl shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8FA5BD]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="size-3.5 border-2 border-[#0A0E15] border-t-transparent rounded-full animate-spin" />
                          <span>{t(uiContent.contact.submitting)}</span>
                        </>
                      ) : (
                        <>
                          <Send className="size-3.5" />
                          <span>{t(uiContent.contact.submitButton)}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
