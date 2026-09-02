'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

const socialIconMap: Record<string, React.ElementType> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail
};

export default function ContactSection() {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

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
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#7890aa', '#a9b1bd', '#f2f4f7']
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
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090c12]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-mono text-xs text-[#707a89] tracking-[0.2em] uppercase block mb-2">
            {t(uiContent.contact.sectionTag)}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f2f4f7] mb-3">
            {t(uiContent.contact.heading)}
          </h2>
          <p className="text-[#a9b1bd] text-sm sm:text-base">
            {t(uiContent.contact.subheading)}
          </p>
          <div className="w-12 h-[2px] bg-[#7890aa]/40 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="text-base font-semibold text-[#f2f4f7] mb-2">
                {language === 'th' ? 'ข้อมูลการติดต่อโดยตรง' : 'Direct Channels'}
              </h3>
              <p className="text-[#a9b1bd] text-xs sm:text-sm leading-relaxed mb-5">
                {language === 'th'
                  ? 'คุณสามารถส่งอีเมลหาผมโดยตรง หรือเชื่อมต่อผ่านแพลตฟอร์มด้านล่างนี้ได้ตลอดเวลาครับ'
                  : 'Prefer direct correspondence? Copy my verified email or visit my developer handles.'}
              </p>

              {/* Copyable Email Card */}
              <div className="p-4 rounded-2xl bg-[#0f141d] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="size-9 rounded-xl bg-[#141a24] border border-white/[0.08] flex items-center justify-center text-[#7890aa] shrink-0">
                    <Mail className="size-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#707a89] block">EMAIL</span>
                    <span className="text-xs sm:text-sm font-mono text-[#f2f4f7] font-medium truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full bg-[#141a24] hover:bg-[#19212d] text-[#a9b1bd] hover:text-[#f2f4f7] border border-white/[0.08] text-xs font-mono transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="size-3.5 text-[#75a58e]" />
                      <span className="text-[#75a58e]">{t(uiContent.contact.copied)}</span>
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
              <span className="text-xs font-mono text-[#707a89] tracking-wide uppercase block mb-3">
                {language === 'th' ? 'เครือข่าย & แพลตฟอร์ม' : 'NETWORK & PROFILES'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {personalInfo.socials.map((s, idx) => {
                  const Icon = socialIconMap[s.iconName] || MessageSquare;
                  return (
                    <a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-[#0f141d] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-200 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="size-4 text-[#707a89] group-hover:text-[#7890aa] transition-colors" />
                        <span className="text-xs font-medium text-[#a9b1bd] group-hover:text-[#f2f4f7]">
                          {s.platform}
                        </span>
                      </div>
                      <ArrowUpRight className="size-3.5 text-[#707a89] group-hover:text-[#7890aa] transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0f141d] border border-white/[0.08] shadow-xl shadow-black/30 relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="py-10 text-center flex flex-col items-center justify-center space-y-3"
                  >
                    <div className="size-12 rounded-2xl bg-[#141a24] border border-[#75a58e]/30 flex items-center justify-center text-[#75a58e]">
                      <Check className="size-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#f2f4f7]">
                      {t(uiContent.contact.successTitle)}
                    </h3>
                    <p className="text-[#a9b1bd] text-xs sm:text-sm max-w-sm">
                      {t(uiContent.contact.successDesc)}
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 px-4 py-2 rounded-full bg-[#141a24] border border-white/[0.08] text-xs font-mono text-[#a9b1bd] hover:text-[#f2f4f7] transition-colors"
                    >
                      {t(uiContent.contact.sendAnother)}
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-mono text-[#a9b1bd] mb-1.5">
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
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#090c12] border ${
                          errors.name ? 'border-rose-500' : 'border-white/[0.08] focus:border-[#7890aa]'
                        } text-[#f2f4f7] placeholder-[#707a89] text-xs sm:text-sm outline-none transition-colors duration-150`}
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
                      <label className="block text-xs font-mono text-[#a9b1bd] mb-1.5">
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
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#090c12] border ${
                          errors.email ? 'border-rose-500' : 'border-white/[0.08] focus:border-[#7890aa]'
                        } text-[#f2f4f7] placeholder-[#707a89] text-xs sm:text-sm outline-none transition-colors duration-150`}
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
                      <label className="block text-xs font-mono text-[#a9b1bd] mb-1.5">
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
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#090c12] border ${
                          errors.message ? 'border-rose-500' : 'border-white/[0.08] focus:border-[#7890aa]'
                        } text-[#f2f4f7] placeholder-[#707a89] text-xs sm:text-sm outline-none transition-colors duration-150 resize-none`}
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
                      className="w-full py-3 rounded-full bg-[#f2f4f7] hover:bg-white text-[#0a0e15] font-semibold text-xs sm:text-sm transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2 shadow-lg shadow-black/20"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="size-3.5 border-2 border-[#0a0e15] border-t-transparent rounded-full animate-spin" />
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
