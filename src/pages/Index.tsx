
import ThemeToggle from '@/components/ThemeToggle';
import TerminalOverlay from '@/components/TerminalOverlay';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactSection from '@/components/ContactSection';
import ProjectsGrid from '@/components/ProjectsGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary light:bg-[#FCFCFC]">
      <Navigation />
      {/* <ThemeToggle /> */}
      <TerminalOverlay />
      
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectsGrid />
        <ContactSection />
      </div>
      
      {/* Footer */}
      <footer className="py-8 bg-dark-surface border-t border-purple-muted/20 light:bg-white light:border-[#ECECEC]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Copyright */}
            <p className="text-text-tertiary font-mono text-sm text-center">
              © 2025 Full Stack Developer. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
