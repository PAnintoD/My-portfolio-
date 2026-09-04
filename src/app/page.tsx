'use client';

import React from 'react';
import LoadingScreen from '../components/common/LoadingScreen';
import CustomCursor from '../components/common/CustomCursor';
import ScrollProgress from '../components/common/ScrollProgress';
import FloatingNavbar from '../components/hero/FloatingNavbar';
import PortfolioHero from '../components/hero/PortfolioHero';
import TechnologyMarquee from '../components/marquee/TechnologyMarquee';
import AboutSection from '../components/sections/AboutSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/common/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080A0F] text-[#F0F3F6] flex flex-col selection:bg-[#7F9AB8]/30 selection:text-[#F0F3F6] overflow-x-clip">
      {/* First-Session Calibration Sequence */}
      <LoadingScreen />

      {/* Responsive Precision Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Restrained Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Floating Header Navigation */}
      <FloatingNavbar />

      {/* Main Content Area */}
      <main className="relative flex-1 flex flex-col overflow-x-clip bg-[#080A0F] text-[#F0F3F6]">
        {/* 1. Hero Section */}
        <PortfolioHero />

        {/* 2. Technology Marquee */}
        <TechnologyMarquee />

        {/* 3. Light About Section */}
        <AboutSection />

        {/* 4. Dark Expertise Section */}
        <ExpertiseSection />

        {/* 5. Light Projects Section (Sticky Stacking Cards) */}
        <ProjectsSection />

        {/* 6. Dark Experience Section (Timeline) */}
        <ExperienceSection />

        {/* 7. Light Contact Section */}
        <ContactSection />
      </main>

      {/* 8. Compact Dark Site Footer */}
      <Footer />
    </div>
  );
}
