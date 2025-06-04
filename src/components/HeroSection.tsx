
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative terminal-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl font-inter font-medium text-text-secondary mb-3"
          >
            Steven Kebila
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-space font-bold mb-6 gradient-text"
          >
            Full Stack Developer
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary mb-4 max-w-3xl mx-auto"
          >
            Building clean APIs, snappy interfaces, and scalable apps
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-text-tertiary mb-12 max-w-2xl mx-auto"
          >
            4+ years of experience architecting robust backend systems and crafting intuitive frontend experiences
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-purple-muted hover:bg-purple-muted/80 text-white border-0 px-8 py-4 text-lg font-medium"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              See My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-cool text-blue-cool hover:bg-blue-cool hover:text-white px-8 py-4 text-lg font-medium"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-text-tertiary text-sm font-mono">
          Press "/" to open terminal
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
