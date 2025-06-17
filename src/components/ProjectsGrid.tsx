import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const ProjectsGrid = () => {
  const projects = {
    'personal': [
      {
        title: 'Trackflo',
        description: 'Modern, developer-focused project and team management app inspired by tools like Linear, Notion, and Trello ',
        tech: [
          { name: 'React', category: 'react' },
          { name: 'TypeScript', category: 'typescript' },
          { name: 'Tailwind', category: 'default' },
          { name: 'Vite', category: 'default' },
          {name: 'DiceBear API', category: 'default' }
        ],
        liveUrl: 'https://trackflo.netlify.app/',
        codeUrl: 'https://github.com/skebila/trackflo.git'
      },
      {
        title: 'My Portfolio',
        description: 'Full-stack portfolio website showcasing my work and skills',
        tech: [
          { name: 'React', category: 'react' },
          { name: 'Vite', category: 'default' },
          { name: 'Tailwind CSS', category: 'default' },
          { name: 'TypeScript', category: 'typescript' },
          { name: 'Framer Motion', category: 'default' },
          { name: 'Netlify', category: 'default' }
        ],
        liveUrl: 'https://stevenkebila.com/',
        codeUrl: 'https://github.com/skebila/stevenkebila-portfolio.git'
      },
      {
        title: 'Student Haven',
        description: 'Student Social Media Platform (This was my capstone project)',
        tech: [
          { name: 'React', category: 'react' },
          { name: 'Node.js', category: 'node' },
          { name: 'Google Cloud', category: 'default' },
          { name: 'Docker', category: 'docker' }
        ],
        liveUrl: '#',
        codeUrl: 'https://github.com/skebila/student-haven.git'
      }
    ],
    'freelance': [
      // {
      //   title: 'WorkflowCentral',
      //   description: 'Admin tool for managing internal requests',
      //   tech: [
      //     { name: '.NET Core', category: 'dotnet' },
      //     { name: 'SignalR', category: 'default' },
      //     { name: 'PostgreSQL', category: 'default' },
      //     { name: 'Redis', category: 'default' }
      //   ],
      //   liveUrl: '#',
      //   codeUrl: '#'
      // },
      // {
      //   title: 'InsightTrack',
      //   description: 'Real-time business analytics dashboard',
      //   tech: [
      //     { name: 'Python', category: 'default' },
      //     { name: 'FastAPI', category: 'default' },
      //     { name: 'MongoDB', category: 'default' },
      //     { name: 'Celery', category: 'default' }
      //   ],
      //   liveUrl: '#',
      //   codeUrl: '#'
      // }
    ],
    'enterprise': [
      
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
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-purple-muted hover:bg-purple-muted/80 text-white border-0 light:bg-[#5D3FD3] light:hover:bg-[#4A2FB8] px-4 py-2 rounded text-center flex items-center justify-center"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Demo
        </a>
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-green-muted text-green-muted hover:bg-green-muted hover:text-white light:border-[#2CB1BC] light:text-[#2CB1BC] light:hover:bg-[#2CB1BC] light:hover:text-white px-4 py-2 rounded text-center flex items-center justify-center"
        >
          <Github className="mr-2 h-4 w-4" />
          Code
        </a>
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

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-dark-bg border border-purple-muted/20 light:bg-[#F9FAFB] light:border-[#ECECEC] rounded-none p-1">
            <TabsTrigger 
              value="personal" 
              className="font-mono text-sm data-[state=active]:bg-purple-muted data-[state=active]:text-white light:data-[state=active]:bg-[#5D3FD3] light:data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-purple-muted light:data-[state=active]:border-[#5D3FD3] transition-all duration-200"
            >
              Personal
            </TabsTrigger>
            <TabsTrigger 
              value="freelance" 
              className="font-mono text-sm data-[state=active]:bg-purple-muted data-[state=active]:text-white light:data-[state=active]:bg-[#5D3FD3] light:data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-purple-muted light:data-[state=active]:border-[#5D3FD3] transition-all duration-200"
            >
              Freelance
            </TabsTrigger>
            {/* <TabsTrigger 
              value="enterprise" 
              className="font-mono text-sm data-[state=active]:bg-purple-muted data-[state=active]:text-white light:data-[state=active]:bg-[#5D3FD3] light:data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-purple-muted light:data-[state=active]:border-[#5D3FD3] transition-all duration-200"
            >
              Enterprise
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="personal" className="mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key="personal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {projects['personal'].map((project, index) => renderProjectCard(project, index))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="freelance" className="mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key="freelance"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {projects['freelance'].map((project, index) => renderProjectCard(project, index))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="enterprise" className="mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key="enterprise"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {projects['enterprise'].map((project, index) => renderProjectCard(project, index))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsGrid;
