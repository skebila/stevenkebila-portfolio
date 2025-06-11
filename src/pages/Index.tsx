
import ThemeToggle from '@/components/ThemeToggle';
import TerminalOverlay from '@/components/TerminalOverlay';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactSection from '@/components/ContactSection';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary light:bg-[#FCFCFC]">
      <ThemeToggle />
      <TerminalOverlay />
      
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-dark-surface border-t border-purple-muted/20 light:bg-white light:border-[#ECECEC]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/skebila"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-dark-bg border border-purple-muted/30 text-text-primary hover:border-purple-muted hover:text-purple-muted transition-all duration-300 light:bg-[#FCFCFC] light:border-[#ECECEC] light:text-[#5D3FD3] light:hover:border-[#5D3FD3]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-4 w-4" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/steven-kebila"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-dark-bg border border-purple-muted/30 text-text-primary hover:border-purple-muted hover:text-purple-muted transition-all duration-300 light:bg-[#FCFCFC] light:border-[#ECECEC] light:text-[#5D3FD3] light:hover:border-[#5D3FD3]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              
              <motion.a
                href="mailto:steven@launchab.com"
                className="inline-flex items-center justify-center w-10 h-10 bg-dark-bg border border-purple-muted/30 text-text-primary hover:border-purple-muted hover:text-purple-muted transition-all duration-300 light:bg-[#FCFCFC] light:border-[#ECECEC] light:text-[#5D3FD3] light:hover:border-[#5D3FD3]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-4 w-4" />
              </motion.a>
            </div>
            
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
