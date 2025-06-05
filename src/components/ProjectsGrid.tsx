import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const ProjectsGrid = () => {
  const projects = {
    'full-stack': [
      {
        title: 'ClearForms',
        description: 'HR form manager with approval tracking',
        tech: [
          { name: 'React', category: 'react' },
          { name: 'Node.js', category: 'node' },
          { name: 'PostgreSQL', category: 'default' },
          { name: 'Docker', category: 'docker' }
        ],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'StockVision',
        description: 'Inventory dashboard with sales insights',
        tech: [
          { name: 'React', category: 'react' },
          { name: '.NET Core', category: 'dotnet' },
          { name: 'SQL Server', category: 'default' },
          { name: 'Redis', category: 'default' }
        ],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'LaunchFlow',
        description: 'CI/CD monitoring tool for dev teams',
        tech: [
          { name: 'Vue.js', category: 'default' },
          { name: 'Node.js', category: 'node' },
          { name: 'MongoDB', category: 'default' },
          { name: 'Docker', category: 'docker' }
        ],
        liveUrl: '#',
        codeUrl: '#'
      }
    ],
    'frontend': [
      {
        title: 'FormDeck',
        description: 'Multi-step form builder with validation and PDF export',
        tech: [
          { name: 'React', category: 'react' },
          { name: 'TypeScript', category: 'typescript' },
          { name: 'Tailwind', category: 'default' },
          { name: 'jsPDF', category: 'default' }
        ],
        liveUrl: '#',
        codeUrl: '#'
      }
    ],
    'backend': [
      {
        title: 'WorkflowCentral',
        description: 'Admin tool for managing internal requests',
        tech: [
          { name: '.NET Core', category: 'dotnet' },
          { name: 'SignalR', category: 'default' },
          { name: 'PostgreSQL', category: 'default' },
          { name: 'Redis', category: 'default' }
        ],
        liveUrl: '#',
        codeUrl: '#'
      },
      {
        title: 'InsightTrack',
        description: 'Real-time business analytics dashboard',
        tech: [
          { name: 'Python', category: 'default' },
          { name: 'FastAPI', category: 'default' },
          { name: 'MongoDB', category: 'default' },
          { name: 'Celery', category: 'default' }
        ],
        liveUrl: '#',
        codeUrl: '#'
      }
    ]
  };

  const getTagClasses = (category: string) => {
    const baseClasses = "px-2 py-1 text-xs font-mono border transition-all duration-200";
    return `${baseClasses} light:tag-${category}`;
  };

  const renderProjectCard = (project: any, index: number) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="project-card bg-dark-bg p-6 h-full flex flex-col light:bg-white border border-purple-muted/20 light:border-[#ECECEC] hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-xl font-space font-bold text-text-primary mb-2 font-mono">
        {project.title}
      </h3>
      
      <p className="text-text-secondary mb-4 flex-grow text-sm leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech: any) => (
          <span
            key={tech.name}
            className={getTagClasses(tech.category)}
          >
            {tech.name}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <Button
          size="sm"
          className="flex-1 bg-purple-muted hover:bg-purple-muted/80 text-white border-0 light:bg-[#5D3FD3] light:hover:bg-[#4A2FB8]"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Demo
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-green-muted text-green-muted hover:bg-green-muted hover:text-white light:border-[#2CB1BC] light:text-[#2CB1BC] light:hover:bg-[#2CB1BC] light:hover:text-white"
        >
          <Github className="mr-2 h-4 w-4" />
          Code
        </Button>
      </div>
    </motion.div>
  );

  return (
    <section id="projects-section" className="py-20 bg-dark-surface light:bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-space font-bold text-text-primary mb-4">
            Projects
          </h2>
          <p className="text-text-secondary font-mono">
            // Selected work showcasing technical expertise
          </p>
        </motion.div>

        <Tabs defaultValue="full-stack" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-dark-bg border border-purple-muted/20 light:bg-[#F9FAFB] light:border-[#ECECEC] rounded-none p-1">
            <TabsTrigger 
              value="full-stack" 
              className="font-mono text-sm data-[state=active]:bg-purple-muted data-[state=active]:text-white light:data-[state=active]:bg-[#5D3FD3] light:data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-purple-muted light:data-[state=active]:border-[#5D3FD3] transition-all duration-200"
            >
              Full-Stack
            </TabsTrigger>
            <TabsTrigger 
              value="frontend" 
              className="font-mono text-sm data-[state=active]:bg-purple-muted data-[state=active]:text-white light:data-[state=active]:bg-[#5D3FD3] light:data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-purple-muted light:data-[state=active]:border-[#5D3FD3] transition-all duration-200"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger 
              value="backend" 
              className="font-mono text-sm data-[state=active]:bg-purple-muted data-[state=active]:text-white light:data-[state=active]:bg-[#5D3FD3] light:data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-purple-muted light:data-[state=active]:border-[#5D3FD3] transition-all duration-200"
            >
              Backend/Admin
            </TabsTrigger>
          </TabsList>

          <TabsContent value="full-stack" className="mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key="full-stack"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {projects['full-stack'].map((project, index) => renderProjectCard(project, index))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="frontend" className="mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key="frontend"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {projects['frontend'].map((project, index) => renderProjectCard(project, index))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="backend" className="mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key="backend"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {projects['backend'].map((project, index) => renderProjectCard(project, index))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsGrid;
