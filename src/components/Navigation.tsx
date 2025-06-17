import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Code, User, FolderOpen, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about-section', icon: User },
    { name: 'Experience', href: '#experience-section', icon: Code },
    { name: 'Projects', href: '#projects-section', icon: FolderOpen },
    { name: 'Contact', href: '#contact-section', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 80; // Adjust for fixed navbar height
      window.scrollTo({ top: offset, behavior: 'smooth' });
      setIsOpen(false); // Close the mobile menu after scrolling
    } else {
      console.error(`Section with ID ${href} not found.`);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-purple-muted/20 light:bg-white/80 light:border-[#ECECEC]"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-mono font-bold text-lg text-text-primary cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-purple-muted light:text-[#5D3FD3]">{"<"}</span>
            Steven
            <span className="text-purple-muted light:text-[#5D3FD3]">{"/>"}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                href={item.href}
                className="flex items-center space-x-2 text-text-secondary hover:text-text-primary font-mono text-sm transition-colors duration-200 light:text-gray-600 light:hover:text-[#5D3FD3]"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}
            
            {/* Terminal indicator */}
            <div className="flex items-center space-x-2 text-text-tertiary font-mono text-xs light:text-gray-400">
              <div className="w-2 h-2 bg-green-muted rounded-full animate-pulse light:bg-[#2CB1BC]"></div>
              <span>terminal ready</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-purple-muted/20 light:border-[#ECECEC]">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                whileHover={{ x: 4 }}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  scrollToSection(item.href); // Smooth scroll
                }}
                className="flex items-center space-x-3 text-text-secondary hover:text-text-primary font-mono text-sm transition-colors duration-200 w-full text-left light:text-gray-600 light:hover:text-[#5D3FD3]"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
