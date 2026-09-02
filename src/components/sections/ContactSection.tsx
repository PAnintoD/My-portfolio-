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
  Sparkles,
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
  Dribbble: DribbbleIcon
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

  // Validate form inputs
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

  /**
   * FORM SUBMISSION HANDLER
   * =======================
   * Currently running in realistic Mock Mode for instant demonstration.
   * To connect to a live email service:
   *
   * 1. RESEND (Recommended for Next.js):
   *    - npm install resend
   *    - Create an API route in `src/app/api/send/route.ts`
   *    - In `route.ts`:
   *        import { Resend } from 'resend';
   *        const resend = new Resend(process.env.RESEND_API_KEY);
   *        export async function POST(req: Request) {
   *          const body = await req.json();
   *          await resend.emails.send({ from: 'onboarding@resend.dev', to: 'your-email@domain.com', ... });
   *        }
   *    - Replace the setTimeout below with: await fetch('/api/send', { method: 'POST', body: JSON.stringify(formData) });
   *
   * 2. EMAILJS:
   *    - npm install @emailjs/browser
   *    - Call emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulated network latency
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Trigger festive confetti explosion
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00f5d4', '#8b5cf6', '#38bdf8', '#ffffff']
      });
    } catch {
      alert('An error occurred during submission.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Copy email to clipboard helper
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase block mb-2">
            {t(uiContent.contact.sectionTag)}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t(uiContent.contact.heading)}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t(uiContent.contact.subheading)}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>{language === 'th' ? 'ข้อมูลการติดต่อโดยตรง' : 'Direct Channels'}</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {language === 'th'
                  ? 'คุณสามารถส่งอีเมลหาผมโดยตรง หรือเชื่อมต่อผ่านแพลตฟอร์มโซเชียลมีเดียด้านล่างนี้ได้ตลอดเวลาครับ'
                  : 'Prefer direct correspondence? Copy my email or connect through any of my verified developer handles.'}
              </p>

              {/* Copyable Email Card */}
              <div className="p-5 rounded-2xl bg-[#0a0e1a] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">OFFICIAL EMAIL</span>
                    <span className="text-sm font-mono text-white font-medium truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 text-xs font-mono transition-all shrink-0 flex items-center gap-1.5"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t(uiContent.contact.copied)}</span>
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
              <span className="text-xs font-mono text-slate-400 tracking-wider uppercase block mb-3">
                {language === 'th' ? 'เครือข่าย & ชุมชน' : 'NETWORK & PROFILES'}
              </span>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.socials.map((s, idx) => {
                  const Icon = socialIconMap[s.iconName] || MessageSquare;
                  return (
                    <a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-[#090d18] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                          {s.platform}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-3xl bg-[#0a0e1a]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {t(uiContent.contact.successTitle)}
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md">
                      {t(uiContent.contact.successDesc)}
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 px-6 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs font-mono text-cyan-300 hover:bg-white/10 transition-colors"
                    >
                      {t(uiContent.contact.sendAnother)}
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
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
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                          errors.name ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                        } text-white placeholder-slate-500 text-sm outline-none transition-colors duration-200`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
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
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                          errors.email ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                        } text-white placeholder-slate-500 text-sm outline-none transition-colors duration-200`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        {t(uiContent.contact.formMessage)} *
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder={t(uiContent.contact.formMessagePlaceholder)}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                          errors.message ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                        } text-white placeholder-slate-500 text-sm outline-none transition-colors duration-200 resize-none`}
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,245,212,0.4)] hover:shadow-[0_0_35px_rgba(0,245,212,0.6)] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>{t(uiContent.contact.submitting)}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
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
