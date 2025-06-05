
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const systemPreference = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initialTheme = savedTheme || systemPreference;
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: 'dark' | 'light') => {
    const root = window.document.documentElement;
    if (newTheme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 bg-dark-surface border-purple-muted/20 hover:border-purple-muted/60 text-text-primary transition-all duration-300 light:bg-white light:border-gray-300 light:hover:border-purple-400 light:text-gray-700 light:shadow-lg"
      >
        <motion.div
          key={theme}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="h-4 w-4 mr-2" />
              Sunset Light
            </>
          ) : (
            <>
              <Moon className="h-4 w-4 mr-2" />
              Dev Dark
            </>
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
