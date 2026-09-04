'use client';

import React from 'react';
import LoadingScreen from '../components/common/LoadingScreen';
import CustomCursor from '../components/common/CustomCursor';
import ScrollProgress from '../components/common/ScrollProgress';
import FloatingNavbar from '../components/hero/FloatingNavbar';
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
    <div className="relative min-h-screen bg-[#090C12] text-[#F2F4F7] flex flex-col selection:bg-[#7890AA]/30 selection:text-[#F2F4F7] overflow-x-hidden">
      {/* Cinematic Intro Calibration Sequence */}
      <LoadingScreen />

      {/* Minimal Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Precision Custom Cursor for Fine Pointer */}
      <CustomCursor />

      {/* Persistent Floating Navigation */}
      <FloatingNavbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Hero Section & Technology Marquee */}
        <div className="w-full px-3 sm:px-5 md:px-8 pt-20 sm:pt-24 md:pt-28">
          <PortfolioHero />
          <TechnologyMarquee />
        </div>

        {/* Existing Profile, Skills System Map, Projects Showcase & Contact */}
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
