import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      duration: 'Mar 2024 - Feb 2025',
      description: 'Building custom web applications for clients using modern technologies.',
      achievements: [
        'Developed and deployed web solutions using Python, React, Node.js, and AWS',
        'Managed DevOps, security, and infrastructure using Docker, Kubernetes, and CI/CD pipelines.',
        'Implemented JWT/OAuth2 authentication to enhance API security',
        'Handled full SDLC, from gathering requirements to production release and monitoring.'
      ],
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      title: 'Junior Developer',
      company: 'Richards-Wilcox Canada',
      location: 'Mississauga, ON',
      duration: 'Feb 2023 - Mar 2024',
      description: 'Designed and built internal tools with ASP.NET Core, improving workflow automation and data syncing. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built responsive web applications serving 10k+ users',
        'Reduced API response times by 35%',
        'Led the development of secure, scalable APIs, integrated with Azure and SQL Server.'
      ],
      technologies: ['.NET Core', 'React', 'SQL Server', 'Azure', 'CI/CD']
    },
    {
      title: 'Web Developer',
      company: 'Lumose Marketplace Inc.',
      location: 'Toronto, ON',
      duration: 'Mar 2022 - Feb 2023',
      description: 'Worked on client projects ranging from e-commerce platforms to content management systems. Gained experience in full-stack development and client communication.',
      achievements: [
        'Completed 15+ client projects',
        'Built and tested real-time data exchange APIs with third-party integrations.',
        'Improved code review process'
      ],
      technologies: ['React', 'JavaScript', 'MySQL', 'CMS', 'Selenium', 'Jasmine']
    }
  ];

  return (
    <section id="experience-section" className="py-20 bg-dark-bg light:bg-[#FCFCFC]">
      
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
            // Professional journey & key achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-muted/30 light:bg-[#5D3FD3]/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-purple-muted rounded-full border-4 border-dark-bg light:bg-[#5D3FD3] light:border-[#FCFCFC]"></div>

                <div className="bg-dark-surface p-8 rounded-lg border border-purple-muted/20 hover:border-purple-muted/40 transition-all duration-300 light:bg-white light:border-[#ECECEC] light:hover:border-[#5D3FD3]/40 light:shadow-sm light:hover:shadow-md">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-space font-bold text-text-primary mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-purple-muted font-medium light:text-[#5D3FD3]">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-text-tertiary">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-mono">{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="font-mono">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-text-primary mb-2 font-mono">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start">
                          <span className="text-green-muted mr-2 mt-1 light:text-[#2CB1BC]">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-purple-muted/20 text-purple-muted rounded border border-purple-muted/30 light:bg-[#5D3FD3]/10 light:text-[#5D3FD3] light:border-[#5D3FD3]/30"
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
