'use client';

import React from 'react';
import Navbar from '../components/common/Navbar';
import PortfolioHero from '../components/hero/PortfolioHero';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/common/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#090c12] text-[#f2f4f7]">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <PortfolioHero />

      {/* 3. About */}
      <AboutSection />

      {/* 4. Skills */}
      <SkillsSection />

      {/* 5. Projects */}
      <ProjectsSection />

      {/* 6. Experience */}
      <ExperienceSection />

      {/* 7. Contact */}
      <ContactSection />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
