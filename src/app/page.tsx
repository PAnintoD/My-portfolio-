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
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 flex flex-col selection:bg-cyan-400 selection:text-slate-950 overflow-x-hidden">
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
