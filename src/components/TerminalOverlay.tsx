
import { useState, useEffect } from 'react';
import { X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'Welcome to dev-terminal v1.0.0',
    'Type "help" for available commands',
    ''
  ]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  const commands = {
    help: () => [
      'Available commands:',
      '  whoami      - Display user information',
      '  ls projects - List all projects',
      '  cat resume.txt - Display resume',
      '  skills      - Show technical skills',
      '  clear       - Clear terminal',
      '  exit        - Close terminal'
    ],
    whoami: () => [
      'Senior Full Stack Developer',
      '4+ years of experience',
      'Building scalable applications with clean code'
    ],
    'ls projects': () => [
      'project1/  E-Commerce Platform    [React, Node.js, MongoDB]',
      'project2/  Task Management App    [Vue.js, Express, PostgreSQL]',
      'project3/  Real-time Chat App     [Socket.io, Redis, Docker]',
      'project4/  API Gateway Service    [.NET Core, Microservices]'
    ],
    'cat resume.txt': () => [
      '=== RESUME ===',
      'Senior Full Stack Developer',
      'Experience: 4+ years',
      'Specialties: API Design, Frontend Architecture, DevOps',
      'Technologies: .NET, React, Firebase, Docker, AWS',
      'Contact: portfolio@developer.com'
    ],
    skills: () => [
      'Backend: .NET Core, Node.js, Python, PostgreSQL, MongoDB',
      'Frontend: React, Vue.js, TypeScript, Tailwind CSS',
      'Tools: Docker, Git, VS Code, Postman, Firebase',
      'Cloud: AWS, Azure, Vercel, Netlify'
    ],
    clear: () => [],
    exit: () => {
      setIsOpen(false);
      return [];
    }
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const newOutput = [...output, `$ ${cmd}`];
    
    if (command === 'clear') {
      setOutput([]);
    } else if (command === 'exit') {
      setIsOpen(false);
      return;
    } else if (commands[command as keyof typeof commands]) {
      const result = commands[command as keyof typeof commands]();
      setOutput([...newOutput, ...result, '']);
    } else {
      setOutput([...newOutput, `Command not found: ${cmd}`, '']);
    }
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 terminal-overlay flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-dark-bg border border-purple-muted/30 w-full max-w-4xl h-[70vh] p-6 font-mono text-sm light:terminal-content light:border-gray-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-purple-muted light:text-purple-600" />
                <span className="text-purple-muted light:text-purple-600">dev-terminal</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-text-primary light:text-gray-500 light:hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="h-[calc(100%-80px)] overflow-y-auto mb-4 space-y-1">
              {output.map((line, index) => (
                <div key={index} className={line.startsWith('$') ? 'text-blue-cool light:text-purple-600' : 'text-text-secondary light:text-gray-600'}>
                  {line}
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-blue-cool light:text-purple-600">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-text-primary light:text-gray-800"
                placeholder="Enter command..."
                autoFocus
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalOverlay;
