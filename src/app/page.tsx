'use client';

import React from 'react';
import LoadingScreen from '../components/common/LoadingScreen';
import CustomCursor from '../components/common/CustomCursor';
import PortfolioHero from '../components/hero/PortfolioHero';
import TechnologyMarquee from '../components/marquee/TechnologyMarquee';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/common/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090c12] text-[#f2f4f7] flex flex-col selection:bg-[#7890aa]/30 selection:text-[#f2f4f7] overflow-x-hidden">
      {/* HUD Boot Sequence / Loading Screen */}
      <LoadingScreen />

      {/* Interactive Custom Follower Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Hero Section & Technology Marquee */}
        <div className="w-full px-3 sm:px-5 md:px-8 pt-3 sm:pt-4 md:pt-6">
          <PortfolioHero />
          <TechnologyMarquee />
        </div>

        {/* Existing Profile, Portfolio & Contact Sections */}
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
