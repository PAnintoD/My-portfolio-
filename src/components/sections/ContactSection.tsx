'use client';

import React, { useState } from 'react';
import FadeIn from '../motion/FadeIn';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#090c12] text-[#f2f4f7] scroll-mt-20 border-t border-white/5"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Heading */}
        <FadeIn>
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs text-[#7f9ab8] tracking-widest uppercase mb-3 block">
              {'// 05 · INITIATE CONTACT'}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#f2f4f7] tracking-tight leading-tight">
              Let’s build something reliable together.
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-[#a5afbc] leading-relaxed">
              Have an IoT, computer vision, web application, or automation workflow project in mind? Reach out directly via email or inspect my code repositories.
            </p>
          </div>
        </FadeIn>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Primary CTA Card: Direct Email */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-white/10 bg-[#0d1119] p-7 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#7f9ab8] uppercase tracking-wider">
                    PRIMARY CONTACT CHANNEL
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#a5afbc] hover:text-[#f2f4f7] transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="size-3 text-[#78a68e]" /> : <Copy className="size-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f2f4f7] mb-3 break-all">
                  {personalInfo.email}
                </h3>

                <p className="font-sans text-sm text-[#a5afbc] leading-relaxed mb-8 max-w-xl">
                  Available for technical consultations, software development contracts, IoT hardware bridging, and AI vision model deployments.
                </p>
              </div>

              {/* One Clear Primary CTA */}
              <div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f2f4f7] px-7 py-3 text-xs font-semibold tracking-wider text-[#090c12] hover:bg-white transition-colors"
                >
                  <Mail className="size-4" />
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Side Card: Profiles & Location */}
          <FadeIn delay={0.2}>
            <div className="h-full rounded-2xl border border-white/10 bg-[#0d1119] p-7 flex flex-col justify-between space-y-6">
              <div>
                <span className="font-mono text-xs text-[#7f9ab8] uppercase tracking-wider block mb-4">
                  PROFILES &amp; DETAILS
                </span>

                <div className="space-y-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#121824] border border-white/5 hover:border-white/15 text-sm text-[#f2f4f7] transition-colors group"
                  >
                    <span className="flex items-center gap-2.5">
                      <GithubIcon className="size-4 text-[#a5afbc] group-hover:text-white" />
                      <span>GitHub Profile</span>
                    </span>
                    <ArrowUpRight className="size-4 text-[#697586] group-hover:text-[#f2f4f7]" />
                  </a>

                  <a
                    href="https://github.com/PAnintoD/My-portfolio-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#121824] border border-white/5 hover:border-white/15 text-sm text-[#f2f4f7] transition-colors group"
                  >
                    <span className="flex items-center gap-2.5">
                      <GithubIcon className="size-4 text-[#a5afbc] group-hover:text-white" />
                      <span>Source Repository</span>
                    </span>
                    <ArrowUpRight className="size-4 text-[#697586] group-hover:text-[#f2f4f7]" />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#a5afbc]">
                <MapPin className="size-3.5 text-[#7f9ab8] shrink-0" />
                <span>Thailand · Available Remote &amp; On-site</span>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
