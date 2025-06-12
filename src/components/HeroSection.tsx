
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, User } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openResume = () => {
    window.open('https://sheridanc-my.sharepoint.com/personal/kuatewaf_shernet_sheridancollege_ca/_layouts/15/Doc.aspx?sourcedoc={fda1d42a-ab0d-4c24-9dbc-c5d84d44cdcb}&action=embedview', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative terminal-bg overflow-hidden">
      {/* Enhanced animated gradient background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-cyan-800/10 to-black dark:from-purple-900/10 dark:via-cyan-800/10 dark:to-black light:bg-none"></div>
      
      {/* Light theme floating elements for visual interest */}
      <div className="absolute inset-0 light:block hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-30 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-25 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full opacity-20 blur-sm"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm md:text-base font-space font-bold text-text-secondary/70 mb-2 tracking-widest uppercase light:text-text-primary light:text-lg light:bg-gradient-to-r light:from-purple-600 light:to-orange-500 light:bg-clip-text light:text-transparent"
          >
            Steven Kebila 👨🏽‍💻
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-space font-bold mb-4"
          >
            <span className="gradient-text">Full Stack</span>{" "}
            <span className="gradient-text light:gradient-text-coral">Developer</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary mb-4 max-w-3xl mx-auto light:text-gray-600 light:font-medium"
          >
            Building clean APIs, snappy interfaces, and scalable apps
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-text-tertiary mb-12 max-w-2xl mx-auto light:text-gray-500"
          >
            4+ years of experience architecting robust backend systems and crafting intuitive frontend experiences
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={scrollToAbout}
                className="bg-purple-muted hover:bg-purple-muted/80 text-white border-0 px-8 py-4 text-lg font-medium transition-all duration-300 light:bg-gradient-to-r light:from-[#5D3FD3] light:to-[#4A2FB8] light:hover:from-[#4A2FB8] light:hover:to-[#3A1F98] light:text-white light:shadow-lg light:shadow-purple-200"
              >
                <User className="mr-2 h-5 w-5" />
                Learn About Me
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg"
                onClick={openResume}
                className="border-blue-cool text-blue-cool hover:bg-blue-cool hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300 light:bg-gradient-to-r light:from-[#F46A4E] light:to-[#E55D4A] light:hover:from-[#E55D4A] light:hover:to-[#D54E3A] light:text-white light:border-transparent light:shadow-lg light:shadow-orange-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Grab My Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-text-tertiary text-xs md:text-sm font-mono flex items-center light:text-gray-400 light:bg-white/60 light:backdrop-blur-sm light:px-4 light:py-2 light:rounded-full light:shadow-sm">
          Press "/" to open terminal — try commands like whoami, experience, resume
          <span className="ml-1 animate-pulse text-purple-muted light:text-[#5D3FD3]">|</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-8 hidden md:flex items-center gap-2"
      >
        <span className="text-xs font-mono text-slate-600/50 light:text-gray-400 light:bg-white/60 light:backdrop-blur-sm light:px-3 light:py-1 light:rounded-full">
          Made by Steven Kebila
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
