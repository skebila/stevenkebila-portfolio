
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Globe3D = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        ref={globeRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-64 h-64"
      >
        {/* Globe base */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-cool/20 to-purple-muted/20 border border-purple-muted/30 relative overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0">
            {/* Latitude lines */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`lat-${i}`}
                className="absolute w-full border-t border-blue-cool/30"
                style={{ top: `${20 + i * 15}%` }}
              />
            ))}
            {/* Longitude lines */}
            {[...Array(7)].map((_, i) => (
              <div
                key={`lng-${i}`}
                className="absolute h-full border-l border-blue-cool/30"
                style={{ left: `${10 + i * 13}%` }}
              />
            ))}
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full animate-pulse-glow" />
          
          {/* Connection points */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {[
              { top: '30%', left: '40%' },
              { top: '60%', left: '70%' },
              { top: '45%', left: '20%' },
              { top: '75%', left: '50%' },
            ].map((pos, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.5 
                }}
                className="absolute w-3 h-3 bg-green-muted rounded-full"
                style={pos}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-purple-muted/50 border border-purple-muted"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-cool/50 border border-blue-cool"
        />
      </motion.div>
    </div>
  );
};

export default Globe3D;
