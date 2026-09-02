'use client';

import React from 'react';
import LoadingScreen from '../components/common/LoadingScreen';
import CustomCursor from '../components/common/CustomCursor';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/common/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0E14] text-[#F1F3F5] flex flex-col selection:bg-[#6E8FC7]/30 selection:text-[#F1F3F5] overflow-x-hidden">
      {/* HUD Boot Sequence / Loading Screen */}
      <LoadingScreen />

      {/* Interactive Custom Follower Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
