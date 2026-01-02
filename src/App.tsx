import { Toaster } from './components/ui/sonner';
import { TwinkleBackground } from './components/shared/TwinkleBackground';
import { FloatingNav } from './components/sections/FloatingNav';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectSection.tsx';
import { BlogSection } from './components/sections/BlogSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { CodeSnippetsSection } from './components/sections/CodeSnippetsSection';
import { HackathonsSection } from './components/sections/HackathonsSection';
import { OpenSourceSection } from './components/sections/OpenSourceSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { ToolsSection } from './components/sections/ToolsSection';
import { InteractiveFeaturesSection } from './components/sections/InteractiveFeaturesSection';

import { ExperienceSection } from './components/sections/ExperienceSection';
import { RoadmapSection } from './components/sections/RoadmapSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Twinkling Stars Background */}
      <TwinkleBackground />
      
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Core Sections */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        
        {/* New Major Sections */}
        <BlogSection />
        <CertificationsSection />
        <CodeSnippetsSection />
        <HackathonsSection />
        <OpenSourceSection />
        <AchievementsSection />
        <CaseStudiesSection />
        <ToolsSection />
        <InteractiveFeaturesSection />

        {/* Original Sections */}
        <ExperienceSection />
        <RoadmapSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />
    </div>
  );
}
