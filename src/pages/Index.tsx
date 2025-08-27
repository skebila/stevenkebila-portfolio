
import ThemeToggle from '@/components/ThemeToggle';
import TerminalOverlay from '@/components/TerminalOverlay';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactSection from '@/components/ContactSection';
import ProjectsGrid from '@/components/ProjectsGrid';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

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
            {/* Social icons */}
            <div className="flex justify-center space-x-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.a
                    href="https://www.fiverr.com/s/DB3Q5NX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-dark-surface border border-purple-muted/30 text-text-primary hover:border-purple-muted hover:text-purple-muted transition-all duration-300 light:bg-white light:border-[#ECECEC] light:text-[#5D3FD3] light:hover:border-[#5D3FD3]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Fiverr"
                  >
                    <span className="font-extrabold text-[20px] leading-none h-5 w-5 flex items-center justify-center">
                      fi
                    </span>
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-mono">Fiverr</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.a
                    href="https://github.com/skebila"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-dark-surface border border-purple-muted/30 text-text-primary hover:border-purple-muted hover:text-purple-muted transition-all duration-300 light:bg-white light:border-[#ECECEC] light:text-[#5D3FD3] light:hover:border-[#5D3FD3]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-mono">GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.a
                    href="https://www.linkedin.com/in/steven-kebila"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-dark-surface border border-purple-muted/30 text-text-primary hover:border-purple-muted hover:text-purple-muted transition-all duration-300 light:bg-white light:border-[#ECECEC] light:text-[#5D3FD3] light:hover:border-[#5D3FD3]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-mono">LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.a
                    href="mailto:steven@launchab.com"
                    className="inline-flex items-center justify-center w-12 h-12 bg-dark-surface border border-purple-muted/30 text-text-primary hover:border-purple-muted hover:text-purple-muted transition-all duration-300 light:bg-white light:border-[#ECECEC] light:text-[#5D3FD3] light:hover:border-[#5D3FD3]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-mono">Email</p>
                </TooltipContent>
              </Tooltip>
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
