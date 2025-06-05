import { motion } from 'framer-motion';

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: 'Mar 2024 - Present',
      role: 'Software Developer (Freelance)',
      company: 'Upwork',
      description:
        'Delivered responsive web applications for clients in auto, legal tech, and e-commerce industries. Built frontend features, integrated REST APIs, and managed CI/CD workflows independently.',
      tech: [
        { name: 'React.js', category: 'react' },
        { name: 'Tailwind CSS', category: 'default' },
        { name: 'TypeScript', category: 'typescript' },
        { name: 'CI/CD', category: 'default' },
        { name: 'Figma', category: 'default' },
        { name: 'REST APIs', category: 'default' },
        { name: 'Docker', category: 'docker' }
      ],
    },
    {
      year: 'Feb 2023 - March 2024',
      role: 'Junior Developer',
      company: 'Richards-Wilcox Canada',
      description:
        'Developed and maintained internal tools and APIs for order and discount management. Integrated database changes using Liquibase and contributed to CI/CD pipelines.',
      tech: [
        { name: 'C#', category: 'dotnet' },
        { name: '.NET Framework', category: 'dotnet' },
        { name: 'SQL Server', category: 'default' },
        { name: 'Liquibase', category: 'default' },
        { name: 'AngularJS', category: 'default' },
        { name: 'HTML', category: 'default' },
        { name: 'CSS', category: 'default' }
      ],
    },
    {
      year: 'May 2022 - Feb 2023',
      role: 'Web Developer Intern',
      company: 'Lumose Marketplace Inc.',
      description:
        'Built web interfaces and APIs for marketplace platform. Contributed to SEO optimization, responsive design, and third-party integration using Docker and Node.js.',
      tech: [
        { name: 'Node.js', category: 'node' },
        { name: 'React.js', category: 'react' },
        { name: 'MongoDB', category: 'default' },
        { name: 'Express', category: 'default' },
        { name: 'Tailwind CSS', category: 'default' },
        { name: 'Docker', category: 'docker' }
      ],
    },
    {
      year: 'Sep 2021 - May 2022',
      role: 'Customer Service Rep (Bilingual)',
      company: 'ClaimsPro LP',
      description:
        'Provided client support in English and French. Handled system-related inquiries and collaborated with internal tech teams to document feedback for improvement.',
      tech: [
        { name: 'CRM', category: 'default' },
        { name: 'Ticketing Systems', category: 'default' },
        { name: 'Bilingual Support', category: 'default' }
      ],
    },
    {
      year: 'Jan 2019 - Mar 2021',
      role: 'Technical Consultant',
      company: 'OCDC',
      description:
        'Developed a custom landing page and advised clients on system implementation. Collaborated with stakeholders on requirements, testing, and software configuration.',
      tech: [
        { name: 'HTML', category: 'default' },
        { name: 'CSS3', category: 'default' },
        { name: 'React.js', category: 'react' },
        { name: 'SQL Server', category: 'default' },
        { name: 'Express.js', category: 'default' },
        { name: 'Client Onboarding', category: 'default' },
        { name: 'Troubleshooting', category: 'default' },
        { name: 'Documentation', category: 'default' }
      ],
    }
  ];

  const getTagClasses = (category: string) => {
    const baseClasses = "px-3 py-1 text-xs font-mono border transition-all duration-200";
    return `${baseClasses} light:tag-${category}`;
  };

  return (
    <section className="py-20 bg-dark-bg light:bg-[#FCFCFC]">
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
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-muted/30 light:bg-[#5D3FD3]/30"></div>

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
                <div className="bg-dark-surface border border-purple-muted/20 p-6 hover:border-purple-muted/40 transition-colors light:bg-white light:border-[#ECECEC] light:hover:border-[#ECECEC] light:shadow-sm light:hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-space font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <span className="text-purple-muted font-mono text-sm light:text-[#5D3FD3]">
                      {exp.year}
                    </span>
                  </div>
                  <h4 className="text-blue-cool font-medium mb-3 light:text-[#2CB1BC]">
                    {exp.company}
                  </h4>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech.name}
                        className={getTagClasses(tech.category)}
                      >
                        {tech.name}
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
