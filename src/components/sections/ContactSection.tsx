'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, uiContent } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import confetti from 'canvas-confetti';
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DribbbleIcon
} from '../common/BrandIcons';

const socialIconMap: Record<string, React.ElementType> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
  Dribbble: DribbbleIcon,
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
      errs.name = language === 'th' ? 'กรุณาระบุชื่อของคุณ' : 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = language === 'th' ? 'กรุณาระบุอีเมล' : 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = language === 'th' ? 'รูปแบบอีเมลไม่ถูกต้อง' : 'Invalid email address format';
    }
    if (!formData.message.trim()) {
      errs.message = language === 'th' ? 'กรุณาระบุข้อความ' : 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = language === 'th' ? 'ข้อความต้องมีความยาวอย่างน้อย 10 ตัวอักษร' : 'Message must be at least 10 characters';
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
        colors: ['#6E8FC7', '#A8B0BD', '#F1F3F5']
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
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0E14]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-mono text-xs text-[#737D8C] tracking-[0.2em] uppercase block mb-2">
            {t(uiContent.contact.sectionTag)}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F1F3F5] mb-3">
            {t(uiContent.contact.heading)}
          </h2>
          <p className="text-[#A8B0BD] text-sm sm:text-base">
            {t(uiContent.contact.subheading)}
          </p>
          <div className="w-12 h-[2px] bg-[#6E8FC7]/40 rounded-full mx-auto mt-4" />
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
              <h3 className="text-base font-semibold text-[#F1F3F5] mb-2">
                {language === 'th' ? 'ข้อมูลการติดต่อโดยตรง' : 'Direct Channels'}
              </h3>
              <p className="text-[#A8B0BD] text-xs sm:text-sm leading-relaxed mb-5">
                {language === 'th'
                  ? 'คุณสามารถส่งอีเมลหาผมโดยตรง หรือเชื่อมต่อผ่านแพลตฟอร์มด้านล่างนี้ได้ตลอดเวลาครับ'
                  : 'Prefer direct correspondence? Copy my verified email or visit my developer handles.'}
              </p>

              {/* Copyable Email Card */}
              <div className="p-4 rounded-xl bg-[#121722] border border-white/08 hover:border-white/18 transition-all duration-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-[#171D29] border border-white/08 flex items-center justify-center text-[#6E8FC7] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#737D8C] block">EMAIL</span>
                    <span className="text-xs sm:text-sm font-mono text-[#F1F3F5] font-medium truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#171D29] hover:bg-[#1C2333] text-[#A8B0BD] hover:text-[#F1F3F5] border border-white/08 text-xs font-mono transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#62A888]" />
                      <span className="text-[#62A888]">{t(uiContent.contact.copied)}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t(uiContent.contact.copyEmail)}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links List */}
            <div>
              <span className="text-xs font-mono text-[#737D8C] tracking-wide uppercase block mb-3">
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
                      className="p-3.5 rounded-xl bg-[#121722] border border-white/08 hover:border-white/18 transition-all duration-200 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#737D8C] group-hover:text-[#6E8FC7] transition-colors" />
                        <span className="text-xs font-medium text-[#A8B0BD] group-hover:text-[#F1F3F5]">
                          {s.platform}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#737D8C] group-hover:text-[#6E8FC7] transition-colors" />
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
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121722] border border-white/08 shadow-xl shadow-black/30 relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="py-10 text-center flex flex-col items-center justify-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#171D29] border border-[#62A888]/30 flex items-center justify-center text-[#62A888]">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#F1F3F5]">
                      {t(uiContent.contact.successTitle)}
                    </h3>
                    <p className="text-[#A8B0BD] text-xs sm:text-sm max-w-sm">
                      {t(uiContent.contact.successDesc)}
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 px-4 py-2 rounded-lg bg-[#171D29] border border-white/08 text-xs font-mono text-[#A8B0BD] hover:text-[#F1F3F5] transition-colors"
                    >
                      {t(uiContent.contact.sendAnother)}
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-mono text-[#A8B0BD] mb-1.5">
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
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B0E14] border ${
                          errors.name ? 'border-rose-500' : 'border-white/08 focus:border-[#6E8FC7]'
                        } text-[#F1F3F5] placeholder-[#737D8C] text-xs sm:text-sm outline-none transition-colors duration-150`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-mono text-[#A8B0BD] mb-1.5">
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
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B0E14] border ${
                          errors.email ? 'border-rose-500' : 'border-white/08 focus:border-[#6E8FC7]'
                        } text-[#F1F3F5] placeholder-[#737D8C] text-xs sm:text-sm outline-none transition-colors duration-150`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div>
                      <label className="block text-xs font-mono text-[#A8B0BD] mb-1.5">
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
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B0E14] border ${
                          errors.message ? 'border-rose-500' : 'border-white/08 focus:border-[#6E8FC7]'
                        } text-[#F1F3F5] placeholder-[#737D8C] text-xs sm:text-sm outline-none transition-colors duration-150 resize-none`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-lg bg-[#6E8FC7] hover:bg-[#87A3D1] text-[#0B0E14] font-semibold text-xs sm:text-sm transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-[#0B0E14] border-t-transparent rounded-full animate-spin" />
                          <span>{t(uiContent.contact.submitting)}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
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
