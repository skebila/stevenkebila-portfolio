
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Send, Linkedin, Mail } from 'lucide-react';
import Globe3D from './Globe3D';

const ContactSection = () => {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-space font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-text-secondary font-mono">
            // Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Name
                </label>
                <Input 
                  placeholder="Your name"
                  className="bg-dark-surface border-purple-muted/30 text-text-primary placeholder-text-tertiary focus:border-purple-muted"
                />
              </div>
              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-dark-surface border-purple-muted/30 text-text-primary placeholder-text-tertiary focus:border-purple-muted"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-text-primary font-medium mb-2">
                Subject
              </label>
              <Input 
                placeholder="Project inquiry / Collaboration"
                className="bg-dark-surface border-purple-muted/30 text-text-primary placeholder-text-tertiary focus:border-purple-muted"
              />
            </div>
            
            <div>
              <label className="block text-text-primary font-medium mb-2">
                Message
              </label>
              <Textarea 
                placeholder="Tell me about your project..."
                rows={6}
                className="bg-dark-surface border-purple-muted/30 text-text-primary placeholder-text-tertiary focus:border-purple-muted resize-none"
              />
            </div>
            
            <Button 
              size="lg"
              className="w-full bg-gradient-to-r from-purple-muted to-blue-cool hover:from-purple-muted/80 hover:to-blue-cool/80 text-white border-0"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
            
            <div className="text-center pt-4">
              <p className="text-text-tertiary font-mono text-sm mb-4">
                Or connect with me directly:
              </p>
              <div className="flex justify-center space-x-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href="https://www.linkedin.com/in/steven-kebila"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 bg-dark-surface border border-purple-muted/30 text-text-primary hover:border-purple-muted hover:text-purple-muted transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
                      className="inline-flex items-center justify-center w-12 h-12 bg-dark-surface border border-purple-muted/30 text-text-primary hover:border-purple-muted hover:text-purple-muted transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="h-5 w-5" />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-mono">Email</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </motion.div>

          {/* 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md h-96">
              <Globe3D />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
