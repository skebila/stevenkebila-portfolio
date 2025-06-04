import { motion } from 'framer-motion';

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: '2024',
      role: 'Freelance Web Developer',
      company: 'Upwork',
      description:
        'Delivered responsive web applications for clients in auto, legal tech, and e-commerce industries. Built frontend features, integrated REST APIs, and managed CI/CD workflows independently.',
      tech: [
        'React.js',
        'Tailwind CSS',
        'TypeScript',
        'CI/CD',
        'Figma',
        'REST APIs',
        'Docker'
      ],
    },
    {
      year: '2023',
      role: 'Junior Developer',
      company: 'Richards-Wilcox Canada',
      description:
        'Developed and maintained internal tools and APIs for order and discount management. Integrated database changes using Liquibase and contributed to CI/CD pipelines.',
      tech: [
        'C#',
        '.NET Framework',
        'SQL Server',
        'Liquibase',
        'AngularJS',
        'HTML',
        'CSS'
      ],
    },
    {
      year: '2022',
      role: 'Web Developer Intern',
      company: 'Lumose Marketplace Inc.',
      description:
        'Built web interfaces and APIs for marketplace platform. Contributed to SEO optimization, responsive design, and third-party integration using Docker and Node.js.',
      tech: [
        'Node.js',
        'React.js',
        'MongoDB',
        'Express',
        'Tailwind CSS',
        'Docker'
      ],
    },
    {
      year: '2021',
      role: 'Customer Service Rep (Bilingual)',
      company: 'ClaimsPro LP',
      description:
        'Provided client support in English and French. Handled system-related inquiries and collaborated with internal tech teams to document feedback for improvement.',
      tech: ['CRM', 'Ticketing Systems', 'Bilingual Support'],
    },
    {
      year: '2020',
      role: 'Technical Consultant',
      company: 'OCDC',
      description:
        'Developed a custom landing page and advised clients on system implementation. Collaborated with stakeholders on requirements, testing, and software configuration.',
      tech: [
        'HTML',
        'CSS3',
        'React.js',
        'SQL Server',
        'Express.js',
        'Client Onboarding',
        'Troubleshooting',
        'Documentation'
      ],
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
                key={`${exp.year}-${exp.company}`}
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
