
import { motion } from 'framer-motion';

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: '2024',
      role: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      description: 'Led development of microservices architecture serving 100K+ users. Implemented automated testing and CI/CD pipelines.',
      tech: ['.NET Core', 'React', 'Docker', 'AWS']
    },
    {
      year: '2022',
      role: 'Full Stack Developer',
      company: 'Digital Innovations Inc.',
      description: 'Built scalable e-commerce platform with real-time inventory management. Optimized database queries reducing load time by 60%.',
      tech: ['Node.js', 'Vue.js', 'PostgreSQL', 'Redis']
    },
    {
      year: '2021',
      role: 'Frontend Developer',
      company: 'StartupX',
      description: 'Developed responsive web applications and mobile-first designs. Collaborated with UX team to implement pixel-perfect interfaces.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Firebase']
    },
    {
      year: '2020',
      role: 'Junior Developer',
      company: 'CodeStart Academy',
      description: 'Started journey in web development. Built foundational skills in modern JavaScript frameworks and backend technologies.',
      tech: ['JavaScript', 'HTML/CSS', 'Node.js', 'MongoDB']
    }
  ];

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
            Experience
          </h2>
          <p className="text-text-secondary font-mono">
            // Career progression and key achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-muted/30"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 timeline-item"
              >
                <div className="bg-dark-surface border border-purple-muted/20 p-6 hover:border-purple-muted/40 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-space font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <span className="text-purple-muted font-mono text-sm">
                      {exp.year}
                    </span>
                  </div>
                  <h4 className="text-blue-cool font-medium mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-bg text-green-muted text-xs font-mono border border-green-muted/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
