
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      tech: [
        { name: 'React', category: 'react' },
        { name: 'Node.js', category: 'node' },
        { name: 'PostgreSQL', category: 'default' },
        { name: 'Stripe', category: 'default' }
      ],
      image: '/placeholder.svg',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Task Management API',
      description: 'RESTful API with authentication, real-time updates, and comprehensive documentation.',
      tech: [
        { name: '.NET Core', category: 'dotnet' },
        { name: 'SignalR', category: 'default' },
        { name: 'MongoDB', category: 'default' },
        { name: 'Docker', category: 'docker' }
      ],
      image: '/placeholder.svg',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Real-time Chat App',
      description: 'Scalable chat application with rooms, file sharing, and message encryption.',
      tech: [
        { name: 'Vue.js', category: 'default' },
        { name: 'Socket.io', category: 'default' },
        { name: 'Redis', category: 'default' },
        { name: 'AWS S3', category: 'default' }
      ],
      image: '/placeholder.svg',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'DevOps Dashboard',
      description: 'Monitoring dashboard for CI/CD pipelines with real-time metrics and alerts.',
      tech: [
        { name: 'React', category: 'react' },
        { name: 'TypeScript', category: 'typescript' },
        { name: 'GraphQL', category: 'default' },
        { name: 'Docker', category: 'docker' }
      ],
      image: '/placeholder.svg',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Analytics Service',
      description: 'Microservice for data processing and analytics with high-performance APIs.',
      tech: [
        { name: 'Python', category: 'default' },
        { name: 'FastAPI', category: 'default' },
        { name: 'PostgreSQL', category: 'default' },
        { name: 'Celery', category: 'default' }
      ],
      image: '/placeholder.svg',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Mobile PWA',
      description: 'Progressive web app with offline capabilities and native mobile features.',
      tech: [
        { name: 'React', category: 'react' },
        { name: 'PWA', category: 'default' },
        { name: 'IndexedDB', category: 'default' },
        { name: 'Workbox', category: 'default' }
      ],
      image: '/placeholder.svg',
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  const getTagClasses = (category: string) => {
    const baseClasses = "px-2 py-1 text-xs font-mono border transition-all duration-200";
    return `${baseClasses} light:tag-${category}`;
  };

  return (
    <section className="py-20 bg-dark-surface light:bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card bg-dark-bg p-6 h-full flex flex-col light:bg-white"
            >
              <div className="aspect-video bg-dark-surface mb-4 flex items-center justify-center border border-purple-muted/20 light:bg-[#F9FAFB] light:border-[#ECECEC]">
                <span className="text-text-tertiary font-mono text-sm">
                  {project.title}
                </span>
              </div>
              
              <h3 className="text-xl font-space font-semibold text-text-primary mb-3">
                {project.title}
              </h3>
              
              <p className="text-text-secondary mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
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
                  Live Demo
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
